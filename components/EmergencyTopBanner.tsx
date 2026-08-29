"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageThemeContext";
import { useTheme } from "next-themes";
import { CONTRACTOR_DATA } from "@/lib/contractor-data";
import { Phone, MessageSquare, Sun, Moon, Globe, ShieldAlert } from "lucide-react";

export function EmergencyTopBanner() {
  const { language, toggleLanguage, t, isRtl } = useLanguage();
  const { theme, setTheme } = useTheme();

  return (
    <aside
      aria-label={t("Emergency Dispatch Notification", "إشعار طوارئ الكشف الفوري")}
      className="bg-hydro-950 text-slate-100 border-b border-hydro-800 text-xs sm:text-sm py-2 px-3 sm:px-6 relative z-50 select-none"
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        {/* Left: Dispatch Indicator */}
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="font-semibold text-emerald-400 flex items-center gap-1">
            <ShieldAlert className="w-3.5 h-3.5 inline" />
            {t("24/7 Rapid Response:", "طوارئ على مدار 24 ساعة:")}
          </span>
          <span className="text-slate-300 hidden md:inline">
            {t(
              "2 Mobile NDT Units active in Muwaileh & Al Zahia (ETA 25–35 Mins)",
              "وحدات الفحص المتنقلة نشطة الآن في مويلح والزاهية (الوصول خلال 25–35 دقيقة)"
            )}
          </span>
          <span className="text-slate-300 md:hidden">
            {t("Sharjah ETA: 25–35 Mins", "الوصول بالشارقة: 25–35 دقيقة")}
          </span>
        </div>

        {/* Right: Quick actions, Lang Switcher & Theme Toggle */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Direct Call Link */}
          <a
            href={CONTRACTOR_DATA.phoneDial}
            className="flex items-center gap-1.5 font-bold text-urgency-400 hover:text-urgency-300 transition-colors"
            title={t("Call Emergency Plumber", "اتصل بفريق الطوارئ")}
          >
            <Phone className="w-3.5 h-3.5 animate-pulse" />
            <span dir="ltr">{CONTRACTOR_DATA.phoneDisplay}</span>
          </a>

          <span className="text-slate-700 hidden sm:inline">|</span>

          {/* WhatsApp Direct */}
          <a
            href={`${CONTRACTOR_DATA.whatsappBaseUrl}?text=${encodeURIComponent(
              t(
                "Hello, I have an urgent water leak emergency in Sharjah. Please dispatch a technician.",
                "مرحباً، لدي حالة تسريب مياه طارئة في الشارقة وأحتاج كشف فوري."
              )
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1 text-whatsapp-500 hover:text-whatsapp-400 font-semibold transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{t("WhatsApp SOS", "واتساب طوارئ")}</span>
          </a>

          <span className="text-slate-700">|</span>

          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 px-2 py-0.5 rounded bg-hydro-800 hover:bg-hydro-700 text-slate-200 hover:text-white border border-hydro-700 transition-all font-medium"
            aria-label={t("Switch to Arabic", "التبديل إلى الإنجليزية")}
          >
            <Globe className="w-3 h-3 text-ultrasonic-400" />
            <span className="font-bold text-xs">{language === "ar" ? "English" : "عربي"}</span>
          </button>

          {/* Dark / Light Mode Switcher */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-1 rounded bg-hydro-800 hover:bg-hydro-700 text-slate-300 hover:text-white border border-hydro-700 transition-colors"
            aria-label={t("Toggle Light/Dark Theme", "تبديل المظهر النهاري/الليلي")}
          >
            {theme === "dark" ? (
              <Sun className="w-3.5 h-3.5 text-amber-400" />
            ) : (
              <Moon className="w-3.5 h-3.5 text-slate-300" />
            )}
          </button>
        </div>
      </div>
    </aside>
  );
}
