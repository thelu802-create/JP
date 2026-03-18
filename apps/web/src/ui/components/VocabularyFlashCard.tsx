import { Button, Card, Space, Tag, Typography } from "antd";
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

export function VocabularyFlashCard({
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

  const meaningBlock = (
    <Space direction="vertical" size={6} className="flashcard-panel">
      <Typography.Text strong>Nghĩa: {item.meaningVi}</Typography.Text>
      <Typography.Paragraph style={{ marginBottom: 0 }}>
        {item.example.jp}
        <br />
        {item.example.vi}
      </Typography.Paragraph>
    </Space>
  );

  const jpBlock = (
    <Space direction="vertical" size={6} className="flashcard-panel">
      <Typography.Title level={3} style={{ margin: 0 }}>
        {item.japanese}
      </Typography.Title>
      <Typography.Text type="secondary">{item.kana}</Typography.Text>
    </Space>
  );

  return (
    <Card title={`Card ${index + 1}/${total}`} className="flashcard">
      <Space direction="vertical" size={10} style={{ width: "100%" }}>
        <Space wrap>
          {showLessonTag ? <Tag color="geekblue">Bài {item.lesson}</Tag> : null}
          <Tag>{item.wordType}</Tag>
        </Space>

        <div className="flashcard-layout">
          {jpBlock}
          {shouldShowMeaning ? meaningBlock : null}
        </div>

        <Space wrap className="action-row">
          <Button onClick={onSpeak}>Phát âm</Button>
          {showToggleMeaning ? (
            <Button type="primary" onClick={onToggleMeaning}>
              {showMeaning ? "Ẩn nghĩa" : "Hiện nghĩa"}
            </Button>
          ) : null}
          <Button onClick={onPrev}>Trước</Button>
          <Button onClick={onNext}>Sau</Button>
        </Space>
      </Space>
    </Card>
  );
}
