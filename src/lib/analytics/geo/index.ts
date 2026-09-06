import { analyticsConfig } from "../config";
import type { GeoProvider } from "../types";
import { ipApiGeoProvider } from "./ip-api";
import { vercelGeoProvider } from "./vercel";

export function getGeoProvider(): GeoProvider {
  switch (analyticsConfig.geoProvider) {
    case "ip-api":
      return ipApiGeoProvider;
    case "vercel":
    default:
      return vercelGeoProvider;
  }
}

export { vercelGeoProvider, ipApiGeoProvider };
