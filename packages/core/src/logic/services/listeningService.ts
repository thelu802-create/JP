import { listeningDeckBasic } from "../../data/listening/basicDeck";
import type { ListeningCard, ListeningTopic, ListeningTopicOption } from "../../models/types";
import { shuffle } from "../utils/shuffle";
import { speakJapanese } from "../utils/speakJapanese";

const topicLabels: Record<ListeningTopic, string> = {
  greeting: "Chào hỏi",
  "self-intro": "Giới thiệu",
  daily: "Hằng ngày",
  shopping: "Mua sắm",
  travel: "Di chuyển"
};

export const listeningService = {
  list(): ListeningCard[] {
    return listeningDeckBasic;
  },

  topics(): ListeningTopicOption[] {
    return Object.entries(topicLabels).map(([key, label]) => ({
      key: key as ListeningTopic,
      label
    }));
  },

  listByTopic(topic: ListeningTopic): ListeningCard[] {
    return listeningDeckBasic.filter((item) => item.topic === topic);
  },

  getOptions(card: ListeningCard): string[] {
    return shuffle(card.optionsVi);
  },

  speak(text: string): void {
    speakJapanese(text, 0.9);
  }
};
