import { Button, Card, Segmented, Selector, Space, Tag } from "antd-mobile";
import { useMemo, useState } from "react";
import { useVocabularyCards, type TimeVocabularyTab, vocabularyService } from "@learnjp/core";
import { MobileVocabularyCard } from "../ui/components/MobileVocabularyCard";

export function MobileVocabularyScreen() {
  const [mode, setMode] = useState<"lesson" | "time">("lesson");

  const lessonNumbers = vocabularyService.lessonNumbers();
  const [lesson, setLesson] = useState<number>(lessonNumbers[0] ?? 1);
  const lessonDeck = useVocabularyCards(lesson);

  const timeGroups = useMemo(() => vocabularyService.listTimeGroups(), []);
  const [timeTab, setTimeTab] = useState<TimeVocabularyTab>(timeGroups[0]?.key ?? "day");
  const timeCards = useMemo(() => vocabularyService.listByTimeTab(timeTab), [timeTab]);

  return (
    <Space direction="vertical" block>
      <h3>Từ vựng Minna sơ cấp 1</h3>

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
          <Selector
            columns={5}
            options={lessonNumbers.map((value) => ({ label: `B${value}`, value }))}
            value={[lesson]}
            onChange={(values) => setLesson((values[0] as number) ?? lesson)}
          />
          <div>Tổng từ: {lessonDeck.cards.length}</div>
          <MobileVocabularyCard
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
        <Space direction="vertical" block>
          <Segmented
            options={timeGroups.map((group) => ({ label: group.label, value: group.key }))}
            value={timeTab}
            onChange={(value) => setTimeTab(value as TimeVocabularyTab)}
          />
          <div>Tổng từ: {timeCards.length}</div>
          {timeCards.map((item) => (
            <Card key={item.id} title={item.japanese}>
              <Space direction="vertical" block>
                <Tag>{item.wordType}</Tag>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
                  <div style={{ width: "48%" }}>
                    <b style={{ fontSize: 20 }}>{item.japanese}</b>
                    <div>{item.kana}</div>
                  </div>
                  <div style={{ width: "48%" }}>
                    <b>Nghĩa: {item.meaningVi}</b>
                  </div>
                </div>
                <div>
                  {item.example.jp}
                  <br />
                  {item.example.vi}
                </div>
                <Button onClick={() => vocabularyService.speak(item.japanese)}>Phát âm</Button>
              </Space>
            </Card>
          ))}
        </Space>
      )}
    </Space>
  );
}
