"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageThemeContext";
import { EQUIPMENT_DATA } from "@/lib/contractor-data";
import {
  Camera,
  Activity,
  Gauge,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  Radio,
  Sparkles,
} from "lucide-react";

export function EquipmentBadges() {
  const { t } = useLanguage();

  const getEquipmentIcon = (iconName: string) => {
    switch (iconName) {
      case "Camera":
        return <Camera className="w-6 h-6 text-cyan-500" />;
      case "Activity":
        return <Activity className="w-6 h-6 text-emerald-500" />;
      case "Gauge":
        return <Gauge className="w-6 h-6 text-orange-500" />;
      case "Cpu":
        return <Cpu className="w-6 h-6 text-blue-500" />;
      default:
        return <Radio className="w-6 h-6 text-cyan-500" />;
    }
  };

  return (
    <section
      id="equipment"
      className="py-16 md:py-24 bg-slate-50 dark:bg-hydro-900 border-b border-slate-200 dark:border-hydro-800 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-100 dark:bg-hydro-800 border border-cyan-300 dark:border-cyan-700 text-cyan-800 dark:text-ultrasonic-300 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{t("Certified Non-Destructive Testing (NDT)", "أجهزة الفحص الهندسي غير الإتلافي")}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t(
              "Military & Industrial-Grade Ultrasonic Leak Diagnostics",
              "أحدث التقنيات الألمانية والأمريكية للكشف الدقيق بدون تكسير"
            )}
          </h2>

          <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
            {t(
              "We invest in precision FLIR infrared thermography, acoustic frequency correlators, and barometric nitrogen rigs so you never suffer unnecessary tile demolition.",
              "نعتمد على أدق منظومات الاستشعار الصوتي والحراري لرصد الترددات الخفية لكسور الأنابيب دون المساس بالديكورات والأرضيات."
            )}
          </p>
        </div>

        {/* Equipment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {EQUIPMENT_DATA.map((equip) => (
            <div
              key={equip.id}
              className="rounded-2xl bg-white dark:bg-hydro-850 border border-slate-200 dark:border-hydro-700 p-6 shadow-sm hover:shadow-md hover:border-cyan-400 dark:hover:border-cyan-500/50 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Badge & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-slate-100 dark:bg-hydro-800 group-hover:scale-110 transition-transform">
                    {getEquipmentIcon(equip.iconName)}
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-cyan-50 dark:bg-hydro-800 text-cyan-700 dark:text-ultrasonic-300 border border-cyan-200 dark:border-hydro-700">
                    {t(equip.badgeEn, equip.badgeAr)}
                  </span>
                </div>

                {/* Name & Model */}
                <h3 className="font-extrabold text-base text-slate-900 dark:text-white mb-1 leading-snug">
                  {t(equip.nameEn, equip.nameAr)}
                </h3>
                <span className="text-xs font-mono text-cyan-600 dark:text-ultrasonic-400 block mb-3">
                  {equip.model}
                </span>

                {/* Description */}
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {t(equip.descEn, equip.descAr)}
                </p>
              </div>

              {/* Accuracy Tolerance Footer */}
              <div className="pt-3 border-t border-slate-100 dark:border-hydro-750 flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                <span className="truncate">{t(equip.accuracyEn, equip.accuracyAr)}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Diagnostic Quality Seal */}
        <div className="mt-10 p-5 rounded-2xl bg-gradient-to-r from-cyan-900 to-hydro-950 text-white border border-cyan-500/30 flex flex-col md:flex-row items-center justify-between gap-4 shadow-lg">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-400 flex items-center justify-center text-cyan-300 flex-shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-extrabold text-base text-white">
                {t("100% Zero-Tile-Breakage Pinpointing Guarantee", "ضمان 100% لتحديد مكان التسريب بدون تكسير")}
              </h4>
              <p className="text-xs text-slate-300 mt-0.5">
                {t(
                  "If our NDT acoustic or thermal sensors fail to locate the exact leak spot, you do not pay the inspection fee.",
                  "إذا لم تحدد أجهزتنا موقع التسريب بدقة تامة، فلن تتحمل أي رسوم فحص نهائياً."
                )}
              </p>
            </div>
          </div>

          <a
            href="#pricing"
            className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider whitespace-nowrap shadow-sm hover:shadow transition-all"
          >
            {t("View Inspection Fee (250 AED)", "تفاصيل رسوم الفحص (250 د.إ)")}
          </a>
        </div>
      </div>
    </section>
  );
}
