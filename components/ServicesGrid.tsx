"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageThemeContext";
import { SERVICES_DATA, CONTRACTOR_DATA, IService } from "@/lib/contractor-data";
import {
  Radio,
  Flame,
  Wrench,
  FileCheck2,
  CheckCircle2,
  Clock,
  Send,
  ShieldCheck,
  Zap,
} from "lucide-react";

export function ServicesGrid() {
  const { t, language } = useLanguage();

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "Radio":
        return <Radio className="w-6 h-6 text-cyan-500" />;
      case "Flame":
        return <Flame className="w-6 h-6 text-orange-500" />;
      case "Wrench":
        return <Wrench className="w-6 h-6 text-emerald-500" />;
      case "FileCheck2":
        return <FileCheck2 className="w-6 h-6 text-blue-500" />;
      default:
        return <Zap className="w-6 h-6 text-cyan-500" />;
    }
  };

  return (
    <section
      id="services"
      className="py-16 md:py-24 bg-white dark:bg-hydro-950 border-b border-slate-200 dark:border-hydro-800 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-100 dark:bg-hydro-800 border border-cyan-300 dark:border-cyan-700 text-cyan-800 dark:text-ultrasonic-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>{t("Engineered Leak Solutions", "خدمات الكشف والإصلاح المعتمدة")}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t(
              "Comprehensive Non-Destructive Water Leak Diagnostics & Repair",
              "منظومة متكاملة لكشف تسربات المياه والإصلاح الفوري المعتمد"
            )}
          </h2>

          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            {t(
              "From initial ultrasonic acoustic pinpointing to surgical PPR heat fusion and official SEWA rebate certification dossiers.",
              "بدءاً من الكشف الصوتي الدقيق وصولاً إلى اللحام الحراري الموضعي وإصدار ملف التقرير المعتمد لهيئة سيوا بالشارقة."
            )}
          </p>
        </div>

        {/* Services Grid (2x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="rounded-2xl bg-slate-50 dark:bg-hydro-900 border border-slate-200 dark:border-hydro-800 p-6 sm:p-8 shadow-sm hover:shadow-lg hover:border-cyan-400 dark:hover:border-cyan-500/50 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Header Meta */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="p-3.5 rounded-xl bg-white dark:bg-hydro-800 border border-slate-200/80 dark:border-hydro-700 group-hover:scale-105 transition-transform">
                    {getServiceIcon(service.iconName)}
                  </div>

                  <div className="flex items-center gap-2">
                    {service.sewaCompliant && (
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        {t("SEWA Rebate Ready", "معتمد لهيئة سيوا")}
                      </span>
                    )}
                  </div>
                </div>

                {/* Title & Short Description */}
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mb-2 leading-tight">
                  {t(service.titleEn, service.titleAr)}
                </h3>
                <p className="text-sm font-medium text-cyan-700 dark:text-ultrasonic-300 mb-3">
                  {t(service.shortDescEn, service.shortDescAr)}
                </p>

                {/* Scope Description */}
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                  {t(service.scopeEn, service.scopeAr)}
                </p>

                {/* Features List */}
                <div className="space-y-2 mb-6">
                  {service.featuresEn.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span>{t(feat, service.featuresAr[idx])}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Footnote & Action */}
              <div className="pt-4 border-t border-slate-200 dark:border-hydro-800 space-y-4">
                <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-500 dark:text-slate-400">
                  <div className="p-2 rounded-lg bg-white dark:bg-hydro-850 border border-slate-200/60 dark:border-hydro-700">
                    <span className="block text-[10px] text-slate-400 uppercase font-mono">{t("Turnaround", "وقت الإنجاز")}</span>
                    <span className="font-bold text-slate-800 dark:text-slate-200 mt-0.5 block">
                      {t(service.turnaroundEn, service.turnaroundAr)}
                    </span>
                  </div>
                  <div className="p-2 rounded-lg bg-white dark:bg-hydro-850 border border-slate-200/60 dark:border-hydro-700">
                    <span className="block text-[10px] text-slate-400 uppercase font-mono">{t("Instrumentation", "نوع الجهاز")}</span>
                    <span className="font-bold text-slate-800 dark:text-slate-200 mt-0.5 block truncate">
                      {t(service.equipmentEn, service.equipmentAr)}
                    </span>
                  </div>
                </div>

                <a
                  href={`${CONTRACTOR_DATA.whatsappBaseUrl}?text=${encodeURIComponent(
                    language === "ar"
                      ? `مرحباً، أرغب في الاستفسار وحجز خدمة: ${service.titleAr} في الشارقة.`
                      : `Hello, I would like to book the following service: ${service.titleEn} in Sharjah.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 dark:bg-hydro-800 hover:bg-cyan-600 dark:hover:bg-cyan-600 text-white font-bold text-xs sm:text-sm shadow-sm transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>
                    {t(`Book ${service.titleEn.split(" ")[0]}`, `طلب خدمة ${service.titleAr.split(" ")[0]}`)}
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
