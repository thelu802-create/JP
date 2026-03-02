import type { GrammarPoint } from "../../../models/types";

export const n5TimeConditionGrammar: GrammarPoint[] = [
  {
    id: "n5-ima-nanji",
    level: "N5",
    category: "thoi-gian",
    title: "Mốc thời gian với に",
    pattern: "T に V",
    meaningVi: "Làm gì vào lúc T",
    explanation: "Dùng に với mốc giờ/ngày cụ thể.",
    notes: ["Không dùng に với các từ như きょう, あした (thường bỏ)", "Hữu ích khi nói lịch hẹn"],
    examples: [
      { jp: "7じにおきます。", vi: "Tôi dậy lúc 7 giờ." },
      { jp: "どようびにともだちにあいます。", vi: "Tôi gặp bạn vào thứ bảy." }
    ]
  },
  {
    id: "n5-before-after",
    level: "N5",
    category: "thoi-gian",
    title: "Trước/sau với まえに・あとで",
    pattern: "Vる まえに / Vた あとで",
    meaningVi: "Trước khi... / sau khi...",
    explanation: "Nối hai hành động theo trình tự thời gian.",
    notes: ["Vる まえに dùng trước khi làm", "Vた あとで dùng sau khi đã làm"],
    examples: [
      { jp: "ねるまえにほんをよみます。", vi: "Tôi đọc sách trước khi ngủ." },
      { jp: "ごはんをたべたあとでべんきょうします。", vi: "Sau khi ăn xong tôi học." }
    ]
  },
  {
    id: "n5-because-kara",
    level: "N5",
    category: "ly-do",
    title: "Lý do cơ bản với から",
    pattern: "S1 から、S2",
    meaningVi: "Vì S1 nên S2",
    explanation: "Nối lý do và kết quả theo cách đơn giản, dễ dùng.",
    notes: ["Mệnh đề lý do đứng trước tự nhiên hơn ở N5", "Thường gặp trong hội thoại hàng ngày"],
    examples: [
      { jp: "あめですから、いきません。", vi: "Vì trời mưa nên tôi không đi." },
      { jp: "いそがしいですから、またこんど。", vi: "Vì bận nên để lần sau nhé." }
    ]
  },
  {
    id: "n5-if-to",
    level: "N5",
    category: "dieu-kien",
    title: "Điều kiện cơ bản với と",
    pattern: "Vる と、...",
    meaningVi: "Hễ... thì...",
    explanation: "Diễn tả kết quả tự nhiên/quy luật khi điều kiện xảy ra.",
    notes: ["Không hợp với ý chí/mệnh lệnh mạnh", "Rất hay dùng trong chỉ dẫn máy móc"],
    examples: [
      { jp: "このボタンをおすと、ドアがあきます。", vi: "Nhấn nút này thì cửa mở." },
      { jp: "はるになると、さくらがさきます。", vi: "Hễ sang xuân thì hoa anh đào nở." }
    ]
  }
];
