import type { GrammarPoint } from "../../../models/types";

export const n5ParticleGrammar: GrammarPoint[] = [
  {
    id: "n5-wo-object",
    level: "N5",
    category: "tro-tu",
    title: "Tân ngữ với を",
    pattern: "N を V",
    meaningVi: "Làm V với N",
    explanation: "を đánh dấu đối tượng trực tiếp của động từ.",
    notes: ["Phát âm を gần giống お", "Thường đi với động từ hành động"],
    examples: [
      { jp: "パンをたべます。", vi: "Tôi ăn bánh mì." },
      { jp: "にほんごをべんきょうします。", vi: "Tôi học tiếng Nhật." }
    ]
  },
  {
    id: "n5-ni-de-place",
    level: "N5",
    category: "tro-tu",
    title: "Địa điểm với に và で",
    pattern: "N に / N で",
    meaningVi: "Ở/đến N ; làm gì tại N",
    explanation: "に nhấn điểm đến/điểm tồn tại; で nhấn nơi hành động diễn ra.",
    notes: ["Đi học ở trường: がっこうでべんきょうします", "Đến trường: がっこうにいきます"],
    examples: [
      { jp: "がっこうにいきます。", vi: "Tôi đi đến trường." },
      { jp: "がっこうでべんきょうします。", vi: "Tôi học ở trường." }
    ]
  },
  {
    id: "n5-kara-made",
    level: "N5",
    category: "tro-tu",
    title: "Khoảng với から～まで",
    pattern: "A から B まで",
    meaningVi: "Từ A đến B",
    explanation: "Diễn tả phạm vi thời gian/địa điểm.",
    notes: ["Có thể dùng riêng から hoặc まで", "Thường đi với lịch trình"],
    examples: [
      { jp: "じゅぎょうは9じから12じまでです。", vi: "Lớp học từ 9 giờ đến 12 giờ." },
      { jp: "ハノイからダナンまでいきます。", vi: "Tôi đi từ Hà Nội đến Đà Nẵng." }
    ]
  },
  {
    id: "n5-to-list",
    level: "N5",
    category: "tro-tu",
    title: "Liệt kê với と",
    pattern: "N と N",
    meaningVi: "N và N",
    explanation: "Nối danh từ theo kiểu liệt kê đầy đủ.",
    notes: ["Dùng khi liệt kê cố định", "Khác や: や là liệt kê không đầy đủ"],
    examples: [
      { jp: "パンとたまごをかいました。", vi: "Tôi đã mua bánh mì và trứng." },
      { jp: "せんせいとはなします。", vi: "Tôi nói chuyện với giáo viên." }
    ]
  },
  {
    id: "n5-ya-list",
    level: "N5",
    category: "tro-tu",
    title: "Liệt kê ví dụ với や",
    pattern: "N や N など",
    meaningVi: "N, N, v.v.",
    explanation: "Liệt kê không đầy đủ, nhấn mạnh chỉ là ví dụ.",
    notes: ["Thường thêm など ở cuối", "Dùng tự nhiên khi nói về nhóm đồ vật"],
    examples: [
      { jp: "つくえのうえにほんやノートがあります。", vi: "Trên bàn có sách, vở, v.v." },
      { jp: "スーパーでやさいやくだものをかいます。", vi: "Tôi mua rau củ quả ở siêu thị." }
    ]
  }
];
