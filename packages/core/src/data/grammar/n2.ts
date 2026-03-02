import type { GrammarPoint } from "../../models/types";

export const n2Grammar: GrammarPoint[] = [
  {
    id: "n2-wake-da",
    level: "N2",
    category: "ly-do",
    title: "Kết luận hiển nhiên ～わけだ",
    pattern: "S + わけだ",
    meaningVi: "Thảo nào / vì vậy là...",
    explanation: "Rút ra kết luận hợp lý từ thông tin trước đó.",
    notes: ["Không dùng cho kết luận vô căn cứ", "Thường đi kèm giải thích trước"],
    examples: [
      { jp: "かれは10ねんにほんにいた。にほんごがじょうずなわけだ。", vi: "Anh ấy ở Nhật 10 năm, thảo nào giỏi tiếng Nhật." },
      { jp: "でんしゃがとまった。おくれるわけだ。", vi: "Tàu dừng nên trễ là đúng rồi." }
    ]
  },
  {
    id: "n2-koto-wa-nai",
    level: "N2",
    category: "nang-cao",
    title: "Không cần thiết ～ことはない",
    pattern: "V-dictionary + ことはない",
    meaningVi: "Không cần phải...",
    explanation: "Khuyên nhẹ rằng không đến mức cần làm điều đó.",
    notes: ["Thường dùng trong lời khuyên", "Sắc thái mềm hơn mệnh lệnh"],
    examples: [
      { jp: "そんなにあわてることはない。", vi: "Không cần phải vội vàng đến vậy." },
      { jp: "ぜんぶおぼえることはありません。", vi: "Không cần nhớ hết tất cả." }
    ]
  },
  {
    id: "n2-nai-koto-ni-wa",
    level: "N2",
    category: "ke-hoach",
    title: "Nếu không... thì không thể... ～ないことには",
    pattern: "V-ない + ことには",
    meaningVi: "Nếu không... thì không thể...",
    explanation: "Điều kiện cần thiết để việc sau có thể xảy ra.",
    notes: ["Mang tính điều kiện bắt buộc", "Hay theo sau là kết quả bất lợi"],
    examples: [
      { jp: "しらべないことには、こたえられません。", vi: "Nếu không tìm hiểu thì không thể trả lời." },
      { jp: "やってみないことには、わからない。", vi: "Không thử thì không biết được." }
    ]
  },
  {
    id: "n2-saichuu",
    level: "N2",
    category: "thoi-gian",
    title: "Đúng lúc đang... ～最中に",
    pattern: "V-ている + 最中に",
    meaningVi: "Đúng lúc đang...",
    explanation: "Nhấn mạnh một sự kiện chen vào ngay thời điểm hành động đang diễn ra.",
    notes: ["Hay dùng trong thông báo, mô tả sự cố", "Có thể dùng N の最中に"],
    examples: [
      { jp: "かいぎのさいちゅうに、でんわがなりました。", vi: "Đúng lúc họp thì điện thoại reo." },
      { jp: "しけんさいちゅうにねないでください。", vi: "Đừng ngủ trong lúc thi." }
    ]
  },
  {
    id: "n2-kake-da",
    level: "N2",
    category: "nang-cao",
    title: "Đang dở dang... ～かけだ",
    pattern: "V-ます + かけ",
    meaningVi: "Đang làm dở...",
    explanation: "Diễn tả hành động đang dang dở, chưa hoàn tất.",
    notes: ["Có thể dùng danh từ: ～かけの～", "Thường dùng với hành động bị gián đoạn"],
    examples: [
      { jp: "よみかけのほんがつくえにあります。", vi: "Quyển sách đang đọc dở nằm trên bàn." },
      { jp: "いいかけたことばをのみこみました。", vi: "Tôi nuốt lại điều đang định nói." }
    ]
  }
];
