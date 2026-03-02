import { Button, Card, Segmented, Select, Space, Tag, Typography } from "antd";
import { useMemo, useState } from "react";
import { useVocabularyCards, type TimeVocabularyTab, vocabularyService } from "@learnjp/core";
import { VocabularyFlashCard } from "../ui/components/VocabularyFlashCard";

export function VocabularyScreen() {
  const [mode, setMode] = useState<"lesson" | "time">("lesson");

  const lessonNumbers = vocabularyService.lessonNumbers();
  const [lesson, setLesson] = useState<number>(lessonNumbers[0] ?? 1);
  const lessonDeck = useVocabularyCards(lesson);

  const timeGroups = useMemo(() => vocabularyService.listTimeGroups(), []);
  const [timeTab, setTimeTab] = useState<TimeVocabularyTab>(timeGroups[0]?.key ?? "day");
  const timeCards = useMemo(() => vocabularyService.listByTimeTab(timeTab), [timeTab]);

  return (
    <Space direction="vertical" size={12} style={{ width: "100%" }}>
      <Typography.Title level={4}>Từ vựng Minna no Nihongo Sơ cấp 1</Typography.Title>

      <Segmented
        options={[
          { label: "Theo bài", value: "lesson" },
          { label: "Ngày/Tháng/Năm/Giờ/Phút/Giây", value: "time" }
        ]}
        value={mode}
        onChange={(value) => setMode(value as "lesson" | "time")}
      />

      {mode === "lesson" ? (
        <>
          <Select
            value={lesson}
            onChange={setLesson}
            style={{ width: 240 }}
            options={lessonNumbers.map((value) => ({ label: `Bài ${value}`, value }))}
          />
          <Typography.Text type="secondary">Tổng từ: {lessonDeck.cards.length}</Typography.Text>
          <VocabularyFlashCard
            item={lessonDeck.current}
            showMeaning={lessonDeck.showMeaning}
            index={lessonDeck.index}
            total={lessonDeck.cards.length}
            showLessonTag
            alwaysShowMeaning
            showToggleMeaning={false}
            onSpeak={() => lessonDeck.current && vocabularyService.speak(lessonDeck.current.japanese)}
            onToggleMeaning={() => lessonDeck.setShowMeaning(!lessonDeck.showMeaning)}
            onPrev={lessonDeck.prev}
            onNext={lessonDeck.next}
          />
        </>
      ) : (
        <Space direction="vertical" style={{ width: "100%" }}>
          <Segmented
            options={timeGroups.map((group) => ({ label: group.label, value: group.key }))}
            value={timeTab}
            onChange={(value) => setTimeTab(value as TimeVocabularyTab)}
          />
          <Typography.Text type="secondary">Tổng từ: {timeCards.length}</Typography.Text>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 12 }}>
            {timeCards.map((item) => (
              <Card key={item.id} title={item.japanese}>
                <Space direction="vertical" size={10} style={{ width: "100%" }}>
                  <Tag>{item.wordType}</Tag>
                  <Typography.Text type="secondary">{item.kana}</Typography.Text>
                  <Typography.Text strong>Nghĩa: {item.meaningVi}</Typography.Text>
                  <Typography.Paragraph style={{ marginBottom: 0 }}>
                    {item.example.jp}
                    <br />
                    {item.example.vi}
                  </Typography.Paragraph>
                  <Button onClick={() => vocabularyService.speak(item.japanese)}>Phát âm</Button>
                </Space>
              </Card>
            ))}
          </div>
        </Space>
      )}
    </Space>
  );
}
