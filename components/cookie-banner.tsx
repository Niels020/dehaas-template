"use client"
import { useSyncExternalStore } from "react"
import { siteConfig } from "@/site.config"

const STORAGE_KEY = "cookie-consent-v1"

function getConsentSnapshot(): string | null {
  return localStorage.getItem(STORAGE_KEY)
}

function getConsentServerSnapshot(): string | null {
  return "server" // non-null → banner hidden during SSR
}

let listeners: Array<() => void> = []

function subscribeConsent(callback: () => void) {
  listeners.push(callback)
  return () => {
    listeners = listeners.filter((l) => l !== callback)
  }
}

function notifyListeners() {
  for (const l of listeners) l()
}

export function CookieBanner() {
  const stored = useSyncExternalStore(subscribeConsent, getConsentSnapshot, getConsentServerSnapshot)

  if (!siteConfig.requiresCookieConsent || stored !== null) return null

  const decide = (value: "accept" | "decline") => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ value, at: new Date().toISOString() }))
    notifyListeners()
  }

  const nl = siteConfig.defaultLocale === "nl"
  return (
    <div
      role="dialog"
      aria-live="polite"
      className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-xl rounded-lg border bg-background p-4 shadow-lg"
    >
      <p className="mb-3 text-sm">
        {nl
          ? "Deze site gebruikt functionele cookies van derden voor onderdelen zoals afspraken of betalingen. Zie de "
          : "This site uses functional third-party cookies for features like booking or payments. See the "}
        <a className="underline" href="/privacy">
          {nl ? "privacyverklaring" : "privacy notice"}
        </a>
        .
      </p>
      <div className="flex justify-end gap-2">
        <button
          className="rounded-md border px-3 py-1.5 text-sm"
          onClick={() => decide("decline")}
        >
          {nl ? "Weigeren" : "Decline"}
        </button>
        <button
          className="rounded-md bg-primary px-3 py-1.5 text-sm text-primary-foreground"
          onClick={() => decide("accept")}
        >
          {nl ? "Akkoord" : "Accept"}
        </button>
      </div>
    </div>
  )
}

/** True iff the user has accepted consent. Use to gate third-party <Script> mounts. */
export function hasConsent(): boolean {
  if (typeof window === "undefined") return false
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "{}").value === "accept"
  } catch {
    return false
  }
}
