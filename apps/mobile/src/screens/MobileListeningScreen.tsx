import { Toast } from "antd-mobile";
import { listeningService, useListeningTrainer } from "@learnjp/core";
import { MobileListeningCard } from "../ui/components/MobileListeningCard";

export function MobileListeningScreen() {
  const trainer = useListeningTrainer(listeningService.list());

  const handleCheck = () => {
    const isCorrect = trainer.check();
    if (isCorrect === null) return;
    Toast.show({ content: isCorrect ? "Chính xác" : "Chưa đúng" });
  };

  return (
    <div>
      <h3>Luyện nghe</h3>
      <MobileListeningCard
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
    </div>
  );
}
