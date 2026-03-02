import type { TimeVocabularyGroup } from "../../models/types";

export const timeVocabularyGroups: TimeVocabularyGroup[] = [
  {
    key: "day",
    label: "Ngày",
    items: [
      { id: "time-day-getsuyoubi", lesson: 0, japanese: "げつようび", kana: "げつようび", meaningVi: "thứ hai", wordType: "danh từ", example: { jp: "げつようびにしごとがあります。", vi: "Thứ hai tôi có việc." } },
      { id: "time-day-kayoubi", lesson: 0, japanese: "かようび", kana: "かようび", meaningVi: "thứ ba", wordType: "danh từ", example: { jp: "かようびにべんきょうします。", vi: "Thứ ba tôi học." } },
      { id: "time-day-suiyoubi", lesson: 0, japanese: "すいようび", kana: "すいようび", meaningVi: "thứ tư", wordType: "danh từ", example: { jp: "すいようびはテストです。", vi: "Thứ tư có bài kiểm tra." } },
      { id: "time-day-mokuyoubi", lesson: 0, japanese: "もくようび", kana: "もくようび", meaningVi: "thứ năm", wordType: "danh từ", example: { jp: "もくようびにかいぎがあります。", vi: "Thứ năm có cuộc họp." } },
      { id: "time-day-kinyoubi", lesson: 0, japanese: "きんようび", kana: "きんようび", meaningVi: "thứ sáu", wordType: "danh từ", example: { jp: "きんようびのよるにあいます。", vi: "Tối thứ sáu gặp nhau." } },
      { id: "time-day-doyoubi", lesson: 0, japanese: "どようび", kana: "どようび", meaningVi: "thứ bảy", wordType: "danh từ", example: { jp: "どようびにりょこうします。", vi: "Thứ bảy tôi đi du lịch." } },
      { id: "time-day-nichiyoubi", lesson: 0, japanese: "にちようび", kana: "にちようび", meaningVi: "chủ nhật", wordType: "danh từ", example: { jp: "にちようびにやすみます。", vi: "Tôi nghỉ vào chủ nhật." } },
      { id: "time-day-kyou", lesson: 0, japanese: "きょう", kana: "きょう", meaningVi: "hôm nay", wordType: "danh từ", example: { jp: "きょうはあついです。", vi: "Hôm nay trời nóng." } },
      { id: "time-day-ashita", lesson: 0, japanese: "あした", kana: "あした", meaningVi: "ngày mai", wordType: "danh từ", example: { jp: "あしたべんきょうします。", vi: "Ngày mai tôi học." } },
      { id: "time-day-kinou", lesson: 0, japanese: "きのう", kana: "きのう", meaningVi: "hôm qua", wordType: "danh từ", example: { jp: "きのうえいがをみました。", vi: "Hôm qua tôi xem phim." } },
      { id: "time-day-mainichi", lesson: 0, japanese: "まいにち", kana: "まいにち", meaningVi: "mỗi ngày", wordType: "phó từ", example: { jp: "まいにちにほんごをべんきょうします。", vi: "Tôi học tiếng Nhật mỗi ngày." } },
      { id: "time-day-nannichi", lesson: 0, japanese: "なんにち", kana: "なんにち", meaningVi: "ngày mấy", wordType: "nghi vấn", example: { jp: "きょうはなんにちですか。", vi: "Hôm nay là ngày mấy?" } }
    ]
  },
  {
    key: "month",
    label: "Tháng",
    items: [
      { id: "time-month-ichigatsu", lesson: 0, japanese: "いちがつ", kana: "いちがつ", meaningVi: "tháng 1", wordType: "danh từ", example: { jp: "いちがつはさむいです。", vi: "Tháng 1 thì lạnh." } },
      { id: "time-month-shigatsu", lesson: 0, japanese: "しがつ", kana: "しがつ", meaningVi: "tháng 4", wordType: "danh từ", example: { jp: "しがつにあたらしいがっきがはじまります。", vi: "Tháng 4 bắt đầu học kỳ mới." } },
      { id: "time-month-shichigatsu", lesson: 0, japanese: "しちがつ", kana: "しちがつ", meaningVi: "tháng 7", wordType: "danh từ", example: { jp: "しちがつにりょこうします。", vi: "Tôi đi du lịch vào tháng 7." } },
      { id: "time-month-juunigatsu", lesson: 0, japanese: "じゅうにがつ", kana: "じゅうにがつ", meaningVi: "tháng 12", wordType: "danh từ", example: { jp: "じゅうにがつはイベントがおおいです。", vi: "Tháng 12 có nhiều sự kiện." } },
      { id: "time-month-nangatsu", lesson: 0, japanese: "なんがつ", kana: "なんがつ", meaningVi: "tháng mấy", wordType: "nghi vấn", example: { jp: "たんじょうびはなんがつですか。", vi: "Sinh nhật bạn là tháng mấy?" } },
      { id: "time-month-tsuki", lesson: 0, japanese: "つき", kana: "つき", meaningVi: "tháng (đơn vị)", wordType: "danh từ", example: { jp: "さんかげつにほんごをべんきょうしました。", vi: "Tôi đã học tiếng Nhật 3 tháng." } }
    ]
  },
  {
    key: "year",
    label: "Năm",
    items: [
      { id: "time-year-kotoshi", lesson: 0, japanese: "ことし", kana: "ことし", meaningVi: "năm nay", wordType: "danh từ", example: { jp: "ことしにほんへいきます。", vi: "Năm nay tôi đi Nhật." } },
      { id: "time-year-kyonen", lesson: 0, japanese: "きょねん", kana: "きょねん", meaningVi: "năm ngoái", wordType: "danh từ", example: { jp: "きょねんにほんごをはじめました。", vi: "Năm ngoái tôi bắt đầu học tiếng Nhật." } },
      { id: "time-year-rainen", lesson: 0, japanese: "らいねん", kana: "らいねん", meaningVi: "năm sau", wordType: "danh từ", example: { jp: "らいねんりゅうがくするつもりです。", vi: "Năm sau tôi dự định du học." } },
      { id: "time-year-nannen", lesson: 0, japanese: "なんねん", kana: "なんねん", meaningVi: "năm bao nhiêu", wordType: "nghi vấn", example: { jp: "いまはなんねんですか。", vi: "Bây giờ là năm bao nhiêu?" } },
      { id: "time-year-toshi", lesson: 0, japanese: "とし", kana: "とし", meaningVi: "năm (tuổi/năm)", wordType: "danh từ", example: { jp: "わたしはにじゅうさいです。", vi: "Tôi 20 tuổi." } }
    ]
  },
  {
    key: "hour",
    label: "Giờ",
    items: [
      { id: "time-hour-ichiji", lesson: 0, japanese: "いちじ", kana: "いちじ", meaningVi: "1 giờ", wordType: "danh từ", example: { jp: "いちじにしゅっぱつします。", vi: "Tôi xuất phát lúc 1 giờ." } },
      { id: "time-hour-shichiji", lesson: 0, japanese: "しちじ", kana: "しちじ", meaningVi: "7 giờ", wordType: "danh từ", example: { jp: "まいあさしちじにおきます。", vi: "Mỗi sáng tôi dậy lúc 7 giờ." } },
      { id: "time-hour-kuji", lesson: 0, japanese: "くじ", kana: "くじ", meaningVi: "9 giờ", wordType: "danh từ", example: { jp: "くじからはたらきます。", vi: "Tôi làm việc từ 9 giờ." } },
      { id: "time-hour-juuniji", lesson: 0, japanese: "じゅうにじ", kana: "じゅうにじ", meaningVi: "12 giờ", wordType: "danh từ", example: { jp: "ひるのじゅうにじです。", vi: "Bây giờ là 12 giờ trưa." } },
      { id: "time-hour-nanji", lesson: 0, japanese: "なんじ", kana: "なんじ", meaningVi: "mấy giờ", wordType: "nghi vấn", example: { jp: "いまなんじですか。", vi: "Bây giờ là mấy giờ?" } },
      { id: "time-hour-ji", lesson: 0, japanese: "じ", kana: "じ", meaningVi: "giờ (đơn vị)", wordType: "hậu tố", example: { jp: "さんじかんべんきょうしました。", vi: "Tôi đã học 3 tiếng." } }
    ]
  },
  {
    key: "minute",
    label: "Phút",
    items: [
      { id: "time-minute-ippun", lesson: 0, japanese: "いっぷん", kana: "いっぷん", meaningVi: "1 phút", wordType: "danh từ", example: { jp: "あといっぷんまってください。", vi: "Xin đợi thêm 1 phút." } },
      { id: "time-minute-gofun", lesson: 0, japanese: "ごふん", kana: "ごふん", meaningVi: "5 phút", wordType: "danh từ", example: { jp: "ごふんでつきます。", vi: "Đến nơi trong 5 phút." } },
      { id: "time-minute-juppun", lesson: 0, japanese: "じゅっぷん", kana: "じゅっぷん", meaningVi: "10 phút", wordType: "danh từ", example: { jp: "じゅっぷんやすみましょう。", vi: "Chúng ta nghỉ 10 phút nhé." } },
      { id: "time-minute-sanjuppun", lesson: 0, japanese: "さんじゅっぷん", kana: "さんじゅっぷん", meaningVi: "30 phút", wordType: "danh từ", example: { jp: "さんじゅっぷんあるきました。", vi: "Tôi đã đi bộ 30 phút." } },
      { id: "time-minute-nanpun", lesson: 0, japanese: "なんぷん", kana: "なんぷん", meaningVi: "mấy phút", wordType: "nghi vấn", example: { jp: "えきまでなんぷんですか。", vi: "Đến ga mất mấy phút?" } },
      { id: "time-minute-fun", lesson: 0, japanese: "ふん", kana: "ふん", meaningVi: "phút (đơn vị)", wordType: "hậu tố", example: { jp: "にふんまってください。", vi: "Xin đợi 2 phút." } }
    ]
  },
  {
    key: "second",
    label: "Giây",
    items: [
      { id: "time-second-ichibyou", lesson: 0, japanese: "いちびょう", kana: "いちびょう", meaningVi: "1 giây", wordType: "danh từ", example: { jp: "いちびょうでボタンをおします。", vi: "Nhấn nút trong 1 giây." } },
      { id: "time-second-jyuubyou", lesson: 0, japanese: "じゅうびょう", kana: "じゅうびょう", meaningVi: "10 giây", wordType: "danh từ", example: { jp: "じゅうびょうかぞえてください。", vi: "Hãy đếm 10 giây." } },
      { id: "time-second-sanjuubyou", lesson: 0, japanese: "さんじゅうびょう", kana: "さんじゅうびょう", meaningVi: "30 giây", wordType: "danh từ", example: { jp: "さんじゅうびょうでスタートします。", vi: "Bắt đầu sau 30 giây." } },
      { id: "time-second-nanbyou", lesson: 0, japanese: "なんびょう", kana: "なんびょう", meaningVi: "bao nhiêu giây", wordType: "nghi vấn", example: { jp: "なんびょうかかりますか。", vi: "Mất bao nhiêu giây?" } },
      { id: "time-second-byou", lesson: 0, japanese: "びょう", kana: "びょう", meaningVi: "giây (đơn vị)", wordType: "hậu tố", example: { jp: "ごびょうまってください。", vi: "Xin đợi 5 giây." } }
    ]
  }
];
