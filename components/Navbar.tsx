"use client";

import { cn } from "@/lib/utils";
import { Compass, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { name: "Beranda", href: "/" },
  { name: "Tentang Kami", href: "/tentang" },
  { name: "Layanan", href: "/layanan" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Klien Kami", href: "/klien" },
  { name: "Karir", href: "/karir" },
  { name: "Kontak", href: "/kontak" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Initialize
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine if header should have transparent style (on Home page at top of screen)
  const isTransparent = isHome && !isScrolled;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans",
        isTransparent
          ? "bg-transparent py-6"
          : "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div
            className={cn(
              "w-10 h-10 rounded-full flex items-center justify-center transition-colors",
              isTransparent
                ? "bg-white/10 text-white"
                : "bg-blue-600/10 text-blue-600"
            )}
          >
            <Compass className="w-6 h-6" />
          </div>
          <div>
            <div
              className={cn(
                "font-bold text-lg leading-tight transition-colors",
                isTransparent ? "text-white" : "text-slate-900"
              )}
            >
              CV. An Nasr Konsultan
            </div>
            <div
              className={cn(
                "text-xs font-medium tracking-wide transition-colors",
                isTransparent ? "text-slate-300" : "text-slate-500"
              )}
            >
              Konsultan Teknik & Konstruksi
            </div>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-semibold tracking-wide transition-colors py-2",
                isTransparent
                  ? "text-white/80 hover:text-white"
                  : "text-slate-600 hover:text-slate-900"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link
            href="https://wa.me/6281200000000"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "px-6 py-3 rounded-full text-sm font-bold shadow-md transition-all duration-300 hover:scale-105 inline-flex items-center",
              isTransparent
                ? "bg-lime-500 text-slate-950 hover:bg-lime-400"
                : "bg-blue-600 text-white hover:bg-blue-700"
            )}
          >
            Konsultasi Sekarang
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={cn(
            "lg:hidden p-2 rounded-md transition-colors",
            isTransparent
              ? "text-white hover:bg-white/10"
              : "text-slate-700 hover:bg-slate-100"
          )}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[73px] bg-white z-40 flex flex-col p-6 animate-fade-in">
          <nav className="flex flex-col gap-5">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-semibold py-2 border-b border-slate-100 text-slate-800 hover:text-blue-600 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="mt-8">
            <Link
              href="https://wa.me/6281200000000"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full justify-center px-6 py-4 rounded-full text-base font-bold bg-blue-600 text-white hover:bg-blue-700 shadow-md flex items-center"
            >
              Konsultasi Sekarang
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
