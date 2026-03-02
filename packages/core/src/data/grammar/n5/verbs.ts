import type { GrammarPoint } from "../../../models/types";

export const n5VerbGrammar: GrammarPoint[] = [
  {
    id: "n5-masu",
    level: "N5",
    category: "dong-tu",
    title: "Động từ lịch sự ～ます",
    pattern: "V-ます",
    meaningVi: "Làm gì (lịch sự)",
    explanation: "Dạng lịch sự cơ bản dùng trong hội thoại hàng ngày.",
    notes: ["Hiện tại/tương lai dùng chung dạng", "Lịch sự hơn dạng từ điển"],
    examples: [
      { jp: "まいにちにほんごをべんきょうします。", vi: "Tôi học tiếng Nhật mỗi ngày." },
      { jp: "7じにうちへかえります。", vi: "Tôi về nhà lúc 7 giờ." }
    ]
  },
  {
    id: "n5-masen-mashita",
    level: "N5",
    category: "dong-tu",
    title: "Phủ định và quá khứ ～ません・～ました",
    pattern: "V-ません / V-ました / V-ませんでした",
    meaningVi: "Không làm / đã làm / đã không làm",
    explanation: "Ba biến thể thường gặp để nói phủ định và quá khứ ở mức lịch sự.",
    notes: ["～ませんでした là phủ định quá khứ", "Nên học theo cặp với ～ます"],
    examples: [
      { jp: "きのうべんきょうしませんでした。", vi: "Hôm qua tôi đã không học." },
      { jp: "けさ6じにおきました。", vi: "Sáng nay tôi dậy lúc 6 giờ." }
    ]
  },
  {
    id: "n5-te-kudasai",
    level: "N5",
    category: "dong-tu",
    title: "Yêu cầu lịch sự ～てください",
    pattern: "V-て ください",
    meaningVi: "Hãy vui lòng...",
    explanation: "Cách yêu cầu nhẹ nhàng, lịch sự trong lớp học/công việc.",
    notes: ["Mềm hơn mệnh lệnh", "Hay dùng với hướng dẫn thao tác"],
    examples: [
      { jp: "ここになまえをかいてください。", vi: "Vui lòng viết tên vào đây." },
      { jp: "ゆっくりはなしてください。", vi: "Xin hãy nói chậm." }
    ]
  },
  {
    id: "n5-te-imasu-habit",
    level: "N5",
    category: "dong-tu",
    title: "Thói quen/tiếp diễn ～ています",
    pattern: "V-て います",
    meaningVi: "Đang... / (thường) ...",
    explanation: "Dùng cho hành động đang diễn ra hoặc thói quen lặp lại.",
    notes: ["N5 chủ yếu học ý nghĩa tiếp diễn và thói quen", "N3 trở lên học thêm trạng thái kết quả"],
    examples: [
      { jp: "いまほんをよんでいます。", vi: "Bây giờ tôi đang đọc sách." },
      { jp: "わたしはにほんごをべんきょうしています。", vi: "Tôi đang học tiếng Nhật." }
    ]
  },
  {
    id: "n5-mashou",
    level: "N5",
    category: "dong-tu",
    title: "Rủ rê với ～ましょう",
    pattern: "V-ましょう",
    meaningVi: "Chúng ta cùng...",
    explanation: "Dùng khi gợi ý cùng làm một việc.",
    notes: ["Thân thiện và lịch sự", "Khác ～ましょうか (đề nghị giúp)"],
    examples: [
      { jp: "いっしょにひるごはんをたべましょう。", vi: "Chúng ta cùng ăn trưa nhé." },
      { jp: "あした7じにあいましょう。", vi: "Mai gặp nhau lúc 7 giờ nhé." }
    ]
  }
];
