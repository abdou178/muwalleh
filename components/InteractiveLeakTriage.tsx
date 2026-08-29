"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageThemeContext";
import {
  CONTRACTOR_DATA,
  SYMPTOMS_DATA,
  PROPERTY_TYPES,
  SUBURBS_DATA,
  ISymptom,
} from "@/lib/contractor-data";
import {
  TrendingUp,
  Droplets,
  Volume2,
  Layers,
  AlertTriangle,
  Send,
  Phone,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Clock,
  MapPin,
  Home,
  FileCheck2,
  Radio,
} from "lucide-react";

export function InteractiveLeakTriage() {
  const { t, isRtl, language } = useLanguage();

  const [selectedSymptomId, setSelectedSymptomId] = useState<string>("high-sewa-bill");
  const [selectedPropertyId, setSelectedPropertyId] = useState<string>("villa");
  const [selectedSuburbId, setSelectedSuburbId] = useState<string>("muwaileh-commercial");

  const selectedSymptom =
    SYMPTOMS_DATA.find((s) => s.id === selectedSymptomId) || SYMPTOMS_DATA[0];
  const selectedProperty =
    PROPERTY_TYPES.find((p) => p.id === selectedPropertyId) || PROPERTY_TYPES[0];
  const selectedSuburb =
    SUBURBS_DATA.find((sub) => sub.id === selectedSuburbId) || SUBURBS_DATA[0];

  // Helper to render icon for symptom
  const getSymptomIcon = (iconName: string) => {
    switch (iconName) {
      case "TrendingUp":
        return <TrendingUp className="w-5 h-5" />;
      case "Droplets":
        return <Droplets className="w-5 h-5" />;
      case "Volume2":
        return <Volume2 className="w-5 h-5" />;
      case "Layers":
        return <Layers className="w-5 h-5" />;
      case "AlertTriangle":
        return <AlertTriangle className="w-5 h-5" />;
      default:
        return <Droplets className="w-5 h-5" />;
    }
  };

  // Generate structured WhatsApp message
  const generateWhatsAppMessage = () => {
    if (language === "ar") {
      return `السلام عليكم، المركز المعتمد لكشف تسربات المياه بالشارقة.
أرغب في طلب فحص وكشف تسربات عاجل بدون تكسير (250 درهم):

• المشكلة: ${selectedSymptom.nameAr}
• نوع العقار: ${selectedProperty.nameAr}
• المنطقة: الشارقة - ${selectedSuburb.nameAr}
• الخطورة والتشخيص: ${selectedSymptom.urgencyAr}
• المطلوب: كشف بالموجات الصوتية والحرارية + إصدار تقرير معتمد لهيئة سيوا (SEWA).

يرجى إرسال أقرب فني متواجد بالمنطقة فوراً.`;
    } else {
      return `Hello, Certified Water Leak Detection Sharjah.
I would like to request an urgent non-destructive leak inspection (250 AED fee):

• Issue: ${selectedSymptom.nameEn}
• Property Type: ${selectedProperty.nameEn}
• Location: Sharjah - ${selectedSuburb.nameEn}
• Urgency Level: ${selectedSymptom.urgencyEn}
• Required: Acoustic + Thermal Diagnostic Scan + Official Stamped SEWA Rebate Report.

Please dispatch the nearest mobile technician to my location immediately.`;
    }
  };

  const whatsappUrl = `${CONTRACTOR_DATA.whatsappBaseUrl}?text=${encodeURIComponent(
    generateWhatsAppMessage()
  )}`;

  return (
    <section
      id="triage"
      className="py-16 md:py-24 bg-white dark:bg-hydro-950 border-b border-slate-200 dark:border-hydro-800 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 dark:bg-urgency-950/60 border border-orange-200 dark:border-urgency-800/80 text-orange-700 dark:text-urgency-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            <span>{t("Interactive Diagnostic Triage", "التشخيص التفاعلي الذكي للتسريب")}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t(
              "Select Your Leak Symptoms for Instant WhatsApp SOS Dispatch",
              "حدد نوع المشكلة للحصول على تشخيص فوري وإرسال الفني"
            )}
          </h2>

          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            {t(
              "Answer 3 quick technical questions to generate a precision diagnostic dispatch payload sent directly to our on-duty Sharjah leak engineers.",
              "اختر المشكلة ونوع العقار والمنطقة لإنشاء تقرير أولي وتوجيه أقرب وحدة فحص متنقلة في الشارقة إلى موقعك فوراً."
            )}
          </p>
        </div>

        {/* Triage Matrix Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left / Steps Matrix (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Step 1: Select Symptom */}
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-hydro-900 border border-slate-200 dark:border-hydro-800 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-cyan-600 text-white font-bold text-xs">
                    1
                  </span>
                  <h3 className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-white">
                    {t("What symptom are you experiencing?", "ما هو العَرَض أو المشكلة التي تلاحظها؟")}
                  </h3>
                </div>
                <span className="text-xs font-semibold text-cyan-600 dark:text-ultrasonic-400">
                  {t("Select 1 issue", "اختر المشكلة")}
                </span>
              </div>

              <div className="space-y-2.5">
                {SYMPTOMS_DATA.map((symptom) => {
                  const isSelected = symptom.id === selectedSymptomId;
                  return (
                    <button
                      key={symptom.id}
                      onClick={() => setSelectedSymptomId(symptom.id)}
                      className={`w-full text-left rtl:text-right p-3.5 rounded-xl border transition-all flex items-start gap-3.5 group ${
                        isSelected
                          ? "bg-cyan-50/80 dark:bg-hydro-800 border-cyan-500 shadow-sm text-slate-900 dark:text-white"
                          : "bg-white dark:bg-hydro-850/60 border-slate-200 dark:border-hydro-700/80 text-slate-700 dark:text-slate-300 hover:border-cyan-400 hover:bg-slate-50 dark:hover:bg-hydro-800"
                      }`}
                    >
                      <div
                        className={`p-2.5 rounded-lg transition-colors mt-0.5 ${
                          isSelected
                            ? "bg-cyan-600 text-white"
                            : "bg-slate-100 dark:bg-hydro-700 text-slate-600 dark:text-slate-300 group-hover:bg-cyan-100 dark:group-hover:bg-cyan-900/50 group-hover:text-cyan-700 dark:group-hover:text-cyan-300"
                        }`}
                      >
                        {getSymptomIcon(symptom.iconName)}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-bold text-sm sm:text-base leading-snug">
                            {t(symptom.nameEn, symptom.nameAr)}
                          </span>
                          {symptom.severity === "critical" && (
                            <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-red-100 dark:bg-red-950/80 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800 whitespace-nowrap">
                              {t("Critical", "طوارئ قصوى")}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                          {t(symptom.diagnosticEn, symptom.diagnosticAr)}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Property Type */}
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-hydro-900 border border-slate-200 dark:border-hydro-800 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-cyan-600 text-white font-bold text-xs">
                    2
                  </span>
                  <h3 className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-white">
                    {t("Select Property Type", "حدد نوع العقار أو المبنى")}
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {PROPERTY_TYPES.map((prop) => {
                  const isSelected = prop.id === selectedPropertyId;
                  return (
                    <button
                      key={prop.id}
                      onClick={() => setSelectedPropertyId(prop.id)}
                      className={`p-3 rounded-xl border text-center transition-all flex flex-col items-center gap-2 ${
                        isSelected
                          ? "bg-cyan-50 dark:bg-hydro-800 border-cyan-500 shadow-sm text-cyan-900 dark:text-white font-extrabold"
                          : "bg-white dark:bg-hydro-850/60 border-slate-200 dark:border-hydro-700 text-slate-700 dark:text-slate-300 hover:border-cyan-300 font-medium"
                      }`}
                    >
                      <Home className={`w-5 h-5 ${isSelected ? "text-cyan-600 dark:text-ultrasonic-400" : "text-slate-400"}`} />
                      <span className="text-xs leading-tight">
                        {t(prop.nameEn, prop.nameAr)}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Sharjah Suburb */}
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-hydro-900 border border-slate-200 dark:border-hydro-800 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-cyan-600 text-white font-bold text-xs">
                    3
                  </span>
                  <h3 className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-white">
                    {t("Select Sharjah Suburb / Location", "اختر موقعك في الشارقة")}
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {SUBURBS_DATA.map((suburb) => {
                  const isSelected = suburb.id === selectedSuburbId;
                  return (
                    <button
                      key={suburb.id}
                      onClick={() => setSelectedSuburbId(suburb.id)}
                      className={`p-2.5 rounded-xl border text-left rtl:text-right transition-all flex items-center justify-between ${
                        isSelected
                          ? "bg-cyan-50 dark:bg-hydro-800 border-cyan-500 text-cyan-900 dark:text-white font-bold"
                          : "bg-white dark:bg-hydro-850/60 border-slate-200 dark:border-hydro-700 text-slate-700 dark:text-slate-300 hover:border-cyan-300 text-xs"
                      }`}
                    >
                      <span className="truncate">{t(suburb.nameEn, suburb.nameAr)}</span>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 dark:bg-hydro-700 text-slate-500 dark:text-slate-300">
                        {t(suburb.etaEn, suburb.etaAr)}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right / Generated Triage Payload & Instant Dispatch (5 cols) */}
          <div className="lg:col-span-5 sticky top-28 space-y-6">
            <div className="rounded-2xl bg-gradient-to-b from-slate-900 to-hydro-950 text-white border border-cyan-500/30 p-6 shadow-2xl space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

              {/* Triage Status Header */}
              <div className="flex items-center justify-between border-b border-hydro-800 pb-4">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  <span className="font-extrabold text-sm tracking-wide text-cyan-300 uppercase">
                    {t("Live Diagnostic Card", "تقرير التشخيص الفوري")}
                  </span>
                </div>
                <span className="text-[11px] font-mono bg-emerald-950/80 text-emerald-300 border border-emerald-800 px-2 py-0.5 rounded flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  {t("UNIT READY", "جاهز للإرسال")}
                </span>
              </div>

              {/* Triage Summary Specs */}
              <div className="space-y-3.5 text-xs">
                <div>
                  <span className="text-slate-400 block mb-0.5">{t("Selected Issue", "المشكلة المحددة:")}</span>
                  <span className="font-bold text-sm text-white block">
                    {t(selectedSymptom.nameEn, selectedSymptom.nameAr)}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="p-2.5 rounded-lg bg-hydro-900 border border-hydro-800">
                    <span className="text-slate-400 block text-[11px]">{t("Target Suburb", "المنطقة:")}</span>
                    <span className="font-bold text-white text-xs mt-0.5 block">
                      {t(selectedSuburb.nameEn, selectedSuburb.nameAr)}
                    </span>
                    <span className="text-[10px] text-emerald-400 font-mono mt-0.5 block">
                      ETA: {t(selectedSuburb.etaEn, selectedSuburb.etaAr)}
                    </span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-hydro-900 border border-hydro-800">
                    <span className="text-slate-400 block text-[11px]">{t("Property Type", "نوع العقار:")}</span>
                    <span className="font-bold text-white text-xs mt-0.5 block">
                      {t(selectedProperty.nameEn, selectedProperty.nameAr)}
                    </span>
                    <span className="text-[10px] text-cyan-400 font-mono mt-0.5 block">
                      {t("Zero Breakage", "بدون تكسير")}
                    </span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-hydro-900/90 border border-cyan-500/20 space-y-1">
                  <span className="text-cyan-300 font-bold block text-[11px] flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5 text-cyan-400" />
                    {t("Recommended Diagnostic Test:", "الفحص الهندسي المقترح:")}
                  </span>
                  <p className="text-slate-300 leading-relaxed text-xs">
                    {t(selectedSymptom.recommendedTestEn, selectedSymptom.recommendedTestAr)}
                  </p>
                </div>
              </div>

              {/* Upfront Inspection Pricing Banner */}
              <div className="p-3.5 rounded-xl bg-gradient-to-r from-cyan-950 to-hydro-900 border border-cyan-500/40 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-slate-300 block">{t("Inspection Fee", "رسوم الفحص الأولي")}</span>
                  <span className="text-xl font-black text-white">250 AED</span>
                </div>
                <div className="text-right rtl:text-left text-[11px] text-emerald-300 space-y-0.5">
                  <div className="flex items-center gap-1 justify-end rtl:justify-start">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    <span>{t("Thermal & Acoustic Scan", "فحص حراري وصوتي")}</span>
                  </div>
                  <div className="flex items-center gap-1 justify-end rtl:justify-start">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    <span>{t("Official SEWA Report", "تقرير سيوا المعتمد")}</span>
                  </div>
                </div>
              </div>

              {/* 1-Tap Action Buttons */}
              <div className="space-y-3 pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 py-4 px-4 rounded-xl bg-whatsapp-500 hover:bg-whatsapp-600 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-emerald-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all group text-center"
                >
                  <Send className="w-4 h-4 fill-white group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 transition-transform" />
                  <span>
                    {t("Send Diagnostic to WhatsApp Engineer", "إرسال التشخيص لفني الواتساب الآن")}
                  </span>
                </a>

                <a
                  href={CONTRACTOR_DATA.phoneDial}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-urgency-600 hover:bg-urgency-500 text-white font-bold text-sm shadow-md transition-all text-center"
                >
                  <Phone className="w-4 h-4 animate-pulse" />
                  <span>
                    {t("Direct Emergency Call:", "اتصال فوري بالطوارئ:")} {CONTRACTOR_DATA.phoneDisplay}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
