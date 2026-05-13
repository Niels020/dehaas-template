import fs from "node:fs"
import path from "node:path"
import { remark } from "remark"
import html from "remark-html"
import { siteConfig } from "@/site.config"

const PLACEHOLDERS: Record<string, keyof typeof siteConfig> = {
  "{{client_name}}": "clientName",
  "{{kvk_number}}": "kvkNumber",
  "{{controller_address}}": "controllerAddress",
  "{{contact_email}}": "contactEmail",
  "{{site_url}}": "siteUrl",
  "{{data_processors}}": "dataProcessors",
  "{{effective_date}}": "effectiveDate",
}

export async function renderPolicy(locale: "nl" | "en"): Promise<string> {
  const file = path.join(process.cwd(), "content/legal", `privacy.${locale}.md`)
  let raw = fs.readFileSync(file, "utf8")
  raw = raw.replace(/^<!--[\s\S]*?-->\s*/, "") // strip editor-notes comment
  for (const [token, key] of Object.entries(PLACEHOLDERS)) {
    raw = raw.replaceAll(token, String(siteConfig[key]))
  }
  return (await remark().use(html).process(raw)).toString()
}
