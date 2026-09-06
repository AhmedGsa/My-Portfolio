"use client";

import { useEffect, useRef } from "react";

/**
 * Fires a single fire-and-forget visit beacon after mount.
 * Uses fetch (not sendBeacon) so the server can set the HttpOnly dedupe cookie.
 */
export default function VisitorTracker() {
  const sent = useRef(false);

  useEffect(() => {
    if (sent.current) return;
    sent.current = true;

    void fetch("/api/visit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        path: window.location.pathname,
        referrer: document.referrer || null,
      }),
      keepalive: true,
      credentials: "same-origin",
    }).catch(() => {
      // Ignore network errors — analytics must never break the page
    });
  }, []);

  return null;
}
