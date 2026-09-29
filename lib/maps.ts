/**
 * Universal Google Maps link for the AZ Luxury Garden place.
 *
 * Uses the place's CID (Google's canonical place id) so Maps opens the named
 * place card — not a raw coordinate pin. The CID was resolved from the
 * original `maps.app.goo.gl` short link (its ftid `…:0x84bf377d9b2964e4`,
 * decimal below), so it points at exactly that place. As a universal link it
 * auto-opens the Google Maps app on mobile if installed.
 * https://developers.google.com/maps/documentation/urls/get-started
 */
export const MAPS_URL =
  "https://www.google.com/maps?cid=9565425146171843812";

function isMobile(): boolean {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent;
  if (/Android|iPhone|iPod/i.test(ua)) return true;
  // iPadOS 13+ reports a desktop "Macintosh" UA; detect it via touch points.
  return /iPad/i.test(ua) || (/Macintosh/i.test(ua) && navigator.maxTouchPoints > 1);
}

/**
 * Mobile: navigate in the same tab so iOS/Android hand off to the Google Maps
 * app. Desktop: open a new browser tab.
 */
export function openMaps(url: string = MAPS_URL): void {
  if (isMobile()) {
    window.location.href = url;
  } else {
    window.open(url, "_blank", "noopener,noreferrer");
  }
}
