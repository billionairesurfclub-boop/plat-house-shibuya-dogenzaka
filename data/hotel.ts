export const hotel = {
  id: "plat-house-shibuya-dogenzaka",
  name: {
    ja: "ぷらっとハウス渋谷（道玄坂）",
    en: "Plat House Shibuya (Dogenzaka)",
  },
  catchcopy: {
    ja: "渋谷駅徒歩5分。35㎡一棟貸切・最大5名。渋谷・道玄坂エリアのプライベートステイ",
    en: "5 min from 渋谷駅. Plat House Shibuya (Dogenzaka) — private stay in 渋谷・道玄坂.",
  },
  address: {
    postalCode: "150-0044",
    ja: "東京都渋谷区道玄坂１－１７－９",
    en: "東京都渋谷区道玄坂１－１７－９",
  },
  area: "渋谷・道玄坂",
  phone: "08070583086",
  category: "民泊",
  website: "https://shibuya-dogenzaka.plat-house.jp",
  checkIn: "16:00",
  checkOut: "11:00",
  price: {
    min: 15000,
    max: 50000,
    currency: "JPY",
  },
  cancelPolicy: "7日前まで無料キャンセル可能",
  languages: ["ja", "en"],
  googleMapUrl: "",
  bookingUrl: "https://beds24.com/booking.php?propid=303527&referer=BookingLink",
  rating: {
    google: 0,
    bookingCom: 0,
  },
  access: [
    { station: "渋谷駅", line: "JR・東急・東京メトロ各線", walk: 5 },
    { station: "神泉駅", line: "京王井の頭線", walk: 3 }
  ],
  floors: "4階建て",
  parking: 0,
  capacity: 2,
  size: "35㎡",
};

export const amenities = [
  { name: "Netflix", nameEn: "Netflix", icon: "🎬", highlight: true },
  { name: "Nintendo Switch", nameEn: "Nintendo Switch", icon: "🎮", highlight: true },
  { name: "ポケットWi-Fi", nameEn: "ポケットWi-Fi", icon: "📶", highlight: true },
  { name: "インターネット（Wi-Fi）", nameEn: "インターネット（Wi-Fi）", icon: "🌐", highlight: true },
  { name: "ドラム式洗濯機", nameEn: "ドラム式洗濯機", icon: "🫧", highlight: false },
  { name: "冷蔵庫", nameEn: "冷蔵庫", icon: "🧊", highlight: false },
  { name: "電子レンジ", nameEn: "電子レンジ", icon: "♨️", highlight: false },
  { name: "電気ケトル", nameEn: "電気ケトル", icon: "☕", highlight: false },
  { name: "シャワー", nameEn: "シャワー", icon: "🚿", highlight: false },
  { name: "独立トイレ", nameEn: "独立トイレ", icon: "🚽", highlight: false },
  { name: "ウォシュレット", nameEn: "ウォシュレット", icon: "✨", highlight: false },
  { name: "掃除機", nameEn: "掃除機", icon: "🧹", highlight: false },
  { name: "エアコン", nameEn: "エアコン", icon: "❄️", highlight: false },
  { name: "大型TV", nameEn: "大型TV", icon: "📺", highlight: false },
  { name: "コテ＆カールドライヤー", nameEn: "コテ＆カールドライヤー", icon: "💅", highlight: false },
  { name: "ヘアドライヤー", nameEn: "ヘアドライヤー", icon: "💨", highlight: false },
  { name: "アイロン", nameEn: "アイロン", icon: "👔", highlight: false },
  { name: "キッチン", nameEn: "キッチン", icon: "🍳", highlight: true },
  { name: "アメニティ一式", nameEn: "アメニティ一式", icon: "🧴", highlight: false },
  { name: "ボタニスト（アメニティ）", nameEn: "ボタニスト（アメニティ）", icon: "🌿", highlight: false },
  { name: "バスタオル・フェイスタオル", nameEn: "バスタオル・フェイスタオル", icon: "🏩", highlight: false },
  { name: "空気清浄機", nameEn: "空気清浄機", icon: "💨", highlight: false },
  { name: "ダイニングテーブル", nameEn: "ダイニングテーブル", icon: "✅", highlight: false },
  { name: "ローテブル", nameEn: "ローテブル", icon: "✅", highlight: false },
  { name: "クローゼット", nameEn: "クローゼット", icon: "✅", highlight: false },
  { name: "洋服掛け", nameEn: "洋服掛け", icon: "✅", highlight: false },
  { name: "ハンガー", nameEn: "ハンガー", icon: "✅", highlight: false },
  { name: "洗剤関係", nameEn: "洗剤関係", icon: "✅", highlight: false },
  { name: "浴槽", nameEn: "浴槽", icon: "🛁", highlight: true },
  { name: "洗面台", nameEn: "洗面台", icon: "✅", highlight: false },
  { name: "調理器具", nameEn: "調理器具", icon: "✅", highlight: false },
  { name: "皿・グラス関係", nameEn: "皿・グラス関係", icon: "✅", highlight: false },
  { name: "リビングスペース", nameEn: "リビングスペース", icon: "✅", highlight: false }
];

export const rooms = [
  {
    id: "room-a",
    floor: "",
    name: { ja: "ぷらっとハウス渋谷（道玄坂）（35㎡）", en: "Plat House Shibuya Dogenzaka (35㎡)" },
    bedType: { ja: "ダブルベッド＋ソファーベッド", en: "Double Bed + Sofa Bed" },
    maxGuests: 5,
    description: {
      ja: "35㎡の一棟貸切。ダブルベッドとソファーベッドを完備し、最大5名様でご利用いただけます。渋谷駅徒歩5分の好立地です。",
      en: "Entire 35㎡ house. Features a double bed and sofa bed. Accommodates up to 5 guests. 5 min walk from Shibuya Station.",
    },
    images: [
    "/images/photo-01.jpg",
    "/images/photo-02.jpg",
    "/images/photo-03.jpg",
    "/images/photo-04.jpg",
    "/images/photo-05.jpg",
    "/images/photo-06.jpg"
  ],
  },
  {
    id: "room-a",
    floor: "",
    name: { ja: "ぷらっとハウス渋谷（道玄坂）", en: "Plat House Shibuya (Dogenzaka)" },
    bedType: { ja: "お問い合わせください", en: "Please inquire" },
    maxGuests: 2,
    description: {
      ja: "ぷらっとハウス渋谷（道玄坂）の客室です。",
      en: "Room at Plat House Shibuya (Dogenzaka).",
    },
    images: [
    "/images/photo-01.jpg",
    "/images/photo-02.jpg",
    "/images/photo-03.jpg",
    "/images/photo-04.jpg",
    "/images/photo-05.jpg",
    "/images/photo-06.jpg"
  ],
  }
];

export const faqs = [
  {
    q: { ja: "チェックインは何時ですか？", en: "What time is check-in?" },
    a: { ja: "チェックインは16:00、チェックアウトは11:00です。セルフチェックイン対応のため、深夜・早朝でも安心です。", en: "Check-in is at 16:00, check-out is at 11:00. Self check-in is available anytime." },
  },
  {
    q: { ja: "何名まで宿泊できますか？", en: "How many guests can stay?" },
    a: { ja: "最大2名様までご宿泊いただけます。", en: "Up to 2 guests." },
  },
  {
    q: { ja: "最寄り駅はどこですか？", en: "What is the nearest station?" },
    a: { ja: "渋谷駅（JR・東急・東京メトロ各線）徒歩5分です。", en: "渋谷駅 (JR・東急・東京メトロ各線) is a 5 min walk." },
  },
  {
    q: { ja: "駐車場はありますか？", en: "Is there parking?" },
    a: { ja: "専用駐車場はございません。近隣のコインパーキングをご利用ください。", en: "There is no on-site parking. Please use nearby coin parking facilities." },
  },
  {
    q: { ja: "キャンセルポリシーを教えてください。", en: "What is the cancellation policy?" },
    a: { ja: "ご予約日の7日前まで無料でキャンセルいただけます。", en: "Free cancellation is available up to 7 days before check-in." },
  },
];
