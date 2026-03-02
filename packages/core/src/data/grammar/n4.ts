import type { GrammarPoint } from "../../models/types";

export const n4Grammar: GrammarPoint[] = [
  {
    id: "n4-tai",
    level: "N4",
    category: "y-dinh",
    title: "Mong muốn làm gì ～たい",
    pattern: "V-ます + たい",
    meaningVi: "Muốn làm...",
    explanation: "Biểu đạt mong muốn của người nói.",
    notes: ["Đối tượng mong muốn thường đánh dấu bằng が", "Không dùng để hỏi người trên trực tiếp"],
    examples: [
      { jp: "にほんへいきたいです。", vi: "Tôi muốn đi Nhật." },
      { jp: "なにがたべたいですか。", vi: "Bạn muốn ăn gì?" }
    ]
  },
  {
    id: "n4-naiide",
    level: "N4",
    category: "dong-tu",
    title: "Không làm gì rồi... ～ないで",
    pattern: "V-ないで",
    meaningVi: "Không... mà... / đừng...",
    explanation: "Nối hai hành động, hành động trước không xảy ra.",
    notes: ["Khác ～なくて (nguyên nhân/trạng thái)", "Đôi khi dùng như lời đề nghị: ～ないでください"],
    examples: [
      { jp: "あさごはんをたべないででかけました。", vi: "Tôi ra ngoài mà không ăn sáng." },
      { jp: "しんぱいしないでください。", vi: "Xin đừng lo." }
    ]
  },
  {
    id: "n4-node",
    level: "N4",
    category: "ly-do",
    title: "Lý do nhẹ nhàng ～ので",
    pattern: "S + ので",
    meaningVi: "Vì... nên...",
    explanation: "Cách nói lý do lịch sự, mềm hơn ～から.",
    notes: ["Danh từ/tính từ na + なので", "Thường dùng trong tình huống lịch sự"],
    examples: [
      { jp: "あめがふっているので、いきません。", vi: "Vì trời đang mưa nên tôi không đi." },
      { jp: "しずかなので、ここでべんきょうします。", vi: "Vì yên tĩnh nên tôi học ở đây." }
    ]
  },
  {
    id: "n4-te-oku",
    level: "N4",
    category: "ke-hoach",
    title: "Làm trước để chuẩn bị ～ておく",
    pattern: "V-て おく",
    meaningVi: "Làm trước...",
    explanation: "Diễn tả hành động chuẩn bị trước cho sự việc sau đó.",
    notes: ["Hội thoại thường rút gọn: ～とく", "Thường kết hợp với kế hoạch"],
    examples: [
      { jp: "りょこうのまえにホテルをよやくしておきます。", vi: "Tôi đặt khách sạn trước chuyến đi." },
      { jp: "メモしておいてください。", vi: "Hãy ghi chú trước nhé." }
    ]
  },
  {
    id: "n4-yasui-nikui",
    level: "N4",
    category: "nang-cao",
    title: "Độ dễ/khó ～やすい・～にくい",
    pattern: "V-ます + やすい / にくい",
    meaningVi: "Dễ... / khó...",
    explanation: "Đánh giá mức độ dễ khó khi thực hiện hành động.",
    notes: ["Gắn vào gốc ます", "Mang tính chủ quan của người nói"],
    examples: [
      { jp: "このペンはかきやすいです。", vi: "Cây bút này dễ viết." },
      { jp: "このかんじはおぼえにくいです。", vi: "Chữ kanji này khó nhớ." }
    ]
  }
];
