import { App, Segmented, Space, Typography } from "antd";
import { useMemo, useState } from "react";
import {
  alphabetService,
  type AlphabetGroup,
  type KanaSection,
  useAlphabetRowQuiz
} from "@learnjp/core";
import { AlphabetGrid } from "../ui/components/AlphabetGrid";
import { AlphabetRowQuizCard } from "../ui/components/AlphabetRowQuizCard";

const sectionOptions: Array<{ label: string; value: KanaSection | "compound" }> = [
  { label: "Basic", value: "basic" },
  { label: "Voiced", value: "voiced" },
  { label: "Semi", value: "semiVoiced" },
  { label: "Small", value: "small" },
  { label: "Compound", value: "compound" }
];

export function AlphabetScreen() {
  const { message } = App.useApp();
  const [group, setGroup] = useState<AlphabetGroup>("hiragana");
  const [section, setSection] = useState<KanaSection | "compound">("basic");
  const [quizRow, setQuizRow] = useState("a");

  const items = useMemo(() => {
    if (section === "compound") return alphabetService.listCompounds(group);
    return alphabetService.listBySection(group, section);
  }, [group, section]);

  const quiz = useAlphabetRowQuiz(group, quizRow);

  return (
    <Space direction="vertical" size={16} style={{ width: "100%" }}>
      <Typography.Title level={4}>Bảng chữ cái</Typography.Title>
      <Segmented
        options={[
          { label: "Hiragana", value: "hiragana" },
          { label: "Katakana", value: "katakana" }
        ]}
        value={group}
        onChange={(value) => setGroup(value as AlphabetGroup)}
      />
      <Segmented
        options={sectionOptions}
        value={section}
        onChange={(value) => setSection(value as KanaSection | "compound")}
      />
      <AlphabetGrid items={items} onSpeak={alphabetService.speak} />
      <AlphabetRowQuizCard
        rows={alphabetService.quizRows()}
        row={quizRow}
        promptRomaji={quiz.current?.romaji}
        options={quiz.options}
        selected={quiz.selected}
        scoreText={quiz.scoreText}
        empty={quiz.empty}
        onRowChange={setQuizRow}
        onSelect={quiz.setSelected}
        onCheck={() => {
          const isCorrect = quiz.check();
          if (isCorrect === null) return;
          message[isCorrect ? "success" : "error"](isCorrect ? "Chính xác" : "Chưa đúng");
        }}
        onNext={quiz.next}
        onReset={quiz.reset}
      />
    </Space>
  );
}
