import { Product } from "@/types";

export const products: Product[] = [
  {
    slug: "caramel-dream",
    category: "roses",
    price: 3490,
    photo: "/photos/caramel-dream.jpg",
    badge: "bestseller",
    translations: {
      cs: {
        name: "Karamelový sen",
        shortDescription: "Karamelově broskvové pivoňkové růže v ručním papíru KORA.",
        description: "Okouzlující kytice broskvových pivoňkových růží odstínu Juliet – karamelové, krémové, s jemným růžovým nádechem. Zabalená v ručním krepovém papíru se signature nálepkou KORA Blooms. Dárek, na který se nezapomíná.",
      },
      en: {
        name: "Caramel Dream",
        shortDescription: "Caramel-peach peony roses in signature KORA craft wrap.",
        description: "A captivating bouquet of Juliet-style peach peony roses in tones of caramel, cream, and soft blush. Hand-wrapped in textured craft paper and finished with the KORA Blooms signature sticker. An unforgettable gift.",
      },
    },
  },
  {
    slug: "lavender-garden",
    category: "roses",
    price: 1890,
    photo: "/photos/lavender-garden.jpg",
    badge: null,
    translations: {
      cs: {
        name: "Levandulová zahrada",
        shortDescription: "Levandulové růže, alstromérie a nevěstin závoj.",
        description: "Jemná kytice v odstínech levandule a šeříku – levandulové růže, růžové alstromérie a vzdušný nevěstin závoj. Balená v bílém papíru KORA. Ideální pro vyjádření obdivu a vděčnosti.",
      },
      en: {
        name: "Lavender Garden",
        shortDescription: "Lavender roses with alstroemeria and baby's breath.",
        description: "A delicate bouquet in lavender and lilac tones – lavender roses, soft pink alstroemeria, and airy baby's breath. Wrapped in white KORA paper. Perfect for expressing admiration and gratitude.",
      },
    },
  },
  {
    slug: "pink-whisper",
    category: "bouquets",
    price: 1890,
    photo: "/photos/pink-whisper.jpg",
    badge: null,
    translations: {
      cs: {
        name: "Růžový šepot",
        shortDescription: "Studiový mix růžových chryzantém, lisianthusů a snapdragonů.",
        description: "Romantická kombinace růžových chryzantém, krémových lisianthusů a snapdragonů v bílém signature balení KORA Blooms s růžovou stuhou. Jemná, ale výrazná – připravená přinést radost.",
      },
      en: {
        name: "Pink Whisper",
        shortDescription: "Studio mix of pink chrysanthemums, lisianthus, and snapdragons.",
        description: "A romantic combination of pink chrysanthemums, cream lisianthus, and snapdragons in the signature KORA Blooms white wrap with a pink ribbon. Gentle yet striking – ready to make someone's day.",
      },
    },
  },
  {
    slug: "midnight-bloom",
    category: "bouquets",
    price: 4990,
    photo: "/photos/midnight-bloom.jpg",
    badge: "bestseller",
    translations: {
      cs: {
        name: "Půlnoční květ",
        shortDescription: "Klematisy, delfínie a bílé růže v námořnickém balení.",
        description: "Dramatická kompozice pro nečekané momenty – fialové klematisy, modré delfínie, bílé keříkové růže a oranžové krokosmie, zabalené v tmavě modrém papíru KORA s šeříkovou stuhou. Statement kytice.",
      },
      en: {
        name: "Midnight Bloom",
        shortDescription: "Clematis, delphinium, and white roses in navy wrap.",
        description: "A dramatic composition for unexpected moments – purple clematis, blue delphinium, white spray roses, and orange crocosmia, wrapped in KORA's navy paper with a lilac ribbon. A statement bouquet.",
      },
    },
  },
  {
    slug: "bell-song",
    category: "bouquets",
    price: 2490,
    photo: "/photos/bell-song.jpg",
    badge: "new",
    translations: {
      cs: {
        name: "Píseň zvonků",
        shortDescription: "Zvonky (Campanula) v pudrovém balení se stuhou KORA.",
        description: "Romantické zvonky v odstínech bílé, růžové a levandulové v pudrovém papíru s olivovou stuhou KORA. Jemný, pohádkový kus pro milovníky klasické krásy.",
      },
      en: {
        name: "Bell Song",
        shortDescription: "Canterbury bells (Campanula) in powder wrap with a KORA ribbon.",
        description: "Romantic Canterbury bells in white, pink, and lavender tones wrapped in powder-toned paper and finished with an olive KORA ribbon. A fairytale piece for lovers of classic beauty.",
      },
    },
  },
  {
    slug: "velvet-noir",
    category: "bouquets",
    price: 3990,
    photo: "/photos/velvet-noir.jpg",
    badge: null,
    translations: {
      cs: {
        name: "Sametová noc",
        shortDescription: "Burgundské chryzantémy, tmavé kaly a modré anemonky.",
        description: "Hluboká, dramatická kompozice – burgundské chryzantémy, tmavě fialové kaly, bílé keříkové růže a syté modré anemonky, doplněné eucalyptem. Zabaleno v bílém papíru s olivovou stuhou KORA.",
      },
      en: {
        name: "Velvet Noir",
        shortDescription: "Burgundy chrysanthemums, dark calla lilies, and blue anemones.",
        description: "A deep, dramatic composition – burgundy chrysanthemums, dark plum calla lilies, white spray roses, and rich blue anemones accented with eucalyptus. Wrapped in white paper with an olive KORA ribbon.",
      },
    },
  },
  {
    slug: "lilac-box",
    category: "boxes",
    price: 3290,
    photo: "/photos/lilac-box.jpg",
    badge: "new",
    translations: {
      cs: {
        name: "Šeříkový box",
        shortDescription: "Levandulové růže, ranunculy a lisianthus v bílém kulatém boxu.",
        description: "Elegantní šeříkový box plný levandulových růží, bílých ranunculí, lisianthusů a freesií se zelenými akcenty. Signature KORA kulatý box s saténovou stuhou – luxusní a nadčasový dárek.",
      },
      en: {
        name: "Lilac Box",
        shortDescription: "Lavender roses, ranunculus, and lisianthus in a white round box.",
        description: "An elegant lilac flower box filled with lavender roses, white ranunculus, lisianthus, and freesia with soft green accents. The signature KORA round box with a satin ribbon – a luxurious, timeless gift.",
      },
    },
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.badge !== null);
}
