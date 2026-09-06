export type VisitorGeo = {
  country: string | null;
  countryCode: string | null;
  region: string | null;
  city: string | null;
  latitude: number | null;
  longitude: number | null;
  timezone: string | null;
  isp: string | null;
};

export type VisitorEvent = VisitorGeo & {
  ip: string | null;
  ipHash: string | null;
  userAgent: string | null;
  referrer: string | null;
  path: string | null;
  visitorId: string;
  visitedAt: string;
};

export interface GeoProvider {
  resolve(input: {
    request: Request;
    ip: string | null;
  }): Promise<VisitorGeo>;
}
