import type { GrammarPoint } from "../../../../models/types";

export const n5VerbPresentFutureGrammar: GrammarPoint[] = [
  {
    id: "n5-masu-present-future",
    level: "N5",
    category: "dong-tu",
    title: "Hiện tại/Tương lai lịch sự ～ます",
    pattern: "V-ます",
    meaningVi: "(sẽ/đang/thường) làm...",
    explanation: "Ở N5, ～ます được dùng cho hiện tại thói quen và tương lai gần theo ngữ cảnh.",
    tags: ["Động từ", "Hiện tại", "Tương lai"],
    notes: ["Cần nhìn từ chỉ thời gian để phân biệt hiện tại hay tương lai", "Lịch sự hơn dạng từ điển"],
    examples: [
      { jp: "まいにちにほんごをべんきょうします。", vi: "Tôi học tiếng Nhật mỗi ngày." },
      { jp: "あした7じにうちへかえります。", vi: "Ngày mai tôi về nhà lúc 7 giờ." }
    ]
  },
  {
    id: "n5-te-imasu-progressive",
    level: "N5",
    category: "dong-tu",
    title: "Hiện tại tiếp diễn ～ています",
    pattern: "V-て います",
    meaningVi: "Đang...",
    explanation: "Dùng để diễn tả hành động đang diễn ra tại thời điểm nói.",
    tags: ["Động từ", "Hiện tại", "Tiếp diễn"],
    notes: ["Động từ được chuyển sang thể て trước khi thêm います", "N5 tập trung nghĩa tiếp diễn cơ bản"],
    examples: [
      { jp: "いまほんをよんでいます。", vi: "Bây giờ tôi đang đọc sách." },
      { jp: "せんせいははなしています。", vi: "Giáo viên đang nói." }
    ]
  }
];
