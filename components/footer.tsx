import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t">
      <div className="container mx-auto flex flex-col gap-2 px-4 py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} Client Name. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <Link href="/privacy" className="hover:underline">
            Privacy
          </Link>
          <p>
            Built by{" "}
            <a
              href="https://dehaaswebservice.nl"
              className="underline hover:text-foreground"
            >
              DeHaas Webservice
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
