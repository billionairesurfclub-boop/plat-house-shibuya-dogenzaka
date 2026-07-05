export const hotel = {
  id: "plat-house-omotesando",
  name: {
    ja: "ぷらっとハウス表参道",
    en: "Plat House Omotesando",
  },
  catchcopy: {
    ja: "表参道駅10分。キッチン・浴槽・リビング完備。2名様だけの上質な滞在を",
    en: "10 min from Omotesando Station. Full kitchen, bathtub & living space — your private retreat in Tokyo.",
  },
  address: {
    postalCode: "106-0031",
    ja: "東京都港区西麻布２－２１－１３",
    en: "2-21-13 Nishi-Azabu, Minato-ku, Tokyo 106-0031",
  },
  area: "表参道・原宿",
  phone: "08070583086",
  category: "民泊",
  website: "https://omotesando.plat-house.jp",
  checkIn: "16:00",
  checkOut: "11:00",
  price: {
    min: 15000,
    max: 30000,
    currency: "JPY",
  },
  cancelPolicy: "7日前まで無料キャンセル可能",
  languages: ["ja", "en"],
  googleMapUrl: "",
  bookingUrl: "https://beds24.com/booking.php?propid=257189&referer=BookingLink",
  rating: {
    google: 0,
    bookingCom: 0,
  },
  access: [
    { station: "表参道駅", line: "東京メトロ銀座線・半蔵門線・千代田線", walk: 10 },
  ],
  floors: "戸建て",
  parking: 0,
  capacity: 4,
  size: "20㎡ × 2客室",
};

export const amenities = [
  { name: "Netflix", nameEn: "Netflix", icon: "🎬", highlight: true },
  { name: "Nintendo Switch", nameEn: "Nintendo Switch", icon: "🎮", highlight: true },
  { name: "ポケットWi-Fi", nameEn: "Pocket Wi-Fi", icon: "📶", highlight: true },
  { name: "10ギガインターネット", nameEn: "10Gbps Internet", icon: "🌐", highlight: true },
  { name: "浴槽", nameEn: "Bathtub", icon: "🛁", highlight: true },
  { name: "キッチン", nameEn: "Kitchen", icon: "🍳", highlight: true },
  { name: "リビングスペース", nameEn: "Living Space", icon: "🛋️", highlight: true },
  { name: "ボタニスト（アメニティ）", nameEn: "Botanist Amenities", icon: "🌿", highlight: true },
  { name: "洗濯機", nameEn: "Washing Machine", icon: "🫧", highlight: false },
  { name: "冷蔵庫", nameEn: "Refrigerator", icon: "🧊", highlight: false },
  { name: "電子レンジ", nameEn: "Microwave", icon: "♨️", highlight: false },
  { name: "電気ケトル", nameEn: "Electric Kettle", icon: "☕", highlight: false },
  { name: "調理器具・食器", nameEn: "Cookware & Tableware", icon: "🍽️", highlight: false },
  { name: "エアコン", nameEn: "Air Conditioning", icon: "❄️", highlight: false },
  { name: "大型TV", nameEn: "Large TV", icon: "📺", highlight: false },
  { name: "空気清浄機", nameEn: "Air Purifier", icon: "💨", highlight: false },
  { name: "加湿器", nameEn: "Humidifier", icon: "🌫️", highlight: false },
  { name: "シャワー", nameEn: "Shower", icon: "🚿", highlight: false },
  { name: "ウォシュレット", nameEn: "Washlet", icon: "✨", highlight: false },
  { name: "ヘアドライヤー", nameEn: "Hair Dryer", icon: "💨", highlight: false },
  { name: "コテ＆カールアイロン", nameEn: "Curling Iron", icon: "💅", highlight: false },
  { name: "アイロン", nameEn: "Iron", icon: "👔", highlight: false },
];

export const rooms = [
  {
    id: "room-a",
    floor: "",
    name: { ja: "客室A（20㎡）", en: "Room A (20㎡)" },
    bedType: { ja: "クイーンベッド", en: "Queen Bed" },
    maxGuests: 2,
    description: {
      ja: "キッチン・浴槽・リビングスペース完備の20㎡客室。クイーンベッドで2名様がゆったりとお過ごしいただけます。",
      en: "A 20㎡ room with kitchen, bathtub, and living space. Queen bed for up to 2 guests.",
    },
    images: [],
  },
  {
    id: "room-b",
    floor: "",
    name: { ja: "客室B（20㎡）", en: "Room B (20㎡)" },
    bedType: { ja: "クイーンベッド", en: "Queen Bed" },
    maxGuests: 2,
    description: {
      ja: "キッチン・浴槽・リビングスペース完備の20㎡客室。クイーンベッドで2名様がゆったりとお過ごしいただけます。",
      en: "A 20㎡ room with kitchen, bathtub, and living space. Queen bed for up to 2 guests.",
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
    q: { ja: "キッチンは使えますか？", en: "Is the kitchen available?" },
    a: { ja: "はい、調理器具・食器も完備しています。自炊も楽しんでいただけます。", en: "Yes, the kitchen is fully equipped with cookware and tableware. Feel free to cook during your stay." },
  },
  {
    q: { ja: "浴槽はありますか？", en: "Is there a bathtub?" },
    a: { ja: "はい、浴槽完備です。シャワーと浴槽でゆっくりとおくつろぎいただけます。", en: "Yes, each room has a bathtub. Enjoy a relaxing soak during your stay." },
  },
  {
    q: { ja: "表参道駅からどのくらいですか？", en: "How far is it from Omotesando Station?" },
    a: { ja: "表参道駅（銀座線・半蔵門線・千代田線）から徒歩約10分です。表参道・原宿・青山エリアの観光・ショッピングに最適です。", en: "About 10 minutes walk from Omotesando Station. Perfect base for shopping and sightseeing in Omotesando, Harajuku, and Aoyama." },
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
