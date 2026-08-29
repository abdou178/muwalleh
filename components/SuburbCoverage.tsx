"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageThemeContext";
import { SUBURBS_DATA, CONTRACTOR_DATA } from "@/lib/contractor-data";
import {
  MapPin,
  Clock,
  Send,
  Navigation,
  CheckCircle2,
  ShieldCheck,
  Radio,
} from "lucide-react";

export function SuburbCoverage() {
  const { t, language } = useLanguage();

  return (
    <section
      id="coverage"
      className="py-16 md:py-24 bg-white dark:bg-hydro-950 border-b border-slate-200 dark:border-hydro-800 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-100 dark:bg-hydro-800 border border-cyan-300 dark:border-cyan-700 text-cyan-800 dark:text-ultrasonic-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Navigation className="w-3.5 h-3.5" />
            <span>{t("Sharjah Wide Rapid Deployment", "تغطية فورية وشاملة لكافة مناطق الشارقة")}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t(
              "25–35 Minute Average Emergency Response Across Sharjah",
              "سرعة استجابة ووصول خلال 25–35 دقيقة لجميع الأحياء"
            )}
          </h2>

          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            {t(
              "Strategically headquartered in Muwaileh Commercial with mobile non-destructive testing units stationed across eastern and western Sharjah districts.",
              "مقرنا الرئيسي في تجارية مويلح مع انتشار فرق الفحص المتنقلة المزودة بأحدث الأجهزة الصوتية والحرارية في كافة ضواحي وفلل الشارقة."
            )}
          </p>
        </div>

        {/* Suburbs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SUBURBS_DATA.map((suburb) => (
            <div
              key={suburb.id}
              className={`rounded-2xl border p-5 transition-all flex flex-col justify-between group ${
                suburb.id === "muwaileh-commercial"
                  ? "bg-gradient-to-br from-cyan-50/90 to-white dark:from-hydro-850 dark:to-hydro-900 border-cyan-500 shadow-md ring-1 ring-cyan-400/30"
                  : "bg-slate-50 dark:bg-hydro-900 border-slate-200 dark:border-hydro-800 hover:border-cyan-400 dark:hover:border-hydro-700 shadow-sm"
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <MapPin className={`w-4 h-4 ${suburb.id === "muwaileh-commercial" ? "text-cyan-600 dark:text-ultrasonic-400" : "text-slate-500 dark:text-slate-400"}`} />
                    <h3 className="font-extrabold text-base text-slate-900 dark:text-white">
                      {t(suburb.nameEn, suburb.nameAr)}
                    </h3>
                  </div>

                  {suburb.id === "muwaileh-commercial" ? (
                    <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-cyan-600 text-white">
                      {t("Central HQ", "المقر الرئيسي")}
                    </span>
                  ) : suburb.popular ? (
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-200 dark:bg-hydro-750 text-slate-700 dark:text-slate-300">
                      {t("Active Hub", "تغطية مكثفة")}
                    </span>
                  ) : null}
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                  {t(suburb.zoneEn, suburb.zoneAr)}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200/80 dark:border-hydro-800 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-bold">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{t(`ETA: ${suburb.etaEn}`, `الوصول: ${suburb.etaAr}`)}</span>
                </div>

                <a
                  href={`${CONTRACTOR_DATA.whatsappBaseUrl}?text=${encodeURIComponent(
                    language === "ar"
                      ? `مرحباً، أحتاج فحص تسريب مياه عاجل في الشارقة - منطقة: ${suburb.nameAr}. أرجو تأكيد أقرب وقت وصول.`
                      : `Hello, I need an urgent water leak inspection in Sharjah - ${suburb.nameEn}. Please confirm earliest technician ETA.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white dark:bg-hydro-800 hover:bg-whatsapp-500 dark:hover:bg-whatsapp-600 text-slate-700 dark:text-slate-200 hover:text-white border border-slate-200 dark:border-hydro-700 text-xs font-bold transition-all shadow-sm"
                >
                  <Send className="w-3 h-3" />
                  <span>{t("Dispatch Here", "طلب فني للمنطقة")}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Rapid Deployment Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900 text-white border border-cyan-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-400 flex items-center justify-center text-emerald-300 flex-shrink-0">
              <Radio className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h4 className="font-extrabold text-base text-white">
                {t("Living in another area of Sharjah or border zones?", "هل تسكن في منطقة أخرى بالشارقة أو المناطق المجاورة؟")}
              </h4>
              <p className="text-xs text-slate-300 mt-0.5">
                {t(
                  "Our emergency fleet covers all Sharjah suburbs including Al Dhaid, Khorfakkan, and Kalba upon special request.",
                  "أسطولنا المتنقل يغطي كافة مناطق وضواحي الشارقة بما في ذلك المناطق الوسطى والشرقية عند الطلب."
                )}
              </p>
            </div>
          </div>

          <a
            href={CONTRACTOR_DATA.phoneDial}
            className="w-full md:w-auto text-center px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider whitespace-nowrap shadow-md transition-all"
          >
            {t("Check Coverage: +971 54 996 3667", "تأكيد التغطية: 971549963667+")}
          </a>
        </div>
      </div>
    </section>
  );
}
