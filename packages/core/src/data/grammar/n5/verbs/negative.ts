import type { GrammarPoint } from "../../../../models/types";

export const n5VerbNegativeGrammar: GrammarPoint[] = [
  {
    id: "n5-masen-negative",
    level: "N5",
    category: "dong-tu",
    title: "Phủ định hiện tại/tương lai ～ません",
    pattern: "V-ません",
    meaningVi: "Không làm...",
    explanation: "Phủ định lịch sự cho hiện tại thói quen hoặc tương lai.",
    tags: ["Động từ", "Phủ định", "Hiện tại", "Tương lai"],
    notes: ["Cũng cần ngữ cảnh thời gian để hiểu hiện tại hay tương lai", "Hay dùng để từ chối lịch sự"],
    examples: [
      { jp: "さかなをたべません。", vi: "Tôi không ăn cá." },
      { jp: "あしたはいきません。", vi: "Ngày mai tôi không đi." }
    ]
  },
  {
    id: "n5-masen-deshita-negative-past",
    level: "N5",
    category: "dong-tu",
    title: "Phủ định quá khứ ～ませんでした",
    pattern: "V-ませんでした",
    meaningVi: "Đã không làm...",
    explanation: "Dùng để nói trong quá khứ đã không thực hiện hành động.",
    tags: ["Động từ", "Phủ định", "Quá khứ"],
    notes: ["Nên học theo cặp với ～ました", "Rất thường gặp trong hội thoại hàng ngày"],
    examples: [
      { jp: "きのうべんきょうしませんでした。", vi: "Hôm qua tôi đã không học." },
      { jp: "けさコーヒーをのみませんでした。", vi: "Sáng nay tôi đã không uống cà phê." }
    ]
  }
];
