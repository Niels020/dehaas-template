import { renderPolicy } from "@/lib/legal"
import { siteConfig } from "@/site.config"

export const metadata = {
  title: siteConfig.defaultLocale === "nl" ? "Privacyverklaring" : "Privacy notice",
}

export default async function PrivacyPage() {
  const body = await renderPolicy(siteConfig.defaultLocale)
  return (
    <main className="prose mx-auto max-w-2xl px-4 py-12 dark:prose-invert">
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </main>
  )
}
