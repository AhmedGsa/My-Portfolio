function envFlag(name: string, fallback = false): boolean {
  const value = process.env[name];
  if (value === undefined) return fallback;
  return value === "1" || value.toLowerCase() === "true";
}

export const analyticsConfig = {
  enabled: envFlag("VISITOR_ANALYTICS_ENABLED", false),
  storeRawIp: envFlag("STORE_RAW_IP", true),
  ipHashSalt: process.env.IP_HASH_SALT || "change-me-in-production",
  geoProvider: (process.env.GEO_PROVIDER || "vercel").toLowerCase(),
  telegramBotToken: process.env.TELEGRAM_BOT_TOKEN || "",
  telegramChatId: process.env.TELEGRAM_CHAT_ID || "",
  cookieName: "portfolio_va",
  /** One Telegram notification per visitor per calendar day (UTC). */
  dedupeWindowDays: 1,
} as const;

export function isAnalyticsConfigured(): boolean {
  return Boolean(
    analyticsConfig.enabled &&
      analyticsConfig.telegramBotToken &&
      analyticsConfig.telegramChatId
  );
}
