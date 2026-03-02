import { Button, Card, Col, Row, Space, Typography } from "antd";
import type { CompoundKanaItem, KanaItem } from "@learnjp/core";

interface Props {
  items: Array<KanaItem | CompoundKanaItem>;
  onSpeak: (text: string) => void;
}

export function AlphabetGrid({ items, onSpeak }: Props) {
  return (
    <Row gutter={[12, 12]}>
      {items.map((item) => (
        <Col xs={12} sm={8} md={6} lg={4} key={item.id}>
          <Card>
            <Space direction="vertical" size={6}>
              <Typography.Text className="kana">{item.kana}</Typography.Text>
              <Typography.Text type="secondary">{item.romaji}</Typography.Text>
              <Button size="small" onClick={() => onSpeak(item.kana)}>
                Phát âm
              </Button>
            </Space>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
