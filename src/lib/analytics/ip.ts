/**
 * Extract the original client IP behind Vercel's proxy/CDN.
 * Prefer Vercel-specific headers, then the left-most X-Forwarded-For hop.
 */
export function extractClientIp(request: Request): string | null {
  const headers = request.headers;

  const vercelForwarded = headers.get("x-vercel-forwarded-for");
  if (vercelForwarded) {
    const ip = firstIp(vercelForwarded);
    if (ip) return ip;
  }

  const realIp = headers.get("x-real-ip");
  if (realIp) {
    const ip = firstIp(realIp);
    if (ip) return ip;
  }

  const forwardedFor = headers.get("x-forwarded-for");
  if (forwardedFor) {
    const ip = firstIp(forwardedFor);
    if (ip) return ip;
  }

  return null;
}

function firstIp(value: string): string | null {
  const candidate = value.split(",")[0]?.trim();
  if (!candidate) return null;
  // Strip IPv6 zone / brackets if present
  const cleaned = candidate.replace(/^\[|\]$/g, "");
  return cleaned || null;
}
