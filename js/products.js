// =========================================
// BASE DE DONNEES PRODUITS - TopProduits
// Tous les produits sont réels et vendus sur Amazon.fr
// =========================================
const PRODUCTS = [
  // ── HIGH-TECH ──────────────────────────
  {
    id: 1,
    name: "Sony WH-1000XM5 – Casque Bluetooth ANC",
    cat: "tech", catLabel: "High-Tech",
    desc: "Casque sans fil à réduction de bruit n°1. Autonomie 30h, son Hi-Res LDAC, microphone à 8 capteurs, Bluetooth multipoint, pliable. Le choix des audiophiles.",
    price: 249, oldPrice: 380,
    rating: 4.8, reviews: 18420,
    badge: "N°1 des ventes", badgeClass: "",
    img: "https://m.media-amazon.com/images/I/51aXvjzcukL._AC_SL1500_.jpg",
    link: "https://www.amazon.fr/b?node=95175954031&linkCode=ll2&tag=snaken18-21&linkId=0c1cdc02fbb46db02f3df11a46edaa5d&ref_=as_li_ss_tl"
  },
  {
    id: 2,
    name: "Apple AirPods Pro 2 (USB-C, 2024)",
    cat: "tech", catLabel: "High-Tech",
    desc: "ANC adaptatif 2x plus performant, audio spatial personnalisé, boîtier MagSafe USB-C, 6h + 30h boîtier, résistant IPX4. L'intra-auriculaire de référence.",
    price: 229, oldPrice: 279,
    rating: 4.7, reviews: 24650,
    badge: "Populaire", badgeClass: "new",
    img: "https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_SL1500_.jpg",
    link: "https://www.amazon.fr/b?node=95175954031&linkCode=ll2&tag=snaken18-21&linkId=0c1cdc02fbb46db02f3df11a46edaa5d&ref_=as_li_ss_tl"
  },
  {
    id: 3,
    name: "Amazon Kindle Paperwhite 2024 – 16 Go",
    cat: "tech", catLabel: "High-Tech",
    desc: "Liseuse 7 pouces 300 ppi anti-reflets, éclairage chaud réglable, 12 semaines d'autonomie, étanche IPX8, stockage 16 Go pour des milliers de livres.",
    price: 149, oldPrice: 169,
    rating: 4.8, reviews: 31200,
    badge: "Meilleure vente", badgeClass: "",
    img: "https://m.media-amazon.com/images/I/61nMOXBMDNL._AC_SL1000_.jpg",
    link: "https://www.amazon.fr/b?node=95175954031&linkCode=ll2&tag=snaken18-21&linkId=0c1cdc02fbb46db02f3df11a46edaa5d&ref_=as_li_ss_tl"
  },
  {
    id: 4,
    name: "Samsung Galaxy Watch 6 – 44mm Bluetooth",
    cat: "tech", catLabel: "High-Tech",
    desc: "Écran Super AMOLED 1.5 pouces, suivi cardiaque continu, ECG, composition corporelle BIA, GPS intégré, Google Wear OS 4.",
    price: 229, oldPrice: 319,
    rating: 4.5, reviews: 8740,
    badge: "Promo -28%", badgeClass: "deal",
    img: "https://m.media-amazon.com/images/I/61e0mLTMYjL._AC_SL1500_.jpg",
    link: "https://www.amazon.fr/b?node=95175954031&linkCode=ll2&tag=snaken18-21&linkId=0c1cdc02fbb46db02f3df11a46edaa5d&ref_=as_li_ss_tl"
  },
  {
    id: 5,
    name: "JBL Charge 5 – Enceinte Bluetooth Portable",
    cat: "tech", catLabel: "High-Tech",
    desc: "Son JBL Pro puissant, basses percutantes, étanchéité IP67, 20h d'autonomie, powerbank intégrée, JBL PartyBoost pour coupler les enceintes.",
    price: 139, oldPrice: 189,
    rating: 4.7, reviews: 42300,
    badge: "Best-seller", badgeClass: "",
    img: "https://m.media-amazon.com/images/I/71He4WFfYBL._AC_SL1500_.jpg",
    link: "https://www.amazon.fr/b?node=95175954031&linkCode=ll2&tag=snaken18-21&linkId=0c1cdc02fbb46db02f3df11a46edaa5d&ref_=as_li_ss_tl"
  },

  // ── MAISON ──────────────────────────────
  {
    id: 6,
    name: "Dyson V15 Detect Absolute",
    cat: "maison", catLabel: "Maison",
    desc: "Aspirateur balai sans fil le plus intelligent. Laser vert détecte la poussière invisible, écran LCD temps réel, 60 min d'autonomie, 7 accessoires inclus.",
    price: 499, oldPrice: 699,
    rating: 4.7, reviews: 4150,
    badge: "Promo -29%", badgeClass: "deal",
    img: "https://m.media-amazon.com/images/I/61ROEYFmcbL._AC_SL1500_.jpg",
    link: "https://www.amazon.fr/b?node=95175954031&linkCode=ll2&tag=snaken18-21&linkId=0c1cdc02fbb46db02f3df11a46edaa5d&ref_=as_li_ss_tl"
  },
  {
    id: 7,
    name: "iRobot Roomba Combo i5+ – Aspirateur Robot",
    cat: "maison", catLabel: "Maison",
    desc: "Robot aspirateur ET laveur, station de vidage automatique 60 jours, navigation intelligente PrecisionVision, programmable via appli iRobot Home.",
    price: 349, oldPrice: 499,
    rating: 4.4, reviews: 2850,
    badge: "Promo -30%", badgeClass: "deal",
    img: "https://m.media-amazon.com/images/I/71nKwEI0JzL._AC_SL1500_.jpg",
    link: "https://www.amazon.fr/b?node=95175954031&linkCode=ll2&tag=snaken18-21&linkId=0c1cdc02fbb46db02f3df11a46edaa5d&ref_=as_li_ss_tl"
  },
  {
    id: 8,
    name: "Philips Hue Starter Kit – 3 Ampoules E27 White & Color",
    cat: "maison", catLabel: "Maison",
    desc: "16 millions de couleurs, pont Hue inclus, compatible Alexa, Google Home et Apple HomeKit. Ambiance lumineuse personnalisable à l'infini.",
    price: 119, oldPrice: 179,
    rating: 4.6, reviews: 12450,
    badge: "N°1 des ventes", badgeClass: "",
    img: "https://m.media-amazon.com/images/I/61DUjYMKL8L._AC_SL1500_.jpg",
    link: "https://www.amazon.fr/b?node=95175954031&linkCode=ll2&tag=snaken18-21&linkId=0c1cdc02fbb46db02f3df11a46edaa5d&ref_=as_li_ss_tl"
  },
  {
    id: 9,
    name: "Ring Video Doorbell 4 – Sonnette Vidéo Connectée",
    cat: "maison", catLabel: "Maison",
    desc: "Vidéo HD 1080p, détection de mouvements avancée, réponse en direct, vision nocturne couleur, fonctionne sur batterie, compatible Alexa.",
    price: 99, oldPrice: 139,
    rating: 4.5, reviews: 15600,
    badge: "Bon plan", badgeClass: "new",
    img: "https://m.media-amazon.com/images/I/51Fv37MxSKL._AC_SL1000_.jpg",
    link: "https://www.amazon.fr/b?node=95175954031&linkCode=ll2&tag=snaken18-21&linkId=0c1cdc02fbb46db02f3df11a46edaa5d&ref_=as_li_ss_tl"
  },

  // ── GAMING ──────────────────────────────
  {
    id: 10,
    name: "Nintendo Switch OLED – Blanche",
    cat: "gaming", catLabel: "Gaming",
    desc: "Écran OLED 7 pouces aux couleurs éclatantes, dock réglable avec port Ethernet, 64 Go de stockage, haut-parleurs améliorés. La console hybride ultime.",
    price: 299, oldPrice: 349,
    rating: 4.8, reviews: 41200,
    badge: "Meilleure vente", badgeClass: "",
    img: "https://m.media-amazon.com/images/I/61FPMVTFBdL._AC_SL1500_.jpg",
    link: "https://www.amazon.fr/b?node=95175954031&linkCode=ll2&tag=snaken18-21&linkId=0c1cdc02fbb46db02f3df11a46edaa5d&ref_=as_li_ss_tl"
  },
  {
    id: 11,
    name: "SteelSeries Arctis Nova 7 – Casque Gaming Sans Fil",
    cat: "gaming", catLabel: "Gaming",
    desc: "Son spatial 360°, micro ClearCast Gen 2 rétractable, 38h d'autonomie, double connexion Bluetooth + 2.4GHz, multiplateforme PC/PS/Switch.",
    price: 149, oldPrice: 199,
    rating: 4.7, reviews: 5620,
    badge: "Promo -25%", badgeClass: "deal",
    img: "https://m.media-amazon.com/images/I/61G3wFGBQaL._AC_SL1500_.jpg",
    link: "https://www.amazon.fr/b?node=95175954031&linkCode=ll2&tag=snaken18-21&linkId=0c1cdc02fbb46db02f3df11a46edaa5d&ref_=as_li_ss_tl"
  },
  {
    id: 12,
    name: "Logitech G502 X PLUS – Souris Gaming Sans Fil",
    cat: "gaming", catLabel: "Gaming",
    desc: "Capteur HERO 25K, switchs hybrides LIGHTFORCE, RGB LIGHTSYNC, 130h d'autonomie, 13 boutons programmables. La légende revisitée.",
    price: 109, oldPrice: 169,
    rating: 4.6, reviews: 9870,
    badge: "Promo -35%", badgeClass: "deal",
    img: "https://m.media-amazon.com/images/I/61mpMH5TzkL._AC_SL1500_.jpg",
    link: "https://www.amazon.fr/b?node=95175954031&linkCode=ll2&tag=snaken18-21&linkId=0c1cdc02fbb46db02f3df11a46edaa5d&ref_=as_li_ss_tl"
  },
  {
    id: 13,
    name: "Razer BlackWidow V4 – Clavier Mécanique Gaming",
    cat: "gaming", catLabel: "Gaming",
    desc: "Switchs mécaniques Razer Green, rétroéclairage RGB Chroma, repose-poignets magnétique, molette multifonction, touches macro dédiées.",
    price: 139, oldPrice: 189,
    rating: 4.7, reviews: 6340,
    badge: "", badgeClass: "",
    img: "https://m.media-amazon.com/images/I/71wxjLCgSSL._AC_SL1500_.jpg",
    link: "https://www.amazon.fr/b?node=95175954031&linkCode=ll2&tag=snaken18-21&linkId=0c1cdc02fbb46db02f3df11a46edaa5d&ref_=as_li_ss_tl"
  },

  // ── SPORT / FITNESS ──────────────────────
  {
    id: 14,
    name: "Garmin Forerunner 265 – Montre GPS AMOLED",
    cat: "sport", catLabel: "Sport & Fitness",
    desc: "Écran AMOLED 1.3 pouces, GPS multi-bande, FC au poignet, VO2max, plans d'entraînement adaptatifs, musique hors ligne Spotify, 13 jours d'autonomie.",
    price: 349, oldPrice: 449,
    rating: 4.7, reviews: 4820,
    badge: "Choix premium", badgeClass: "new",
    img: "https://m.media-amazon.com/images/I/61+TQ1TZJYL._AC_SL1500_.jpg",
    link: "https://www.amazon.fr/b?node=95175954031&linkCode=ll2&tag=snaken18-21&linkId=0c1cdc02fbb46db02f3df11a46edaa5d&ref_=as_li_ss_tl"
  },
  {
    id: 15,
    name: "Xiaomi Smart Band 8 – Bracelet Connecté",
    cat: "sport", catLabel: "Sport & Fitness",
    desc: "Écran AMOLED 1.62 pouces 60Hz, 150+ modes sport, SpO2, suivi sommeil avancé, 16 jours d'autonomie, étanchéité 5 ATM. Le meilleur rapport Q/P.",
    price: 29, oldPrice: 49,
    rating: 4.5, reviews: 22300,
    badge: "Petit prix", badgeClass: "",
    img: "https://m.media-amazon.com/images/I/51mTOI-oP4L._AC_SL1500_.jpg",
    link: "https://www.amazon.fr/b?node=95175954031&linkCode=ll2&tag=snaken18-21&linkId=0c1cdc02fbb46db02f3df11a46edaa5d&ref_=as_li_ss_tl"
  },
  {
    id: 16,
    name: "Theragun Mini 2.0 – Pistolet de Massage",
    cat: "sport", catLabel: "Sport & Fitness",
    desc: "Pistolet de massage compacte 150g, 3 vitesses, moteur QuietForce ultra-silencieux, 12 mm d'amplitude, 4 têtes, idéal récupération musculaire.",
    price: 169, oldPrice: 219,
    rating: 4.5, reviews: 4830,
    badge: "", badgeClass: "",
    img: "https://m.media-amazon.com/images/I/61Zg9MPYhQL._AC_SL1500_.jpg",
    link: "https://www.amazon.fr/b?node=95175954031&linkCode=ll2&tag=snaken18-21&linkId=0c1cdc02fbb46db02f3df11a46edaa5d&ref_=as_li_ss_tl"
  },
  {
    id: 17,
    name: "Under Armour HOVR Phantom 3 – Chaussures Running",
    cat: "sport", catLabel: "Sport & Fitness",
    desc: "Technologie HOVR zéro gravité, semelle UA FLOW ultra-adhérente, connexion MapMyRun pour tracker chaque foulée, confort premium toute la journée.",
    price: 119, oldPrice: 160,
    rating: 4.5, reviews: 3120,
    badge: "Promo -26%", badgeClass: "deal",
    img: "https://m.media-amazon.com/images/I/71YP+GPlj1L._AC_SL1500_.jpg",
    link: "https://www.amazon.fr/b?node=95175954031&linkCode=ll2&tag=snaken18-21&linkId=0c1cdc02fbb46db02f3df11a46edaa5d&ref_=as_li_ss_tl"
  },

  // ── CUISINE ──────────────────────────────
  {
    id: 18,
    name: "Philips Airfryer XL Essential HD9270 – 6,2 L",
    cat: "cuisine", catLabel: "Cuisine",
    desc: "Technologie Rapid Air, 6,2L (5 personnes), 14 programmes automatiques, écran tactile, cuisson sans huile, panier antiadhésif, application NutriU.",
    price: 119, oldPrice: 179,
    rating: 4.7, reviews: 18940,
    badge: "N°1 des ventes", badgeClass: "",
    img: "https://m.media-amazon.com/images/I/71Nc7XfhGeL._AC_SL1500_.jpg",
    link: "https://www.amazon.fr/b?node=95175954031&linkCode=ll2&tag=snaken18-21&linkId=0c1cdc02fbb46db02f3df11a46edaa5d&ref_=as_li_ss_tl"
  },
  {
    id: 19,
    name: "De'Longhi Magnifica S – Machine Expresso Automatique",
    cat: "cuisine", catLabel: "Cuisine",
    desc: "Broyeur intégré 13 niveaux, pression 15 bar, buse cappuccino manuelle, 2 tasses simultanées, détartrage automatique. La vraie machine à café pro.",
    price: 299, oldPrice: 449,
    rating: 4.5, reviews: 24600,
    badge: "Promo -33%", badgeClass: "deal",
    img: "https://m.media-amazon.com/images/I/71sJ5VHljxL._AC_SL1500_.jpg",
    link: "https://www.amazon.fr/b?node=95175954031&linkCode=ll2&tag=snaken18-21&linkId=0c1cdc02fbb46db02f3df11a46edaa5d&ref_=as_li_ss_tl"
  },
  {
    id: 20,
    name: "Ninja Foodi MAX Multicuiseur 14-en-1 – 7,5L",
    cat: "cuisine", catLabel: "Cuisine",
    desc: "Autocuiseur, air fryer, mijoteuse, grill, vapeur, déshydrateur... 14 fonctions en 1 appareil. 7,5L pour toute la famille. Cuit 70% plus vite.",
    price: 199, oldPrice: 279,
    rating: 4.7, reviews: 9200,
    badge: "Promo -29%", badgeClass: "deal",
    img: "https://m.media-amazon.com/images/I/81V7aBDNMUL._AC_SL1500_.jpg",
    link: "https://www.amazon.fr/b?node=95175954031&linkCode=ll2&tag=snaken18-21&linkId=0c1cdc02fbb46db02f3df11a46edaa5d&ref_=as_li_ss_tl"
  }
];
