// =========================================
// DONNÉES PRODUITS
// =========================================
const PRODUCTS = [
  // ── HIGH-TECH ──────────────────────────
  {
    id: 1,
    name: "Sony WH-1000XM5",
    cat: "tech", catLabel: "High-Tech",
    desc: "Le meilleur casque ANC du marché. 30h d'autonomie, Bluetooth multipoint, son Hi-Res certifié, micro à élimination de bruit.",
    price: 249, oldPrice: 380,
    rating: 4.8, reviews: 18420,
    badge: "N°1 des ventes", badgeClass: "",
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    link: "https://amzn.to/4bE3sLC"
  },
  {
    id: 2,
    name: "Apple AirPods Pro 2 (USB-C)",
    cat: "tech", catLabel: "High-Tech",
    desc: "ANC adaptatif, audio spatial personnalisé, résistance IPX4, boîtier MagSafe. La référence absolue des écouteurs intra.",
    price: 229, oldPrice: 279,
    rating: 4.7, reviews: 24650,
    badge: "Populaire", badgeClass: "new",
    img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&q=80",
    link: "https://amzn.to/4bE3sLC"
  },
  {
    id: 3,
    name: "Kindle Paperwhite 2024 – 16 Go",
    cat: "tech", catLabel: "High-Tech",
    desc: "Écran 7\" 300 ppi sans reflets, autonomie 12 semaines, étanche IPX8. Lit jusqu'à 13 000 livres numériques.",
    price: 149, oldPrice: 169,
    rating: 4.8, reviews: 31200,
    badge: "Meilleure vente", badgeClass: "",
    img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&q=80",
    link: "https://amzn.to/4bE3sLC"
  },
  {
    id: 4,
    name: "Apple Watch SE 2 – GPS 44mm",
    cat: "tech", catLabel: "High-Tech",
    desc: "Suivi cardiaque continu, détection de chutes, SOS d'urgence, boussole, compteur de calories. Le meilleur rapport Q/P Apple Watch.",
    price: 249, oldPrice: 319,
    rating: 4.6, reviews: 9820,
    badge: "Promo", badgeClass: "deal",
    img: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&q=80",
    link: "https://amzn.to/4bE3sLC"
  },
  {
    id: 5,
    name: "Amazon Echo Show 8 (3e génération)",
    cat: "tech", catLabel: "High-Tech",
    desc: "Écran tactile 8\", caméra 13 MP auto-framing, son stéréo, contrôle domotique Alexa. Centre intelligent pour votre maison.",
    price: 149, oldPrice: 179,
    rating: 4.5, reviews: 7350,
    badge: "", badgeClass: "",
    img: "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?w=500&q=80",
    link: "https://amzn.to/4bE3sLC"
  },

  // ── MAISON ──────────────────────────────
  {
    id: 6,
    name: "Dyson V12 Detect Slim Absolute",
    cat: "maison", catLabel: "Maison",
    desc: "Laser vert révèle la poussière invisible. 60 min d'autonomie, affichage LCD en temps réel, 6 accessoires inclus.",
    price: 449, oldPrice: 649,
    rating: 4.7, reviews: 4150,
    badge: "Promo", badgeClass: "deal",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80",
    link: "https://amzn.to/4bE3sLC"
  },
  {
    id: 7,
    name: "iRobot Roomba i5+ – Auto-vidage 60j",
    cat: "maison", catLabel: "Maison",
    desc: "Robot aspirateur + station base auto-vidage 60 jours. Navigation iAdapt 3.0, suggestions intelligentes via l'app.",
    price: 349, oldPrice: 499,
    rating: 4.5, reviews: 2850,
    badge: "Promo", badgeClass: "deal",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80",
    link: "https://amzn.to/4bE3sLC"
  },
  {
    id: 8,
    name: "Philips Hue White & Color – Kit 3 ampoules E27",
    cat: "maison", catLabel: "Maison",
    desc: "16 millions de couleurs, pont Hue inclus, compatible Alexa, Google Home & Apple HomeKit. Transformez votre ambiance.",
    price: 129, oldPrice: 199,
    rating: 4.6, reviews: 12450,
    badge: "N°1 des ventes", badgeClass: "",
    img: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&q=80",
    link: "https://amzn.to/4bE3sLC"
  },
  {
    id: 9,
    name: "TP-Link Tapo C320WS – Caméra Extérieure 4K",
    cat: "maison", catLabel: "Maison",
    desc: "Résolution 4K, vision nocturne en couleur, détection de personnes par IA, stockage SD local, résistante IP66.",
    price: 59, oldPrice: 89,
    rating: 4.6, reviews: 6750,
    badge: "Bon plan", badgeClass: "new",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80",
    link: "https://amzn.to/4bE3sLC"
  },

  // ── GAMING ──────────────────────────────
  {
    id: 10,
    name: "Nintendo Switch OLED",
    cat: "gaming", catLabel: "Gaming",
    desc: "Écran OLED 7\" aux couleurs éclatantes, dock TV réglable, 64 Go de stockage, son amélioré, batterie longue durée.",
    price: 329, oldPrice: 349,
    rating: 4.8, reviews: 41200,
    badge: "Meilleure vente", badgeClass: "",
    img: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=500&q=80",
    link: "https://amzn.to/4bE3sLC"
  },
  {
    id: 11,
    name: "SteelSeries Arctis Nova 7 Wireless",
    cat: "gaming", catLabel: "Gaming",
    desc: "Casque gaming sans fil, son spatial ClearCast Gen 2, 38h d'autonomie, double source audio simultanée, multiplateforme.",
    price: 149, oldPrice: 199,
    rating: 4.7, reviews: 5620,
    badge: "Promo", badgeClass: "deal",
    img: "https://images.unsplash.com/photo-1599669454699-248893623440?w=500&q=80",
    link: "https://amzn.to/4bE3sLC"
  },
  {
    id: 12,
    name: "Razer DeathAdder V3 HyperSpeed",
    cat: "gaming", catLabel: "Gaming",
    desc: "Souris pro sans fil ultra-légère 63g, capteur Focus Pro 26 000 DPI, 300h d'autonomie. Le choix des compétiteurs.",
    price: 89, oldPrice: 129,
    rating: 4.7, reviews: 3240,
    badge: "", badgeClass: "",
    img: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&q=80",
    link: "https://amzn.to/4bE3sLC"
  },
  {
    id: 13,
    name: "Elgato Stream Deck MK.2",
    cat: "gaming", catLabel: "Gaming",
    desc: "15 touches LCD personnalisables. Contrôle OBS, Twitch, YouTube, Spotify en un clic. Indispensable pour les créateurs.",
    price: 139, oldPrice: 179,
    rating: 4.7, reviews: 8920,
    badge: "", badgeClass: "",
    img: "https://images.unsplash.com/photo-1593640495253-23196b27a87f?w=500&q=80",
    link: "https://amzn.to/4bE3sLC"
  },

  // ── SPORT ──────────────────────────────
  {
    id: 14,
    name: "Garmin Forerunner 165 Music",
    cat: "sport", catLabel: "Sport",
    desc: "Montre GPS AMOLED 1.2\", musique hors ligne (Spotify, Deezer), FC optique, VO2 max, 11 jours d'autonomie.",
    price: 249, oldPrice: 299,
    rating: 4.7, reviews: 3420,
    badge: "Nouveau", badgeClass: "new",
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
    link: "https://amzn.to/4bE3sLC"
  },
  {
    id: 15,
    name: "Fitbit Charge 6",
    cat: "sport", catLabel: "Sport",
    desc: "GPS intégré, ECG, SpO2, Google Maps natif, Google Wallet, 7 jours d'autonomie. Le tracker fitness de référence 2026.",
    price: 129, oldPrice: 159,
    rating: 4.4, reviews: 6150,
    badge: "", badgeClass: "",
    img: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500&q=80",
    link: "https://amzn.to/4bE3sLC"
  },
  {
    id: 16,
    name: "Theragun Mini 2.0",
    cat: "sport", catLabel: "Sport",
    desc: "Pistolet de massage compact 150g, 3 vitesses (1750–2400 PPM), 20 min par charge, 4 têtes interchangeables.",
    price: 169, oldPrice: 219,
    rating: 4.5, reviews: 4830,
    badge: "", badgeClass: "",
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&q=80",
    link: "https://amzn.to/4bE3sLC"
  },
  {
    id: 17,
    name: "Tapis de Yoga Lululemon 5mm",
    cat: "sport", catLabel: "Sport",
    desc: "Caoutchouc naturel antimicrobien, 5mm d'amorti, antidérapant double face, sangle intégrée. Le premium absolu.",
    price: 88, oldPrice: 108,
    rating: 4.8, reviews: 5250,
    badge: "Meilleure vente", badgeClass: "",
    img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&q=80",
    link: "https://amzn.to/4bE3sLC"
  },

  // ── CUISINE ──────────────────────────────
  {
    id: 18,
    name: "Nespresso Vertuo Next + 50 capsules offertes",
    cat: "cuisine", catLabel: "Cuisine",
    desc: "Technologie Centrifusion, 6 formats de tasse (espresso → carafe), chauffe en 30 sec. Le café café-shop chez soi.",
    price: 89, oldPrice: 159,
    rating: 4.6, reviews: 22150,
    badge: "Promo", badgeClass: "deal",
    img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&q=80",
    link: "https://amzn.to/4bE3sLC"
  },
  {
    id: 19,
    name: "Instant Pot Duo 7-en-1 – 7,6 L",
    cat: "cuisine", catLabel: "Cuisine",
    desc: "Autocuiseur + mijoteuse + vapeur + rizière + sauteuse + yaourtière + réchaud. 7,6L pour 8 personnes et plus.",
    price: 89, oldPrice: 129,
    rating: 4.6, reviews: 38000,
    badge: "N°1 des ventes", badgeClass: "",
    img: "https://images.unsplash.com/photo-1585515320310-259814833e62?w=500&q=80",
    link: "https://amzn.to/4bE3sLC"
  },
  {
    id: 20,
    name: "Philips Airfryer XXL 7,3 L HD9650",
    cat: "cuisine", catLabel: "Cuisine",
    desc: "Friteuse à air chaud 7,3L technologie Rapid Air, 14 programmes automatiques, écran digital, jusqu'à 200°C.",
    price: 179, oldPrice: 249,
    rating: 4.7, reviews: 14850,
    badge: "Meilleure vente", badgeClass: "",
    img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=80",
    link: "https://amzn.to/4bE3sLC"
  }
];
