/* ═══════════════════════════════════════════════════════
   DATA.JS — Sumber Data Faktual Terpusat
   Diverifikasi dari makalah riset dan dokumen cagar budaya
   ═══════════════════════════════════════════════════════ */

export const SITE_DATA = {

  identity: {
    name: "Lamban Pesagi",
    nameMeaning: "Lamban: Rumah, Pesagi: Persegi/Presisi",
    tagline: "Warisan Arsitektur Vernakular Kayu Lampung Barat",
    subtitle: "Rumah panggung tradisional tahan gempa berusia ratusan tahun milik masyarakat adat Sai Batin.",
    location: {
      village: "Pekon Kenali",
      district: "Kecamatan Belalau",
      regency: "Kabupaten Lampung Barat",
      province: "Provinsi Lampung",
      area: "Kawasan Gunung Pesagi"
    },
    community: "Masyarakat Adat Sai Batin"
  },

  legalStatus: {
    cagarBudaya: {
      label: "Situs Rumah Tradisional",
      law: "UU RI No. 5 Tahun 1992",
      inventoryNumber: "397.04.06.05",
      year: "1992",
      authority: "Balai Pelestarian Peninggalan Purbakala Serang"
    },
    wbtb: {
      label: "Warisan Budaya Takbenda Indonesia",
      sk: "SK No. 270/P/2014",
      year: "2014",
      authority: "Kemendikbud RI",
      domain: "Kemahiran dan Kerajinan Tradisional"
    }
  },

  stats: [
    { number: "1992", label: "Penetapan Cagar Budaya", suffix: "" },
    { number: "2014", label: "SK WBTb Kemendikbud", suffix: "" },
    { number: "2262", label: "Puncak Gunung Pesagi", suffix: " m" },
    { number: "827", label: "Kunjungan Terdata (2021)", suffix: "" }
  ],

  anatomy: {
    layers: [
      {
        id: "atas",
        title: "Bagian Atas",
        subtitle: "Atap & Panggakh",
        description: "Atap tajug piramidal berbahan ijuk dengan ornamen Culu Langi di puncaknya sebagai penanda spiritualitas. Di bawah atap terdapat Panggakh (loteng), ruang penyimpanan aman untuk pusaka keluarga (pemanohan).",
        data: {
          "Material": "Ijuk dan kayu lokal",
          "Ornamen Puncak": "Culu Langi",
          "Fungsi Loteng": "Penyimpanan pusaka (pemanohan)",
          "Bentuk Atap": "Piramida tajug"
        }
      },
      {
        id: "tengah",
        title: "Bagian Tengah",
        subtitle: "Dinding Sesai & Ruang Hunian",
        description: "Dinding Sesai dari papan kayu presisi yang dirakit horizontal. Lantai menggunakan pelupuh bambu khesi yang diikat erat dengan serat ijuk, menciptakan permukaan pijakan yang lentur dan sejuk.",
        data: {
          "Dinding": "Papan kayu susun (Sesai)",
          "Lantai": "Pelupuh bambu khesi",
          "Akses": "Tangga kayu Ijan Geladak",
          "Proporsi V:H": "1:2 hingga 1:6"
        }
      },
      {
        id: "bawah",
        title: "Bagian Bawah",
        subtitle: "Struktur Tiang Panggung & Umpak",
        description: "Struktur panggung berketinggian 1 hingga 2 meter bertumpu pada tiang kayu klutum atau kemit berkonfigurasi ganjil. Tiang tidak ditanam ke tanah melainkan bertumpu di atas umpak batu alam bebas paku, menjadikannya isolator seismik alami saat gempa.",
        data: {
          "Tinggi Panggung": "1 hingga 2 meter",
          "Tiang Penyangga": "Kayu klutum / kemit",
          "Landasan": "Umpak batu alam bebas pantak",
          "Kinerja Seismik": "Tahan gempa Liwa 1994"
        }
      }
    ]
  },

  joinery: {
    title: "Konstruksi Tanpa Paku",
    subtitle: "Struktur Vernakular Knock-Down",
    description: "Seluruh sambungan rangka dirancang mengunci mandiri tanpa paku besi, memanfaatkan sifat elastisitas kayu untuk menyerap gelombang gempa.",
    techniques: [
      {
        id: "tanggam-purus",
        name: "Tanggam-Purus",
        english: "Mortise & Tenon",
        description: "Lubang persegi (tanggam) pada satu balok menerima tonjolan kayu (purus) dari balok lainnya. Saling mengunci dengan presisi tinggi tanpa perekat kimia.",
        location: "Pertemuan tiang utama dan balok lantai"
      },
      {
        id: "pasak-kayu",
        name: "Pasak Kayu",
        english: "Wooden Dowel",
        description: "Batang silinder kayu keras yang disematkan melintang menembus sambungan tanggam-purus untuk menahan gaya tarik saat terjadi getaran.",
        location: "Kuncian persimpangan tiang dan balok"
      },
      {
        id: "jepit",
        name: "Sambungan Jepit",
        english: "Clamp Joint",
        description: "Dua elemen kayu mengapit komponen struktural di tengahnya, membagi beban vertikal dan transversal secara merata.",
        location: "Rangka dinding dan pengaku atap"
      },
      {
        id: "miring",
        name: "Sambungan Miring",
        english: "Scarf Joint",
        description: "Potongan serong pada dua ujung balok untuk memperpanjang bentangan horizontal tanpa mengurangi kekuatan dukung.",
        location: "Balok memanjang dan gelagar atap"
      },
      {
        id: "ikatan",
        name: "Ikatan Ijuk",
        english: "Natural Lashing",
        description: "Anyaman tali serat ijuk alami yang fleksibel mengikat lantai bambu dan rangka sekunder, memberi ruang gerak mikro peredam gempa.",
        location: "Pengikat lantai pelupuh bambu"
      }
    ]
  },

  floorplan: {
    rooms: [
      {
        id: "berkumpul",
        name: "Ruang Berkumpul",
        description: "Area depan rumah panggung untuk menerima tamu dan musyawarah keluarga besar masyarakat Sai Batin.",
        position: { x: 30, y: 25 }
      },
      {
        id: "perempuan",
        name: "Ruang Perempuan",
        description: "Zona terproteksi bagi kaum perempuan keluarga, mencerminkan aturan privasi berbasis adat Sai Batin.",
        position: { x: 70, y: 25 }
      },
      {
        id: "musyawarah",
        name: "Ruang Musyawarah",
        description: "Tempat berkumpulnya tetua Saibatin untuk membahas keputusan adat dan tatanan kemasyarakatan.",
        position: { x: 30, y: 50 }
      },
      {
        id: "kamar",
        name: "Kamar Tidur",
        description: "Ruang istirahat privat keluarga inti yang berada di sisi dalam rumah, terlindung dari akses publik.",
        position: { x: 70, y: 50 }
      },
      {
        id: "makan",
        name: "Ruang Makan",
        description: "Area santap bersama yang menghubungkan ruang tinggal utama dengan area persiapan pangan.",
        position: { x: 30, y: 75 }
      },
      {
        id: "dapur",
        name: "Dapur Tradisional",
        description: "Terletak di bagian belakang rumah dengan perapian tungku kayu terpisah untuk sirkulasi asap dan keamanan api.",
        position: { x: 70, y: 75 }
      }
    ],
    artifacts: [
      {
        index: "01",
        name: "Lumbung Padi",
        description: "Struktur terpisah di pekarangan rumah untuk menyimpan persediaan panen padi masyarakat agraris."
      },
      {
        index: "02",
        name: "Ijan Geladak",
        description: "Tangga kayu berundak tradisional sebagai akses penghubung antara tanah dan serambi rumah panggung."
      },
      {
        index: "03",
        name: "Iseran",
        description: "Wadah penyimpanan tradisional berbahan alam untuk mengamankan hasil bumi dan komoditas rempah."
      },
      {
        index: "04",
        name: "Girjoh",
        description: "Perangkat kayu tradisional pengolah bahan pangan lokal dalam aktivitas keseharian warga pekon."
      }
    ]
  },

  ecosystem: {
    access: {
      from: "Bandar Lampung",
      duration: "5 hingga 6 jam perjalanan darat",
      route: "Jalur Lintas Barat via Liwa",
      road: "Jalan beraspal melintasi kontur pegunungan"
    },
    nearby: [
      {
        name: "Gunung Pesagi",
        detail: "2.262 mdpl, puncak tertinggi Provinsi Lampung",
        description: "Hulu peradaban Sekala Brak dan asal-usul masyarakat Lampung dengan situs mata air di lereng atas."
      },
      {
        name: "Air Terjun Kiwis Raya",
        detail: "Lereng Gunung Pesagi",
        description: "Air terjun alami di kawasan hutan tropis lereng Belalau."
      },
      {
        name: "Permukiman Adat Pekon Kenali",
        detail: "Dataran tinggi Belalau",
        description: "Desa adat yang mempertahankan lanskap vernakular dan tradisi Sai Batin."
      }
    ],
    visitors: {
      count: "827",
      year: "2021",
      source: "RKPD Kabupaten Lampung Barat"
    },
    manager: "Pokdarwis Pekon Kenali"
  },

  protocols: [
    {
      id: "adab",
      code: "PROTOKOL 01",
      title: "Adab Melapor & Sapaan Adat",
      summary: "Sebelum memasuki pekarangan situs, pengunjung dianjurkan melapor terlebih dahulu ke Balai Pekon atau sekretariat Pokdarwis Pekon Kenali sebagai bentuk penghormatan kepada tetua adat Sai Batin.",
      points: [
        "Sampaikan salam santun dan tujuan kunjungan (studi arsitektur, riset budaya, atau pelancong)",
        "Gunakan pakaian berlengan dan celana/kain panjang yang menutup aurat sesuai norma kesopanan lokal",
        "Tunggu arahan pemandu adat sebelum menaiki tangga Ijan Geladak"
      ]
    },
    {
      id: "zonasi",
      code: "PROTOKOL 02",
      title: "Hierarki & Batasan Ruang",
      summary: "Denah Lamban Pesagi memiliki pembagian ruang yang tegas antara area publik sosial dan zona privat keluarga.",
      points: [
        "Ruang depan (Ruang Berkumpul) terbuka untuk diskusi, observasi struktur, dan dialog",
        "Dilarang melangkah masuk ke Kamar Tidur dan Ruang Perempuan tanpa izin eksplisit tuan rumah atau tetua adat",
        "Hormati area musyawarah Saibatin saat ada pertemuan adat yang sedang berlangsung"
      ]
    },
    {
      id: "preservasi",
      code: "PROTOKOL 03",
      title: "Preservasi Fisik Struktur Kayu",
      summary: "Kayu Lamban Pesagi berusia ratusan tahun dan tidak dilindungi paku modern, sehingga memerlukan kehati-hatian gerak.",
      points: [
        "Wajib melepaskan alas kaki (sepatu/sandal) sebelum menginjak lantai pelupuh bambu",
        "Dilarang bersandar dengan beban berlebih pada jeruji jendela kayu tradisional",
        "Pantangan keras: tidak merokok, tidak menyalakan api, dan tidak meninggalkan sampah apapun di area situs"
      ]
    },
    {
      id: "dokumentasi",
      code: "PROTOKOL 04",
      title: "Etika Dokumentasi & Fotografi",
      summary: "Pengambilan gambar diperbolehkan untuk kepentingan edukasi, namun wajib menjunjung tinggi privasi penghuni.",
      points: [
        "Minta izin terlebih dahulu sebelum memotret tetua adat atau aktivitas keluarga di dalam rumah",
        "Hindari penggunaan lampu kilat (flash) langsung dari jarak dekat pada ornamen ukir kayu yang tua",
        "Benda pusaka keluarga (pemanohan) di loteng Panggakh tidak untuk didokumentasikan sembarangan"
      ]
    }
  ],

  fieldGuide: {
    seasons: [
      {
        title: "Musim Panen Kopi (Mei – Agustus)",
        description: "Waktu paling hidup di Pekon Kenali. Aktivitas warga menjemur biji kopi robusta di pelataran rumah adat dan semerbak aroma sangrai tradisional."
      },
      {
        title: "Pagi Hari Berkabut (06.30 – 09.00 WIB)",
        description: "Momen visual terbaik saat kabut tebal lereng Gunung Pesagi perlahan tersibak sinar matahari pagi, memperlihatkan siluet tajug Lamban Pesagi."
      }
    ],
    directory: {
      location: "Pekon Kenali, Kecamatan Belalau, Kabupaten Lampung Barat",
      access: "5–6 jam perjalanan dari Bandar Lampung melalui Jalan Lintas Barat Sumatera via Liwa",
      transport: "Kendaraan roda dua atau mobil pribadi (kondisi jalan beraspal mulus berkelok)",
      contact: {
        manager: "Sekretariat Pokdarwis Pekon Kenali & Aparatur Adat Sai Batin",
        hotline: "Kantor Balai Pekon Kenali, Belalau",
        regency: "Dinas Kepemudaan, Olahraga dan Pariwisata Kabupaten Lampung Barat"
      }
    }
  },

  references: [
    "Harsono, T. D. (2017). Rumah Tradisional Lamban Pesagi Lampung Barat. Patrawidya, 18(1), 71–84.",
    "Atthaya, A. N. et al. (2022). Lamban Pesagi Bangunan Tradisional Provinsi Lampung. Jurnal Vastukara, 2(1), 9–18.",
    "Ibnu, I. M. (2018). Kajian Geometri Hunian Masa Lampau. Jurnal Koridor, 9(2), 271–279.",
    "Kustiani, K. et al. (2023). Sociocultural Space in Lampung Architectural Buildings. Jurnal Arsitektur, 13(2), 127–144.",
    "Lestari, S. et al. (2025). Identifikasi Teknik Sambungan Kayu Vernakular Lamban Pesagi. Jurnal Qua Teknika, 15(2), 89–99.",
    "SK Penetapan WBTb Kemendikbud RI No. 270/P/2014."
  ]
};
