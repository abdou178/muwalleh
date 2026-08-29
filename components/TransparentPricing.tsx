"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageThemeContext";
import { PRICING_DATA, CONTRACTOR_DATA } from "@/lib/contractor-data";
import {
  CheckCircle2,
  ShieldCheck,
  Send,
  Phone,
  Sparkles,
  HelpCircle,
  FileCheck2,
} from "lucide-react";

export function TransparentPricing() {
  const { t, language } = useLanguage();

  return (
    <section
      id="pricing"
      className="py-16 md:py-24 bg-slate-50 dark:bg-hydro-900 border-b border-slate-200 dark:border-hydro-800 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{t("Transparent Fixed Pricing", "أسعار واضحة وبدون رسوم مخفية")}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t(
              "Zero-Surprise Pricing with Official SEWA Rebate Certification",
              "باقات الفحص الشامل المعتمدة مع تقرير رسمي لسيوا"
            )}
          </h2>

          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            {t(
              "Diagnostic scans start from 250 AED including ultrasonic sound detection, FLIR infrared thermal scan, and our digital SEWA rebate report.",
              "يبدأ الفحص الشامل من 250 درهم ويشمل الكشف الصوتي والحراري بدون أي تكسير، مع تقرير هندسي مختوم لتقديمه لهيئة سيوا بالشارقة."
            )}
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_DATA.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-3xl border p-7 sm:p-8 flex flex-col justify-between transition-all relative ${
                tier.popular
                  ? "bg-white dark:bg-hydro-850 border-cyan-500 shadow-xl ring-2 ring-cyan-500/20 lg:-translate-y-2"
                  : "bg-white/80 dark:bg-hydro-900/90 border-slate-200 dark:border-hydro-800 shadow-sm hover:shadow-md"
              }`}
            >
              {/* Top Badge */}
              {tier.badgeEn && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span
                    className={`px-4 py-1 rounded-full text-xs font-extrabold tracking-wider uppercase shadow-md ${
                      tier.popular
                        ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white"
                        : "bg-slate-800 text-slate-200 dark:bg-hydro-700"
                    }`}
                  >
                    {t(tier.badgeEn, tier.badgeAr || "")}
                  </span>
                </div>
              )}

              <div>
                {/* Title & Description */}
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mb-2">
                  {t(tier.titleEn, tier.titleAr)}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                  {t(tier.descEn, tier.descAr)}
                </p>

                {/* Price Display */}
                <div className="mb-6 p-4 rounded-2xl bg-slate-50 dark:bg-hydro-950/80 border border-slate-200/80 dark:border-hydro-800 flex items-baseline justify-between">
                  <div>
                    <span className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">
                      {t(tier.priceEn, tier.priceAr)}
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    {t(tier.periodEn, tier.periodAr)}
                  </span>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  {tier.featuresEn.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span>{t(feature, tier.featuresAr[idx])}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-hydro-800">
                <a
                  href={`${CONTRACTOR_DATA.whatsappBaseUrl}?text=${encodeURIComponent(
                    language === "ar"
                      ? `مرحباً، أرغب في حجز باقة: ${tier.titleAr} بسعر (${tier.priceAr}) في الشارقة.`
                      : `Hello, I would like to book the: ${tier.titleEn} package (${tier.priceEn}) in Sharjah.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-extrabold text-sm shadow-md transition-all text-center ${
                    tier.popular
                      ? "bg-cyan-600 hover:bg-cyan-500 text-white shadow-cyan-600/25 hover:scale-[1.02]"
                      : "bg-slate-900 hover:bg-slate-800 dark:bg-hydro-800 dark:hover:bg-hydro-700 text-white"
                  }`}
                >
                  <Send className="w-4 h-4" />
                  <span>{t(tier.ctaEn, tier.ctaAr)}</span>
                </a>

                <div className="text-center">
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center justify-center gap-1">
                    <FileCheck2 className="w-3 h-3 text-cyan-500" />
                    {t("Official Stamped SEWA Report Included", "يشمل التقرير الهندسي المعتمد لسيوا")}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Guarantee Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-white dark:bg-hydro-850 border border-slate-200 dark:border-hydro-700 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-800 flex items-center justify-center text-emerald-600 dark:text-emerald-400 flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-extrabold text-base text-slate-900 dark:text-white">
                {t("100% Diagnostic Accuracy or Free Inspection", "دقة فحص 100% أو استرجاع كامل الرسوم")}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {t(
                  "We stand firmly behind our electro-acoustic sensors and FLIR cameras. If our pinpoint location is wrong, you pay zero.",
                  "نضمن دقة الفحص الهندسي بأجهزتنا المتطورة. في حال عدم تحديد موضع الكسر بدقة، لا تدفع أي رسوم."
                )}
              </p>
            </div>
          </div>

          <a
            href={CONTRACTOR_DATA.phoneDial}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-urgency-600 hover:bg-urgency-500 text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all whitespace-nowrap"
          >
            <Phone className="w-4 h-4" />
            <span>{t("Call to Book: +971 54 996 3667", "اتصل للحجز: 971549963667+")}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
