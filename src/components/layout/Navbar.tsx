"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { useCart } from "@/context/CartContext";
import LanguageSwitcher from "./LanguageSwitcher";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const t = useTranslations("nav");
  const { state } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  function handleShopClick(e: React.MouseEvent) {
    if (isHome) {
      e.preventDefault();
      document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <>
    <header className="bg-mint-bg sticky top-0 z-50 border-b border-mint-light">
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center" aria-label="KORA Blooms">
            <img
              src="/photos/kora-logo.jpg"
              alt="KORA Blooms"
              className="h-10 sm:h-12 w-auto mix-blend-multiply"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-dark/70 hover:text-mint text-sm font-medium transition-colors">
              {t("home")}
            </Link>
            <Link href="/shop" className="text-dark/70 hover:text-mint text-sm font-medium transition-colors">
              {t("shop")}
            </Link>
            <Link href="/about" className="text-dark/70 hover:text-mint text-sm font-medium transition-colors">
              {t("about")}
            </Link>
            <Link href="/contact" className="text-dark/70 hover:text-mint text-sm font-medium transition-colors">
              {t("contact")}
            </Link>
          </nav>

          <div className="flex items-center gap-1 sm:gap-4">
            <div className="hidden md:block">
              <LanguageSwitcher />
            </div>
            <Link href="/cart" className="relative text-dark/70 hover:text-mint transition-colors p-2 -mr-1 min-w-[44px] min-h-[44px] flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {state.count > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-mint text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center font-bold">
                  {state.count}
                </span>
              )}
            </Link>
            <button
              className="md:hidden text-dark/70 hover:text-mint p-2 -mr-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
    <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
