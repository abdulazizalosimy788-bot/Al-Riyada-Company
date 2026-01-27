const translations = {
    ar: {
        // القائمة والترحيب
        navHome: "الرئيسية", navServices: "خدماتنا", navBooking: "الحجز",
        heroTitle: "سافر بأسلوب الريادة", heroDesc: "نأخذك إلى وجهات أحلامك بأعلى معايير الرفاهية والأمان.",
        btnBook: "احجز رحلتك الآن", btnMore: "استكشف الوجهات",
        // محرك البحث (التفاصيل الدقيقة)
        labelFrom: "من", labelTo: "إلى", labelPass: "المسافرون",
        placeholderFrom: "مدينة المغادرة", placeholderTo: "مدينة الوصول",
        opt1: "1 مسافر، اقتصادية", opt2: "1 مسافر، رجال أعمال",
        tabRound: "ذهاب وعودة", tabOne: "ذهاب فقط", btnSearch: "بحث عن رحلات",
        // الوجهات
        destTitle: "أشهر الوجهات مع الريادة", 

        destSub: "استكشف العالم بأفضل الأسعار",
        cityDubai: "دبي، الإمارات", priceDubai: "ابتداءً من $299", bookNow: "احجز الآن",
        // التذييل
        footerLinks: "روابط سريعة", linkAbout: "من نحن", linkFaq: "الأسئلة الشائعة",
        dir: "rtl",
       // المميزات
        featLuxT: "رفاهية مطلقة",
        featLuxD: "مقاعد واسعة وخدمات ترفيهية متطورة طوال الرحلة.",
        featSafeT: "أمان تام",
        featSafeD: "نتبع أعلى معايير السلامة العالمية لضمان رحلة آمنة.",
        featTimeT: "دقة المواعيد",
        featTimeD: "نحترم وقتك، ونضمن لك الإقلاع والوصول في الموعد المحدد.",
        // التواصل
        contactT: "تواصل معنا",
        contactS: "نحن هنا لخدمتكم على مدار الساعة",
        infoHq: "المقر الرئيسي",
        infoPh: "اتصل بنا",
        infoEm: "البريد الإلكتروني",
        // التذييل
        footSlogan: "عالمك بين يديك..",

        footFollow: "تابعنا",
        linkPriv: "سياسة الخصوصية",
        footCopy: "© 2026 شركة الريادة للطيران - جميع الحقوق محفوظة",
        dir: "rtl"},

    en: {
        // Navigation & Hero
        navHome: "Home", navServices: "Services", navBooking: "Booking",
        heroTitle: "Travel with Excellence", heroDesc: "Taking you to your dream destinations with the highest standards of luxury.",
        btnBook: "Book Your Flight Now", btnMore: "Explore Destinations",
        // Search Engine (Deep Details)
        labelFrom: "From", labelTo: "To", labelPass: "Passengers",

        placeholderFrom: "Departure City", placeholderTo: "Arrival City",
        opt1: "1 Passenger, Economy", opt2: "1 Passenger, Business Class",
        tabRound: "Round Trip", tabOne: "One Way", btnSearch: "Search Flights",
        // Destinations
        destTitle: "Top Destinations", destSub: "Explore the world at the best prices",
        cityDubai: "Dubai, UAE", priceDubai: "Starting from $299", bookNow: "Book Now",
        // Footer
        footerLinks: "Quick Links", linkAbout: "About Us", linkFaq: "FAQs",
        dir: "ltr",
                // المميزات
        featLuxT: "Absolute Luxury",
        featLuxD: "Spacious seats and advanced entertainment throughout the flight.",
        featSafeT: "Total Safety",
        featSafeD: "We follow the highest global safety standards for a secure journey.",
        featTimeT: "Punctuality",
        featTimeD: "We respect your time, ensuring on-time departure and arrival.",
        // التواصل
        contactT: "Contact Us",

        contactS: "We are here to serve you 24/7",
        infoHq: "Headquarters",
        infoPh: "Call Us",
        infoEm: "Email Us",
        // التذييل
        footSlogan: "Your world in your hands..",
        footFollow: "Follow Us",
        linkPriv: "Privacy Policy",
        footCopy: "© 2026 Al-Rayada Airlines - All rights reserved",
        dir: "ltr"

    }
};
function changeLang(lang) {
    const data = translations[lang];


    // تغيير النصوص العادية
    const ids = {
        'nav-home': data.navHome, 'nav-services': data.navServices, 'nav-booking': data.navBooking,
        'hero-title': data.heroTitle, 'hero-desc': data.heroDesc, 'btn-book': data.btnBook, 'btn-more': data.btnMore,
        'label-from': data.labelFrom, 'label-to': data.labelTo, 'label-passengers': data.labelPass,
        'tab-round-text': data.tabRound, 'tab-one-text': data.tabOne, 'btn-search': data.btnSearch,
        'dest-title': data.destTitle, 'dest-subtitle': data.destSub, 'city-dubai': data.cityDubai,
        'price-dubai': data.priceDubai, 'book-dubai': data.bookNow, 'footer-links-title': data.footerLinks,

        'link-about': data.linkAbout, 'link-faq': data.linkFaq,
        'feat-lux-t': data.featLuxT,

        'feat-lux-d': data.featLuxD,
        'feat-safe-t': data.featSafeT,
        'feat-safe-d': data.featSafeD,
        'feat-time-t': data.featTimeT,
        'feat-time-d': data.featTimeD,
        'contact-t': data.contactT,
        'contact-s': data.contactS,
        'info-hq': data.infoHq,
        'info-ph': data.infoPh,
        'info-em': data.infoEm,
        'foot-slogan': data.footSlogan,
        'foot-follow': data.footFollow,
        'link-priv': data.linkPriv,
        'foot-copy': data.footCopy

    };

    for (let id in ids) {
        let el = document.getElementById(id);
        if (el) el.textContent = ids[id];
    }
       

  
    // تغيير الـ Placeholder (النصوص داخل المربعات)
    document.getElementById('input-from').placeholder = data.placeholderFrom;
    document.getElementById('input-to').placeholder = data.placeholderTo;

    // تغيير خيارات الـ Select
    document.getElementById('opt-1').textContent = data.opt1;
    

    document.getElementById('opt-2').textContent = data.opt2;

    // تغيير اتجاه الصفحة بالكامل
    document.documentElement.dir = data.dir;
    document.documentElement.lang = lang;
}
