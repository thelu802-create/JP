import { Button, Card, Radio, Space, Typography } from "antd";

interface Props {
  japanese: string;
  hint: string;
  options: string[];
  selected?: string;
  scoreText: string;
  onPlay: () => void;
  onSelect: (value: string) => void;
  onCheck: () => void;
  onNext: () => void;
  onReset: () => void;
}

export function ListeningQuizCard({
  japanese,
  hint,
  options,
  selected,
  scoreText,
  onPlay,
  onSelect,
  onCheck,
  onNext,
  onReset
}: Props) {
  return (
    <Card title="Luyện nghe co ban">
      <Space direction="vertical" size={12} style={{ width: "100%" }}>
        <Typography.Text type="secondary">Gợi ý: {hint}</Typography.Text>
        <Typography.Text className="jp-text">{japanese}</Typography.Text>
        <Button type="primary" onClick={onPlay}>
          Phát âm thanh
        </Button>
        <Radio.Group
          value={selected}
          onChange={(event) => onSelect(event.target.value)}
          options={options.map((option) => ({ label: option, value: option }))}
        />
        <Space>
          <Button onClick={onCheck} disabled={!selected}>
            Kiểm tra
          </Button>
          <Button onClick={onNext}>Câu tiếp theo</Button>
          <Button onClick={onReset}>Làm lại</Button>
        </Space>
        <Typography.Text strong>Điểm: {scoreText}</Typography.Text>
      </Space>
    </Card>
  );
}
