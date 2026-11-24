"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { clsx } from "clsx";
import { nav, site } from "@/content/site";
import { LogoMark } from "./icons";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header
      className={clsx(
        "sticky top-0 z-40 transition-[background-color,box-shadow] duration-300",
        // backdrop-blur, fixed konumlu mobil menüyü header'ın içine hapseder; menü açıkken kapatılır.
        open
          ? "bg-paper shadow-[0_1px_0_var(--line)]"
          : scrolled
            ? "bg-paper/95 shadow-[0_1px_0_var(--line)] backdrop-blur"
            : "bg-paper",
      )}
    >
      <div className="mx-auto flex h-18 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-3 text-forest" onClick={() => setOpen(false)}>
          <LogoMark className="size-9" />
          <span className="leading-none">
            <span className="block font-display text-2xl font-medium">{site.name}</span>
            <span className="mt-1 block text-[0.65rem] font-semibold tracking-[0.24em] text-gold uppercase">
              {site.role}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Ana menü">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "relative text-sm font-medium transition-colors",
                isActive(item.href) ? "text-forest" : "text-ink-soft hover:text-forest",
              )}
            >
              {item.label}
              {isActive(item.href) && <span className="absolute -bottom-1.5 left-0 h-px w-full bg-gold" />}
            </Link>
          ))}
          <a
            href={site.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-forest px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-forest-2"
          >
            Randevu Al
          </a>
        </nav>

        <button
          type="button"
          className="-mr-2 p-2 text-forest lg:hidden"
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="fixed inset-x-0 top-18 bottom-0 overflow-y-auto bg-paper lg:hidden">
          <nav className="flex flex-col px-5 pt-4 pb-10" aria-label="Mobil menü">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={clsx(
                  "border-b border-line py-4 font-display text-2xl",
                  isActive(item.href) ? "text-forest" : "text-ink-soft",
                )}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 rounded-full bg-forest px-6 py-3.5 text-center font-semibold text-paper"
            >
              WhatsApp ile Randevu Al
            </a>
            <a href={site.phoneHref} className="mt-3 rounded-full border border-forest/30 px-6 py-3.5 text-center font-semibold text-forest">
              {site.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
