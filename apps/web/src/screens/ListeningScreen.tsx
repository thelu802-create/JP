import { App, Segmented, Space, Typography } from "antd";
import { useMemo, useState } from "react";
import { listeningService, type ListeningTopic, useListeningTrainer } from "@learnjp/core";
import { ListeningQuizCard } from "../ui/components/ListeningQuizCard";

export function ListeningScreen() {
  const { message } = App.useApp();
  const [topic, setTopic] = useState<ListeningTopic | "all">("all");

  const deck = useMemo(() => {
    if (topic === "all") {
      return listeningService.list();
    }

    return listeningService.listByTopic(topic);
  }, [topic]);

  const trainer = useListeningTrainer(deck);

  const handleCheck = () => {
    const isCorrect = trainer.check();
    if (isCorrect === null) return;
    message[isCorrect ? "success" : "error"](isCorrect ? "Chính xác" : "Chưa đúng");
  };

  return (
    <Space direction="vertical" size={12} style={{ width: "100%" }}>
      <Typography.Title level={4}>Luyện nghe</Typography.Title>
      <Segmented
        options={[
          { label: "Tất cả", value: "all" },
          ...listeningService.topics().map((item) => ({ label: item.label, value: item.key }))
        ]}
        value={topic}
        onChange={(value) => setTopic(value as ListeningTopic | "all")}
      />
      <ListeningQuizCard
        japanese={trainer.current.japanese}
        hint={trainer.current.hint}
        options={trainer.options}
        selected={trainer.selected}
        scoreText={trainer.scoreText}
        onPlay={() => listeningService.speak(trainer.current.japanese)}
        onSelect={trainer.setSelected}
        onCheck={handleCheck}
        onNext={trainer.next}
        onReset={trainer.reset}
      />
    </Space>
  );
}
