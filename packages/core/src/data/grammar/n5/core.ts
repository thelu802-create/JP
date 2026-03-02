import type { GrammarPoint } from "../../../models/types";

export const n5CoreGrammar: GrammarPoint[] = [
  {
    id: "n5-desu",
    level: "N5",
    category: "co-ban",
    title: "Mẫu câu khẳng định です",
    pattern: "N は N です",
    meaningVi: "A là B",
    explanation: "Mẫu câu lịch sự cơ bản nhất để giới thiệu, định nghĩa danh từ.",
    notes: ["Trợ từ は đánh dấu chủ đề", "Có thể bỏ chủ ngữ khi rõ ngữ cảnh"],
    examples: [
      { jp: "わたしはエンジニアです。", vi: "Tôi là kỹ sư." },
      { jp: "これはじしょです。", vi: "Đây là từ điển." }
    ]
  },
  {
    id: "n5-ja-arimasen",
    level: "N5",
    category: "co-ban",
    title: "Phủ định danh từ じゃありません",
    pattern: "N は N じゃありません / ではありません",
    meaningVi: "A không phải là B",
    explanation: "Dùng để phủ định lịch sự với danh từ.",
    notes: ["じゃありません thường dùng hội thoại", "ではありません trang trọng hơn"],
    examples: [
      { jp: "わたしはせんせいじゃありません。", vi: "Tôi không phải giáo viên." },
      { jp: "ここはびょういんではありません。", vi: "Đây không phải bệnh viện." }
    ]
  },
  {
    id: "n5-ka-question",
    level: "N5",
    category: "co-ban",
    title: "Câu hỏi với か",
    pattern: "S + か",
    meaningVi: "... phải không?",
    explanation: "Thêm か ở cuối để tạo câu hỏi lịch sự.",
    notes: ["Không cần dấu chấm hỏi trong văn viết chuẩn", "Ngữ điệu vẫn quan trọng trong hội thoại"],
    examples: [
      { jp: "あなたはがくせいですか。", vi: "Bạn là học sinh phải không?" },
      { jp: "これはあなたのペンですか。", vi: "Đây là bút của bạn phải không?" }
    ]
  },
  {
    id: "n5-mo",
    level: "N5",
    category: "co-ban",
    title: "Cũng với も",
    pattern: "N も ...",
    meaningVi: "... cũng ...",
    explanation: "Dùng khi thêm một đối tượng có tính chất giống đối tượng trước.",
    notes: ["Thay thế cho は/が tùy ngữ cảnh", "Tạo câu nối tự nhiên trong hội thoại"],
    examples: [
      { jp: "わたしもベトナムじんです。", vi: "Tôi cũng là người Việt Nam." },
      { jp: "これもおいしいです。", vi: "Món này cũng ngon." }
    ]
  }
];
