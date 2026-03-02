import { TabBar } from "antd-mobile";
import { useState } from "react";
import { MobileAlphabetScreen } from "../../screens/MobileAlphabetScreen";
import { MobileGrammarScreen } from "../../screens/MobileGrammarScreen";
import { MobileListeningScreen } from "../../screens/MobileListeningScreen";
import { MobileVocabularyScreen } from "../../screens/MobileVocabularyScreen";

const tabs = [
  { key: "alphabet", title: "Chữ cái" },
  { key: "vocabulary", title: "Từ vựng" },
  { key: "grammar", title: "Ngữ pháp" },
  { key: "listening", title: "Nghe" }
] as const;

export function MobileApp() {
  const [active, setActive] = useState<(typeof tabs)[number]["key"]>("alphabet");
  const activeTab = tabs.find((tab) => tab.key === active);

  return (
    <div className="mobile-shell">
      <header className="mobile-header">
        <div className="mobile-header-title">LearnJP Mobile</div>
        <div className="mobile-header-subtitle">{activeTab?.title}</div>
      </header>

      <main className="mobile-content">
        {active === "alphabet" && <MobileAlphabetScreen />}
        {active === "vocabulary" && <MobileVocabularyScreen />}
        {active === "grammar" && <MobileGrammarScreen />}
        {active === "listening" && <MobileListeningScreen />}
      </main>

      <div className="mobile-footer">
        <TabBar activeKey={active} onChange={(key) => setActive(key as (typeof tabs)[number]["key"])}>
          {tabs.map((tab) => (
            <TabBar.Item key={tab.key} title={tab.title} />
          ))}
        </TabBar>
      </div>
    </div>
  );
}
