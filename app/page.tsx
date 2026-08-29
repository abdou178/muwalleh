"use client";

import React from "react";
import { EmergencyTopBanner } from "@/components/EmergencyTopBanner";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { InteractiveLeakTriage } from "@/components/InteractiveLeakTriage";
import { EquipmentBadges } from "@/components/EquipmentBadges";
import { ServicesGrid } from "@/components/ServicesGrid";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { SuburbCoverage } from "@/components/SuburbCoverage";
import { TransparentPricing } from "@/components/TransparentPricing";
import { VerifiedReviews } from "@/components/VerifiedReviews";
import { StickyMobileDispatchDock } from "@/components/StickyMobileDispatchDock";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top 24/7 Live Emergency Bar */}
      <EmergencyTopBanner />

      {/* Main Navbar */}
      <Navbar />

      {/* Main Page Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section with Direct Response Copy & Ultrasonic HUD Card */}
        <HeroSection />

        {/* 2. Interactive Ultrasonic Leak Triage & 1-Tap WhatsApp SOS */}
        <InteractiveLeakTriage />

        {/* 3. Certified NDT Equipment & Micro-Sensors */}
        <EquipmentBadges />

        {/* 4. Core Non-Destructive Services & SEWA Report Specs */}
        <ServicesGrid />

        {/* 5. Why Choose Us: NDT Precision vs Traditional Demolition */}
        <WhyChooseUs />

        {/* 6. Sharjah Suburb Coverage & 25–35 Min Dispatch Times */}
        <SuburbCoverage />

        {/* 7. Transparent Pricing (From 250 AED) & SEWA Guarantee */}
        <TransparentPricing />

        {/* 8. Verified Customer Reviews & Comprehensive FAQ Accordion */}
        <VerifiedReviews />
      </main>

      {/* Corporate & Technical Footer */}
      <Footer />

      {/* Sticky Mobile Dispatch Dock (<1024px) */}
      <StickyMobileDispatchDock />
    </div>
  );
}
