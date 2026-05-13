export const siteConfig = {
  // Privacy policy placeholders — replace per-build
  clientName: "REPLACE: legal entity name",
  kvkNumber: "REPLACE: KvK number",
  controllerAddress: "REPLACE: registered address, one line",
  contactEmail: "REPLACE: privacy contact email",
  siteUrl: "https://REPLACE.example",
  dataProcessors:
    "- Vercel Inc. — hosting (US, EU-US DPF)\n- REPLACE: form mailer\n- REPLACE: other processors",
  effectiveDate: "2026-01-01",

  // Compliance toggles
  requiresCookieConsent: false, // flip to true per-build when an embed sets cookies
  defaultLocale: "nl" as "nl" | "en",
}
