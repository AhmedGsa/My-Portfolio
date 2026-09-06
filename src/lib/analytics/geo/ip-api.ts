import type { GeoProvider, VisitorGeo } from "../types";
import { vercelGeoProvider } from "./vercel";

/**
 * Optional enrichment via ip-api.com (HTTP, free for non-commercial).
 * Falls back to Vercel headers if the call fails or IP is missing.
 * Never call this from the browser — server-side only.
 */
export const ipApiGeoProvider: GeoProvider = {
  async resolve({ request, ip }): Promise<VisitorGeo> {
    const fallback = await vercelGeoProvider.resolve({ request, ip });
    if (!ip) return fallback;

    try {
      const base = process.env.IP_API_URL || "http://ip-api.com/json";
      const url = `${base}/${encodeURIComponent(ip)}?fields=status,message,country,countryCode,regionName,city,lat,lon,timezone,isp`;
      const res = await fetch(url, { next: { revalidate: 0 } });
      if (!res.ok) return fallback;

      const data = (await res.json()) as {
        status?: string;
        country?: string;
        countryCode?: string;
        regionName?: string;
        city?: string;
        lat?: number;
        lon?: number;
        timezone?: string;
        isp?: string;
      };

      if (data.status !== "success") return fallback;

      return {
        country: data.country ?? fallback.country,
        countryCode: data.countryCode ?? fallback.countryCode,
        region: data.regionName ?? fallback.region,
        city: data.city ?? fallback.city,
        latitude: typeof data.lat === "number" ? data.lat : fallback.latitude,
        longitude: typeof data.lon === "number" ? data.lon : fallback.longitude,
        timezone: data.timezone ?? fallback.timezone,
        isp: data.isp ?? fallback.isp,
      };
    } catch {
      return fallback;
    }
  },
};
