"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import LanguageSwitcher from "./LanguageSwitcher";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: Props) {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const isHome = pathname === "/";

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] md:hidden">
      <div className="absolute inset-0 bg-dark/60 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-[min(18rem,85vw)] bg-white shadow-2xl p-6 z-[101]">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-dark/60 hover:text-dark min-w-[44px] min-h-[44px] flex items-center justify-center"
          aria-label="Close menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="font-playfair text-dark text-xl font-bold tracking-wider mb-8 mt-2">
          KORA <span className="font-normal">Blooms</span>
        </div>

        <nav className="flex flex-col gap-4">
          <Link href="/" onClick={onClose} className="text-dark/80 hover:text-mint text-base font-medium transition-colors">
            {t("home")}
          </Link>
          <Link href="/shop" onClick={onClose} className="text-dark/80 hover:text-mint text-base font-medium transition-colors">
            {t("shop")}
          </Link>
          <Link href="/about" onClick={onClose} className="text-dark/80 hover:text-mint text-base font-medium transition-colors">
            {t("about")}
          </Link>
          <Link href="/contact" onClick={onClose} className="text-dark/80 hover:text-mint text-base font-medium transition-colors">
            {t("contact")}
          </Link>
        </nav>

        <div className="mt-8 pt-6 border-t border-mint-light">
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
}
