import { analyticsConfig } from "./config";
import type { VisitorEvent } from "./types";

function line(label: string, value: string | number | null | undefined): string {
  if (value === null || value === undefined || value === "") {
    return `${label}: —`;
  }
  return `${label}: ${value}`;
}

export function formatVisitMessage(event: VisitorEvent): string {
  const coords =
    event.latitude != null && event.longitude != null
      ? `${event.latitude}, ${event.longitude}`
      : null;

  return [
    "🌐 New portfolio visit",
    "",
    line("IP", event.ip),
    line("IP hash", event.ipHash ? `${event.ipHash.slice(0, 12)}…` : null),
    line("Country", event.country),
    line("Country code", event.countryCode),
    line("Region", event.region),
    line("City", event.city),
    line("Coords", coords),
    line("Timezone", event.timezone),
    line("ISP", event.isp),
    line("Path", event.path),
    line("Referrer", event.referrer),
    line("User-Agent", event.userAgent),
    line("Visitor ID", event.visitorId),
    line("Visited at", event.visitedAt),
  ].join("\n");
}

export async function sendTelegramMessage(text: string): Promise<boolean> {
  const { telegramBotToken, telegramChatId } = analyticsConfig;
  if (!telegramBotToken || !telegramChatId) return false;

  const url = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: telegramChatId,
        text,
        disable_web_page_preview: true,
      }),
      // Avoid Next.js fetch caching for Telegram API
      cache: "no-store",
    });

    if (!res.ok) {
      // Avoid logging token/chat details or full visitor payloads
      console.error("[visitor-analytics] Telegram send failed:", res.status);
      return false;
    }

    return true;
  } catch {
    console.error("[visitor-analytics] Telegram send error");
    return false;
  }
}
