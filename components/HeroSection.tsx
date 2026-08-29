"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageThemeContext";
import { CONTRACTOR_DATA } from "@/lib/contractor-data";
import {
  Phone,
  MessageSquare,
  ShieldCheck,
  Zap,
  Activity,
  Award,
  Clock,
  CheckCircle2,
  FileCheck2,
  Radio,
  Flame,
  Volume2,
  Sparkles,
} from "lucide-react";

export function HeroSection() {
  const { t, isRtl } = useLanguage();
  const [activeHudTab, setActiveHudTab] = useState<"acoustic" | "thermal" | "pressure">("acoustic");

  return (
    <section className="relative overflow-hidden bg-slate-50 dark:bg-hydro-900 border-b border-slate-200 dark:border-hydro-800 diagnostic-grid py-12 md:py-20 transition-colors">
      {/* Background Decorative Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 dark:bg-cyan-500/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-orange-500/10 dark:bg-orange-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Direct Response Copy & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left rtl:text-right space-y-6">
            {/* Urgency & Certification Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100/80 dark:bg-hydro-800/80 border border-cyan-300/80 dark:border-ultrasonic-500/30 shadow-sm text-cyan-900 dark:text-ultrasonic-300 text-xs sm:text-sm font-bold">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span>
                {t(
                  "Certified Non-Destructive Testing (NDT) • Sharjah Municipal Hub",
                  "فحص هندسي معتمد بدون تكسير • مركز الشارقة المعتمد"
                )}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.2]">
              {t(
                "Precision Ultrasonic Water Leak Detection in Sharjah — ",
                "كشف تسربات المياه بالموجات الصوتية والكاميرا الحرارية بالشارقة — "
              )}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-ultrasonic-400 dark:to-cyan-200">
                {t("Zero Tile Breakage", "بدون تكسير نهائياً")}
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal max-w-2xl">
              {t(
                "Stop unexplained SEWA water bill spikes, ceiling moisture, and yard pipeline leaks. We pinpoint concealed leaks within 5cm using German electro-acoustic sensors and FLIR HD infrared thermal imaging. Official stamped SEWA rebate reports included.",
                "تخلص من ارتفاع فواتير مياه سيوا (SEWA)، وتنشيع الجدران والأسقف، وكسور شبكة الحوش المدفونة. نحدد موقع التسريب بدقة 5 سم بأحدث أجهزة كشف الترددات الصوتية وكاميرات FLIR الحرارية مع تقرير هندسي معتمد لتقديمه لسيوا."
              )}
            </p>

            {/* Proof Chips Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 w-full pt-1">
              <div className="p-2.5 rounded-xl bg-white dark:bg-hydro-800/80 border border-slate-200 dark:border-hydro-700 shadow-sm flex flex-col">
                <div className="flex items-center gap-1.5 text-orange-600 dark:text-urgency-400 font-bold text-xs">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{t("ETA Speed", "وقت الوصول")}</span>
                </div>
                <span className="text-slate-900 dark:text-white font-extrabold text-sm sm:text-base mt-0.5">
                  {t("25–35 Mins", "25–35 دقيقة")}
                </span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400">{t("Across Sharjah", "لكافة المناطق")}</span>
              </div>

              <div className="p-2.5 rounded-xl bg-white dark:bg-hydro-800/80 border border-slate-200 dark:border-hydro-700 shadow-sm flex flex-col">
                <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold text-xs">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{t("Integrity", "الضمان")}</span>
                </div>
                <span className="text-slate-900 dark:text-white font-extrabold text-sm sm:text-base mt-0.5">
                  {t("0% Breakage", "صفر تكسير")}
                </span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400">{t("Accurate Scan", "أثناء الفحص")}</span>
              </div>

              <div className="p-2.5 rounded-xl bg-white dark:bg-hydro-800/80 border border-slate-200 dark:border-hydro-700 shadow-sm flex flex-col">
                <div className="flex items-center gap-1.5 text-cyan-600 dark:text-ultrasonic-400 font-bold text-xs">
                  <FileCheck2 className="w-3.5 h-3.5" />
                  <span>{t("SEWA Report", "تقرير سيوا")}</span>
                </div>
                <span className="text-slate-900 dark:text-white font-extrabold text-sm sm:text-base mt-0.5">
                  {t("Stamped Doc", "تقرير معتمد")}
                </span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400">{t("Bill Rebates", "لتخفيض الفاتورة")}</span>
              </div>

              <div className="p-2.5 rounded-xl bg-white dark:bg-hydro-800/80 border border-slate-200 dark:border-hydro-700 shadow-sm flex flex-col">
                <div className="flex items-center gap-1.5 text-amber-500 font-bold text-xs">
                  <Award className="w-3.5 h-3.5 fill-amber-400" />
                  <span>{t("Rating", "التقييم")}</span>
                </div>
                <span className="text-slate-900 dark:text-white font-extrabold text-sm sm:text-base mt-0.5">
                  4.9 ★★★★★
                </span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400">{t("64+ Reviews", "64+ تقييم حقيقي")}</span>
              </div>
            </div>

            {/* Direct High-Converting Dual Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full pt-3">
              {/* Primary: Direct Call */}
              <a
                href={CONTRACTOR_DATA.phoneDial}
                className="flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-urgency-600 hover:bg-urgency-500 text-white font-extrabold text-base shadow-lg shadow-orange-600/25 hover:shadow-orange-600/40 hover:-translate-y-0.5 transition-all group text-center"
              >
                <div className="w-9 h-9 rounded-lg bg-orange-700/50 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5 animate-pulse" />
                </div>
                <div className="flex flex-col text-left rtl:text-right">
                  <span className="text-xs text-orange-200 uppercase tracking-wider font-semibold">
                    {t("Call Emergency Engineer Now", "اتصل بمهندس الطوارئ الآن")}
                  </span>
                  <span className="text-lg font-black tracking-wide" dir="ltr">
                    {CONTRACTOR_DATA.phoneDisplay}
                  </span>
                </div>
              </a>

              {/* Secondary: WhatsApp SOS with Pre-filled Payload */}
              <a
                href={`${CONTRACTOR_DATA.whatsappBaseUrl}?text=${encodeURIComponent(
                  t(
                    "Hello, I have an urgent water leak in Sharjah. Please send technician for non-destructive inspection (250 AED fee).",
                    "مرحباً، لدي تسريب مياه عاجل في الشارقة. أرجو إرسال فني للكشف بدون تكسير (رسوم الفحص 250 درهم)."
                  )
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-whatsapp-500 hover:bg-whatsapp-600 text-white font-extrabold text-base shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/35 hover:-translate-y-0.5 transition-all group text-center"
              >
                <div className="w-9 h-9 rounded-lg bg-emerald-700/40 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-5 h-5 fill-white" />
                </div>
                <div className="flex flex-col text-left rtl:text-right">
                  <span className="text-xs text-emerald-100 uppercase tracking-wider font-semibold">
                    {t("WhatsApp 1-Tap SOS", "واتساب طوارئ مباشر")}
                  </span>
                  <span className="text-base font-black">
                    {t("Chat With Engineer", "تحدث مع الفني فورا")}
                  </span>
                </div>
              </a>
            </div>

            {/* Reassurance Micro-Copy */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400 pt-1">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                {t("Starting from 250 AED", "الفحص يبدأ من 250 درهم")}
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                {t("12-Month Repair Guarantee", "ضمان 12 شهراً على الإصلاح")}
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                {t("All Sharjah Areas Covered", "تغطية شاملة لكافة مناطق الشارقة")}
              </span>
            </div>
          </div>

          {/* Right Column: Ultrasonic Diagnostic HUD Visualizer (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl bg-white dark:bg-hydro-850 border border-slate-200 dark:border-hydro-700 shadow-xl overflow-hidden p-5 transition-all">
              {/* HUD Header */}
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-hydro-700 pb-3.5 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-xs font-mono font-bold tracking-wider text-slate-800 dark:text-ultrasonic-300 uppercase">
                    {t("NDT SENSOR ARRAY: LIVE", "مستشعرات الفحص: نشطة الآن")}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-hydro-800 px-2 py-0.5 rounded">
                  <span>FREQ: 38.4 kHz</span>
                </div>
              </div>

              {/* HUD Mode Switcher */}
              <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-100 dark:bg-hydro-900 rounded-lg mb-4 text-xs font-semibold">
                <button
                  onClick={() => setActiveHudTab("acoustic")}
                  className={`py-1.5 px-2 rounded-md flex items-center justify-center gap-1 transition-all ${
                    activeHudTab === "acoustic"
                      ? "bg-white dark:bg-hydro-700 text-cyan-600 dark:text-ultrasonic-300 shadow-sm"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>{t("Acoustic", "صوتي")}</span>
                </button>

                <button
                  onClick={() => setActiveHudTab("thermal")}
                  className={`py-1.5 px-2 rounded-md flex items-center justify-center gap-1 transition-all ${
                    activeHudTab === "thermal"
                      ? "bg-white dark:bg-hydro-700 text-cyan-600 dark:text-ultrasonic-300 shadow-sm"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  <Flame className="w-3.5 h-3.5" />
                  <span>{t("FLIR Heat", "حراري")}</span>
                </button>

                <button
                  onClick={() => setActiveHudTab("pressure")}
                  className={`py-1.5 px-2 rounded-md flex items-center justify-center gap-1 transition-all ${
                    activeHudTab === "pressure"
                      ? "bg-white dark:bg-hydro-700 text-cyan-600 dark:text-ultrasonic-300 shadow-sm"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  <Activity className="w-3.5 h-3.5" />
                  <span>{t("Pressure", "الضغط")}</span>
                </button>
              </div>

              {/* Dynamic HUD Content Display */}
              {activeHudTab === "acoustic" && (
                <div className="space-y-4">
                  {/* Radar Wave Graphic */}
                  <div className="relative h-44 rounded-xl bg-hydro-950 flex items-center justify-center overflow-hidden border border-hydro-800">
                    <div className="absolute inset-0 diagnostic-grid opacity-30" />
                    
                    {/* Animated Pulsing Sonar Waves */}
                    <div className="absolute w-24 h-24 rounded-full border border-cyan-500/40 ultrasonic-wave-1 pointer-events-none" />
                    <div className="absolute w-24 h-24 rounded-full border border-cyan-400/30 ultrasonic-wave-2 pointer-events-none" />
                    <div className="absolute w-24 h-24 rounded-full border border-cyan-300/20 ultrasonic-wave-3 pointer-events-none" />
                    
                    {/* Central Target Point */}
                    <div className="relative z-10 flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-cyan-500/20 border-2 border-cyan-400 flex items-center justify-center text-cyan-300 animate-pulse">
                        <Radio className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono text-cyan-300 mt-1 bg-hydro-900/90 px-1.5 py-0.5 rounded border border-cyan-500/40">
                        {t("PINPOINT: 4.8 cm", "تحديد النقطة: 4.8 سم")}
                      </span>
                    </div>

                    {/* Coordinates Overlay */}
                    <div className="absolute bottom-2 left-2 text-[10px] font-mono text-slate-400">
                      X: 25.3056° | Y: 55.4389°
                    </div>
                    <div className="absolute top-2 right-2 text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {t("SIGNAL LOCK: 98.4%", "تطابق الإشارة: 98.4%")}
                    </div>
                  </div>

                  {/* Decibel & Sensitivity Readout */}
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2 rounded-lg bg-slate-50 dark:bg-hydro-800 border border-slate-200 dark:border-hydro-700">
                      <span className="text-slate-500 dark:text-slate-400 text-[11px] block">{t("Acoustic Decibels", "مستوى الصوت (ديسبل)")}</span>
                      <span className="text-slate-900 dark:text-white font-mono font-bold text-base">72.4 dB (Peak)</span>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-50 dark:bg-hydro-800 border border-slate-200 dark:border-hydro-700">
                      <span className="text-slate-500 dark:text-slate-400 text-[11px] block">{t("Concealment Depth", "عمق الأنبوب المخفي")}</span>
                      <span className="text-slate-900 dark:text-white font-mono font-bold text-base">35 cm Subfloor</span>
                    </div>
                  </div>
                </div>
              )}

              {activeHudTab === "thermal" && (
                <div className="space-y-4">
                  {/* Simulated Thermal Heatmap */}
                  <div className="relative h-44 rounded-xl bg-gradient-to-r from-blue-900 via-purple-800 to-amber-600 flex items-center justify-center overflow-hidden border border-slate-700">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_45%,rgba(249,115,22,0.85)_0%,rgba(147,51,234,0.6)_40%,transparent_70%)]" />
                    
                    <div className="relative z-10 text-center bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20">
                      <div className="text-amber-300 font-mono font-bold text-sm">
                        ΔT: +4.82 °C Delta
                      </div>
                      <div className="text-[10px] text-slate-300 font-mono">
                        {t("Thermal Gradient Moisture Pool Detected", "تم رصد تجمع حراري رطب خلف الجدار")}
                      </div>
                    </div>

                    <div className="absolute bottom-2 left-2 text-[10px] font-mono text-white/80">
                      FLIR T540 HD Matrix
                    </div>
                    <div className="absolute top-2 right-2 text-[10px] font-mono text-amber-300">
                      Spot: 29.4°C / Base: 24.6°C
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2 rounded-lg bg-slate-50 dark:bg-hydro-800 border border-slate-200 dark:border-hydro-700">
                      <span className="text-slate-500 dark:text-slate-400 text-[11px] block">{t("Moisture Spread", "انتشار الرطوبة")}</span>
                      <span className="text-slate-900 dark:text-white font-mono font-bold text-base">0.85 m² Gradient</span>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-50 dark:bg-hydro-800 border border-slate-200 dark:border-hydro-700">
                      <span className="text-slate-500 dark:text-slate-400 text-[11px] block">{t("Resolution", "دقة الحساس")}</span>
                      <span className="text-slate-900 dark:text-white font-mono font-bold text-base">464 × 348 True HD</span>
                    </div>
                  </div>
                </div>
              )}

              {activeHudTab === "pressure" && (
                <div className="space-y-4">
                  {/* Simulated Pressure Hold Readout */}
                  <div className="relative h-44 rounded-xl bg-hydro-950 flex flex-col items-center justify-center p-4 border border-hydro-800">
                    <div className="w-full flex items-center justify-between text-xs font-mono text-slate-400 mb-1">
                      <span>MAIN LINE TEST (5.0 BAR)</span>
                      <span className="text-orange-400 font-bold">DECAY: -0.85 BAR</span>
                    </div>
                    
                    {/* Simulated Bar Graph */}
                    <div className="w-full bg-hydro-800 h-4 rounded-full overflow-hidden mb-3">
                      <div className="bg-gradient-to-r from-emerald-500 to-orange-500 h-full w-[65%] rounded-full animate-pulse" />
                    </div>

                    <div className="text-center">
                      <span className="text-2xl font-black font-mono text-orange-400">
                        3.45 BAR
                      </span>
                      <span className="text-xs text-slate-400 block font-mono">
                        {t("Continuous drop without active tap usage", "انخفاض مستمر بدون تشغيل الحنفيات")}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2 rounded-lg bg-slate-50 dark:bg-hydro-800 border border-slate-200 dark:border-hydro-700">
                      <span className="text-slate-500 dark:text-slate-400 text-[11px] block">{t("Test Medium", "وسيط الفحص")}</span>
                      <span className="text-slate-900 dark:text-white font-mono font-bold text-base">Pure Nitrogen N₂</span>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-50 dark:bg-hydro-800 border border-slate-200 dark:border-hydro-700">
                      <span className="text-slate-500 dark:text-slate-400 text-[11px] block">{t("Leak Severity", "درجة التسريب")}</span>
                      <span className="text-orange-600 dark:text-orange-400 font-mono font-bold text-base">{t("High Flow Loss", "تدفق فاقد مرتفع")}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* HUD Footer Callout */}
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-hydro-700 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
                  <span>{t("Includes Stamped SEWA Report", "يشمل تقرير سيوا المعتمد")}</span>
                </div>
                <span className="font-extrabold text-cyan-600 dark:text-ultrasonic-400">
                  {t("From 250 AED", "فقط من 250 درهم")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
