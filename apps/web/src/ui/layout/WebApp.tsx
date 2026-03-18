import { App, Card, Tabs, Typography } from "antd";
import { AlphabetScreen } from "../../screens/AlphabetScreen";
import { GrammarScreen } from "../../screens/GrammarScreen";
import { ListeningScreen } from "../../screens/ListeningScreen";
import { VocabularyScreen } from "../../screens/VocabularyScreen";

export function WebApp() {
  return (
    <App>
      <div className="web-shell">
        <div className="page-wrap">
          <Typography.Title className="web-title">Learn Japanese - Web</Typography.Title>
          <Card className="web-card">
            <Tabs
              className="responsive-tabs"
              items={[
                { key: "alphabet", label: "Bảng chữ cái", children: <AlphabetScreen /> },
                { key: "vocabulary", label: "Từ vựng", children: <VocabularyScreen /> },
                { key: "grammar", label: "Ngữ pháp", children: <GrammarScreen /> },
                { key: "listening", label: "Luyện nghe", children: <ListeningScreen /> }
              ]}
            />
          </Card>
        </div>
      </div>
    </App>
  );
}
