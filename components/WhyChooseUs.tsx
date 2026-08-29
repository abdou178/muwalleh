"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageThemeContext";
import { COMPARISON_DATA, CONTRACTOR_DATA } from "@/lib/contractor-data";
import {
  ShieldCheck,
  CheckCircle2,
  XCircle,
  Award,
  Zap,
  Phone,
  MessageSquare,
} from "lucide-react";

export function WhyChooseUs() {
  const { t } = useLanguage();

  return (
    <section
      id="why-us"
      className="py-16 md:py-24 bg-slate-50 dark:bg-hydro-900 border-b border-slate-200 dark:border-hydro-800 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-100 dark:bg-hydro-800 border border-cyan-300 dark:border-cyan-700 text-cyan-800 dark:text-ultrasonic-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>{t("Engineering Superiority", "المقارنة الهندسية الفاصلة")}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t(
              "Certified NDT Precision vs. Traditional Destructive Plumbing",
              "الفحص الهندسي المتطور بدون تكسير مقابل السباكة العشوائية"
            )}
          </h2>

          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            {t(
              "Why thousands of Sharjah villa owners trust our certified acoustic and thermal engineering over guesswork and broken tiles.",
              "تعرف على الفارق الجوهري بين الاستعانة بفريق هندسي معتمد بأحدث الأجهزة وبين محاولات التكسير العشوائي."
            )}
          </p>
        </div>

        {/* Comparison Table / Cards */}
        <div className="rounded-2xl bg-white dark:bg-hydro-850 border border-slate-200 dark:border-hydro-700 shadow-md overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-12 bg-slate-100 dark:bg-hydro-950 border-b border-slate-200 dark:border-hydro-700 p-4 sm:p-5 text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white">
            <div className="col-span-4 sm:col-span-4 flex items-center">
              {t("Evaluation Criteria", "معيار الفحص والمقارنة")}
            </div>
            <div className="col-span-4 sm:col-span-4 text-cyan-700 dark:text-ultrasonic-300 flex items-center gap-1.5 font-black">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 hidden sm:inline" />
              <span>{t("Certified NDT (Our Hub)", "مركزنا المعتمد (بدون تكسير)")}</span>
            </div>
            <div className="col-span-4 sm:col-span-4 text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
              <XCircle className="w-4 h-4 text-red-400 hidden sm:inline" />
              <span>{t("Traditional Plumber", "السباك التقليدي العادي")}</span>
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-slate-100 dark:divide-hydro-750 text-xs sm:text-sm">
            {COMPARISON_DATA.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-12 p-4 sm:p-5 items-center hover:bg-slate-50/80 dark:hover:bg-hydro-800/40 transition-colors"
              >
                {/* Feature Name */}
                <div className="col-span-4 sm:col-span-4 font-bold text-slate-900 dark:text-white pr-2 rtl:pr-0 rtl:pl-2">
                  {t(row.featureEn, row.featureAr)}
                </div>

                {/* Our Certified Service */}
                <div className="col-span-4 sm:col-span-4 font-semibold text-emerald-700 dark:text-emerald-300 pr-2 rtl:pr-0 rtl:pl-2 flex items-start gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span>{t(row.certifiedNdtEn, row.certifiedNdtAr)}</span>
                </div>

                {/* Traditional Plumber */}
                <div className="col-span-4 sm:col-span-4 text-slate-500 dark:text-slate-400 flex items-start gap-1.5">
                  <XCircle className="w-4 h-4 text-red-500/70 mt-0.5 flex-shrink-0" />
                  <span>{t(row.traditionalEn, row.traditionalAr)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 p-6 rounded-2xl bg-white dark:bg-hydro-850 border border-slate-200 dark:border-hydro-700 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-urgency-950/80 border border-orange-200 dark:border-urgency-800 flex items-center justify-center text-orange-600 dark:text-urgency-400 flex-shrink-0">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-extrabold text-base text-slate-900 dark:text-white">
                {t("Don't let a plumber smash your tiles on a guess.", "لا تدع أحداً يكسر حمامك أو حوشك بالتخمين العشوائي.")}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {t(
                  "Get an acoustic pinpoint scan for just 250 AED with an official SEWA report.",
                  "احجز فحصاً صوتياً وحرارياً دقيقاً بسعر 250 درهم فقط مع تقرير سيوا المعتمد."
                )}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={CONTRACTOR_DATA.phoneDial}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-urgency-600 hover:bg-urgency-500 text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>{t("Call Now", "اتصل الآن")}</span>
            </a>

            <a
              href="#triage"
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{t("Start Triage", "بدء التشخيص")}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
