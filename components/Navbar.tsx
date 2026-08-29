"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageThemeContext";
import { CONTRACTOR_DATA } from "@/lib/contractor-data";
import {
  Phone,
  MessageSquare,
  ShieldCheck,
  Menu,
  X,
  Radio,
  FileCheck,
  CheckCircle2,
} from "lucide-react";

export function Navbar() {
  const { t, isRtl } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "#triage", labelEn: "Leak Triage", labelAr: "تشخيص التسريب" },
    { href: "#services", labelEn: "Services", labelAr: "خدماتنا" },
    { href: "#equipment", labelEn: "NDT Equipment", labelAr: "الأجهزة والمعدات" },
    { href: "#why-us", labelEn: "Why Us", labelAr: "لماذا تختارنا" },
    { href: "#coverage", labelEn: "Sharjah Areas", labelAr: "مناطق الشارقة" },
    { href: "#pricing", labelEn: "Pricing (250 AED)", labelAr: "الأسعار (250 د.إ)" },
    { href: "#reviews", labelEn: "Reviews", labelAr: "آراء العملاء" },
    { href: "#faqs", labelEn: "FAQs", labelAr: "الأسئلة الشائعة" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/95 dark:bg-hydro-900/95 border-b border-slate-200 dark:border-hydro-800 transition-colors shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Identity */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label={CONTRACTOR_DATA.businessNameEn}
          >
            <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-ultrasonic-600 to-hydro-900 text-white shadow-md shadow-cyan-900/20 group-hover:scale-105 transition-transform">
              <Radio className="w-6 h-6 text-ultrasonic-300 animate-pulse" />
              <ShieldCheck className="w-4 h-4 text-emerald-400 absolute -bottom-1 -right-1 bg-hydro-900 rounded-full" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-base sm:text-lg tracking-tight text-slate-900 dark:text-white leading-tight">
                  {t(CONTRACTOR_DATA.businessNameEn, CONTRACTOR_DATA.businessNameAr)}
                </span>
              </div>
              <div className="flex items-center gap-1.5 mt-0.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
                <span className="inline-flex items-center text-emerald-600 dark:text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-3 h-3 mr-0.5" />
                  {t("SEWA Certified NDT", "معتمد لتقارير سيوا")}
                </span>
                <span>•</span>
                <span>{t("Muwaileh Hub", "مويلح التجارية")}</span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-cyan-600 dark:text-slate-300 dark:hover:text-ultrasonic-400 hover:bg-slate-100 dark:hover:bg-hydro-800/60 transition-colors"
              >
                {t(link.labelEn, link.labelAr)}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {/* WhatsApp Quick Link */}
            <a
              href={`${CONTRACTOR_DATA.whatsappBaseUrl}?text=${encodeURIComponent(
                t(
                  "Hello, I need an immediate water leak inspection in Sharjah. Please send engineer.",
                  "مرحباً، أحتاج فحص تسريب مياه عاجل في الشارقة، يرجى إرسال الفني."
                )
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-whatsapp-500 hover:bg-whatsapp-600 text-white font-bold text-sm shadow-sm hover:shadow-md transition-all"
              title={t("WhatsApp Quick Dispatch", "طلب فحص عبر الواتساب")}
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>{t("WhatsApp", "واتساب")}</span>
            </a>

            {/* Direct Phone Call Button */}
            <a
              href={CONTRACTOR_DATA.phoneDial}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-urgency-600 hover:bg-urgency-500 text-white font-bold text-sm shadow-md shadow-orange-600/20 hover:shadow-orange-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Phone className="w-4 h-4 animate-bounce" />
              <div className="flex flex-col text-left rtl:text-right leading-none">
                <span className="text-[10px] text-orange-100 font-normal uppercase tracking-wider">
                  {t("Emergency Dispatch", "اتصال الطوارئ")}
                </span>
                <span className="text-sm font-extrabold tracking-wide" dir="ltr">
                  {CONTRACTOR_DATA.phoneDisplay}
                </span>
              </div>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex xl:hidden items-center gap-2">
            <a
              href={CONTRACTOR_DATA.phoneDial}
              className="sm:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-urgency-600 text-white"
              aria-label={t("Call Now", "اتصل الآن")}
            >
              <Phone className="w-5 h-5" />
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-hydro-800 focus:outline-none"
              aria-label={t("Toggle Navigation Menu", "فتح القائمة")}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="xl:hidden bg-white dark:bg-hydro-900 border-b border-slate-200 dark:border-hydro-800 px-4 pt-2 pb-6 space-y-2 animate-fadeIn shadow-xl">
          <div className="grid grid-cols-2 gap-2 pt-2 pb-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 bg-slate-50 dark:bg-hydro-800/50 hover:bg-slate-100 dark:hover:bg-hydro-800 border border-slate-200/60 dark:border-hydro-700"
              >
                {t(link.labelEn, link.labelAr)}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <a
              href={CONTRACTOR_DATA.phoneDial}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-urgency-600 text-white font-bold text-base shadow-md"
            >
              <Phone className="w-5 h-5" />
              <span>{t("Call Engineer:", "اتصل بالفني:")} {CONTRACTOR_DATA.phoneDisplay}</span>
            </a>

            <a
              href={`${CONTRACTOR_DATA.whatsappBaseUrl}?text=${encodeURIComponent(
                t(
                  "Hello, I need urgent water leak detection in Sharjah.",
                  "مرحباً، أحتاج كشف تسربات مياه فوري في الشارقة."
                )
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-whatsapp-500 text-white font-bold text-base shadow-md"
            >
              <MessageSquare className="w-5 h-5 fill-white" />
              <span>{t("WhatsApp Emergency Dispatch", "طلب واتساب فوري")}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
