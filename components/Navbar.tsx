"use client";

import { cn } from "@/lib/utils";
import { Compass, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CONTACT_INFO } from "@/lib/constant";

const NAV_ITEMS = [
  { name: "Beranda", href: "/" },
  { name: "Layanan", href: "/layanan" },
  { name: "Proyek", href: "/portfolio" },
  { name: "Tentang Kami", href: "/tentang" },
  { name: "Artikel", href: "#" },
  { name: "Karir", href: "/karir" },
  { name: "Kontak", href: "/kontak" },
];

const LIGHT_HEADER_ROUTES = ["/kontak", "/karir"];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isLightPage =
    LIGHT_HEADER_ROUTES.includes(pathname) ||
    (pathname.startsWith("/layanan/") && pathname !== "/layanan");
  const useDarkText = isScrolled || isLightPage;

  const phone = CONTACT_INFO.phoneNumberClean || "6281200000000";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans",
        isScrolled
          ? "bg-[#eef2f6]/95 dark:bg-slate-900/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3.5"
          : isLightPage
            ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-100 py-4"
            : "bg-transparent py-5"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-full bg-[#0066FF] text-white shrink-0 shadow-sm">
            <Compass className="size-5" aria-hidden="true" />
          </span>
          <span className="leading-tight">
            <span
              className={cn(
                "block text-sm font-bold transition-colors font-sans",
                useDarkText ? "text-slate-900 dark:text-white" : "text-white"
              )}
            >
              CV. An Nasr Konsultan
            </span>
            <span
              className={cn(
                "block text-[11px] tracking-wide transition-colors",
                useDarkText ? "text-slate-600 dark:text-slate-400" : "text-white/70"
              )}
            >
              Konsultan Teknik &amp; Konstruksi
            </span>
          </span>
        </Link>

        {/* Desktop Nav Items */}
        <ul className="hidden items-center gap-1.5 lg:flex">
          {NAV_ITEMS.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  data-status={isActive ? "active" : undefined}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "rounded-full px-4 py-1.5 text-sm font-medium transition-all inline-block",
                    isActive
                      ? useDarkText
                        ? "border-2 border-[#0066FF] bg-blue-500/10 text-[#0066FF] font-semibold"
                        : "border-2 border-white/60 bg-white/10 text-white font-semibold"
                      : useDarkText
                        ? "text-slate-700 hover:text-[#0066FF] dark:text-slate-300"
                        : "text-white/80 hover:text-white"
                  )}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <a
            href={`https://wa.me/${phone}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold cursor-pointer transition-all h-11 rounded-full px-6 text-sm shadow-md bg-[#FF8D28] text-white hover:bg-orange-600"
          >
            Konsultasi Sekarang
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={mobileMenuOpen ? "Tutup menu" : "Buka menu"}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={cn(
            "flex size-11 items-center justify-center rounded-xl border lg:hidden cursor-pointer transition-colors",
            useDarkText
              ? "border-slate-200 bg-white text-slate-900 shadow-xs"
              : "border-white/20 bg-white/10 text-white"
          )}
        >
          {mobileMenuOpen ? (
            <X className="size-5" aria-hidden="true" />
          ) : (
            <Menu className="size-5" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[70px] bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 z-40 flex flex-col p-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <ul className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "block rounded-xl px-4 py-3 text-base font-medium transition-colors",
                      isActive
                        ? "bg-[#0066FF]/10 text-[#0066FF] font-bold border border-[#0066FF]/20"
                        : "text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                    )}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
            <a
              href={`https://wa.me/${phone}`}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex w-full items-center justify-center gap-2 font-bold bg-[#78E100] text-slate-950 shadow hover:brightness-105 h-12 rounded-full px-6 text-base"
            >
              Konsultasi Sekarang
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
