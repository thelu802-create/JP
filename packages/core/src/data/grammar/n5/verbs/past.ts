import type { GrammarPoint } from "../../../../models/types";

export const n5VerbPastGrammar: GrammarPoint[] = [
  {
    id: "n5-mashita-past",
    level: "N5",
    category: "dong-tu",
    title: "Quá khứ lịch sự ～ました",
    pattern: "V-ました",
    meaningVi: "Đã làm...",
    explanation: "Diễn tả hành động đã hoàn thành trong quá khứ.",
    tags: ["Động từ", "Quá khứ"],
    notes: ["Thường đi với mốc thời gian quá khứ: きのう, せんしゅう...", "Dùng rất nhiều trong kể lại sự việc"],
    examples: [
      { jp: "きのうえいがをみました。", vi: "Hôm qua tôi đã xem phim." },
      { jp: "けさ6じにおきました。", vi: "Sáng nay tôi đã dậy lúc 6 giờ." }
    ]
  }
];
