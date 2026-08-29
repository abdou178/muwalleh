"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageThemeContext";
import { CONTRACTOR_DATA } from "@/lib/contractor-data";
import { Phone, MessageSquare, ShieldAlert } from "lucide-react";

export function StickyMobileDispatchDock() {
  const { t } = useLanguage();

  return (
    <aside
      aria-label={t("Mobile Emergency Actions", "إجراءات الطوارئ للجوال")}
      className="fixed bottom-0 left-0 right-0 z-50 lg:hidden p-2.5 sm:p-3 bg-white/95 dark:bg-hydro-950/95 backdrop-blur-lg border-t border-slate-200 dark:border-hydro-800 shadow-[0_-8px_20px_rgba(0,0,0,0.15)] transition-all"
    >
      <div className="max-w-md mx-auto grid grid-cols-2 gap-2.5">
        {/* Call Now Button */}
        <a
          href={CONTRACTOR_DATA.phoneDial}
          className="flex items-center justify-center gap-2 py-3.5 px-3 rounded-xl bg-urgency-600 active:bg-urgency-700 text-white font-extrabold text-xs sm:text-sm shadow-md shadow-orange-600/30 transition-transform active:scale-95 text-center"
        >
          <Phone className="w-4 h-4 animate-bounce flex-shrink-0" />
          <div className="flex flex-col items-center leading-tight">
            <span className="text-[10px] text-orange-200 uppercase font-bold tracking-wider">
              {t("24/7 Call", "اتصال طوارئ")}
            </span>
            <span className="font-black truncate" dir="ltr">
              {CONTRACTOR_DATA.phoneDisplay}
            </span>
          </div>
        </a>

        {/* WhatsApp SOS Button */}
        <a
          href={`${CONTRACTOR_DATA.whatsappBaseUrl}?text=${encodeURIComponent(
            t(
              "Hello, I have an urgent water leak emergency in Sharjah. Please dispatch a technician for inspection.",
              "مرحباً، لدي حالة طارئة لتسريب مياه بالشارقة. أرجو إرسال فني للكشف الفوري بدون تكسير."
            )
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3.5 px-3 rounded-xl bg-whatsapp-500 active:bg-whatsapp-600 text-white font-extrabold text-xs sm:text-sm shadow-md shadow-emerald-600/30 transition-transform active:scale-95 text-center"
        >
          <div className="relative">
            <MessageSquare className="w-4 h-4 fill-white flex-shrink-0" />
            <span className="absolute -top-1 -right-1 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
          </div>
          <div className="flex flex-col items-center leading-tight">
            <span className="text-[10px] text-emerald-100 uppercase font-bold tracking-wider">
              {t("Instant SOS", "فوري مباشر")}
            </span>
            <span className="font-black">
              {t("WhatsApp", "واتساب طوارئ")}
            </span>
          </div>
        </a>
      </div>
    </aside>
  );
}
