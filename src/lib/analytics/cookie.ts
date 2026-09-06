import { analyticsConfig } from "./config";

export type VisitCookie = {
  visitorId: string;
  lastNotifiedOn: string | null; // YYYY-MM-DD UTC
};

export function todayUtc(): string {
  return new Date().toISOString().slice(0, 10);
}

export function parseVisitCookie(raw: string | undefined): VisitCookie | null {
  if (!raw) return null;
  try {
    const [visitorId, lastNotifiedOn] = raw.split(":");
    if (!visitorId || visitorId.length < 8) return null;
    return {
      visitorId,
      lastNotifiedOn: lastNotifiedOn || null,
    };
  } catch {
    return null;
  }
}

export function serializeVisitCookie(cookie: VisitCookie): string {
  return `${cookie.visitorId}:${cookie.lastNotifiedOn ?? ""}`;
}

export function shouldNotify(cookie: VisitCookie | null): boolean {
  if (!cookie?.lastNotifiedOn) return true;
  if (analyticsConfig.dedupeWindowDays <= 0) return true;
  return cookie.lastNotifiedOn !== todayUtc();
}

export function createVisitorId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

export function visitCookieOptions(maxAgeSeconds = 60 * 60 * 24 * 30) {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    path: "/",
    maxAge: maxAgeSeconds,
  };
}
