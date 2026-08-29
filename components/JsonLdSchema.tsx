"use client";

import React from "react";
import { CONTRACTOR_DATA, SERVICES_DATA, SUBURBS_DATA } from "@/lib/contractor-data";

export function JsonLdSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Plumber", "EmergencyService"],
    "name": CONTRACTOR_DATA.businessNameEn,
    "alternateName": CONTRACTOR_DATA.businessNameAr,
    "image": "https://waterleakdetectionsharjah.ae/og-image.jpg",
    "@id": "https://waterleakdetectionsharjah.ae/#business",
    "url": "https://waterleakdetectionsharjah.ae",
    "telephone": CONTRACTOR_DATA.phoneRaw,
    "priceRange": "AED 250 - 1500",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Muwaileh Commercial Street, University City Road",
      "addressLocality": "Muwaileh Commercial, Sharjah",
      "addressRegion": "Sharjah",
      "postalCode": "00000",
      "addressCountry": "AE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": CONTRACTOR_DATA.baseCoordinate.lat,
      "longitude": CONTRACTOR_DATA.baseCoordinate.lng
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": CONTRACTOR_DATA.rating.toString(),
      "reviewCount": CONTRACTOR_DATA.reviewsCount.toString(),
      "bestRating": "5",
      "worstRating": "1"
    },
    "areaServed": SUBURBS_DATA.map((suburb) => ({
      "@type": "City",
      "name": `${suburb.nameEn}, Sharjah`
    })),
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Water Leak Detection & Non-Destructive Repair Services",
      "itemListElement": SERVICES_DATA.map((service, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.titleEn,
          "description": service.shortDescEn
        }
      }))
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
