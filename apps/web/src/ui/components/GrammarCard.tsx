import { Card, Space, Tag, Typography } from "antd";
import type { GrammarPoint } from "@learnjp/core";

interface Props {
  point: GrammarPoint;
  categoryLabel: string;
}

export function GrammarCard({ point, categoryLabel }: Props) {
  return (
    <Card title={point.title} style={{ marginBottom: 12 }} className="grammar-card">
      <Space direction="vertical" size={6} style={{ width: "100%" }}>
        <Space wrap>
          <Tag color="blue">{point.level}</Tag>
          <Tag>{categoryLabel}</Tag>
          {point.tags?.map((tag) => (
            <Tag key={`${point.id}-${tag}`} color="gold">
              {tag}
            </Tag>
          ))}
        </Space>
        <Typography.Text strong>{point.pattern}</Typography.Text>
        <Typography.Text>{point.meaningVi}</Typography.Text>
        <Typography.Text type="secondary">{point.explanation}</Typography.Text>
        <Typography.Text strong>Lưu ý:</Typography.Text>
        {point.notes.map((note) => (
          <Typography.Text key={`${point.id}-${note}`}>- {note}</Typography.Text>
        ))}
        {point.examples.map((example, idx) => (
          <Typography.Paragraph key={`${point.id}-${idx}`} style={{ marginBottom: 0 }}>
            <span className="jp-text">{example.jp}</span>
            <br />
            {example.vi}
          </Typography.Paragraph>
        ))}
      </Space>
    </Card>
  );
}
