import { Segmented, Space, Toast } from "antd-mobile";
import { useMemo, useState } from "react";
import {
  alphabetService,
  type AlphabetGroup,
  type KanaSection,
  useAlphabetRowQuiz
} from "@learnjp/core";
import { MobileAlphabetGrid } from "../ui/components/MobileAlphabetGrid";
import { MobileAlphabetQuizCard } from "../ui/components/MobileAlphabetQuizCard";

const sectionOptions: Array<{ label: string; value: KanaSection | "compound" }> = [
  { label: "Basic", value: "basic" },
  { label: "Voiced", value: "voiced" },
  { label: "Semi", value: "semiVoiced" },
  { label: "Small", value: "small" },
  { label: "Combo", value: "compound" }
];

export function MobileAlphabetScreen() {
  const [group, setGroup] = useState<AlphabetGroup>("hiragana");
  const [section, setSection] = useState<KanaSection | "compound">("basic");
  const [quizRow, setQuizRow] = useState("a");

  const items = useMemo(() => {
    if (section === "compound") return alphabetService.listCompounds(group);
    return alphabetService.listBySection(group, section);
  }, [group, section]);

  const quiz = useAlphabetRowQuiz(group, quizRow);

  return (
    <Space direction="vertical" block>
      <h3>Bảng chữ cái</h3>
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
      <MobileAlphabetGrid items={items} onSpeak={alphabetService.speak} />
      <MobileAlphabetQuizCard
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
          Toast.show({ content: isCorrect ? "Chính xác" : "Chưa đúng" });
        }}
        onNext={quiz.next}
        onReset={quiz.reset}
      />
    </Space>
  );
}
