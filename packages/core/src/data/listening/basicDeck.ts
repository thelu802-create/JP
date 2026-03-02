import type { ListeningCard } from "../../models/types";

export const listeningDeckBasic: ListeningCard[] = [
  {
    id: "l-greeting-ohayo",
    topic: "greeting",
    japanese: "おはようございます",
    meaningVi: "Chào buổi sáng",
    hint: "Lời chào dùng vào buổi sáng",
    optionsVi: ["Chào buổi sáng", "Chúc ngủ ngon", "Xin lỗi"]
  },
  {
    id: "l-greeting-arigato",
    topic: "greeting",
    japanese: "ありがとうございます",
    meaningVi: "Cảm ơn bạn",
    hint: "Dùng để thể hiện sự biết ơn lịch sự",
    optionsVi: ["Cảm ơn bạn", "Tạm biệt", "Không sao đâu"]
  },
  {
    id: "l-greeting-onegaishimasu",
    topic: "greeting",
    japanese: "よろしくお願いします",
    meaningVi: "Mong bạn giúp đỡ",
    hint: "Câu lịch sự khi bắt đầu hợp tác/làm quen",
    optionsVi: ["Mong bạn giúp đỡ", "Tôi hiểu rồi", "Tôi bận lắm"]
  },
  {
    id: "l-intro-watashiwa",
    topic: "self-intro",
    japanese: "わたしはミンです",
    meaningVi: "Tôi là Minh",
    hint: "Mẫu câu tự giới thiệu tên",
    optionsVi: ["Tôi là Minh", "Bạn tên gì", "Tôi đến từ Hà Nội"]
  },
  {
    id: "l-intro-vietnamkara",
    topic: "self-intro",
    japanese: "ベトナムからきました",
    meaningVi: "Tôi đến từ Việt Nam",
    hint: "Nói xuất xứ/quốc gia",
    optionsVi: ["Tôi đến từ Việt Nam", "Tôi sống ở Nhật", "Tôi nói tiếng Nhật"]
  },
  {
    id: "l-intro-dozo",
    topic: "self-intro",
    japanese: "どうぞよろしく",
    meaningVi: "Rất mong được giúp đỡ",
    hint: "Kết thúc phần giới thiệu bản thân",
    optionsVi: ["Rất mong được giúp đỡ", "Hẹn gặp lại", "Cảm ơn vì đã lắng nghe"]
  },
  {
    id: "l-daily-asa",
    topic: "daily",
    japanese: "まいあさろくじにおきます",
    meaningVi: "Mỗi sáng tôi dậy lúc 6 giờ",
    hint: "Thói quen buổi sáng",
    optionsVi: ["Mỗi sáng tôi dậy lúc 6 giờ", "Mỗi tối tôi ngủ sớm", "Tôi đi làm lúc 8 giờ"]
  },
  {
    id: "l-daily-kaisha",
    topic: "daily",
    japanese: "はちじにかいしゃへいきます",
    meaningVi: "8 giờ tôi đi đến công ty",
    hint: "Nói giờ đi làm",
    optionsVi: ["8 giờ tôi đi đến công ty", "8 giờ tôi ăn sáng", "8 giờ tôi học tiếng Nhật"]
  },
  {
    id: "l-daily-yoru",
    topic: "daily",
    japanese: "よるじゅうじにねます",
    meaningVi: "Tối 10 giờ tôi ngủ",
    hint: "Thói quen trước khi ngủ",
    optionsVi: ["Tối 10 giờ tôi ngủ", "Tối 10 giờ tôi đi dạo", "Tối 10 giờ tôi tắm"]
  },
  {
    id: "l-shopping-kore",
    topic: "shopping",
    japanese: "これはいくらですか",
    meaningVi: "Cái này bao nhiêu tiền?",
    hint: "Hỏi giá khi mua hàng",
    optionsVi: ["Cái này bao nhiêu tiền?", "Cho tôi xem cái kia", "Cái này màu gì?"]
  },
  {
    id: "l-shopping-kaimasu",
    topic: "shopping",
    japanese: "これをください",
    meaningVi: "Cho tôi cái này",
    hint: "Câu nói khi quyết định mua",
    optionsVi: ["Cho tôi cái này", "Tôi chỉ xem thôi", "Tôi chưa quyết định"]
  },
  {
    id: "l-shopping-card",
    topic: "shopping",
    japanese: "カードでお願いします",
    meaningVi: "Thanh toán bằng thẻ giúp tôi",
    hint: "Nói hình thức thanh toán",
    optionsVi: ["Thanh toán bằng thẻ giúp tôi", "Tôi trả tiền mặt", "Có giảm giá không?"]
  },
  {
    id: "l-travel-eki",
    topic: "travel",
    japanese: "えきはどこですか",
    meaningVi: "Nhà ga ở đâu?",
    hint: "Hỏi đường khi đi lại",
    optionsVi: ["Nhà ga ở đâu?", "Nhà vệ sinh ở đâu?", "Bưu điện ở đâu?"]
  },
  {
    id: "l-travel-ikura",
    topic: "travel",
    japanese: "とうきょうまでいくらですか",
    meaningVi: "Đến Tokyo hết bao nhiêu tiền?",
    hint: "Hỏi giá vé đến địa điểm",
    optionsVi: ["Đến Tokyo hết bao nhiêu tiền?", "Bao lâu thì đến Tokyo?", "Có chuyến cuối không?"]
  },
  {
    id: "l-travel-tsugi",
    topic: "travel",
    japanese: "つぎはしんじゅくです",
    meaningVi: "Điểm dừng kế tiếp là Shinjuku",
    hint: "Thông báo trên tàu/xe",
    optionsVi: ["Điểm dừng kế tiếp là Shinjuku", "Tàu đã hủy chuyến", "Tàu đang bị trễ"]
  }
];
