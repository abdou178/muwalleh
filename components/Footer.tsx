"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageThemeContext";
import { CONTRACTOR_DATA, SUBURBS_DATA, SERVICES_DATA } from "@/lib/contractor-data";
import {
  Radio,
  ShieldCheck,
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  FileCheck2,
  CheckCircle2,
  Award,
} from "lucide-react";

export function Footer() {
  const { t, language } = useLanguage();

  return (
    <footer className="bg-hydro-950 text-slate-300 border-t border-hydro-800 pt-16 pb-28 lg:pb-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-hydro-800">
          {/* Col 1: Brand & Credentials (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-cyan-600 text-white">
                <Radio className="w-5 h-5 text-cyan-200" />
              </div>
              <span className="font-black text-lg text-white">
                {t(CONTRACTOR_DATA.businessNameEn, CONTRACTOR_DATA.businessNameAr)}
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              {t(
                "Sharjah's premier certified non-destructive water leak detection engineering service. Specializing in acoustic ground sensor pinpointing, FLIR radiometric thermal imaging, and official SEWA utility bill rebate certifications.",
                "المركز الهندسي المعتمد الأول لكشف تسربات المياه بدون تكسير بالشارقة. متخصصون في الكشف بالموجات الصوتية والكاميرات الحرارية وإصدار تقارير سيوا المعتمدة لتخفيض الفواتير."
              )}
            </p>

            <div className="p-3.5 rounded-xl bg-hydro-900 border border-hydro-800 space-y-1.5 text-xs">
              <div className="flex items-center gap-2 text-emerald-400 font-bold">
                <CheckCircle2 className="w-4 h-4" />
                <span>{t("SEWA Authorized Testing Partner", "معتمد لتقارير هيئة كهرباء ومياه الشارقة")}</span>
              </div>
              <p className="text-[11px] text-slate-400">
                {t(
                  "All inspection reports carry our official engineering stamp and certified technician signature for excess consumption claims.",
                  "جميع تقارير الفحص تصدر بختم هندسي رسمي وتوقيع فني معتمد لتقديمها لمراكز إسعاد المتعاملين."
                )}
              </p>
            </div>
          </div>

          {/* Col 2: Core Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-extrabold text-sm text-white uppercase tracking-wider">
              {t("Core Services", "خدماتنا المعتمدة")}
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES_DATA.map((srv) => (
                <li key={srv.id}>
                  <a
                    href="#services"
                    className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-cyan-500" />
                    <span>{t(srv.titleEn, srv.titleAr)}</span>
                  </a>
                </li>
              ))}
              <li>
                <a href="#pricing" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 font-bold text-cyan-400">
                  <span className="w-1 h-1 rounded-full bg-cyan-400" />
                  <span>{t("Diagnostic Scan (From 250 AED)", "فحص التسريب (من 250 درهم)")}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Service Suburbs (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-extrabold text-sm text-white uppercase tracking-wider">
              {t("Sharjah Suburbs", "مناطق الشارقة")}
            </h4>
            <ul className="space-y-1.5 text-xs">
              {SUBURBS_DATA.slice(0, 6).map((sub) => (
                <li key={sub.id}>
                  <a href="#coverage" className="hover:text-cyan-400 transition-colors">
                    {t(sub.nameEn, sub.nameAr)}
                  </a>
                </li>
              ))}
              <li>
                <a href="#coverage" className="text-cyan-400 font-bold hover:underline">
                  {t("+ All Other Zones", "+ كافة الضواحي")}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Dispatch (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-extrabold text-sm text-white uppercase tracking-wider">
              {t("Emergency Dispatch", "طوارئ الكشف الفوري")}
            </h4>

            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                <span>{t(CONTRACTOR_DATA.locationEn, CONTRACTOR_DATA.locationAr)}</span>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>{t(CONTRACTOR_DATA.operatingHoursEn, CONTRACTOR_DATA.operatingHoursAr)}</span>
              </div>

              <div className="pt-2">
                <a
                  href={CONTRACTOR_DATA.phoneDial}
                  className="flex items-center gap-2 font-black text-sm text-orange-400 hover:text-orange-300"
                >
                  <Phone className="w-4 h-4" />
                  <span dir="ltr">{CONTRACTOR_DATA.phoneDisplay}</span>
                </a>
              </div>

              <div>
                <a
                  href={`${CONTRACTOR_DATA.whatsappBaseUrl}?text=${encodeURIComponent(
                    language === "ar"
                      ? "مرحباً، أود طلب فحص تسريب مياه بالشارقة."
                      : "Hello, I would like to book a leak inspection in Sharjah."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-bold text-xs text-whatsapp-500 hover:text-whatsapp-400"
                >
                  <MessageSquare className="w-4 h-4 fill-whatsapp-500" />
                  <span>{t("WhatsApp 24/7 Support", "دعم الواتساب 24/7")}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {t(CONTRACTOR_DATA.businessNameEn, CONTRACTOR_DATA.businessNameAr)}. {t("All rights reserved.", "جميع الحقوق محفوظة.")}
          </div>
          <div className="flex items-center gap-4">
            <span>{t("Muwaileh Commercial, Sharjah, UAE", "تجارية مويلح، الشارقة، الإمارات")}</span>
            <span>•</span>
            <span className="text-cyan-400">{t("ISO Certified NDT Standards", "معايير الفحص الهندسي")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
