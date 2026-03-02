import type { GrammarPoint } from "../../models/types";

export const n1Grammar: GrammarPoint[] = [
  {
    id: "n1-zaru-wo-enai",
    level: "N1",
    category: "trang-trong",
    title: "Buộc phải làm... ～ざるを得ない",
    pattern: "V-ない stem + ざるを得ない",
    meaningVi: "Buộc phải...",
    explanation: "Diễn tả tình huống không muốn nhưng vẫn phải làm.",
    notes: ["Được dùng nhiều trong văn viết trang trọng", "Riêng する -> せざるを得ない"],
    examples: [
      { jp: "じょうきょうをかんがえると、ちゅうしせざるをえない。", vi: "Xét tình hình thì buộc phải hủy." },
      { jp: "かれのいけんをみとめざるをえなかった。", vi: "Tôi buộc phải công nhận ý kiến của anh ấy." }
    ]
  },
  {
    id: "n1-ni-kataku-nai",
    level: "N1",
    category: "trang-trong",
    title: "Không cần quá... ～にかたくない",
    pattern: "V-dictionary + にかたくない",
    meaningVi: "Không khó để...",
    explanation: "Dùng để nói việc gì đó dễ hình dung/suy ra.",
    notes: ["Mang văn phong viết báo cáo, bình luận", "Chủ yếu kết hợp với động từ nhận thức"],
    examples: [
      { jp: "そのしっぱいで、かれがしょうげきをうけたことはそうぞうにかたくない。", vi: "Không khó để hình dung anh ấy bị sốc vì thất bại đó." },
      { jp: "けっかはよそうにかたくない。", vi: "Kết quả không khó để dự đoán." }
    ]
  },
  {
    id: "n1-taru-mono",
    level: "N1",
    category: "trang-trong",
    title: "Tư cách của... ～たるもの",
    pattern: "N + たるもの",
    meaningVi: "Đã là... thì phải...",
    explanation: "Nhấn mạnh chuẩn mực/đạo đức mà vai trò đó cần có.",
    notes: ["Sắc thái cổ điển, trang trọng", "Hay gặp trong diễn văn, xã luận"],
    examples: [
      { jp: "きょうしょくたるもの、せいとにせきにんをもつべきだ。", vi: "Đã là nhà giáo thì phải có trách nhiệm với học sinh." },
      { jp: "リーダーたるもの、れいせいでなければならない。", vi: "Đã là lãnh đạo thì phải bình tĩnh." }
    ]
  },
  {
    id: "n1-wo-kinjienai",
    level: "N1",
    category: "nang-cao",
    title: "Không thể không... ～を禁じ得ない",
    pattern: "N + を禁じ得ない",
    meaningVi: "Không thể nén...",
    explanation: "Biểu thị cảm xúc mạnh không thể kiềm chế.",
    notes: ["Thường với cảm xúc: đồng cảm, phẫn nộ", "Văn viết trang trọng"],
    examples: [
      { jp: "ひさいしゃにどうじょうをきんじえない。", vi: "Không thể không đồng cảm với người bị nạn." },
      { jp: "そのたいどにいかりをきんじえない。", vi: "Tôi không thể nén nổi sự tức giận trước thái độ đó." }
    ]
  },
  {
    id: "n1-narawashi-da",
    level: "N1",
    category: "nang-cao",
    title: "Theo thông lệ... ～ならわしだ",
    pattern: "S + ならわしだ",
    meaningVi: "Theo lệ thường",
    explanation: "Nói về tập tục, thông lệ xã hội đã tồn tại lâu.",
    notes: ["Mang tính văn hóa-xã hội", "Hay xuất hiện trong văn viết học thuật"],
    examples: [
      { jp: "このちいきでは、しんねんにかぞくであつまるならわしだ。", vi: "Vùng này có phong tục họp gia đình dịp năm mới." },
      { jp: "むかしはそれがふつうのならわしだった。", vi: "Ngày xưa đó là thông lệ thông thường." }
    ]
  }
];
