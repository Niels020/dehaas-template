import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

// TODO: replace mailto with real form once contact-form delivery is decided
// (Resend / mijn.host SMTP / Postmark — see _project/tasks.md).
export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 sm:py-24">
      <section className="mx-auto max-w-2xl">
        <h1 className="font-heading text-3xl tracking-tight sm:text-4xl">
          Contact
        </h1>
        <p className="mt-4 text-muted-foreground">
          Get in touch:{" "}
          <a className="underline" href="mailto:hello@example.com">
            hello@example.com
          </a>
        </p>
      </section>
    </div>
  );
}
