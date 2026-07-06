export const hotel = {
  id: "plat-house-nakameguro",
  name: {
    ja: "ぷらっとハウス中目黒",
    en: "Plat House Nakameguro",
  },
  catchcopy: {
    ja: "中目黒駅・池尻大橋駅 徒歩10分。おしゃれな中目黒エリアで過ごす、2名のための20㎡プライベートステイ",
    en: "10 min from Nakameguro Station. A stylish 20㎡ private stay for two in trendy Nakameguro.",
  },
  address: {
    postalCode: "153-0043",
    ja: "東京都目黒区東山2−9−20",
    en: "2-9-20 Higashiyama, Meguro-ku, Tokyo 153-0043",
  },
  area: "中目黒・池尻大橋",
  phone: "08070583086",
  category: "民泊",
  website: "https://nakameguro.plat-house.jp",
  checkIn: "16:00",
  checkOut: "11:00",
  price: {
    min: 12000,
    max: 25000,
    currency: "JPY",
  },
  cancelPolicy: "7日前まで無料キャンセル可能",
  languages: ["ja", "en"],
  googleMapUrl: "",
  bookingUrl: "https://beds24.com/booking.php?propid=240671&referer=BookingLink",
  rating: {
    google: 0,
    bookingCom: 0,
  },
  access: [
    { station: "池尻大橋駅", line: "東急田園都市線", walk: 10 },
    { station: "中目黒駅", line: "東急東横線・東京メトロ日比谷線", walk: 10 },
  ],
  floors: "マンション",
  parking: 0,
  capacity: 4,
  size: "20㎡×2客室",
};

export const amenities = [
  { name: "Netflix", nameEn: "Netflix", icon: "🎬", highlight: true },
  { name: "Nintendo Switch", nameEn: "Nintendo Switch", icon: "🎮", highlight: true },
  { name: "ポケットWi-Fi", nameEn: "Pocket Wi-Fi", icon: "📶", highlight: true },
  { name: "インターネット（Wi-Fi）", nameEn: "Wi-Fi Internet", icon: "🌐", highlight: true },
  { name: "浴槽", nameEn: "Bathtub", icon: "🛁", highlight: true },
  { name: "キッチン", nameEn: "Kitchen", icon: "🍳", highlight: true },
  { name: "ボタニスト（アメニティ）", nameEn: "Botanist Amenities", icon: "🌿", highlight: false },
  { name: "空気清浄機・加湿器", nameEn: "Air Purifier & Humidifier", icon: "💨", highlight: false },
  { name: "洗濯機", nameEn: "Washing Machine", icon: "🫧", highlight: false },
  { name: "冷蔵庫", nameEn: "Refrigerator", icon: "🧊", highlight: false },
  { name: "電子レンジ", nameEn: "Microwave", icon: "♨️", highlight: false },
  { name: "電気ケトル", nameEn: "Electric Kettle", icon: "☕", highlight: false },
  { name: "調理器具・食器", nameEn: "Cookware & Tableware", icon: "🍽️", highlight: false },
  { name: "エアコン", nameEn: "Air Conditioning", icon: "❄️", highlight: false },
  { name: "大型TV", nameEn: "Large TV", icon: "📺", highlight: false },
  { name: "独立トイレ", nameEn: "Separate Toilet", icon: "🚽", highlight: false },
  { name: "ウォシュレット", nameEn: "Washlet", icon: "✨", highlight: false },
  { name: "ヘアドライヤー", nameEn: "Hair Dryer", icon: "💨", highlight: false },
  { name: "コテ＆カールアイロン", nameEn: "Curling Iron", icon: "💅", highlight: false },
  { name: "アイロン", nameEn: "Iron", icon: "👔", highlight: false },
];

export const rooms = [
  {
    id: "room-101",
    floor: "",
    name: { ja: "客室101号室", en: "Room 101" },
    bedType: { ja: "クイーンベッド×1", en: "1 Queen Bed" },
    maxGuests: 2,
    description: {
      ja: "20㎡のコンパクトで洗練された客室。クイーンベッド1台で最大2名様がゆったりとお過ごしいただけます。",
      en: "A compact and stylish 20㎡ room with 1 queen bed. Accommodates up to 2 guests.",
    },
    images: [],
  },
  {
    id: "room-102",
    floor: "",
    name: { ja: "客室102号室", en: "Room 102" },
    bedType: { ja: "クイーンベッド×1", en: "1 Queen Bed" },
    maxGuests: 2,
    description: {
      ja: "20㎡のコンパクトで洗練された客室。クイーンベッド1台で最大2名様がゆったりとお過ごしいただけます。",
      en: "A compact and stylish 20㎡ room with 1 queen bed. Accommodates up to 2 guests.",
    },
    images: [],
  },
];

export const faqs = [
  {
    q: { ja: "チェックインは何時ですか？", en: "What time is check-in?" },
    a: { ja: "チェックインは16時、チェックアウトは11時です。セルフチェックイン対応のため、深夜・早朝でも安心です。", en: "Check-in is at 16:00, check-out is at 11:00. Self check-in is available anytime." },
  },
  {
    q: { ja: "何名まで宿泊できますか？", en: "How many guests can stay?" },
    a: { ja: "各客室クイーンベッド1台・最大2名様です。2室ご利用の場合は最大4名様まで対応可能です。", en: "Each room has 1 queen bed and accommodates up to 2 guests. Both rooms together accommodate up to 4 guests." },
  },
  {
    q: { ja: "最寄り駅はどこですか？", en: "What is the nearest station?" },
    a: { ja: "池尻大橋駅（東急田園都市線）・中目黒駅（東急東横線・東京メトロ日比谷線）ともに徒歩10分です。中目黒の人気カフェや目黒川へすぐアクセスできます。", en: "10 min walk from both Ikejiri-Ohashi Station (Tokyu Den-en-toshi Line) and Nakameguro Station (Tokyu Toyoko Line / Tokyo Metro Hibiya Line)." },
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
