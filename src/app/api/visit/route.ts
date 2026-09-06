import {
  buildSetCookieHeader,
  trackVisit,
} from "@/lib/analytics/track";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type VisitBody = {
  path?: string;
  referrer?: string;
};

export async function POST(request: Request) {
  let body: VisitBody = {};
  try {
    body = (await request.json()) as VisitBody;
  } catch {
    body = {};
  }

  const { result, setCookie } = await trackVisit(request, {
    path: typeof body.path === "string" ? body.path.slice(0, 200) : undefined,
    referrer:
      typeof body.referrer === "string" ? body.referrer.slice(0, 500) : undefined,
  });

  const headers = new Headers({
    "Content-Type": "application/json",
    "Cache-Control": "no-store",
  });

  if (setCookie) {
    headers.set("Set-Cookie", buildSetCookieHeader(setCookie));
  }

  // Never return geo/IP details to the client
  return Response.json(
    {
      ok: result.status === "sent" || result.status === "skipped" || result.status === "disabled",
      status: result.status,
    },
    { status: 200, headers }
  );
}
