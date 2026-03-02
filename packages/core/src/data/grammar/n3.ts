import type { GrammarPoint } from "../../models/types";

export const n3Grammar: GrammarPoint[] = [
  {
    id: "n3-te-iru-state",
    level: "N3",
    category: "dong-tu",
    title: "Trạng thái kết quả ～ている",
    pattern: "V-て いる",
    meaningVi: "Đang... / ở trạng thái...",
    explanation: "Ngoài ý nghĩa tiếp diễn, ～ている còn diễn tả trạng thái kết quả.",
    notes: ["Ví dụ しっている = biết (trạng thái)", "Cần phân biệt hành động đang diễn ra"],
    examples: [
      { jp: "けっこんしています。", vi: "Tôi đã kết hôn (đang ở trạng thái đã kết hôn)." },
      { jp: "そのことをしっています。", vi: "Tôi biết chuyện đó." }
    ]
  },
  {
    id: "n3-koto-ni-suru",
    level: "N3",
    category: "ke-hoach",
    title: "Quyết định/quy ước ～ことにする・ことになる",
    pattern: "V-dictionary + ことにする / ことになる",
    meaningVi: "Quyết định... / được quyết định...",
    explanation: "ことにする là chủ động quyết; ことになる là kết quả quyết định bên ngoài.",
    notes: ["Rất hay gặp trong môi trường công việc", "Sự khác biệt về chủ thể ra quyết định"],
    examples: [
      { jp: "まいにちうんどうすることにしました。", vi: "Tôi đã quyết định tập thể dục mỗi ngày." },
      { jp: "らいげつ、てんきんすることになりました。", vi: "Tôi được sắp xếp chuyển công tác tháng tới." }
    ]
  },
  {
    id: "n3-ato-de",
    level: "N3",
    category: "thoi-gian",
    title: "Sau khi... ～たあとで",
    pattern: "V-ta + あとで",
    meaningVi: "Sau khi...",
    explanation: "Nói hành động B xảy ra sau khi hành động A kết thúc.",
    notes: ["Thứ tự thời gian rõ ràng", "Có thể dùng N のあとで"],
    examples: [
      { jp: "しごとが終わったあとで、のみます。", vi: "Sau khi xong việc tôi đi uống." },
      { jp: "ごはんのあとで、さんぽします。", vi: "Sau bữa ăn tôi đi dạo." }
    ]
  },
  {
    id: "n3-baai",
    level: "N3",
    category: "dieu-kien",
    title: "Trường hợp ～場合(は)",
    pattern: "S + 場合(は)",
    meaningVi: "Trong trường hợp...",
    explanation: "Dùng trong hướng dẫn, quy định, thông báo có tính trang trọng.",
    notes: ["Mang tính khách quan", "Hay đi kèm mệnh đề xử lý/chỉ dẫn"],
    examples: [
      { jp: "ちこくする場合は、れんらくしてください。", vi: "Nếu trễ giờ thì hãy liên lạc." },
      { jp: "こしょうした場合は、でんわしてください。", vi: "Trong trường hợp hỏng, hãy gọi điện." }
    ]
  },
  {
    id: "n3-rasii",
    level: "N3",
    category: "nang-cao",
    title: "Nghe nói/có vẻ ～らしい",
    pattern: "S + らしい",
    meaningVi: "Nghe nói là... / có vẻ...",
    explanation: "Dựa vào thông tin nghe được hoặc dấu hiệu bên ngoài.",
    notes: ["Khác ～そうだ (truyền đạt thông tin)", "Có thể dùng để mô tả đặc trưng"],
    examples: [
      { jp: "あしたはゆきがふるらしいです。", vi: "Nghe nói mai sẽ có tuyết." },
      { jp: "かれはほんとうにこどもらしい。", vi: "Cậu ấy đúng là rất trẻ con." }
    ]
  }
];
