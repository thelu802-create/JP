import type { GrammarPoint } from "../../../../models/types";

export const n5VerbActionGrammar: GrammarPoint[] = [
  {
    id: "n5-te-kudasai",
    level: "N5",
    category: "dong-tu",
    title: "Yêu cầu lịch sự ～てください",
    pattern: "V-て ください",
    meaningVi: "Hãy vui lòng...",
    explanation: "Cách yêu cầu nhẹ nhàng, lịch sự trong lớp học/công việc.",
    tags: ["Động từ", "Yêu cầu"],
    notes: ["Mềm hơn mệnh lệnh trực tiếp", "Hay dùng trong hướng dẫn thao tác"],
    examples: [
      { jp: "ここになまえをかいてください。", vi: "Vui lòng viết tên vào đây." },
      { jp: "ゆっくりはなしてください。", vi: "Xin hãy nói chậm." }
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
    tags: ["Động từ", "Rủ rê"],
    notes: ["Thân thiện và lịch sự", "Khác ～ましょうか (đề nghị giúp)"],
    examples: [
      { jp: "いっしょにひるごはんをたべましょう。", vi: "Chúng ta cùng ăn trưa nhé." },
      { jp: "あした7じにあいましょう。", vi: "Mai gặp nhau lúc 7 giờ nhé." }
    ]
  }
];
