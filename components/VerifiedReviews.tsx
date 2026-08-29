"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageThemeContext";
import { REVIEWS_DATA, FAQS_DATA, CONTRACTOR_DATA, IReview } from "@/lib/contractor-data";
import {
  Star,
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  MapPin,
  Building,
  Quote,
  Sparkles,
  Award,
} from "lucide-react";

export function VerifiedReviews() {
  const { t } = useLanguage();
  const [openFaqId, setOpenFaqId] = useState<string | null>("faq-1");

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section
      id="reviews"
      className="py-16 md:py-24 bg-white dark:bg-hydro-950 border-b border-slate-200 dark:border-hydro-800 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section 1: Reviews Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/80 border border-amber-300 dark:border-amber-800 text-amber-800 dark:text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
            <span>{t("Verified Sharjah Property Owners", "تجارب وآراء عملاء الشارقة الموثقة")}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t(
              "4.9 ★★★★★ Rating from 64+ Sharjah Villa Owners & Managers",
              "تقييم 4.9 ★★★★★ من أكثر من 64 مالك فيلا ومدير عقار بالشارقة"
            )}
          </h2>

          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            {t(
              "Real customer testimonials with verified SEWA water bill savings and zero tile damage results across Al Zahia, Muwaileh, and Al Rahmaniya.",
              "شهادات حقيقية توثق مبالغ التوفير في فواتير سيوا ودقة الكشف الصوتي بدون أي تكسير عشوائي للبلاط."
            )}
          </p>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {REVIEWS_DATA.map((review) => (
            <div
              key={review.id}
              className="rounded-2xl bg-slate-50 dark:bg-hydro-900 border border-slate-200 dark:border-hydro-800 p-6 sm:p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Author Info & Rating */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-base text-slate-900 dark:text-white">
                        {t(review.authorEn, review.authorAr)}
                      </span>
                      {review.verified && (
                        <span className="inline-flex items-center gap-0.5 text-[11px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
                          <CheckCircle2 className="w-3 h-3" />
                          {t("Verified Client", "عميل موثق")}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2 mt-1 text-xs text-slate-500 dark:text-slate-400">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-cyan-600 dark:text-ultrasonic-400" />
                        {t(review.locationEn, review.locationAr)}
                      </span>
                      <span>•</span>
                      <span>{t(review.propertyTypeEn, review.propertyTypeAr)}</span>
                    </div>
                  </div>

                  {/* Star Rating */}
                  <div className="flex items-center gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic mb-5">
                  &ldquo;{t(review.commentEn, review.commentAr)}&rdquo;
                </p>
              </div>

              {/* Verified Outcome Badge */}
              <div className="pt-3 border-t border-slate-200/80 dark:border-hydro-800 flex items-center justify-between text-xs">
                <span className="font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5">
                  <Award className="w-4 h-4" />
                  {t(review.savingsEn, review.savingsAr)}
                </span>
                <span className="text-slate-400 text-[11px]">
                  {t(review.dateEn, review.dateAr)}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Section 2: FAQ Accordion */}
        <div id="faqs" className="max-w-4xl mx-auto pt-10 border-t border-slate-200 dark:border-hydro-800">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-100 dark:bg-hydro-800 border border-cyan-300 dark:border-cyan-700 text-cyan-800 dark:text-ultrasonic-300 text-xs font-bold uppercase tracking-wider mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{t("Frequently Asked Questions", "الأسئلة الشائعة والمعلومات الفنية")}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {t(
                "Everything You Need to Know About Water Leak Detection & SEWA Reports",
                "كل ما تريد معرفته عن كشف التسربات واعتماد تقرير هيئة سيوا"
              )}
            </h3>
          </div>

          <div className="space-y-4">
            {FAQS_DATA.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl bg-slate-50 dark:bg-hydro-900 border border-slate-200 dark:border-hydro-800 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full text-left rtl:text-right p-5 sm:p-6 flex items-center justify-between gap-4 font-extrabold text-sm sm:text-base text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-ultrasonic-300 transition-colors"
                  >
                    <span>{t(faq.questionEn, faq.questionAr)}</span>
                    <div className="p-1 rounded-full bg-slate-200/80 dark:bg-hydro-800 flex-shrink-0">
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-cyan-600 dark:text-ultrasonic-400" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200/60 dark:border-hydro-800">
                      {t(faq.answerEn, faq.answerAr)}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
