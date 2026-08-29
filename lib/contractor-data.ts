export interface ISymptom {
  id: string;
  nameEn: string;
  nameAr: string;
  urgencyEn: string;
  urgencyAr: string;
  severity: "critical" | "high" | "medium";
  diagnosticEn: string;
  diagnosticAr: string;
  recommendedTestEn: string;
  recommendedTestAr: string;
  iconName: string;
}

export interface IService {
  id: string;
  titleEn: string;
  titleAr: string;
  shortDescEn: string;
  shortDescAr: string;
  scopeEn: string;
  scopeAr: string;
  featuresEn: string[];
  featuresAr: string[];
  equipmentEn: string;
  equipmentAr: string;
  turnaroundEn: string;
  turnaroundAr: string;
  sewaCompliant: boolean;
  iconName: string;
}

export interface IEquipment {
  id: string;
  nameEn: string;
  nameAr: string;
  model: string;
  accuracyEn: string;
  accuracyAr: string;
  descEn: string;
  descAr: string;
  badgeEn: string;
  badgeAr: string;
  iconName: string;
}

export interface IReview {
  id: string;
  authorEn: string;
  authorAr: string;
  locationEn: string;
  locationAr: string;
  propertyTypeEn: string;
  propertyTypeAr: string;
  rating: number;
  dateEn: string;
  dateAr: string;
  commentEn: string;
  commentAr: string;
  savingsEn: string;
  savingsAr: string;
  verified: boolean;
}

export interface IPricingTier {
  id: string;
  titleEn: string;
  titleAr: string;
  priceEn: string;
  priceAr: string;
  periodEn: string;
  periodAr: string;
  popular?: boolean;
  descEn: string;
  descAr: string;
  featuresEn: string[];
  featuresAr: string[];
  ctaEn: string;
  ctaAr: string;
  badgeEn?: string;
  badgeAr?: string;
}

export interface ISuburb {
  id: string;
  nameEn: string;
  nameAr: string;
  zoneEn: string;
  zoneAr: string;
  etaEn: string;
  etaAr: string;
  popular: boolean;
}

export interface IFaqItem {
  id: string;
  questionEn: string;
  questionAr: string;
  answerEn: string;
  answerAr: string;
}

export const CONTRACTOR_DATA = {
  businessNameEn: "Certified Water Leak Detection Sharjah",
  businessNameAr: "المركز المعتمد لكشف تسربات المياه بالشارقة",
  taglineEn: "Precision Non-Destructive Ultrasonic Leak Pinpointing & SEWA Bill Rebate Certification",
  taglineAr: "كشف تسربات المياه بدون تكسير بأحدث الأجهزة الصوتية والحرارية مع تقرير سيوا المعتمد",
  phoneDisplay: "+971 54 996 3667",
  phoneRaw: "+971549963667",
  phoneDial: "tel:+971549963667",
  whatsappNumber: "971549963667",
  whatsappBaseUrl: "https://wa.me/971549963667",
  locationEn: "Muwaileh Commercial, Sharjah, United Arab Emirates",
  locationAr: "تجارية مويلح، الشارقة، الإمارات العربية المتحدة",
  baseCoordinate: {
    lat: 25.3056,
    lng: 55.4389,
  },
  rating: 4.9,
  reviewsCount: 64,
  avgArrivalTimeEn: "25–35 Minutes across Sharjah",
  avgArrivalTimeAr: "وصول خلال 25–35 دقيقة في جميع مناطق الشارقة",
  startingPriceAED: 250,
  currency: "AED",
  currencyAr: "درهم",
  operatingHoursEn: "24/7 Emergency Dispatch (All Days)",
  operatingHoursAr: "طوارئ على مدار 24 ساعة (طوال أيام الأسبوع)",
  inspectionGuaranteeEn: "Zero-Tile-Breakage Pinpointing Guarantee",
  inspectionGuaranteeAr: "ضمان دقة تحديد مكان التسريب بدون أي تكسير عشوائي",
};

export const SUBURBS_DATA: ISuburb[] = [
  {
    id: "muwaileh-commercial",
    nameEn: "Muwaileh Commercial",
    nameAr: "تجارية مويلح",
    zoneEn: "Headquarters & Rapid Response Hub",
    zoneAr: "المقر الرئيسي ومركز الاستجابة الفورية",
    etaEn: "15–20 Mins",
    etaAr: "15–20 دقيقة",
    popular: true,
  },
  {
    id: "al-zahia",
    nameEn: "Al Zahia",
    nameAr: "الزاهية",
    zoneEn: "Gated Luxury Villas & Townhouses",
    zoneAr: "الفلل الفاخرة والتاون هاوس",
    etaEn: "20–25 Mins",
    etaAr: "20–25 دقيقة",
    popular: true,
  },
  {
    id: "al-juraina",
    nameEn: "Al Juraina",
    nameAr: "الجرينة",
    zoneEn: "Villas & Residential Complexes",
    zoneAr: "الفلل والمجمعات السكنية",
    etaEn: "20–30 Mins",
    etaAr: "20–30 دقيقة",
    popular: true,
  },
  {
    id: "al-nouf",
    nameEn: "Al Nouf",
    nameAr: "النوف",
    zoneEn: "Residential Villa Communities",
    zoneAr: "مجتمعات الفلل السكنية",
    etaEn: "25–30 Mins",
    etaAr: "25–30 دقيقة",
    popular: true,
  },
  {
    id: "university-city",
    nameEn: "University City",
    nameAr: "المدينة الجامعية",
    zoneEn: "Educational & Staff Residences",
    zoneAr: "المنشآت الأكاديمية وسكن أعضاء التدريس",
    etaEn: "20–25 Mins",
    etaAr: "20–25 دقيقة",
    popular: false,
  },
  {
    id: "al-rahmaniya",
    nameEn: "Al Rahmaniya",
    nameAr: "الرحمانية",
    zoneEn: "Private Villa Enclaves (1 to 10)",
    zoneAr: "مجتمعات الفلل الخاصة (من 1 إلى 10)",
    etaEn: "25–35 Mins",
    etaAr: "25–35 دقيقة",
    popular: true,
  },
  {
    id: "al-suyoh",
    nameEn: "Al Suyoh",
    nameAr: "السيوح",
    zoneEn: "Modern Villa Suburbs (1 to 16)",
    zoneAr: "ضواحي الفلل الحديثة (من 1 إلى 16)",
    etaEn: "30–35 Mins",
    etaAr: "30–35 دقيقة",
    popular: true,
  },
  {
    id: "al-majaz",
    nameEn: "Al Majaz",
    nameAr: "المجاز",
    zoneEn: "Corniche Towers & High-Rise Apartments",
    zoneAr: "أبراج الكورنيش والشقق السكنية",
    etaEn: "25–35 Mins",
    etaAr: "25–35 دقيقة",
    popular: false,
  },
  {
    id: "al-qasimia",
    nameEn: "Al Qasimia",
    nameAr: "القاسمية",
    zoneEn: "Commercial & Residential Buildings",
    zoneAr: "المباني السكنية والتجارية",
    etaEn: "25–30 Mins",
    etaAr: "25–30 دقيقة",
    popular: false,
  },
  {
    id: "al-taawun",
    nameEn: "Al Taawun",
    nameAr: "التعاون",
    zoneEn: "High-Density Residential Hub",
    zoneAr: "الأبراج السكنية الكبرى",
    etaEn: "25–35 Mins",
    etaAr: "25–35 دقيقة",
    popular: false,
  },
];

export const SYMPTOMS_DATA: ISymptom[] = [
  {
    id: "high-sewa-bill",
    nameEn: "Abnormal SEWA Water Bill Spike",
    nameAr: "ارتفاع مفاجئ وغير طبيعي في فاتورة مياه سيوا (SEWA)",
    urgencyEn: "High Priority / Financial Loss",
    urgencyAr: "أولوية قصوى / خسارة مالية متواصلة",
    severity: "critical",
    diagnosticEn: "Continuous underground main line leakage or concealed tank float valve bypass wasting hundreds of gallons daily.",
    diagnosticAr: "تسريب مستمر في الخط الرئيسي المدفون تحت الأرض أو خلل في عوامة الخزان الأرضي مما يسبب هدراً بمئات الجالونات يومياً.",
    recommendedTestEn: "Acoustic Ground Microphone + Nitrogen Pressure Decay Test + SEWA Rebate Audit",
    recommendedTestAr: "فحص بالميكروفون الأرضي الصوتي + اختبار ضغط النيتروجين + تقرير رسمي لهيئة سيوا",
    iconName: "TrendingUp",
  },
  {
    id: "wall-dampness-peeling",
    nameEn: "Ceiling / Wall Moisture & Paint Peeling",
    nameAr: "رطوبة، تنشيع، وتقشير دهان الجدران والأسقف",
    urgencyEn: "High Urgency / Structural Risk",
    urgencyAr: "عاجل / خطر تآكل الخرسانة وتشوه الدهانات",
    severity: "high",
    diagnosticEn: "Concealed internal supply pipe fracture behind bathroom tiles or upper floor drainage pipe tracking inside concrete slab.",
    diagnosticAr: "كسر في شبكة التغذية المدفونة خلف السيراميك أو تسريب في مواسير الصرف بالأدوار العلوية يمتصها الجدار.",
    recommendedTestEn: "FLIR Thermal Infrared Moisture Mapping + Endoscopic Micro-Camera Scan",
    recommendedTestAr: "مسح حراري شامل بكاميرا FLIR بالأشعة تحت الحمراء + منظار داخلي دقيق",
    iconName: "Droplets",
  },
  {
    id: "pump-continuous-running",
    nameEn: "Continuous Water Pump Running / Hissing Noise",
    nameAr: "المضخة تعمل باستمرار بدون توقف / صوت فحيح مياه بالجدران",
    urgencyEn: "Critical Emergency / Motor Burn Risk",
    urgencyAr: "طوارئ حرجة / خطر احتراق دينامو المضخة",
    severity: "critical",
    diagnosticEn: "Severe pressure drop in concealed pressurized lines causing automatic booster pump to cycle 24/7 without tap usage.",
    diagnosticAr: "انخفاض مستمر في ضغط شبكة المياه المضغوطة يجبر المضخة على العمل المتواصل حتى بدون فتح الحنفيات.",
    recommendedTestEn: "Digital Ultrasonic Acoustic Correlator + Pressure Hold Diagnostic",
    recommendedTestAr: "تحليل صوتي بالموجات الصوتية الدقيقة + اختبار احتفاظ الضغط الرقمي",
    iconName: "Volume2",
  },
  {
    id: "floor-grout-seepage",
    nameEn: "Bathroom / Villa Floor Grout Seepage",
    nameAr: "تسريب مياه بين فواصل البلاط وسيراميك الحمامات",
    urgencyEn: "Medium-High Urgency / Subfloor Decay",
    urgencyAr: "متوسطة إلى عالية / تلف العازل والخرسانة",
    severity: "medium",
    diagnosticEn: "Failed waterproofing membrane, floor drain trap leakage, or micro-pinhole pressurized pipe leak under floor screed.",
    diagnosticAr: "تلف في طبقة العزل المائي، أو تسريب في سيفون الأرضية (الصفاية) أو كسر دقيق تحت أرضية الحمام.",
    recommendedTestEn: "Thermal Gradient Scan + Sub-Surface Moisture Meter + Pressure Isolation",
    recommendedTestAr: "فحص التدرج الحراري + مقياس رطوبة السيراميك + عزل واختبار خطوط التغذية",
    iconName: "Layers",
  },
  {
    id: "underground-main-fracture",
    nameEn: "Underground Main Supply Line Fracture",
    nameAr: "كسر أو تسريب في الخط الرئيسي المدفون تحت الحوش",
    urgencyEn: "Emergency Make-Safe / Yard Flooding",
    urgencyAr: "طوارئ قصوى / غمر التربة تحت البلاط والحوش",
    severity: "critical",
    diagnosticEn: "Soil subsidence, thermal ground shifting, or aged PPR/copper joint rupture leaking thousands of litres under driveway.",
    diagnosticAr: "هبوط في التربة أو تمدد حراري أدى لكسر مواسير التغذية الرئيسية المدفونة تحت إنترلوك الحوش ومواقف السيارات.",
    recommendedTestEn: "High-Sensitivity Electro-Acoustic Ground Sensor + Pipe Tracing Signal Frequency",
    recommendedTestAr: "مستشعرات أرضية فائقة الحساسية + جهاز تتبع مسار المواسير المدفونة بتردد الراديو",
    iconName: "AlertTriangle",
  },
];

export const PROPERTY_TYPES = [
  { id: "villa", nameEn: "Villa / Townhouse", nameAr: "فيلا / تاون هاوس" },
  { id: "apartment", nameEn: "Apartment / High-Rise", nameAr: "شقة سكنية / برج" },
  { id: "commercial", nameEn: "Commercial / Office / Warehouse", nameAr: "عقار تجاري / مكتب / مستودع" },
  { id: "building", nameEn: "Full Residential Building", nameAr: "بناية سكنية بالكامل" },
];

export const SERVICES_DATA: IService[] = [
  {
    id: "acoustic-pinpointing",
    titleEn: "Acoustic Ultrasonic Leak Pinpointing (Zero Breakage)",
    titleAr: "كشف تسربات المياه بالموجات الصوتية بدون تكسير",
    shortDescEn: "Micro-fissure acoustic pinpointing within 5cm accuracy using German ultrasonic sensors.",
    shortDescAr: "تحديد مكان الكسر والتسريب بدقة تصل إلى 5 سنتيمترات باستخدام مستشعرات صوتية متطورة.",
    scopeEn: "Ground microphones and electro-acoustic correlators detect concealed water turbulence frequencies behind walls and under reinforced concrete.",
    scopeAr: "ميكروفونات أرضية ومجسات كهرصوتية تلتقط الترددات والاهتزازات الصوتية للمياه المتدفقة تحت الخرسانة والبلاط دون لمس السيراميك.",
    featuresEn: [
      "Zero destruction: No exploratory drilling or broken tiles",
      "5cm pinpoint accuracy behind tiles, concrete & interlock",
      "Digital decibel readout & waveform frequency logs",
      "Suitable for pressurized cold & hot water networks",
    ],
    featuresAr: [
      "بدون أي تكسير عشوائي للبلاط أو السيراميك أو الإنترلوك",
      "دقة متناهية تصل إلى 5 سم خلف الجدران وتحت الأرضيات",
      "قراءات ديسبل ورسم بياني لتردد تسرب المياه",
      "مناسب لشبكات المياه الباردة والحارة المضغوطة",
    ],
    equipmentEn: "Electro-Acoustic Ground Geophones & Ultrasonic Sound Correlators",
    equipmentAr: "مجسات أرضية كهرصوتية وأجهزة كشف الترددات بالموجات فوق الصوتية",
    turnaroundEn: "30–45 Minutes On-Site",
    turnaroundAr: "30–45 دقيقة في الموقع",
    sewaCompliant: true,
    iconName: "Radio",
  },
  {
    id: "flir-thermal-imaging",
    titleEn: "FLIR Thermal Infrared Pipe & Moisture Mapping",
    titleAr: "الفحص بالكاميرات الحرارية بالأشعة تحت الحمراء (FLIR)",
    shortDescEn: "Non-invasive thermal gradient inspection revealing hidden hot & cold water tracking inside structures.",
    shortDescAr: "فحص حراري دقيق يكشف مسارات تسرب المياه المخفية وفروقات درجات الحرارة داخل الخرسانة.",
    scopeEn: "High-definition infrared sensors map moisture pools, hidden pipe routes, and temperature anomalies with 0.03°C thermal sensitivity.",
    scopeAr: "كاميرات حرارية فائقة الدقة ترسم خريطة الرطوبة وتحدد مسار الأنابيب المدفونة وتكشف التجمعات المائية بدقة 0.03 درجة مئوية.",
    featuresEn: [
      "High-definition FLIR radiometric thermal imaging",
      "Identifies invisible damp pockets before mold develops",
      "Tracks embedded ceiling and bathroom drainage leaks",
      "Comprehensive colorimetric heat-map report included",
    ],
    featuresAr: [
      "كاميرات FLIR الحرارية المعتمدة عالمياً بأعلى دقة إشعاعية",
      "كشف بؤر الرطوبة غير المرئية بالعين قبل ظهور العفن والأملاح",
      "تتبع تسريبات صرف الحمامات والأسقف المعلقة بدقة متناهية",
      "تقرير حراري ملون يوضح الفروقات الحرارية ونقاط الخلل",
    ],
    equipmentEn: "FLIR T540 Professional Infrared Diagnostic Thermal Imagers",
    equipmentAr: "كاميرات FLIR T540 الحرارية الاحترافية الهندسية",
    turnaroundEn: "20–30 Minutes Scan",
    turnaroundAr: "20–30 دقيقة للمسح الشامل",
    sewaCompliant: true,
    iconName: "Flame",
  },
  {
    id: "precision-spot-repair",
    titleEn: "Immediate Spot Repair & Pipe Splicing",
    titleAr: "إصلاح فوري موضعي للأنبوب التالف وتبديل القطع المتضررة",
    shortDescEn: "Centimeter-targeted single tile removal, certified PPR/PEX heat-fusion welding, and make-safe pressure test.",
    shortDescAr: "إزالة دقيقة لبلاطة واحدة فقط، ولحام حراري معتمد لمواسير PPR/PEX مع اختبار ضغط فوري.",
    scopeEn: "Surgical repair restricted strictly to the pinpointed leak point, eliminating widespread damage, followed by hydrostatic pressure testing.",
    scopeAr: "إصلاح دقيق مقتصر فقط على السنتيمتر المتضرر دون المساس بباقي الغرفة أو الحمام، مع لحام حراري ألماني واختبار الهيدروستاتيك.",
    featuresEn: [
      "Surgical opening limited to single tile area",
      "Certified PPR heat-fusion & multilayer PEX jointing",
      "Post-repair hydrostatic pressure hold verification",
      "12-Month written warranty on repair integrity",
    ],
    featuresAr: [
      "فتح موضعي دقيق جداً لا يتعدى مساحة بلاطة واحدة",
      "لحام حراري بمكائن معتمدة وقطع أصلية عالية الجودة",
      "اختبار هيدروليكي للتأكد من ثبات الضغط بعد الصيانة",
      "ضمان خطي لمدة 12 شهراً على أعمال الإصلاح",
    ],
    equipmentEn: "PPR Heat-Fusion Welders, Hydrostatic Pressure Test Pumps & Heavy-Duty Splicers",
    equipmentAr: "مكائن لحام حراري، مضخات اختبار هيدروستاتيكي رقمية",
    turnaroundEn: "1–2 Hours Same-Day",
    turnaroundAr: "1–2 ساعة في نفس اليوم",
    sewaCompliant: true,
    iconName: "Wrench",
  },
  {
    id: "sewa-bill-rebate-report",
    titleEn: "Official SEWA Utility Bill Rebate Report Certification",
    titleAr: "إصدار تقرير كشف معتمد لتقديمه لهيئة سيوا (SEWA)",
    shortDescEn: "Official stamped technical report detailing found leak coordinates and repair sign-off for excessive bill adjustments.",
    shortDescAr: "تقرير فني هندسي مختوم وموثق يثبت واقعة التسرب وإصلاحها لتقديمه إلى سيوا لطلب تخفيض الفاتورة.",
    scopeEn: "Comprehensive certified engineering documentation accepted by SEWA customer happiness centres to claim excess water consumption rebates.",
    scopeAr: "ملف هندسي متكامل معتمد يشتمل على الصور الحرارية وقراءات العداد والبيانات الفنية لتقديمه لمراكز خدمة سيوا بالشارقة.",
    featuresEn: [
      "Official company engineering stamp and technician signature",
      "Before and after FLIR radiometric thermal images",
      "Meter index readings and consumption timeline data",
      "High acceptance rate for excess consumption refund claims",
    ],
    featuresAr: [
      "ختم رسمي وتوقيع مهندس فحص معتمد",
      "صور حرارية وفوتوغرافية توثق حالة الأنبوب قبل وبعد الإصلاح",
      "تسجيل أرقام وقراءات عداد المياه ومعدلات الفاقد",
      "معتمد لدى مراكز إسعاد المتعاملين في هيئة كهرباء ومياه الشارقة",
    ],
    equipmentEn: "Digital Pressure Logging Software & Official Certification Template",
    equipmentAr: "نظام التوثيق والتقارير الهندسية الرقمية المعتمدة",
    turnaroundEn: "Immediate Digital Delivery (PDF)",
    turnaroundAr: "تسليم فوري بصيغة PDF عبر الواتساب والإيميل",
    sewaCompliant: true,
    iconName: "FileCheck2",
  },
];

export const EQUIPMENT_DATA: IEquipment[] = [
  {
    id: "flir-infrared",
    nameEn: "FLIR HD Radiometric Thermal Camera",
    nameAr: "كاميرا FLIR الحرارية عالية الدقة",
    model: "FLIR T540 Series (0.03°C Sensitivity)",
    accuracyEn: "±0.03°C Thermal Delta Accuracy",
    accuracyAr: "دقة استشعار حراري ±0.03 درجة مئوية",
    descEn: "Detects minute temperature gradients caused by hidden pipe leaks behind thick structural walls, plaster, and floor tiles.",
    descAr: "تكشف أدق الفروقات الحرارية الناتجة عن تسرب المياه الباردة والحارة خلف الخرسانة والجبس والبلاط بدون تكسير.",
    badgeEn: "Zero Destruction",
    badgeAr: "بدون تكسير نهائياً",
    iconName: "Camera",
  },
  {
    id: "acoustic-sensor",
    nameEn: "Digital Electro-Acoustic Ground Microphone",
    nameAr: "الميكروفون الأرضي الكهرصوتي الرقمي",
    model: "Sewerin / Fast SeCorr Pro Grade",
    accuracyEn: "Pinpoint within 5 cm Radius",
    accuracyAr: "تحديد نقطي ضمن دائرة 5 سم",
    descEn: "Amplifies pressurized water escaping from fractured joints, filtering background environmental noise in busy Sharjah residential areas.",
    descAr: "يعزل الضوضاء الخارجية ويضخم التردد الصوتي لاندفاع المياه من الشقوق الدقيقة تحت الإنترلوك وأرضيات الفلل.",
    badgeEn: "5cm Pinpoint",
    badgeAr: "دقة 5 سم",
    iconName: "Activity",
  },
  {
    id: "nitrogen-pressure",
    nameEn: "Nitrogen / Formier Gas Pressure Decay Tester",
    nameAr: "جهاز اختبار ضغط غاز النيتروجين الآمن",
    model: "Digital Barometric Pressure Decay Rig",
    accuracyEn: "Detects 0.05 Bar Loss in 10 Mins",
    accuracyAr: "كشف انخفاض الضغط حتى 0.05 بار",
    descEn: "Pressurizes closed plumbing loops with harmless inert gas to locate microscopic pinholes that standard water pressure cannot register.",
    descAr: "حقن شبكة المياه بغاز خامل آمن بيئياً لاكتشاف أدق الثقوب الميكروسكوبية التي يصعب رصدها بضغط الماء العادي.",
    badgeEn: "Micro-Pinhole Detection",
    badgeAr: "كشف الثقوب المجهرية",
    iconName: "Gauge",
  },
  {
    id: "moisture-probe",
    nameEn: "Sub-Surface Digital Impedance Moisture Probes",
    nameAr: "مجسات قياس الرطوبة الرقمية العميقة",
    model: "Tramex Moisture Encounter Plus",
    accuracyEn: "Up to 100mm Depth Profiling",
    accuracyAr: "قياس عمق الرطوبة حتى 100 ملم",
    descEn: "Non-destructive deep moisture measurement across drywall, plaster, concrete screed, and bathroom tile grout.",
    descAr: "قياس نسب تشبع الجدران والأسقف والأرضيات بالرطوبة دون إتلاف الدهانات أو ثقب الأسطح.",
    badgeEn: "Deep Profiling",
    badgeAr: "قياس عميق للرطوبة",
    iconName: "Cpu",
  },
];

export const PRICING_DATA: IPricingTier[] = [
  {
    id: "standard-scan",
    titleEn: "Diagnostic & Pinpoint Scan",
    titleAr: "فحص وتحديد التسريب (كشف شامل)",
    priceEn: "AED 250",
    priceAr: "250 درهم",
    periodEn: "Per residential zone / villa inspection",
    periodAr: "لكل فحص فيلا أو منطقة سكنية",
    popular: true,
    badgeEn: "Most Requested",
    badgeAr: "الأكثر طلباً",
    descEn: "Complete non-destructive acoustic and thermal diagnostic scan to pinpoint concealed leaks with centimeter precision.",
    descAr: "فحص شامل بدون أي تكسير باستخدام أحدث الأجهزة الصوتية والحرارية لتحديد مكان الكسر بدقة تامة.",
    featuresEn: [
      "FLIR Thermal Infrared pipe & wall scan",
      "Ultrasonic acoustic listening sensor pinpointing",
      "Complete main line & booster pressure decay check",
      "Official stamped SEWA rebate inspection certificate",
      "Zero-breakage guarantee (No tile damage during scan)",
      "Instant on-site repair cost estimate",
    ],
    featuresAr: [
      "مسح حراري شامل بكاميرا FLIR للأشعة تحت الحمراء",
      "فحص بالموجات الصوتية والميكروفون الأرضي فائق الحساسية",
      "اختبار ضغط شبكة المياه والمضخة بالكامل",
      "تقرير فني هندسي معتمد لتقديمه لهيئة سيوا (SEWA)",
      "ضمان عدم التكسير بنسبة 100% أثناء عملية الفحص",
      "عرض سعر فوري وشفاف لأعمال الإصلاح الموضعي",
    ],
    ctaEn: "Book Diagnostic Scan (250 AED)",
    ctaAr: "احجز فحص التسريب (250 درهم)",
  },
  {
    id: "spot-repair-package",
    titleEn: "Surgical Spot Repair & Splicing",
    titleAr: "إصلاح فوري موضعي وتبديل الأنبوب",
    priceEn: "Custom Quote",
    priceAr: "تسعير مخصص",
    periodEn: "Based on pipe material & depth (Transparent)",
    periodAr: "حسب نوع الأنبوب والعمق (بشفافية تامة)",
    popular: false,
    badgeEn: "Same-Day Fix",
    badgeAr: "إصلاح بنفس اليوم",
    descEn: "Centimeter-targeted single tile removal, certified PPR/PEX heat fusion welding, and make-safe pressure test.",
    descAr: "فتح جراحي دقيق على قياس بلاطة واحدة فقط مع لحام حراري أصلي معتمد واختبار الضغط.",
    featuresEn: [
      "Targeted surgical access strictly at pinpointed spot",
      "High-grade German PPR / PEX heat-fusion welding",
      "Sub-floor pipe fitting replacement & insulation",
      "Post-repair hydrostatic pressure hold test",
      "12-Month written guarantee on repair joint",
      "Full photographic proof before & after fix",
    ],
    featuresAr: [
      "فتح موضعي محدد بدقة عند نقطة الكسر فقط",
      "لحام حراري بأحدث ماكينات PPR وقطع أصلية معتمدة",
      "عزل الأنبوب وتثبيته ضد الهبوط والتمدد الحراري",
      "اختبار ضغط مائي للتأكد من انعدام أي تسريب جديد",
      "ضمان خطي لمدة 12 شهراً على جودة اللحام والإصلاح",
      "توثيق بالصور قبل وبعد الإصلاح لملف سيوا",
    ],
    ctaEn: "Request Spot Repair",
    ctaAr: "طلب إصلاح فوري",
  },
  {
    id: "villa-master-survey",
    titleEn: "Master Villa Network Survey",
    titleAr: "المسح الشامل لشبكة الفيلا بالكامل",
    priceEn: "AED 450",
    priceAr: "450 درهم",
    periodEn: "Full estate: Yard, tanks, pumps, interior",
    periodAr: "شامل الحوش، الخزانات، المضخات، وشبكة الفيلا كاملة",
    popular: false,
    badgeEn: "Complete Peace of Mind",
    badgeAr: "فحص شامل متكامل",
    descEn: "Exhaustive diagnostic audit for large villas, multiple bathrooms, swimming pool lines, and underground yard pipelines.",
    descAr: "كشف متقدم للفلل الكبيرة والمجمعات يشمل شبكة الحوش المدفونة، الخزانات العلوية والأرضية، وخطوط المسابح.",
    featuresEn: [
      "Full underground yard perimeter acoustic scan",
      "Both underground and roof water tank float audits",
      "All internal bathrooms & kitchen supply lines",
      "High-precision nitrogen pressure hold test",
      "Comprehensive multi-page SEWA rebate dossier",
      "Priority same-day dispatch & repair allocation",
    ],
    featuresAr: [
      "مسح صوتي شامل لشبكة الحوش والإنترلوك المحيطة بالفيلا",
      "فحص عوامات وعوازل الخزانات الأرضية والعلوية",
      "فحص جميع حمامات ومطابخ الفيلا بالكامل",
      "اختبار الضغط بغاز النيتروجين للخطوط المعقدة",
      "ملف تقرير سيوا مفصل متعدد الصفحات معتمد",
      "أولوية قصوى للحضور والبدء في الصيانة فوراً",
    ],
    ctaEn: "Book Master Villa Survey",
    ctaAr: "احجز المسح الشامل للفيلا",
  },
];

export const REVIEWS_DATA: IReview[] = [
  {
    id: "rev-1",
    authorEn: "Tariq Al-Mansouri",
    authorAr: "طارق المنصوري",
    locationEn: "Al Zahia, Sharjah (Villa 14)",
    locationAr: "الزاهية، الشارقة (فيلا 14)",
    propertyTypeEn: "5-Bedroom Villa",
    propertyTypeAr: "فيلا 5 غرف نوم",
    rating: 5,
    dateEn: "3 days ago",
    dateAr: "منذ 3 أيام",
    commentEn: "Our SEWA bill jumped to 3,800 AED unexpectedly. The technician arrived in Al Zahia within 25 minutes with acoustic sensors and found a ruptured underground PPR line under the driveway without breaking any tiles. SEWA refunded 1,950 AED based on their official report!",
    commentAr: "ارتفعت فاتورة سيوا لدينا فجأة إلى 3,800 درهم. وصل الفني إلى الزاهية خلال 25 دقيقة فقط ومعه أجهزة الكشف الصوتي وحدد مكان كسر ماسورة التغذية تحت إنترلوك الحوش بدقة دون تكسير عشوائي. تم تقديم التقرير لسيوا وحصلنا على تسوية بقيمة 1,950 درهم!",
    savingsEn: "Saved 1,950 AED on SEWA Rebate",
    savingsAr: "توفير 1,950 درهم من فاتورة سيوا",
    verified: true,
  },
  {
    id: "rev-2",
    authorEn: "Eng. Rashid Al-Hammadi",
    authorAr: "م. راشد الحمادي",
    locationEn: "Muwaileh Commercial, Building 8",
    locationAr: "تجارية مويلح، بناية 8",
    propertyTypeEn: "Residential Building Manager",
    propertyTypeAr: "مدير بناية سكنية",
    rating: 5,
    dateEn: "1 week ago",
    dateAr: "منذ أسبوع",
    commentEn: "We manage residential apartments in Muwaileh Commercial. A mysterious damp patch on the 2nd floor ceiling was driving tenants crazy. FLIR thermal camera pinpointed a hidden hairline crack inside the upper bathroom wall in 15 minutes. Very professional engineering team.",
    commentAr: "ندير بنايات في منطقة مويلح التجارية وكان هناك تنشيع ورطوبة مستمرة في سقف الطابق الثاني. بالكاميرا الحرارية FLIR تم كشف شرخ دقيق جداً داخل جدار الحمام العلوي خلال ربع ساعة فقط. فريق مهني على أعلى مستوى من الاحترافية.",
    savingsEn: "Zero Unnecessary Tile Breakage",
    savingsAr: "حماية كاملة من تكسير السيراميك",
    verified: true,
  },
  {
    id: "rev-3",
    authorEn: "Fatima Al-Suwaidi",
    authorAr: "فاطمة السويدي",
    locationEn: "Al Rahmaniya 4, Sharjah",
    locationAr: "الرحمانية 4، الشارقة",
    propertyTypeEn: "Luxury Private Villa",
    propertyTypeAr: "فيلا سكنية خاصة",
    rating: 5,
    dateEn: "2 weeks ago",
    dateAr: "منذ أسبوعين",
    commentEn: "The booster pump was running every 3 minutes non-stop. Traditional plumbers wanted to dig up my entire garden. This team used German ultrasonic listening devices, marked a single 20cm spot in the corridor, opened just one tile, and welded the joint on the spot. Highly recommended!",
    commentAr: "دينامو المضخة كان يعمل باستمرار كل 3 دقائق بدون توقف. أحضرنا سباكاً عادياً وأراد تكسير الحوش بالكامل! تواصلت مع هذا المركز وجاء الفني بجهاز الموجات الصوتية وحدد نقطة واحدة بالضبط في الممر، فتح بلاطة واحدة ولحم الماسورة في نفس الساعة.",
    savingsEn: "Fixed in 90 Mins with 1-Year Warranty",
    savingsAr: "إصلاح فوري مع ضمان سنة كاملة",
    verified: true,
  },
  {
    id: "rev-4",
    authorEn: "Mohammed Al-Nuaimi",
    authorAr: "محمد النعيمي",
    locationEn: "Al Juraina 2, Sharjah",
    locationAr: "الجرينة 2، الشارقة",
    propertyTypeEn: "Villa Estate",
    propertyTypeAr: "فيلا سكنية",
    rating: 5,
    dateEn: "3 weeks ago",
    dateAr: "منذ 3 أسابيع",
    commentEn: "Clear upfront 250 AED inspection fee with no hidden surprises. The digital SEWA report was emailed and sent on WhatsApp with clear FLIR pictures within an hour of completing the repair. Excellent service across Sharjah.",
    commentAr: "سعر الفحص واضح جداً 250 درهم بدون أي مبالغ مخفية. التقرير المعتمد لسيوا تم إرساله على الواتساب والإيميل مع الصور الحرارية بعد الصيانة مباشرة. أفضل خدمة كشف تسربات في الشارقة بلا منازع.",
    savingsEn: "Official SEWA Approved Stamped Report",
    savingsAr: "تقرير رسمي مختوم ومعتمد لسيوا",
    verified: true,
  },
];

export const FAQS_DATA: IFaqItem[] = [
  {
    id: "faq-1",
    questionEn: "How do you find hidden water leaks without breaking walls or tiles?",
    questionAr: "كيف يتم كشف مكان تسريب المياه بدقة وبدون أي تكسير في الجدران أو البلاط؟",
    answerEn: "We utilize advanced non-destructive testing (NDT) technology including FLIR High-Definition Radiometric Infrared Thermal Imaging to scan moisture gradients, paired with German Electro-Acoustic Ground Microphones and Ultrasonic Correlators that listen to escaping water frequency signatures within 5 cm accuracy.",
    answerAr: "نستخدم تقنيات الفحص الهندسي غير الإتلافي (NDT)، حيث ندمج بين كاميرات FLIR الحرارية عالية الدقة لرصد التدرج الحراري وبؤر الرطوبة، وميكروفونات كهرصوتية ألمانية فائقة الحساسية تلتقط التردد الصوتي لتدفق المياه وتحدد موقع التسريب بدقة 5 سم دون الحاجة للتكسير.",
  },
  {
    id: "faq-2",
    questionEn: "Can your inspection report be submitted to SEWA to reduce my high water bill?",
    questionAr: "هل تقرير الكشف الذي تصدرونه معتمد لدى هيئة كهرباء ومياه الشارقة (سيوا SEWA)؟",
    answerEn: "Yes, 100%. We provide an officially stamped technical inspection and repair certificate detailing the leak location, FLIR radiometric thermal photographic proof, meter readings, and date of certified repair. Customers submit this dossier to SEWA customer happiness centres to claim excessive consumption billing adjustments.",
    answerAr: "نعم، 100%. نقوم بإصدار تقرير فني هندسي معتمد ومختوم بختم الشركة الرسمي يتضمن صور الفحص الحراري، موقع الكسر، قراءات العداد، وتاريخ إتمام الإصلاح. يقدم هذا التقرير لمراكز خدمة عملاء سيوا (SEWA) للمطالبة بخصم وتعديل الفاقد من الفاتورة.",
  },
  {
    id: "faq-3",
    questionEn: "How fast can an emergency leak detection team reach my villa in Sharjah?",
    questionAr: "كم يستغرق وصول فريق الطوارئ المتخصص إلى موقعي في الشارقة؟",
    answerEn: "Our primary rapid-dispatch hub is located directly in Muwaileh Commercial, with mobile units stationed across Al Zahia, Al Juraina, Al Rahmaniya, and Al Suyoh. Average on-site arrival time is between 25 to 35 minutes across all Sharjah residential areas.",
    answerAr: "مركزنا الرئيسي يقع في تجارية مويلح ولدينا فرق متنقلة تغطي مناطق الزاهية، الجرينة، النوف، الرحمانية، والسيوح. متوسط وقت وصول الفني يتراوح بين 25 إلى 35 دقيقة من لحظة تأكيد الطلب.",
  },
  {
    id: "faq-4",
    questionEn: "What is included in the 250 AED Diagnostic Inspection fee?",
    questionAr: "ما الذي تشمله رسوم الفحص الأولي (250 درهم)؟",
    answerEn: "The 250 AED diagnostic fee covers a comprehensive FLIR infrared thermal scan of affected walls/ceilings, ultrasonic ground acoustic listening testing across pressurized networks, booster pump cycling pressure analysis, and an official digital SEWA report. If spot repair is approved, we provide upfront transparent pricing before touching a single pipe.",
    answerAr: "تشمل رسوم 250 درهم الفحص الشامل بالأشعة تحت الحمراء بكاميرات FLIR، كشف الترددات بالموجات الصوتية للشبكة، اختبار ضغط الخطوط ومضخة المياه، وإصدار التقرير الفني المعتمد لسيوا، مع تقديم عرض سعر فوري وشفاف في حال الرغبة بإجراء الإصلاح الموضعي.",
  },
  {
    id: "faq-5",
    questionEn: "Do you provide a warranty on plumbing spot repairs?",
    questionAr: "هل توجد كفالة وضمان خطي على أعمال إصلاح ولحام الأنابيب؟",
    answerEn: "Yes. All our PPR heat-fusion welds and copper/PEX pipe repair splices come with an official 12-month written warranty on joint integrity, backed by post-repair hydrostatic pressure hold testing.",
    answerAr: "نعم بالتأكيد. جميع أعمال اللحام الحراري لمواسير PPR وقطع PEX المعتمدة تأتي مع ضمان خطي لمدة 12 شهراً على جودة الإصلاح، ويتم إجراء اختبار ضغط مائي بعد الصيانة مباشرة للتأكد من سلامة الشبكة.",
  },
];

export const COMPARISON_DATA = [
  {
    featureEn: "Leak Location Accuracy",
    featureAr: "دقة تحديد موقع التسريب",
    certifiedNdtEn: "Pinpoint within 5cm (Acoustic + FLIR Thermal)",
    certifiedNdtAr: "دقة متناهية 5 سم (موجات صوتية + كاميرا حرارية)",
    traditionalEn: "Guesswork based on damp stains",
    traditionalAr: "تخمين عشوائي بناءً على بقع الرطوبة الظاهرة",
  },
  {
    featureEn: "Tile & Floor Destruction",
    featureAr: "تكسير البلاط والأرضيات",
    certifiedNdtEn: "ZERO tile breakage during scan (1 tile for repair)",
    certifiedNdtAr: "صفر تكسير أثناء الفحص (بلاطة واحدة فقط للإصلاح)",
    traditionalEn: "Widespread demolition of entire bathroom/yard",
    traditionalAr: "تكسير وتشويه عشوائي لكامل الحمام أو الحوش",
  },
  {
    featureEn: "SEWA Bill Rebate Report",
    featureAr: "تقرير معتمد لتخفيض فاتورة سيوا",
    certifiedNdtEn: "Official stamped technical dossier accepted by SEWA",
    certifiedNdtAr: "تقرير رسمي هندسي مختوم ومعتمد لدى سيوا",
    traditionalEn: "No certified documentation provided",
    traditionalAr: "لا يوفر أي تقارير أو إثباتات رسمية",
  },
  {
    featureEn: "Testing Instrumentation",
    featureAr: "الأجهزة والمعدات المستخدمة",
    certifiedNdtEn: "FLIR T540 Thermal + German Electro-Acoustics + Nitrogen",
    certifiedNdtAr: "كاميرات FLIR + مجسات ألمانية + غاز النيتروجين",
    traditionalEn: "Manual hammer, screwdriver, and visual look",
    traditionalAr: "مطرقة عادية ومفك وتخمين بالعين المجردة",
  },
  {
    featureEn: "Repair Warranty",
    featureAr: "الضمان على أعمال الإصلاح",
    certifiedNdtEn: "12-Month written guarantee with pressure testing",
    certifiedNdtAr: "ضمان خطي 12 شهراً مع اختبار ضغط هيدروليكي",
    traditionalEn: "No written warranty; recurrence likely",
    traditionalAr: "بدون أي ضمان خطي وخطورة عودة التسريب",
  },
  {
    featureEn: "Response Time in Sharjah",
    featureAr: "سرعة الاستجابة في الشارقة",
    certifiedNdtEn: "25–35 Minutes rapid emergency dispatch",
    certifiedNdtAr: "25–35 دقيقة استجابة فورية لكافة المناطق",
    traditionalEn: "Hours or next day uncertainty",
    traditionalAr: "ساعات طويلة أو انتظار غير محدد لليوم التالي",
  },
];
