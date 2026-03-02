import { Button, Card, Grid, Space } from "antd-mobile";
import type { CompoundKanaItem, KanaItem } from "@learnjp/core";

interface Props {
  items: Array<KanaItem | CompoundKanaItem>;
  onSpeak: (text: string) => void;
}

export function MobileAlphabetGrid({ items, onSpeak }: Props) {
  return (
    <Grid columns={3} gap={8}>
      {items.map((item) => (
        <Grid.Item key={item.id}>
          <Card>
            <Space direction="vertical" block>
              <div className="kana">{item.kana}</div>
              <div>{item.romaji}</div>
              <Button size="mini" onClick={() => onSpeak(item.kana)}>
                Phát âm
              </Button>
            </Space>
          </Card>
        </Grid.Item>
      ))}
    </Grid>
  );
}
