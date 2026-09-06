import { analyticsConfig, isAnalyticsConfigured } from "./config";
import {
  createVisitorId,
  parseVisitCookie,
  serializeVisitCookie,
  shouldNotify,
  todayUtc,
  visitCookieOptions,
  type VisitCookie,
} from "./cookie";
import { getGeoProvider } from "./geo";
import { hashIp } from "./hash";
import { extractClientIp } from "./ip";
import { formatVisitMessage, sendTelegramMessage } from "./telegram";
import type { VisitorEvent } from "./types";

export type TrackResult =
  | { status: "disabled" }
  | { status: "skipped"; reason: "duplicate" | "misconfigured" }
  | { status: "sent"; visitorId: string }
  | { status: "failed"; visitorId: string };

export async function trackVisit(
  request: Request,
  body: { path?: string; referrer?: string } = {}
): Promise<{ result: TrackResult; setCookie?: string }> {
  if (!analyticsConfig.enabled) {
    return { result: { status: "disabled" } };
  }

  if (!isAnalyticsConfigured()) {
    return { result: { status: "skipped", reason: "misconfigured" } };
  }

  const cookieHeader = request.headers.get("cookie") ?? "";
  const rawCookie = readCookie(cookieHeader, analyticsConfig.cookieName);
  let visitCookie = parseVisitCookie(rawCookie);

  if (!visitCookie) {
    visitCookie = { visitorId: createVisitorId(), lastNotifiedOn: null };
  }

  if (!shouldNotify(visitCookie)) {
    return {
      result: { status: "skipped", reason: "duplicate" },
      setCookie: serializeVisitCookie(visitCookie),
    };
  }

  const ip = extractClientIp(request);
  const ipHash = ip ? hashIp(ip, analyticsConfig.ipHashSalt) : null;
  const geo = await getGeoProvider().resolve({ request, ip });

  const event: VisitorEvent = {
    ...geo,
    ip: analyticsConfig.storeRawIp ? ip : null,
    ipHash,
    userAgent: request.headers.get("user-agent"),
    referrer: body.referrer || request.headers.get("referer"),
    path: body.path || null,
    visitorId: visitCookie.visitorId,
    visitedAt: new Date().toISOString(),
  };

  const sent = await sendTelegramMessage(formatVisitMessage(event));

  const nextCookie: VisitCookie = {
    visitorId: visitCookie.visitorId,
    lastNotifiedOn: sent ? todayUtc() : visitCookie.lastNotifiedOn,
  };

  return {
    result: sent
      ? { status: "sent", visitorId: nextCookie.visitorId }
      : { status: "failed", visitorId: nextCookie.visitorId },
    setCookie: serializeVisitCookie(nextCookie),
  };
}

export function buildSetCookieHeader(value: string): string {
  const opts = visitCookieOptions();
  const parts = [
    `${analyticsConfig.cookieName}=${encodeURIComponent(value)}`,
    `Path=${opts.path}`,
    `Max-Age=${opts.maxAge}`,
    `SameSite=${opts.sameSite}`,
    "HttpOnly",
  ];
  if (opts.secure) parts.push("Secure");
  return parts.join("; ");
}

function readCookie(header: string, name: string): string | undefined {
  const match = header
    .split(";")
    .map((part) => part.trim())
    .find((part) => part.startsWith(`${name}=`));
  if (!match) return undefined;
  return decodeURIComponent(match.slice(name.length + 1));
}
