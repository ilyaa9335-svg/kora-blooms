"use client";

import { useTranslations } from "next-intl";

export default function ContactPage() {
  const t = useTranslations("contactPage");

  return (
    <div className="section-container py-16">
      <h1 className="font-playfair text-dark text-3xl sm:text-4xl md:text-5xl font-semibold text-center mb-8 sm:mb-12">
        {t("title")}
      </h1>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="card-elevated p-6">
            <div className="flex items-center gap-4 mb-3">
              <div className="bg-mint-light rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-mint" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="font-playfair text-dark font-semibold">{t("phone")}</h3>
                <a href="tel:+420737482377" className="text-mint hover:underline">+420 737 482 377</a>
              </div>
            </div>
          </div>

          <div className="card-elevated p-6">
            <div className="flex items-center gap-4 mb-3">
              <div className="bg-blush rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-rose" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-playfair text-dark font-semibold">{t("address")}</h3>
                <p className="text-stone text-sm">{t("addressText")}</p>
                <a
                  href="https://maps.google.com/?q=Thámova+136/8,+Praha+8,+180+00"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-mint hover:underline text-xs mt-1 inline-block"
                >
                  {t("openInMaps")} →
                </a>
              </div>
            </div>
          </div>

          <div className="card-elevated p-6">
            <div className="flex items-center gap-4 mb-3">
              <div className="bg-mint-light rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-mint" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.118.549 4.107 1.511 5.838L0 24l6.335-1.652A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-2.007 0-3.885-.588-5.47-1.592l-.393-.236-3.756.98.998-3.648-.258-.41A9.7 9.7 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
                </svg>
              </div>
              <div>
                <h3 className="font-playfair text-dark font-semibold">WhatsApp</h3>
                <a
                  href="https://wa.me/420737482377"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-mint hover:underline text-sm"
                >
                  {t("whatsappText")}
                </a>
              </div>
            </div>
          </div>

          <div className="card-elevated p-6">
            <div className="flex items-center gap-4 mb-3">
              <div className="bg-blush rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-rose" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
              <div>
                <h3 className="font-playfair text-dark font-semibold">Instagram</h3>
                <a
                  href="https://instagram.com/kora.blooms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-mint hover:underline text-sm"
                >
                  @kora.blooms
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Storefront image */}
        <div>
          <div className="card-elevated overflow-hidden h-full">
            <div className="relative h-64 md:h-full min-h-[300px]">
              <img
                src="/photos/contact-storefront.jpg"
                alt="KORA Blooms bouquet in Karlín"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-[12px] p-4">
                  <p className="font-playfair text-dark font-semibold text-sm">KORA Blooms</p>
                  <p className="text-stone text-xs mt-1">Karlín, Praha 8 · {t("openDaily")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
