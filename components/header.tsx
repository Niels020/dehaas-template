import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={28}
            height={28}
            priority
          />
          <span className="font-heading text-lg font-semibold">
            Client Name
          </span>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/" className="hover:text-foreground/80">
            Home
          </Link>
          <Link href="/contact" className="hover:text-foreground/80">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
