import type { GrammarPoint } from "../../../models/types";

export const n5IntentAdvancedGrammar: GrammarPoint[] = [
  {
    id: "n5-want-tai",
    level: "N5",
    category: "y-dinh",
    title: "Mong muốn với ～たい",
    pattern: "V-ます + たい",
    meaningVi: "Muốn làm...",
    explanation: "Nói mong muốn của chính mình một cách lịch sự.",
    notes: ["Thường dùng が với đối tượng mong muốn", "Hạn chế hỏi trực tiếp người trên"],
    examples: [
      { jp: "にほんへいきたいです。", vi: "Tôi muốn đi Nhật." },
      { jp: "なにがたべたいですか。", vi: "Bạn muốn ăn gì?" }
    ]
  },
  {
    id: "n5-volitional-plan",
    level: "N5",
    category: "ke-hoach",
    title: "Dự định với つもりです",
    pattern: "Vる / Vない つもりです",
    meaningVi: "Dự định... / dự định không...",
    explanation: "Diễn tả kế hoạch mang tính cá nhân đã có ý định rõ.",
    notes: ["Dùng được cho phủ định dự định", "Thường đi với mốc thời gian"],
    examples: [
      { jp: "らいねんにほんへいくつもりです。", vi: "Năm sau tôi dự định đi Nhật." },
      { jp: "きょうはおさけをのまないつもりです。", vi: "Hôm nay tôi dự định không uống rượu." }
    ]
  },
  {
    id: "n5-te-miru",
    level: "N5",
    category: "ke-hoach",
    title: "Thử làm gì với ～てみる",
    pattern: "V-て みる",
    meaningVi: "Thử...",
    explanation: "Diễn tả việc thử hành động để xem kết quả.",
    notes: ["Sắc thái khám phá/trải nghiệm", "Dùng rất nhiều trong giao tiếp thực tế"],
    examples: [
      { jp: "このりょうりをたべてみます。", vi: "Tôi thử ăn món này." },
      { jp: "もういちどかんがえてみてください。", vi: "Hãy thử nghĩ lại thêm một lần." }
    ]
  },
  {
    id: "n5-mashouka-offer",
    level: "N5",
    category: "y-dinh",
    title: "Đề nghị giúp với ～ましょうか",
    pattern: "V-ましょうか",
    meaningVi: "Tôi ... nhé? (để giúp)",
    explanation: "Dùng khi người nói chủ động đề xuất giúp đỡ.",
    notes: ["Lịch sự, phổ biến trong dịch vụ", "Có thể trả lời bằng おねがいします / いいえ"],
    examples: [
      { jp: "にもつをもちましょうか。", vi: "Tôi mang hành lý giúp bạn nhé?" },
      { jp: "まどをしめましょうか。", vi: "Tôi đóng cửa sổ nhé?" }
    ]
  }
];
