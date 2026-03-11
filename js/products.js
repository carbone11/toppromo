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
    img: "https://ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=FR&ASIN=B09BJPTD82&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL300_&tag=snaken18-21",
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
    img: "https://ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=FR&ASIN=B0F87YLJXF&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL300_&tag=snaken18-21",
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
    img: "https://ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=FR&ASIN=B0D95VPM4M&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL300_&tag=snaken18-21",
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
    img: "https://ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=FR&ASIN=B0FQPK32JH&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL300_&tag=snaken18-21",
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
    img: "https://ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=FR&ASIN=B0B6QYM6KS&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL300_&tag=snaken18-21",
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
    img: "https://ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=FR&ASIN=B0DRF4NKCW&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL300_&tag=snaken18-21",
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
    img: "https://ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=FR&ASIN=B0F1CVWVCF&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL300_&tag=snaken18-21",
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
  }
];