import type { GeoProvider, VisitorGeo } from "../types";

const COUNTRY_NAMES = new Intl.DisplayNames(["en"], { type: "region" });

function header(request: Request, name: string): string | null {
  const value = request.headers.get(name);
  if (!value) return null;
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

function parseNumber(value: string | null): number | null {
  if (!value) return null;
  const n = Number(value);
  return Number.isFinite(n) ? n : null;
}

function countryName(code: string | null): string | null {
  if (!code) return null;
  try {
    return COUNTRY_NAMES.of(code) ?? null;
  } catch {
    return null;
  }
}

/**
 * Uses Vercel request headers only — no external API call.
 * @see https://vercel.com/docs/headers/request-headers
 */
export const vercelGeoProvider: GeoProvider = {
  async resolve({ request }): Promise<VisitorGeo> {
    const countryCode = header(request, "x-vercel-ip-country");
    return {
      country: countryName(countryCode),
      countryCode,
      region: header(request, "x-vercel-ip-country-region"),
      city: header(request, "x-vercel-ip-city"),
      latitude: parseNumber(header(request, "x-vercel-ip-latitude")),
      longitude: parseNumber(header(request, "x-vercel-ip-longitude")),
      timezone: null,
      isp: null,
    };
  },
};
