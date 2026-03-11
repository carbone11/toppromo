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
  }
];