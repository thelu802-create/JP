import { Button, Card, Space, Tag } from "antd-mobile";
import type { VocabularyItem } from "@learnjp/core";

interface Props {
  item?: VocabularyItem;
  showMeaning: boolean;
  index: number;
  total: number;
  showLessonTag?: boolean;
  alwaysShowMeaning?: boolean;
  showToggleMeaning?: boolean;
  onSpeak: () => void;
  onToggleMeaning: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export function MobileVocabularyCard({
  item,
  showMeaning,
  index,
  total,
  showLessonTag = true,
  alwaysShowMeaning = false,
  showToggleMeaning = true,
  onSpeak,
  onToggleMeaning,
  onPrev,
  onNext
}: Props) {
  if (!item) {
    return <Card>Không có từ vựng cho mục này.</Card>;
  }

  const shouldShowMeaning = alwaysShowMeaning || showMeaning;

  const jpBlock = (
    <Space direction="vertical" block>
      <b style={{ fontSize: 24 }}>{item.japanese}</b>
      <div>{item.kana}</div>
    </Space>
  );

  const meaningBlock = (
    <Space direction="vertical" block>
      <b>Nghĩa: {item.meaningVi}</b>
      <div>
        {item.example.jp}
        <br />
        {item.example.vi}
      </div>
    </Space>
  );

  return (
    <Card>
      <Space direction="vertical" block>
        <div>
          Card {index + 1}/{total}
        </div>
        <Space>
          {showLessonTag ? <Tag color="primary">Bài {item.lesson}</Tag> : null}
          <Tag>{item.wordType}</Tag>
        </Space>

        {shouldShowMeaning ? (
          <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
            <div style={{ width: "48%" }}>{jpBlock}</div>
            <div style={{ width: "48%" }}>{meaningBlock}</div>
          </div>
        ) : (
          jpBlock
        )}

        <Space>
          <Button onClick={onSpeak}>Phát âm</Button>
          {showToggleMeaning ? (
            <Button color="primary" onClick={onToggleMeaning}>
              {showMeaning ? "Ẩn nghĩa" : "Hiện nghĩa"}
            </Button>
          ) : null}
        </Space>
        <Space>
          <Button onClick={onPrev}>Trước</Button>
          <Button onClick={onNext}>Sau</Button>
        </Space>
      </Space>
    </Card>
  );
}
