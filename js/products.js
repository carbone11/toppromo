// =========================================
// BASE DE DONNEES PRODUITS - TopProduits
// Tous les produits sont reels et vendus sur Amazon.fr
// Liens affilies SiteStripe Amazon (tag: snaken18-21)
// Prix indicatifs -- verifiez Amazon pour le prix actuel
// =========================================
const PRODUCTS = [

  // -- GAMING ---------------------------------
  {
    id: 1,
    name: "Acer Nitro V 15 ANV15-52 \u2013 i7 / RTX 5050",
    cat: "gaming", catLabel: "Gaming",
    desc: "PC portable gamer 15.6\" FHD IPS 165Hz, Intel Core i7-13620H, NVIDIA GeForce RTX 5050 GDDR7, 16\u00a0Go RAM, 512\u00a0Go SSD, Windows 11 Home, Clavier AZERTY r\u00e9tro\u00e9clair\u00e9.",
    price: 1299,
    rating: 4.2, reviews: 99,
    badge: "Amazon's Choice", badgeClass: "",
    img: "https://m.media-amazon.com/images/I/61IpCwPhAiL._AC_SX450_.jpg",
    link: "https://amzn.to/4cI9ADI"
  },
  {
    id: 2,
    name: "Acer Nitro V 15 ANV15-41 \u2013 Ryzen 5 / RTX 4050",
    cat: "gaming", catLabel: "Gaming",
    desc: "PC portable gamer 15.6\" FHD IPS LCD 165Hz, AMD Ryzen 5 7535HS, NVIDIA GeForce RTX 4050 GDDR6, 16\u00a0Go RAM DDR5, 512\u00a0Go SSD, Windows 11 Home, Clavier AZERTY.",
    price: 789, oldPrice: 999,
    rating: 4.2, reviews: 99,
    badge: "Spring Deal -21%", badgeClass: "deal",
    img: "https://m.media-amazon.com/images/I/71FnFOWeowL._AC_SX450_.jpg",
    link: "https://amzn.to/4dgf9ta"
  },

  // -- INFORMATIQUE ---------------------------
  {
    id: 3,
    name: "Dell Laptop DC15250 \u2013 15.6\" FHD 120Hz",
    cat: "informatique", catLabel: "Informatique",
    desc: "Laptop 15.6\" FHD 120Hz, Intel Core i7-1355U, Intel UHD Graphics, 16\u00a0Go RAM, 512\u00a0Go SSD, Webcam HD, Windows 11 Home, Clavier AZERTY, Carbon Black.",
    price: 529, oldPrice: 679,
    rating: 4.3, reviews: 320,
    badge: "Spring Deal -22%", badgeClass: "deal",
    img: "https://m.media-amazon.com/images/I/71cLyz8t8CL._AC_SY450_.jpg",
    link: "https://amzn.to/4b61ZxG"
  },
  {
    id: 4,
    name: "ASUS Vivobook 16 Copilot+ PC",
    cat: "informatique", catLabel: "Informatique",
    desc: "PC portable 16\" WUXGA 60Hz, AMD Ryzen 7 350 (Copilot+), 16\u00a0Go LPDDR5X, 512\u00a0Go SSD, AMD Radeon Graphics, Windows 11 Home, Clavier AZERTY r\u00e9tro\u00e9clair\u00e9.",
    price: 739,
    rating: 4.2, reviews: 180,
    badge: "Copilot+ PC", badgeClass: "new",
    img: "https://m.media-amazon.com/images/I/71Ly2mFP5iL._AC_SY450_.jpg",
    link: "https://amzn.to/46X01x4"
  },

  // -- HIGH-TECH ------------------------------
  {
    id: 5,
    name: "Xiaomi Smart Band 10",
    cat: "tech", catLabel: "High-Tech",
    desc: "Bracelet connect\u00e9, bo\u00eetier aluminium, \u00e9cran AMOLED 1.72\", autonomie 21\u00a0jours, charge rapide, 150+ sports, suivi sant\u00e9 & sommeil, boussole, iOS & Android, 5\u00a0ATM.",
    price: 41.61, oldPrice: 49.99,
    rating: 4.4, reviews: 3200,
    badge: "Spring Deal", badgeClass: "deal",
    img: "https://m.media-amazon.com/images/I/51bkPDf8dUL._AC_SY355_.jpg",
    link: "https://amzn.to/4di6PZX"
  },
  {
    id: 6,
    name: "Amazon Fire TV Stick HD",
    cat: "tech", catLabel: "High-Tech",
    desc: "T\u00e9l\u00e9commande vocale Alexa int\u00e9gr\u00e9e, streaming Full HD, acc\u00e8s aux applis gratuites & en direct, contr\u00f4les maison connect\u00e9e, compatible avec la plupart des TV.",
    price: 26.99, oldPrice: 44.99,
    rating: 4.6, reviews: 12000,
    badge: "Spring Deal -40%", badgeClass: "deal",
    img: "https://m.media-amazon.com/images/I/51amU6MVvKL._AC_SY355_.jpg",
    link: "https://amzn.to/4b3ZoUV"
  },
  {
    id: 7,
    name: "Apple EarPods (USB-C)",
    cat: "tech", catLabel: "High-Tech",
    desc: "\u00c9couteurs filaires Apple avec connecteur USB-C. Compatible iPhone\u00a015 et ult\u00e9rieurs, iPad et Mac avec port USB-C. Son Apple, branchez et profitez imm\u00e9diatement.",
    price: 17, oldPrice: 19,
    rating: 4.5, reviews: 8500,
    badge: "Promo -11%", badgeClass: "deal",
    img: "https://m.media-amazon.com/images/I/51oMc4XRaaL._AC_SX342_.jpg",
    link: "https://amzn.to/4sgHxQw"
  },
  {
    id: 8,
    name: "TOCOL Coque MagSafe iPhone 15",
    cat: "tech", catLabel: "Accessoires",
    desc: "Coque magn\u00e9tique compatible MagSafe pour iPhone\u00a015 6.1\", protection renforc\u00e9e des objectifs, design translucide mat, anti-choc slim, couleur noir.",
    price: 9.99,
    rating: 4.3, reviews: 1500,
    badge: "Meilleure vente", badgeClass: "",
    img: "https://m.media-amazon.com/images/I/71R3qBMCCtL._AC_SY450_.jpg",
    link: "https://amzn.to/4rrw3Zs"
  },

  // -- GAMING (suite) -------------------------
  {
    id: 9,
    name: "ASUS V16 Gaming V3607VH \u2013 Core\u00a05 / RTX\u00a05050",
    cat: "gaming", catLabel: "Gaming",
    desc: "PC portable gamer 16\" WUXGA 144Hz, Intel Core 5 210H, NVIDIA GeForce RTX 5050, 16\u00a0Go RAM DDR5, 512\u00a0Go SSD, Windows 11 Home. Grande dalle 16\" pour une immersion totale.",
    price: 889, oldPrice: 1199.99,
    rating: 4.4, reviews: 31,
    badge: "Spring Deal -26%", badgeClass: "deal",
    img: "https://m.media-amazon.com/images/I/714aHf-jbrL._AC_SX450_.jpg",
    link: "https://amzn.to/4bC1Z8B"
  },
  {
    id: 18,
    name: "ACEMAGIC LX15PRO \u2013 Gaming Laptop Ryzen\u00a07 / 16\u00a0Go",
    cat: "gaming", catLabel: "Gaming",
    desc: "Gaming laptop 15.6\" FHD, AMD Ryzen 7 7730U 8 c\u0153urs 4.5\u00a0GHz, 16\u00a0Go DDR4\u00d72, 512\u00a0Go SSD M.2, 3\u00d7USB\u00a03.2, BT\u00a05.2, WiFi\u00a06, batterie 54.7\u00a0Wh. Puissance gaming au quotidien.",
    price: 599.99, oldPrice: 659.99,
    rating: 4.2, reviews: 605,
    badge: "Promo -9%", badgeClass: "deal",
    img: "https://m.media-amazon.com/images/I/71MsSWyZ2CL._AC_SX450_.jpg",
    link: "https://amzn.to/4b2h2IE"
  },

  // -- INFORMATIQUE (suite) -------------------
  {
    id: 10,
    name: "HP 15-fd0005sf \u2013 i7-1355U 16\u00a0Go 512\u00a0Go",
    cat: "informatique", catLabel: "Informatique",
    desc: "PC portable 15.6\" FHD IPS, Intel Core i7-1355U, Intel Iris Xe Graphics, 16\u00a0Go RAM, 512\u00a0Go SSD NVMe, batterie longue dur\u00e9e, Windows\u00a011 Home, Clavier AZERTY.",
    price: 579, oldPrice: 679,
    rating: 0, reviews: 0,
    badge: "Promo -15%", badgeClass: "deal",
    img: "https://m.media-amazon.com/images/I/718T2YHONQL._AC_SX450_.jpg",
    link: "https://amzn.to/4llyACY"
  },
  {
    id: 17,
    name: "ACEMAGIC Ryzen\u00a07 7730U \u2013 15.6\" 16\u00a0Go 512\u00a0Go",
    cat: "informatique", catLabel: "Informatique",
    desc: "PC portable 15.6\" FHD, AMD Ryzen 7 7730U 8\u00a0c\u0153urs 4.5\u00a0GHz, Radeon Vega 8, 16\u00a0Go DDR4, 512\u00a0Go SSD, WiFi\u00a06, BT\u00a05.2, HDMI, USB-C. Polyvalent et performant.",
    price: 560.49, oldPrice: 589.99,
    rating: 4.2, reviews: 597,
    badge: "Spring Deal -5%", badgeClass: "deal",
    img: "https://m.media-amazon.com/images/I/71F5IqalWHL._AC_SX450_.jpg",
    link: "https://amzn.to/4bmA77k"
  },

  // -- HIGH-TECH (suite) ----------------------
  {
    id: 11,
    name: "Samsung Galaxy Tab A9+ WiFi \u2013 11\" 256\u00a0Go",
    cat: "tech", catLabel: "High-Tech",
    desc: "Tablette Android 11\" WUXGA+ 90Hz, Wi-Fi 6E, 256\u00a0Go stockage, 8\u00a0000\u00a0mAh, Android\u00a014 avec Galaxy AI. Jeux, vid\u00e9o et productivit\u00e9 en d\u00e9placement.",
    price: 279.90, oldPrice: 329.90,
    rating: 4.4, reviews: 122,
    badge: "Spring Deal -15%", badgeClass: "deal",
    img: "https://m.media-amazon.com/images/I/61caS9M74iL._AC_SX450_.jpg",
    link: "https://amzn.to/4uqe1tf"
  },

  // -- LOISIRS CR\u00c9ATIFS ---------------------
  {
    id: 12,
    name: "Hymarvo 100 Couleurs \u2013 Feutres Double Pointe Aquarelle",
    cat: "loisirs", catLabel: "Loisirs Cr\u00e9atifs",
    desc: "Set de 100 feutres double pointe aquarelle, pointe fine 0.4\u00a0mm + pinceau flexible. Pigments longue dur\u00e9e, id\u00e9al dessin, bullet journal, manga, coloriages adultes.",
    price: 24, oldPrice: 27.99,
    rating: 4.6, reviews: 2083,
    badge: "Spring Deal", badgeClass: "deal",
    img: "https://m.media-amazon.com/images/I/81S5h8MOi2L._AC_SX450_.jpg",
    link: "https://amzn.to/3P1XR9k"
  },
  {
    id: 13,
    name: "VAKKI 168 Marqueurs Acryliques \u2013 Acrylic Paint Markers",
    cat: "loisirs", catLabel: "Loisirs Cr\u00e9atifs",
    desc: "168 marqueurs peinture acrylique \u00e0 base d'eau, pointe feutre polyvalente. Id\u00e9al pierre, bois, calligraphie, toile, verre. Couleurs intenses, s\u00e9chage permanent.",
    price: 71.24, oldPrice: 74.99,
    rating: 4.5, reviews: 562,
    badge: "Spring Deal -5%", badgeClass: "deal",
    img: "https://m.media-amazon.com/images/I/81saq3t-T4L._AC_SX450_.jpg",
    link: "https://amzn.to/4b67NqY"
  },
  {
    id: 14,
    name: "VAKKI 120 Marqueurs Acryliques \u2013 Acrylic Markers",
    cat: "loisirs", catLabel: "Loisirs Cr\u00e9atifs",
    desc: "120 marqueurs peinture acrylique \u00e0 base d'eau, pointe feutre polyvalente. Pour pierre, bois, calligraphie, toile, verre. R\u00e9sultat artistique professionnel.",
    price: 54.99,
    rating: 4.5, reviews: 562,
    badge: "", badgeClass: "",
    img: "https://m.media-amazon.com/images/I/81m4ALIAYqL._AC_SX450_.jpg",
    link: "https://amzn.to/4lllYf8"
  },
  {
    id: 15,
    name: "Coloriages myst\u00e8res Disney \u2013 Grands Classiques Tome\u00a013",
    cat: "loisirs", catLabel: "Loisirs Cr\u00e9atifs",
    desc: "Livre de coloriage myst\u00e8res Disney Grands Classiques Tome\u00a013. Colorie les num\u00e9ros et d\u00e9couvre l'image ! 128\u00a0pages, Hachette Heroes. Sortie 18\u00a0mars 2026.",
    price: 15.95,
    rating: 0, reviews: 0,
    badge: "Pr\u00e9-commande", badgeClass: "new",
    img: "https://m.media-amazon.com/images/I/81Jm40mZCSL._SY450_.jpg",
    link: "https://amzn.to/3Pwamdf"
  },
  {
    id: 16,
    name: "Coloriages myst\u00e8res Pok\u00e9mon \u2013 Colorie et d\u00e9couvre l'image",
    cat: "loisirs", catLabel: "Loisirs Cr\u00e9atifs",
    desc: "Livre de coloriage myst\u00e8res Pok\u00e9mon \u2013 112\u00a0pages, Hachette Heroes (sept.\u00a02025). Colorie par num\u00e9ros et r\u00e9v\u00e8le les personnages Pok\u00e9mon. Id\u00e9al d\u00e8s 8\u00a0ans.",
    price: 13,
    rating: 4.6, reviews: 586,
    badge: "Bestseller", badgeClass: "",
    img: "https://m.media-amazon.com/images/I/819ZaEH2%2BpL._SY450_.jpg",
    link: "https://amzn.to/4sH66pP"
  },
  {
    id: 19,
    name: "Coloriages myst\u00e8res Disney Princesses",
    cat: "loisirs", catLabel: "Loisirs Cr\u00e9atifs",
    desc: "Livre de coloriage myst\u00e8res Disney Princesses \u2013 7\u00a0825\u00a0avis not\u00e9s 4.8\u2605. Coloriez les chiffres et d\u00e9couvrez les images. Par J\u00e9r\u00e9my Mariez. \u00c9d. Hachette Heroes.",
    price: 10.90,
    rating: 4.8, reviews: 7825,
    badge: "Note 4.8\u2605", badgeClass: "",
    img: "https://m.media-amazon.com/images/I/81EqE1%2BIxzL._SY450_.jpg",
    link: "https://amzn.to/40mzk18"
  },
  {
    id: 20,
    name: "DISNEY \u2013 Mes Coloriages Magiques Myst\u00e8res La Mer (7+)",
    cat: "loisirs", catLabel: "Loisirs Cr\u00e9atifs",
    desc: "Cahier de coloriage num\u00e9rot\u00e9 Disney \u2013 th\u00e8me La Mer, d\u00e8s 7\u00a0ans. 23\u00a0coloriages \u00e0 r\u00e9v\u00e9ler, papier \u00e9pais de qualit\u00e9, illustrations Disney officielles. Cadeau id\u00e9al.",
    price: 9.95,
    rating: 4.7, reviews: 557,
    badge: "", badgeClass: "",
    img: "https://m.media-amazon.com/images/I/81I8GJyTZDL._SY450_.jpg",
    link: "https://amzn.to/4sDGk5N"
  },

  // -- GAMING ACCESSOIRES ---------------------
  {
    id: 92,
    name: "LeKuni Tapis de Souris Gaming XXL \u2013 900\u00d7400\u00a0mm",
    cat: "gaming", catLabel: "Gaming",
    desc: "Grand tapis de souris gaming XXL 900\u00d7400\u00a0mm, surface micro-textur\u00e9e pour pr\u00e9cision optimale, base caoutchouc antid\u00e9rapante, bords cousu\u00e9s renforc\u00e9s, compatible toutes souris.",
    price: 12.99,
    rating: 4.5, reviews: 3800,
    badge: "Amazon's Choice", badgeClass: "",
    img: "https://m.media-amazon.com/images/P/B0D7ZGR1W2.01._SL500_.jpg",
    link: "https://amzn.to/47tzlo3"
  },
  {
    id: 21,
    name: "HyperX Cloud II \u2013 Casque Gaming 7.1 Surround",
    cat: "gaming", catLabel: "Gaming",
    desc: "Casque gaming filaire avec surround virtuel 7.1, coussinets m\u00e9moire de forme, micro d\u00e9tachable avec filtre anti-bruit, compatible PC, PS4, Xbox, Switch et mobile. Rouge.",
    price: 59.99, oldPrice: 89.99,
    rating: 4.5, reviews: 48200,
    badge: "Bestseller -33%", badgeClass: "deal",
    img: "https://m.media-amazon.com/images/P/B00SAYCXWG.01._SL500_.jpg",
    link: "https://www.amazon.fr/dp/B00SAYCXWG?tag=snaken18-21"
  },
  {
    id: 22,
    name: "Logitech G502 HERO \u2013 Souris Gaming 25\u00a0600 DPI",
    cat: "gaming", catLabel: "Gaming",
    desc: "Souris gaming filaire, capteur HERO 25K, 11 boutons programmables, poids ajustables, r\u00e9tro\u00e9clairage RGB LIGHTSYNC, roue de d\u00e9filement haute-vitesse. AZERTY.",
    price: 39.99, oldPrice: 59.99,
    rating: 4.7, reviews: 52000,
    badge: "Meilleure vente -33%", badgeClass: "deal",
    img: "https://m.media-amazon.com/images/P/B07GS6ZB7T.01._SL500_.jpg",
    link: "https://www.amazon.fr/dp/B07GS6ZB7T?tag=snaken18-21"
  },
  {
    id: 23,
    name: "TECURS Clavier M\u00e9canique Gaming 60% AZERTY",
    cat: "gaming", catLabel: "Gaming",
    desc: "Clavier gaming m\u00e9canique filaire 60% AZERTY, switches bleus, r\u00e9tro\u00e9clairage LED RGB, anti-ghosting total, compact et ultra-portable. Blanc.",
    price: 34.99, oldPrice: 49.99,
    rating: 4.3, reviews: 1850,
    badge: "Promo -30%", badgeClass: "deal",
    img: "https://m.media-amazon.com/images/P/B0BHGSRTDD.01._SL500_.jpg",
    link: "https://www.amazon.fr/dp/B0BHGSRTDD?tag=snaken18-21"
  },

  // -- HIGH-TECH (nouveaux) -------------------
  {
    id: 24,
    name: "Soundcore Liberty 4 NC \u2013 \u00c9couteurs ANC 98,5%",
    cat: "tech", catLabel: "High-Tech",
    desc: "\u00c9couteurs Bluetooth 5.3 avec r\u00e9duction de bruit active adaptative 98,5%, Hi-Res Audio, 50\u00a0h d'autonomie, \u00e9galiseur personnalis\u00e9, IPX4, charge rapide. Noir.",
    price: 55.99, oldPrice: 79.99,
    rating: 4.5, reviews: 14200,
    badge: "Top choix -30%", badgeClass: "deal",
    img: "https://m.media-amazon.com/images/P/B0BZV4QFP8.01._SL500_.jpg",
    link: "https://www.amazon.fr/dp/B0BZV4QFP8?tag=snaken18-21"
  },
  {
    id: 25,
    name: "Amazon Echo Dot (5e g\u00e9n\u00e9ration) \u2013 Charbon",
    cat: "tech", catLabel: "High-Tech",
    desc: "Enceinte connect\u00e9e Alexa avec son plus puissant, d\u00e9tection de mouvements, hub maison intelligente int\u00e9gr\u00e9, compatible Zigbee, Matter. Contr\u00f4lez vos appareils connect\u00e9s.",
    price: 49.99, oldPrice: 64.99,
    rating: 4.6, reviews: 28500,
    badge: "Amazon's Choice", badgeClass: "",
    img: "https://m.media-amazon.com/images/P/B09B8X9RGM.01._SL500_.jpg",
    link: "https://www.amazon.fr/dp/B09B8X9RGM?tag=snaken18-21"
  },
  {
    id: 26,
    name: "Anker PowerCore 20\u00a0000 mAh \u2013 Batterie externe",
    cat: "tech", catLabel: "High-Tech",
    desc: "Batterie externe 20\u00a0000\u00a0mAh, technologie PowerIQ, port USB-C + 2 USB-A, charge 2 appareils simultan\u00e9ment, compatible iPhone, Android, tablettes. Compacte et fiable.",
    price: 27.99, oldPrice: 34.99,
    rating: 4.6, reviews: 89000,
    badge: "Bestseller -20%", badgeClass: "deal",
    img: "https://m.media-amazon.com/images/P/B07S829LBX.01._SL500_.jpg",
    link: "https://www.amazon.fr/dp/B07S829LBX?tag=snaken18-21"
  },
  {
    id: 27,
    name: "Logitech C920s HD Pro \u2013 Webcam 1080p",
    cat: "tech", catLabel: "High-Tech",
    desc: "Webcam Full HD 1080p/30fps, double micro st\u00e9r\u00e9o, obturateur de confidentialit\u00e9 int\u00e9gr\u00e9, compatible Zoom, Teams, compatible Windows, Mac et Chromebook.",
    price: 79.99, oldPrice: 99.99,
    rating: 4.5, reviews: 31000,
    badge: "Amazon's Choice -20%", badgeClass: "deal",
    img: "https://m.media-amazon.com/images/P/B07MM4V7NR.01._SL500_.jpg",
    link: "https://www.amazon.fr/dp/B07MM4V7NR?tag=snaken18-21"
  },

  // -- INFORMATIQUE (nouveaux) ----------------
  {
    id: 28,
    name: "Keychron K2 \u2013 Clavier M\u00e9canique Sans Fil 84 touches",
    cat: "informatique", catLabel: "Informatique",
    desc: "Clavier m\u00e9canique sans fil compact 84 touches, Bluetooth 5.1 + USB-C, switches Brown tactiles, r\u00e9tro\u00e9clairage blanc, compatible Mac & Windows. Id\u00e9al bureau / home office.",
    price: 84.99, oldPrice: 99.99,
    rating: 4.5, reviews: 7800,
    badge: "Coup de c\u0153ur", badgeClass: "",
    img: "https://m.media-amazon.com/images/P/B07QBPDWLS.01._SL500_.jpg",
    link: "https://www.amazon.fr/dp/B07QBPDWLS?tag=snaken18-21"
  },
  {
    id: 29,
    name: "Support Moniteur avec Hub USB 3.0 \u2013 4 ports",
    cat: "informatique", catLabel: "Informatique",
    desc: "Rehausseur d'\u00e9cran en verre tremp\u00e9, hauteur ergonomique 15\u00a0cm, hub 4 ports USB 3.0 int\u00e9gr\u00e9, base transparente, supporte jusqu'\u00e0 20\u00a0kg. Organisateur bureau.",
    price: 39.99, oldPrice: 54.99,
    rating: 4.4, reviews: 3200,
    badge: "Promo -27%", badgeClass: "deal",
    img: "https://m.media-amazon.com/images/P/B082WBRC7V.01._SL500_.jpg",
    link: "https://www.amazon.fr/dp/B082WBRC7V?tag=snaken18-21"
  },

  // -- LOISIRS CR\u00c9ATIFS (nouveaux) ----------
  {
    id: 30,
    name: "XP-PEN Deco 01 V3 \u2013 Tablette Graphique 10\u00d76\"",
    cat: "loisirs", catLabel: "Loisirs Cr\u00e9atifs",
    desc: "Tablette graphique 10\u00d76\", stylet sans pile 16\u00a0384 niveaux de pression, 8 touches express, compatible Windows, Mac, Android, Linux. Id\u00e9al illustration, dessin, retouche photo.",
    price: 59.99, oldPrice: 79.99,
    rating: 4.4, reviews: 4600,
    badge: "Top Cr\u00e9atifs -25%", badgeClass: "deal",
    img: "https://m.media-amazon.com/images/P/B07VKB37HZ.01._SL500_.jpg",
    link: "https://www.amazon.fr/dp/B07VKB37HZ?tag=snaken18-21"
  },
  {
    id: 31,
    name: "Puzzle 1000 Pi\u00e8ces Adulte \u2013 Beach Shop Color\u00e9",
    cat: "loisirs", catLabel: "Loisirs Cr\u00e9atifs",
    desc: "Puzzle 1000\u00a0pi\u00e8ces adulte, format 70\u00d750\u00a0cm, pi\u00e8ces rigides de haute qualit\u00e9, motif color\u00e9 Beach Shop, livr\u00e9 avec poster. Id\u00e9al d\u00e9tente, famille et d\u00e9coration.",
    price: 16.99, oldPrice: 22.99,
    rating: 4.4, reviews: 2100,
    badge: "Promo -26%", badgeClass: "deal",
    img: "https://m.media-amazon.com/images/P/B0BDHF67BT.01._SL500_.jpg",
    link: "https://www.amazon.fr/dp/B0BDHF67BT?tag=snaken18-21"
  },

  // -- HIGH-TECH (suite 2) --------------------
  {
    id: 32,
    name: "Amazon Basics 36 Piles AAA",
    cat: "tech", catLabel: "High-Tech",
    desc: "Pack de 36 piles alcalines AAA Amazon Basics, longue dur\u00e9e, stockage jusqu'\u00e0 10 ans, compatible tous appareils du quotidien : t\u00e9l\u00e9commandes, jouets, lampes de poche.",
    price: 9.35,
    rating: 4.6, reviews: 45000,
    badge: "Meilleure vente", badgeClass: "",
    img: "https://m.media-amazon.com/images/P/B00LH3DMUO.01._SL500_.jpg",
    link: "https://www.amazon.fr/dp/B00LH3DMUO?tag=snaken18-21"
  },
  {
    id: 33,
    name: "Amazon Fire TV Stick HD (2024)",
    cat: "tech", catLabel: "High-Tech",
    desc: "Nouvelle g\u00e9n\u00e9ration Fire TV Stick HD, streaming fluide Full HD, t\u00e9l\u00e9commande vocale Alexa, acc\u00e8s Netflix, Prime Video, Disney+, YouTube. Plug & play sur n'importe quelle TV HDMI.",
    price: 44.99,
    rating: 4.5, reviews: 8500,
    badge: "Nouveau 2024", badgeClass: "new",
    img: "https://m.media-amazon.com/images/P/B0CQMWQDH4.01._SL500_.jpg",
    link: "https://www.amazon.fr/dp/B0CQMWQDH4?tag=snaken18-21"
  },
  {
    id: 34,
    name: "Duracell CR2032 \u2013 Lot de 8 Piles Bouton",
    cat: "tech", catLabel: "High-Tech",
    desc: "8 piles bouton lithium CR2032 Duracell, tension 3\u00a0V, compatibles montres, cl\u00e9s de voiture, t\u00e9l\u00e9commandes, appareils m\u00e9dicaux. Garantie Duracell jusqu'\u00e0 10 ans de stockage.",
    price: 11.99,
    rating: 4.7, reviews: 32000,
    badge: "Amazon's Choice", badgeClass: "",
    img: "https://m.media-amazon.com/images/P/B06VW5BH2K.01._SL500_.jpg",
    link: "https://www.amazon.fr/dp/B06VW5BH2K?tag=snaken18-21"
  },
  {
    id: 35,
    name: "NEW\u2019C Kit Verre Tremp\u00e9 iPhone 17 (x3)",
    cat: "tech", catLabel: "High-Tech",
    desc: "Pack de 3 protections d'\u00e9cran en verre tremp\u00e9 pour iPhone\u00a017, dure 9H, ultra-transparent, bords arrondis 2.5D, anti-empreintes, application facile sans bulles.",
    price: 7.89,
    rating: 4.5, reviews: 12000,
    badge: "Amazon's Choice", badgeClass: "",
    img: "https://m.media-amazon.com/images/P/B0G35M3XGG.01._SL500_.jpg",
    link: "https://www.amazon.fr/dp/B0G35M3XGG?tag=snaken18-21"
  },
  {
    id: 36,
    name: "Apple EarPods Lightning \u2013 \u00c9couteurs filaires",
    cat: "tech", catLabel: "High-Tech",
    desc: "\u00c9couteurs intra-auriculaires Apple avec connecteur Lightning pour iPhone, qualit\u00e9 audio Apple, micro int\u00e9gr\u00e9 pour appels mains libres, boutons de contr\u00f4le du volume.",
    price: 18.99,
    rating: 4.5, reviews: 6500,
    badge: "", badgeClass: "",
    img: "https://m.media-amazon.com/images/P/B0D7MNX9Y5.01._SL500_.jpg",
    link: "https://www.amazon.fr/dp/B0D7MNX9Y5?tag=snaken18-21"
  },
  {
    id: 37,
    name: "Apple AirPods 4 \u2013 \u00c9couteurs Bluetooth",
    cat: "tech", catLabel: "High-Tech",
    desc: "AirPods 4\u00e8me g\u00e9n\u00e9ration Apple, puce H2, son spatial personnalis\u00e9, Transparency Mode actif, jusqu'\u00e0 30\u00a0h autonomie totale (boitier), charge USB-C et MagSafe.",
    price: 109.00,
    rating: 4.7, reviews: 18000,
    badge: "Nouveau", badgeClass: "new",
    img: "https://m.media-amazon.com/images/P/B0DGHWD7CT.01._SL500_.jpg",
    link: "https://www.amazon.fr/dp/B0DGHWD7CT?tag=snaken18-21"
  },
  {
    id: 38,
    name: "Imou Cam\u00e9ra Surveillance WiFi 2K",
    cat: "tech", catLabel: "High-Tech",
    desc: "Cam\u00e9ra int\u00e9rieure 2K WiFi, vision nocturne couleur, d\u00e9tection de mouvements, audio bidirectionnel, stockage SD + cloud, compatible Alexa. Surveillance 24/7 depuis l\u2019app.",
    price: 18.99,
    rating: 4.3, reviews: 7800,
    badge: "Amazon's Choice", badgeClass: "",
    img: "https://m.media-amazon.com/images/P/B08X6DCJT2.01._SL500_.jpg",
    link: "https://www.amazon.fr/dp/B08X6DCJT2?tag=snaken18-21"
  },
  {
    id: 39,
    name: "Kindle Paperwhite \u2013 Nouvelle g\u00e9n\u00e9ration",
    cat: "tech", catLabel: "High-Tech",
    desc: "Liseuse Kindle Paperwhite \u00e9cran 7\" 300\u00a0ppp r\u00e9gl. chaud/froid, IPX8, stockage\u00a016\u00a0Go, autonomie 12 semaines, sans publicit\u00e9. Legere et confortable pour lire partout.",
    price: 179.99,
    rating: 4.7, reviews: 22000,
    badge: "Amazon's Choice", badgeClass: "",
    img: "https://m.media-amazon.com/images/P/B0CFPWLGF2.01._SL500_.jpg",
    link: "https://www.amazon.fr/dp/B0CFPWLGF2?tag=snaken18-21"
  },
  {
    id: 40,
    name: "Amazon Fire TV Stick 4K Max",
    cat: "tech", catLabel: "High-Tech",
    desc: "Streaming 4K Ultra HD, Wi-Fi 6E, t\u00e9l\u00e9commande vocale Alexa, contr\u00f4les TV/ampli, plus de 1,5 million de films et s\u00e9ries. Le Fire TV Stick le plus puissant d\u2019Amazon.",
    price: 79.99,
    rating: 4.6, reviews: 9200,
    badge: "4K Wi-Fi 6E", badgeClass: "new",
    img: "https://m.media-amazon.com/images/P/B0CW4HD359.01._SL500_.jpg",
    link: "https://www.amazon.fr/dp/B0CW4HD359?tag=snaken18-21"
  },
  {
    id: 41,
    name: "JBL GO 4 \u2013 Enceinte Bluetooth Portable",
    cat: "tech", catLabel: "High-Tech",
    desc: "Enceinte Bluetooth 4 compacte, son JBL Pro Sound, IP67 \u00e9tanche & anti-poussi\u00e8re, 7\u00a0h d'autonomie, USB-C, compatible smartphones Android et iOS. Tiens dans la paume.",
    price: 38.00,
    rating: 4.6, reviews: 11000,
    badge: "Amazon's Choice", badgeClass: "",
    img: "https://m.media-amazon.com/images/P/B0CX5C6WP3.01._SL500_.jpg",
    link: "https://www.amazon.fr/dp/B0CX5C6WP3?tag=snaken18-21"
  },

  // -- CUISINE & MAISON -----------------------
  {
    id: 42,
    name: "De\u2019Longhi EcoDecalk \u2013 D\u00e9tartrant Universel 500ml",
    cat: "maison", catLabel: "Cuisine & Maison",
    desc: "D\u00e9tartrant liquide De'Longhi EcoDecalk 500\u00a0ml, formule 100% naturelle, compatible toutes machines \u00e0 caf\u00e9 et appareils \u00e9lectrom\u00e9nagers. Prolonge la dur\u00e9e de vie de vos machines.",
    price: 8.85,
    rating: 4.7, reviews: 28000,
    badge: "Amazon's Choice", badgeClass: "",
    img: "https://m.media-amazon.com/images/P/B008YETL18.01._SL500_.jpg",
    link: "https://www.amazon.fr/dp/B008YETL18?tag=snaken18-21"
  },
  {
    id: 43,
    name: "Amazon Basics Drap Housse 160\u00d7200\u00a0cm",
    cat: "maison", catLabel: "Cuisine & Maison",
    desc: "Drap housse microfibre doux et respirant, 160\u00d7200\u00a0cm + 30\u00a0cm profondeur, lavable en machine, r\u00e9sistant au froissage, disponible en plusieurs coloris. Qualit\u00e9 Amazon Basics.",
    price: 11.29,
    rating: 4.4, reviews: 15000,
    badge: "Meilleure vente", badgeClass: "",
    img: "https://m.media-amazon.com/images/P/B00Q4TMM3O.01._SL500_.jpg",
    link: "https://www.amazon.fr/dp/B00Q4TMM3O?tag=snaken18-21"
  },
  {
    id: 44,
    name: "Philips Rasoir Anti-Bouloche GC026",
    cat: "maison", catLabel: "Cuisine & Maison",
    desc: "Rasoir anti-bouloche Philips pour pull, gilet, cachemire. Lames en acier inox, r\u00e9servoir amovible lavable, fonctionne sur piles AA. Redonne un aspect neuf \u00e0 vos v\u00eatements.",
    price: 9.99,
    rating: 4.4, reviews: 42000,
    badge: "Amazon's Choice", badgeClass: "",
    img: "https://m.media-amazon.com/images/P/B00E3862DE.01._SL500_.jpg",
    link: "https://www.amazon.fr/dp/B00E3862DE?tag=snaken18-21"
  },
  {
    id: 45,
    name: "Utopia Bedding Prot\u00e8ge-Matelas Imperm\u00e9able",
    cat: "maison", catLabel: "Cuisine & Maison",
    desc: "Prot\u00e8ge-matelas imperm\u00e9able Utopia Bedding, surface Jersey coton doux, membrane imperm\u00e9able silencieuse, lavage machine 60\u00b0C, protection anti-acariens et taches.",
    price: 17.49,
    rating: 4.5, reviews: 35000,
    badge: "Meilleure vente", badgeClass: "",
    img: "https://m.media-amazon.com/images/P/B077SWXDS5.01._SL500_.jpg",
    link: "https://www.amazon.fr/dp/B077SWXDS5?tag=snaken18-21"
  },
  {
    id: 46,
    name: "Sanytol Lingettes D\u00e9sinfectantes x72",
    cat: "maison", catLabel: "Cuisine & Maison",
    desc: "Lot de 72 lingettes d\u00e9sinfectantes Sanytol, \u00e9limine 99,9% des bact\u00e9ries et virus, parfum\u00e9es, utilisables sur surfaces dures en cuisine, salle de bain et bureau.",
    price: 1.54,
    rating: 4.5, reviews: 8900,
    badge: "Meilleure vente", badgeClass: "",
    img: "https://m.media-amazon.com/images/P/B01FXICQ50.01._SL500_.jpg",
    link: "https://www.amazon.fr/dp/B01FXICQ50?tag=snaken18-21"
  },
  {
    id: 47,
    name: "SWEET NIGHT Prot\u00e8ge-Matelas 140\u00d7190\u00a0cm",
    cat: "maison", catLabel: "Cuisine & Maison",
    desc: "Prot\u00e8ge-matelas respirant 140\u00d7190\u00a0cm, imperm\u00e9able silencieux, surface bambou doux, certifi\u00e9 OEKO-TEX, lavable 60\u00b0C, prot\u00e8ge des acariens, allergies et transpirations.",
    price: 22.99,
    rating: 4.5, reviews: 18000,
    badge: "", badgeClass: "",
    img: "https://m.media-amazon.com/images/P/B005QKZLQC.01._SL500_.jpg",
    link: "https://www.amazon.fr/dp/B005QKZLQC?tag=snaken18-21"
  },
  {
    id: 48,
    name: "Vileda H2prO Syst\u00e8me Balai Plat + Recharge",
    cat: "maison", catLabel: "Cuisine & Maison",
    desc: "Syst\u00e8me balai plat Vileda H2prO avec r\u00e9servoir int\u00e9gr\u00e9 900\u00a0ml, microfibre lavable, t\u00eate artticul\u00e9e 360\u00b0, nettoie et s\u00e8che sols, manche t\u00e9lescopique r\u00e9glable.",
    price: 54.99,
    rating: 4.3, reviews: 2800,
    badge: "Nouveau", badgeClass: "new",
    img: "https://m.media-amazon.com/images/P/B0F3JF1YBR.01._SL500_.jpg",
    link: "https://www.amazon.fr/dp/B0F3JF1YBR?tag=snaken18-21"
  },
  {
    id: 49,
    name: "Tapo C210 \u2013 Cam\u00e9ra WiFi 2K 360\u00b0",
    cat: "maison", catLabel: "Cuisine & Maison",
    desc: "Cam\u00e9ra surveillance int\u00e9rieure Tapo C210, r\u00e9solution 3\u00a0MP 2K, rotation 360\u00b0, vision nocturne, d\u00e9tection IA personnes/animaux, audio bidirectionnel, stockage SD ou cloud.",
    price: 22.99,
    rating: 4.5, reviews: 19000,
    badge: "Amazon's Choice", badgeClass: "",
    img: "https://m.media-amazon.com/images/P/B095CLQ1PT.01._SL500_.jpg",
    link: "https://www.amazon.fr/dp/B095CLQ1PT?tag=snaken18-21"
  },
  {
    id: 50,
    name: "INIU Batterie Externe 10\u00a0000\u00a0mAh USB-C",
    cat: "maison", catLabel: "Cuisine & Maison",
    desc: "Batterie externe ultra-mince INIU 10\u00a0000\u00a0mAh, charge rapide 22,5\u00a0W, port USB-C PD + 2 USB-A, compatible iPhone, Android et \u00e9couteurs. Certifi\u00e9e CE, FCC, ROHS.",
    price: 19.99,
    rating: 4.6, reviews: 42000,
    badge: "Meilleure vente", badgeClass: "",
    img: "https://m.media-amazon.com/images/P/B08JTQ66K7.01._SL500_.jpg",
    link: "https://www.amazon.fr/dp/B08JTQ66K7?tag=snaken18-21"
  },
  {
    id: 51,
    name: "Kindle \u2013 Nouvelle g\u00e9n\u00e9ration (2024)",
    cat: "maison", catLabel: "Cuisine & Maison",
    desc: "Liseuse Kindle 7\" 300\u00a0ppp, \u00e9clairage r\u00e9glable chaud/froid, stockage 16\u00a0Go, 12 semaines d\u2019autonomie, charge USB-C. L\u00e9g\u00e8re et compacte, plus de 5 millions d\u2019ebooks.",
    price: 119.99,
    rating: 4.6, reviews: 14000,
    badge: "", badgeClass: "",
    img: "https://m.media-amazon.com/images/P/B0CP32JG8B.01._SL500_.jpg",
    link: "https://www.amazon.fr/dp/B0CP32JG8B?tag=snaken18-21"
  },

  // -- SPORTS & LOISIRS -----------------------
  {
    id: 52,
    name: "GRIFEMA Cha\u00eene Antivol V\u00e9lo 120\u00a0cm",
    cat: "sport", catLabel: "Sports & Loisirs",
    desc: "Cha\u00eene antivol v\u00e9lo GRIFEMA 120\u00a0cm, maillons en acier 8\u00a0mm, cadenas \u00e0 combinaison 4 chiffres, gaine de protection noire, compatible v\u00e9lo, trottinette et scooter.",
    price: 11.99,
    rating: 4.3, reviews: 3200,
    badge: "", badgeClass: "",
    img: "https://m.media-amazon.com/images/P/B0C3YMHJ3R.01._SL500_.jpg",
    link: "https://www.amazon.fr/dp/B0C3YMHJ3R?tag=snaken18-21"
  },
  {
    id: 53,
    name: "Amazon Basics Halt\u00e8res N\u00e9opr\u00e8ne 2\u00d72\u00a0kg",
    cat: "sport", catLabel: "Sports & Loisirs",
    desc: "Paire d'halt\u00e8res en n\u00e9opr\u00e8ne Amazon Basics, surface antid\u00e9rapante confortable, extr\u00e9mit\u00e9s plates anti-roulement, disponibles en plusieurs grammages pour musculation et fitness.",
    price: 23.99,
    rating: 4.6, reviews: 28000,
    badge: "Meilleure vente", badgeClass: "",
    img: "https://m.media-amazon.com/images/P/B078XXP3RH.01._SL500_.jpg",
    link: "https://www.amazon.fr/dp/B078XXP3RH?tag=snaken18-21"
  },
  {
    id: 54,
    name: "Fitgriff Sangle de Tirage Musculation",
    cat: "sport", catLabel: "Sports & Loisirs",
    desc: "Sangles de tirage Fitgriff pour halt\u00e8res et barres, coton rembourr\u00e9 anti-glissement, convient deadlift, rowing, tractions. Renforce la prise en main et \u00e9vite les ampoules.",
    price: 9.99,
    rating: 4.6, reviews: 15000,
    badge: "Amazon's Choice", badgeClass: "",
    img: "https://m.media-amazon.com/images/P/B01N6NLP5B.01._SL500_.jpg",
    link: "https://www.amazon.fr/dp/B01N6NLP5B?tag=snaken18-21"
  },
  {
    id: 55,
    name: "Fitgriff Sangle Cheville Poulie V3",
    cat: "sport", catLabel: "Sports & Loisirs",
    desc: "Sangle cheville premium pour poulie basse ou machine de musculation, rembourrage \u00e9pais, mousqueton rotatif 360\u00b0, compatible toutes machines salle de sport et home gym.",
    price: 9.99,
    rating: 4.5, reviews: 6500,
    badge: "Amazon's Choice", badgeClass: "",
    img: "https://m.media-amazon.com/images/P/B0CMY7VF71.01._SL500_.jpg",
    link: "https://www.amazon.fr/dp/B0CMY7VF71?tag=snaken18-21"
  },
  {
    id: 56,
    name: "Xiaomi Smart Band 10 \u2013 Montre Connect\u00e9e",
    cat: "sport", catLabel: "Sports & Loisirs",
    desc: "\u00c9cran AMOLED 1.72\", 150+ modes sportifs, suivi sant\u00e9 continu (SpO2, fr\u00e9quence cardiaque, sommeil), autonomie 21 jours, 5\u00a0ATM \u00e9tanche, compatible Android et iOS.",
    price: 41.99,
    rating: 4.4, reviews: 5800,
    badge: "", badgeClass: "",
    img: "https://m.media-amazon.com/images/P/B0DYF82545.01._SL500_.jpg",
    link: "https://www.amazon.fr/dp/B0DYF82545?tag=snaken18-21"
  },
  {
    id: 57,
    name: "Super Sparrow Gourde Sport sans BPA 1\u00a0L",
    cat: "sport", catLabel: "Sports & Loisirs",
    desc: "Gourde isotherme 1\u00a0L en acier inoxydable, sans BPA, garde les boissons froides 24\u00a0h / chaudes 12\u00a0h, bouchon \u00e9tanche avec paille, id\u00e9ale sport, randonn\u00e9e et bureau.",
    price: 12.69,
    rating: 4.6, reviews: 22000,
    badge: "Amazon's Choice", badgeClass: "",
    img: "https://m.media-amazon.com/images/P/B075HCLXKL.01._SL500_.jpg",
    link: "https://www.amazon.fr/dp/B075HCLXKL?tag=snaken18-21"
  },
  {
    id: 58,
    name: "Edifit \u00c9lastiques Musculation x3 Niveaux",
    cat: "sport", catLabel: "Sports & Loisirs",
    desc: "Set de 3 bandes \u00e9lastiques de r\u00e9sistance Edifit, r\u00e9sistances 15-35 kg, latex naturel, id\u00e9al squat, fessiers, fitness maison, crossfit. Guide d'exercices inclus.",
    price: 9.99,
    rating: 4.4, reviews: 4200,
    badge: "", badgeClass: "",
    img: "https://m.media-amazon.com/images/P/B0CTR171B7.01._SL500_.jpg",
    link: "https://www.amazon.fr/dp/B0CTR171B7?tag=snaken18-21"
  },
  {
    id: 59,
    name: "Fokky \u00c9lastiques Musculation x5 Mini-Bandes",
    cat: "sport", catLabel: "Sports & Loisirs",
    desc: "Lot de 5 mini-bandes \u00e9lastiques Fokky avec sac de transport, 5 r\u00e9sistances diff\u00e9rentes, latex naturel durable, parfait pour r\u00e9\u00e9ducation, Pilates, yoga et renforcement musculaire.",
    price: 7.49,
    rating: 4.4, reviews: 8900,
    badge: "Amazon's Choice", badgeClass: "",
    img: "https://m.media-amazon.com/images/P/B09CTVQWK8.01._SL500_.jpg",
    link: "https://www.amazon.fr/dp/B09CTVQWK8?tag=snaken18-21"
  },
  {
    id: 60,
    name: "PROIRON Tapis de Yoga 10\u00a0mm Antid\u00e9rapant",
    cat: "sport", catLabel: "Sports & Loisirs",
    desc: "Tapis de yoga \u00e9pais 10\u00a0mm en TPE \u00e9cologique, surface antid\u00e9rapante double face, dimens. 183\u00d761\u00a0cm, l\u00e9ger avec sangle transport, id\u00e9al yoga, Pilates et fitness sol.",
    price: 29.99,
    rating: 4.5, reviews: 12000,
    badge: "", badgeClass: "",
    img: "https://m.media-amazon.com/images/P/B07BKQRWHT.01._SL500_.jpg",
    link: "https://www.amazon.fr/dp/B07BKQRWHT?tag=snaken18-21"
  },
  {
    id: 61,
    name: "Lepro Lampe Frontale LED Rechargeable USB",
    cat: "sport", catLabel: "Sports & Loisirs",
    desc: "Lampe frontale LED Lepro 1000 lumens, recharge USB-C, \u00e9tanche IPX4, 5 modes d'\u00e9clairage, angle r\u00e9glable 90\u00b0, autonomie 8\u00a0h. Id\u00e9ale randonn\u00e9e, camping, bricolage.",
    price: 24.99,
    rating: 4.4, reviews: 7500,
    badge: "", badgeClass: "",
    img: "https://m.media-amazon.com/images/P/B07Y21GMKQ.01._SL500_.jpg",
    link: "https://www.amazon.fr/dp/B07Y21GMKQ?tag=snaken18-21"
  },

  // -- BEAUTÉ & PARFUM ------------------------
  {
    id: 62,
    name: "BIODANCE Masque Hydrogel Bio-Collag\u00e8ne x4",
    cat: "beaute", catLabel: "Beaut\u00e9 & Parfum",
    desc: "4 masques visage hydrogel Bio-Collag\u00e8ne BIODANCE, texture g\u00e9latineuse translucide, hydratation intense 72\u00a0h, lift effect, anti-\u00e2ge, sans parfum. K-Beauty bestseller mondial.",
    price: 12.92,
    rating: 4.4, reviews: 9800,
    badge: "Amazon's Choice", badgeClass: "",
    img: "https://m.media-amazon.com/images/P/B0B2RM68G2.01._SL500_.jpg",
    link: "https://www.amazon.fr/dp/B0B2RM68G2?tag=snaken18-21"
  },
  {
    id: 63,
    name: "CeraVe Gel Moussant Anti-Imperfections",
    cat: "beaute", catLabel: "Beaut\u00e9 & Parfum",
    desc: "Gel nettoyant visage CeraVe avec 2% acide salicylique, niacinamide et 3 c\u00e9ramides essentielles, nettoie en douceur sans assecher, recommand\u00e9 par les dermatologues.",
    price: 8.90,
    rating: 4.5, reviews: 21000,
    badge: "Amazon's Choice", badgeClass: "",
    img: "https://m.media-amazon.com/images/P/B0B7RQ46LD.01._SL500_.jpg",
    link: "https://www.amazon.fr/dp/B0B7RQ46LD?tag=snaken18-21"
  },
  {
    id: 64,
    name: "BIONOBLE Huile de Ricin Bio 100\u00a0ml",
    cat: "beaute", catLabel: "Beaut\u00e9 & Parfum",
    desc: "Huile de ricin 100% bio pression \u00e0 froid BIONOBLE, 100\u00a0ml, favorise la pousse des cheveux, cils et sourcils, hydrate la peau et les ongles. Certifi\u00e9e bio USDA.",
    price: 9.99,
    rating: 4.4, reviews: 8200,
    badge: "", badgeClass: "",
    img: "https://m.media-amazon.com/images/P/B08D6G78W6.01._SL500_.jpg",
    link: "https://www.amazon.fr/dp/B08D6G78W6?tag=snaken18-21"
  },
  {
    id: 65,
    name: "The Ordinary Niacinamide 10% + Zinc 1%",
    cat: "beaute", catLabel: "Beaut\u00e9 & Parfum",
    desc: "S\u00e9rum visage The Ordinary Niacinamide 10% + Zinc 1%, r\u00e9duit les pores dilatés, l'\u00e9clat irr\u00e9gulier et l'\u2019aspect huil\u00e9, texture l\u00e9g\u00e8re, sans huile, convient toutes peaux.",
    price: 5.75,
    rating: 4.5, reviews: 48000,
    badge: "Bestseller", badgeClass: "",
    img: "https://m.media-amazon.com/images/P/B01MDTVZTZ.01._SL500_.jpg",
    link: "https://www.amazon.fr/dp/B01MDTVZTZ?tag=snaken18-21"
  },
  {
    id: 66,
    name: "Maybelline Instant Effaceur Anti-Cernes",
    cat: "beaute", catLabel: "Beaut\u00e9 & Parfum",
    desc: "Correcteur anti-cernes Maybelline Instant Eraser, couvrance naturelle, applicateur \u00e9ponge confortable, texture cr\u00e8meuse qui ne s\u00e8che pas. Dissimule cernes et imperfections.",
    price: 8.19,
    rating: 4.3, reviews: 11000,
    badge: "", badgeClass: "",
    img: "https://m.media-amazon.com/images/P/B0BLCZX6XP.01._SL500_.jpg",
    link: "https://www.amazon.fr/dp/B0BLCZX6XP?tag=snaken18-21"
  },
  {
    id: 67,
    name: "Mixa Cr\u00e8me Cica R\u00e9paration Intense",
    cat: "beaute", catLabel: "Beaut\u00e9 & Parfum",
    desc: "Cr\u00e8me peau sensible Mixa Cica R\u00e9paration Intense, enrichie en centella asiatica et cer\u00e9amides, r\u00e9pare et apaise les peaux sujettes aux irritations. Sans parfum.",
    price: 6.49,
    rating: 4.4, reviews: 7500,
    badge: "", badgeClass: "",
    img: "https://m.media-amazon.com/images/P/B0CB9BTW8Q.01._SL500_.jpg",
    link: "https://www.amazon.fr/dp/B0CB9BTW8Q?tag=snaken18-21"
  },
  {
    id: 68,
    name: "Maybelline Mascara Volume Express Intense",
    cat: "beaute", catLabel: "Beaut\u00e9 & Parfum",
    desc: "Mascara Maybelline Volume Express Colossal Intense, formule nourrissante \u00e0 la cera d\u2019abeille, brosse en fibre, r\u00e9sultat 9\u00d7 plus de volume, tenue jusqu'\u00e0 24\u00a0h. Noir intense.",
    price: 9.99,
    rating: 4.4, reviews: 14000,
    badge: "Meilleure vente", badgeClass: "",
    img: "https://m.media-amazon.com/images/P/B08P4YPB8Q.01._SL500_.jpg",
    link: "https://www.amazon.fr/dp/B08P4YPB8Q?tag=snaken18-21"
  },
  {
    id: 69,
    name: "Franck Provost Soin 4-en-1 sans Rin\u00e7age",
    cat: "beaute", catLabel: "Beaut\u00e9 & Parfum",
    desc: "Soin cheveux sans rin\u00e7age Franck Provost 4-en-1 : d\u00e9m\u00ealer, nourrir, hydrater et prot\u00e9ger. S'applique sur cheveux humides, l\u00e9ger et non gras. Parfum fleuri d\u00e9licat.",
    price: 4.29,
    rating: 4.4, reviews: 5600,
    badge: "", badgeClass: "",
    img: "https://m.media-amazon.com/images/P/B0CQP9S97Y.01._SL500_.jpg",
    link: "https://www.amazon.fr/dp/B0CQP9S97Y?tag=snaken18-21"
  },
  {
    id: 70,
    name: "The Ordinary Tonique Acide Glycolique 7%",
    cat: "beaute", catLabel: "Beaut\u00e9 & Parfum",
    desc: "Tonique exfoliant The Ordinary \u00e0 7% d'acide glycolique + tasmanian pepperberry, unifie le teint, affine la texture de peau, \u00e0 utiliser le soir. Formule v\u00e9gane et sans gluten.",
    price: 13.27,
    rating: 4.4, reviews: 31000,
    badge: "Amazon's Choice", badgeClass: "",
    img: "https://m.media-amazon.com/images/P/B071914GGL.01._SL500_.jpg",
    link: "https://www.amazon.fr/dp/B071914GGL?tag=snaken18-21"
  },
  {
    id: 71,
    name: "Revlon UniqOne Masque Spray sans Rin\u00e7age",
    cat: "beaute", catLabel: "Beaut\u00e9 & Parfum",
    desc: "Masque spray cheveux sans rin\u00e7age Revlon UniqOne, 10 actions en 1 : r\u00e9pare, hydrate, d\u00e9m\u00eale, prot\u00e8ge chaleur, lisse et fait briller. Application facile sur cheveux humides.",
    price: 8.96,
    rating: 4.6, reviews: 19000,
    badge: "Bestseller", badgeClass: "",
    img: "https://m.media-amazon.com/images/P/B00M9B66BU.01._SL500_.jpg",
    link: "https://www.amazon.fr/dp/B00M9B66BU?tag=snaken18-21"
  },

  // -- JEUX & JOUETS --------------------------
  {
    id: 72,
    name: "LEGO Speed Champions Ferrari F1 SF-24",
    cat: "jouets", catLabel: "Jeux & Jouets",
    desc: "LEGO Speed Champions 76354 \u2013 r\u00e9plique de la Ferrari F1 SF-24 de Charles Leclerc, 261 pi\u00e8ces, minifigurine pilote incluse, fen\u00eatre ouvrante. D\u00e8s 9 ans. Collector.",
    price: 19.99,
    rating: 4.6, reviews: 3200,
    badge: "", badgeClass: "",
    img: "https://m.media-amazon.com/images/P/B0DHSBBV6R.01._SL500_.jpg",
    link: "https://www.amazon.fr/dp/B0DHSBBV6R?tag=snaken18-21"
  },
  {
    id: 73,
    name: "Pok\u00e9mon Coffret Dresseur \u00c9lite H\u00e9ros Transcendants",
    cat: "jouets", catLabel: "Jeux & Jouets",
    desc: "Coffret de dresseur \u00e9lite Pok\u00e9mon H\u00e9ros Transcendants 2025 : 9 boosters, 2 cartes promo holo, coin de jeu et tapis. Parfait pour collection et tournois. Officiel The Pok\u00e9mon Company.",
    price: 55.99,
    rating: 4.6, reviews: 1800,
    badge: "Nouveau", badgeClass: "new",
    img: "https://m.media-amazon.com/images/P/B0G3YH3QN4.01._SL500_.jpg",
    link: "https://www.amazon.fr/dp/B0G3YH3QN4?tag=snaken18-21"
  },
  {
    id: 74,
    name: "Pok\u00e9mon Coffret Flammes Fantasmagoriques",
    cat: "jouets", catLabel: "Jeux & Jouets",
    desc: "Coffret Dresseur \u00c9lite Pok\u00e9mon Flammes Fantasmagoriques 2025 : 9 boosters, cartes rares, tapis de jeu. Nouvelle extension officielle, indispensable pour les fans Pok\u00e9mon.",
    price: 55.99,
    rating: 4.5, reviews: 850,
    badge: "Nouveau", badgeClass: "new",
    img: "https://m.media-amazon.com/images/P/B0FTG12DDK.01._SL500_.jpg",
    link: "https://www.amazon.fr/dp/B0FTG12DDK?tag=snaken18-21"
  },
  {
    id: 75,
    name: "LEGO Botanicals Orchid\u00e9e Miniature",
    cat: "jouets", catLabel: "Jeux & Jouets",
    desc: "LEGO Icons Orchid\u00e9e 10311, 608 pi\u00e8ces, 2 tiges d'orchid\u00e9e avec feuilles et racines articulables, pot blanc. D\u00e9coration int\u00e9rieure LEGO, d\u00e8s 18 ans. Fleurs ne fanent jamais.",
    price: 19.99,
    rating: 4.8, reviews: 6500,
    badge: "Amazon's Choice", badgeClass: "",
    img: "https://m.media-amazon.com/images/P/B01N6CJ1QW.01._SL500_.jpg",
    link: "https://www.amazon.fr/dp/B01N6CJ1QW?tag=snaken18-21"
  },
  {
    id: 76,
    name: "LEGO Creator 3-en-1 Adorable Lapin",
    cat: "jouets", catLabel: "Jeux & Jouets",
    desc: "LEGO Creator 31162 Adorable Lapin 3-en-1 : construire un lapin, un perroquet ou un caneton. 205 pi\u00e8ces, accessoires inclus. D\u00e8s 7 ans, parfait cadeau.",
    price: 12.99,
    rating: 4.7, reviews: 2800,
    badge: "", badgeClass: "",
    img: "https://m.media-amazon.com/images/P/B0DHSDCRNC.01._SL500_.jpg",
    link: "https://www.amazon.fr/dp/B0DHSDCRNC?tag=snaken18-21"
  },
  {
    id: 77,
    name: "LEGO Classic Bo\u00eete de Briques Cr\u00e9atives",
    cat: "jouets", catLabel: "Jeux & Jouets",
    desc: "LEGO Classic 10696 Bo\u00eete de briques m\u00e9dium, 484 pi\u00e8ces multicolores, 3 instructions incluses et constructions libres illimit\u00e9es. Id\u00e9al pour stimuler la cr\u00e9ativit\u00e9 d\u00e8s 4 ans.",
    price: 19.90,
    rating: 4.7, reviews: 12000,
    badge: "Bestseller", badgeClass: "",
    img: "https://m.media-amazon.com/images/P/B00NVDP3ZU.01._SL500_.jpg",
    link: "https://www.amazon.fr/dp/B00NVDP3ZU?tag=snaken18-21"
  },
  {
    id: 78,
    name: "Pok\u00e9mon Collection Journ\u00e9e 2026",
    cat: "jouets", catLabel: "Jeux & Jouets",
    desc: "Collection Pok\u00e9mon Journ\u00e9e 2026 officielle, contient boosters exclusifs, cartes promo et accessoires de jeu. \u00c9dition limit\u00e9e collector, id\u00e9al cadeau pour fans Pok\u00e9mon.",
    price: 18.99,
    rating: 4.5, reviews: 1200,
    badge: "", badgeClass: "",
    img: "https://m.media-amazon.com/images/P/B0G3QLKXC5.01._SL500_.jpg",
    link: "https://www.amazon.fr/dp/B0G3QLKXC5?tag=snaken18-21"
  },
  {
    id: 79,
    name: "RUBIES D\u00e9guisement Enfant Spider-Man",
    cat: "jouets", catLabel: "Jeux & Jouets",
    desc: "D\u00e9guisement officiel Spider-Man Marvel pour enfant, combinaison int\u00e9grale avec imprim\u00e9 muscles, masque inclus. Plusieurs tailles disponibles. Id\u00e9al Carnaval, Halloween et f\u00eates.",
    price: 17.36,
    rating: 4.3, reviews: 3500,
    badge: "", badgeClass: "",
    img: "https://m.media-amazon.com/images/P/B09Y681C52.01._SL500_.jpg",
    link: "https://www.amazon.fr/dp/B09Y681C52?tag=snaken18-21"
  },
  {
    id: 80,
    name: "ATM Gaming PILI PILI \u2013 Jeu de soci\u00e9t\u00e9",
    cat: "jouets", catLabel: "Jeux & Jouets",
    desc: "Jeu de soci\u00e9t\u00e9 PILI PILI de ATM Gaming, jeu de cartes et d'actions d\u00e9coiff\u00e9, 2 \u00e0 6 joueurs, d\u00e8s 6 ans, parties de 15 \u00e0 30 min. Id\u00e9al apéro et soir\u00e9es en famille.",
    price: 13.49,
    rating: 4.4, reviews: 580,
    badge: "", badgeClass: "",
    img: "https://m.media-amazon.com/images/P/B0FBMDZY83.01._SL500_.jpg",
    link: "https://www.amazon.fr/dp/B0FBMDZY83?tag=snaken18-21"
  },
  {
    id: 81,
    name: "Clementoni Wonderful Butterflies \u2013 104 pi\u00e8ces",
    cat: "jouets", catLabel: "Jeux & Jouets",
    desc: "Puzzle Clementoni Wonderful Butterflies 104 pi\u00e8ces pour enfants, format 70\u00d750\u00a0cm, illustration papillons color\u00e9s, finition brillante, d\u00e8s 6 ans. Collection SuperColor Clementoni.",
    price: 5.49,
    rating: 4.5, reviews: 1100,
    badge: "", badgeClass: "",
    img: "https://m.media-amazon.com/images/P/B0DWY1KTDW.01._SL500_.jpg",
    link: "https://www.amazon.fr/dp/B0DWY1KTDW?tag=snaken18-21"
  },

  // -- HYGIÈNE & SANTÉ ------------------------
  {
    id: 82,
    name: "Magn\u00e9sium Bisglycinate + Vitamine B6",
    cat: "sante", catLabel: "Hygi\u00e8ne & Sant\u00e9",
    desc: "Compl\u00e9ment alimentaire magn\u00e9sium bisglycinate haute absorption + vitamine B6, r\u00e9duit la fatigue, soutient le syst\u00e8me nerveux, 90 g\u00e9lules v\u00e9g\u00e9tales, sans additifs inutiles.",
    price: 19.99,
    rating: 4.4, reviews: 12000,
    badge: "Amazon's Choice", badgeClass: "",
    img: "https://m.media-amazon.com/images/P/B07LH7GDT8.01._SL500_.jpg",
    link: "https://www.amazon.fr/dp/B07LH7GDT8?tag=snaken18-21"
  },
  {
    id: 83,
    name: "Collag\u00e8ne Marin + Acide Hyaluronique",
    cat: "sante", catLabel: "Hygi\u00e8ne & Sant\u00e9",
    desc: "Compl\u00e9ment collag\u00e8ne marin hydrolys\u00e9 + acide hyaluronique + vitamine C, soutient la peau, les articulations et les cheveux, 90 g\u00e9lules, formule fran\u00e7aise de qualit\u00e9.",
    price: 17.97,
    rating: 4.4, reviews: 8500,
    badge: "", badgeClass: "",
    img: "https://m.media-amazon.com/images/P/B0BZJ9W4LW.01._SL500_.jpg",
    link: "https://www.amazon.fr/dp/B0BZJ9W4LW?tag=snaken18-21"
  },
  {
    id: 84,
    name: "Philips OneBlade Original \u2013 Lames de Rechange x2",
    cat: "sante", catLabel: "Hygi\u00e8ne & Sant\u00e9",
    desc: "2 lames de remplacement Philips OneBlade originales, compatibles tous rasoirs OneBlade QP series, dur\u00e9e de vie 4 mois par lame, taille et rase en un geste sans irritation.",
    price: 48.40,
    rating: 4.5, reviews: 9200,
    badge: "Amazon's Choice", badgeClass: "",
    img: "https://m.media-amazon.com/images/P/B0BS747TYL.01._SL500_.jpg",
    link: "https://www.amazon.fr/dp/B0BS747TYL?tag=snaken18-21"
  },
  {
    id: 85,
    name: "Bulk Pure Whey Prot\u00e9ine Vanille 1\u00a0kg",
    cat: "sante", catLabel: "Hygi\u00e8ne & Sant\u00e9",
    desc: "Prot\u00e9ine Whey concentr\u00e9e Bulk 80%, 1 kg, go\u00fbt vanille, 21\u00a0g prot\u00e9ines par dose, faible en lipides et sucres, convient musculation et r\u00e9cup\u00e9ration sportive.",
    price: 26.99,
    rating: 4.5, reviews: 32000,
    badge: "Meilleure vente", badgeClass: "",
    img: "https://m.media-amazon.com/images/P/B00HF63AYA.01._SL500_.jpg",
    link: "https://www.amazon.fr/dp/B00HF63AYA?tag=snaken18-21"
  },
  {
    id: 86,
    name: "Bulk Cr\u00e9atine Monohydrate 500\u00a0g",
    cat: "sante", catLabel: "Hygi\u00e8ne & Sant\u00e9",
    desc: "Cr\u00e9atine monohydrate pure micronized\u00e9e Bulk 500\u00a0g, qualit\u00e9 Creapure, augmente la force et la puissance musculaire, sans aromes ni additifs, certifi\u00e9e anti-doping Informed Sport.",
    price: 14.34,
    rating: 4.6, reviews: 18000,
    badge: "Amazon's Choice", badgeClass: "",
    img: "https://m.media-amazon.com/images/P/B00SP2ZKW8.01._SL500_.jpg",
    link: "https://www.amazon.fr/dp/B00SP2ZKW8?tag=snaken18-21"
  },
  {
    id: 87,
    name: "Alpine SleepDeep Bouchons d\u2019Oreilles Sommeil",
    cat: "sante", catLabel: "Hygi\u00e8ne & Sant\u00e9",
    desc: "Bouchons d\u2019oreilles pour le sommeil Alpine SleepDeep, attn\u00e9nuation 27\u00a0dB, mat\u00e9riau AlpineThermoShape qui s\u2019adapte \u00e0 l\u2019oreille, lavables et r\u00e9utilisables, sachet de transport inclus.",
    price: 17.95,
    rating: 4.4, reviews: 7800,
    badge: "", badgeClass: "",
    img: "https://m.media-amazon.com/images/P/B0B3F23QK2.01._SL500_.jpg",
    link: "https://www.amazon.fr/dp/B0B3F23QK2?tag=snaken18-21"
  },
  {
    id: 88,
    name: "Oral-B Pro Brossettes Rechange x10",
    cat: "sante", catLabel: "Hygi\u00e8ne & Sant\u00e9",
    desc: "Lot de 10 brossettes de rechange Oral-B Pro Cross Action, compatibles toutes brosse \u00e0 dent \u00e9lectrique Oral-B ronde, filaments bleus indicateurs d\u2019usure, brossage professionnel.",
    price: 30.99,
    rating: 4.7, reviews: 28000,
    badge: "Amazon's Choice", badgeClass: "",
    img: "https://m.media-amazon.com/images/P/B0BWNTF2YF.01._SL500_.jpg",
    link: "https://www.amazon.fr/dp/B0BWNTF2YF?tag=snaken18-21"
  },
  {
    id: 89,
    name: "Philips OneBlade 360 Barber QP2730",
    cat: "sante", catLabel: "Hygi\u00e8ne & Sant\u00e9",
    desc: "Rasoir Philips OneBlade 360 Barber, lame flexible 360\u00b0, adapte \u00e0 tous les contours du visage, peigne 3 longueurs, imperm\u00e9able, autonomie 1\u00a0h. Taille, effile et rase.",
    price: 59.99,
    rating: 4.5, reviews: 3200,
    badge: "Nouveau", badgeClass: "new",
    img: "https://m.media-amazon.com/images/P/B0DXLBZF4Q.01._SL500_.jpg",
    link: "https://www.amazon.fr/dp/B0DXLBZF4Q?tag=snaken18-21"
  },
  {
    id: 90,
    name: "NOVOMA Magn\u00e9sium Bisglycinate + Taurine",
    cat: "sante", catLabel: "Hygi\u00e8ne & Sant\u00e9",
    desc: "Compl\u00e9ment magn\u00e9sium bisglycinate NOVOMA + taurine et vitamine B6, haute bio-disponibilit\u00e9, 90 g\u00e9lules v\u00e9g\u00e9tales, anti-fatigue, syst\u00e8me nerveux, formul\u00e9 et fabriqu\u00e9 en France.",
    price: 19.81,
    rating: 4.5, reviews: 9800,
    badge: "", badgeClass: "",
    img: "https://m.media-amazon.com/images/P/B07DFTD7BW.01._SL500_.jpg",
    link: "https://www.amazon.fr/dp/B07DFTD7BW?tag=snaken18-21"
  },
  {
    id: 91,
    name: "Balance P\u00e8se-Personne Num\u00e9rique",
    cat: "sante", catLabel: "Hygi\u00e8ne & Sant\u00e9",
    desc: "Balance p\u00e8se-personne num\u00e9rique ultra-plate, \u00e9cran LCD r\u00e9tro\u00e9clair\u00e9, pr\u00e9cision 100\u00a0g, capacit\u00e9 180\u00a0kg, surface verre tremp\u00e9, piles incluses. Design moderne et compact.",
    price: 11.11,
    rating: 4.4, reviews: 14000,
    badge: "", badgeClass: "",
    img: "https://m.media-amazon.com/images/P/B0C9LNLSHY.01._SL500_.jpg",
    link: "https://www.amazon.fr/dp/B0C9LNLSHY?tag=snaken18-21"
  }
];