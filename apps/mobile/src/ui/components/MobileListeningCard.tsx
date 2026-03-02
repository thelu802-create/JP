import { Button, Card, Radio, Space } from "antd-mobile";

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

export function MobileListeningCard({
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
    <Card>
      <Space direction="vertical" block>
        <div>{hint}</div>
        <b style={{ fontSize: 22 }}>{japanese}</b>
        <Button color="primary" onClick={onPlay}>
          Phát âm thanh
        </Button>
        <Radio.Group value={selected} onChange={(value) => onSelect(value as string)}>
          <Space direction="vertical" block>
            {options.map((option) => (
              <Radio key={option} value={option}>
                {option}
              </Radio>
            ))}
          </Space>
        </Radio.Group>
        <Space>
          <Button onClick={onCheck} disabled={!selected}>
            Kiểm tra
          </Button>
          <Button onClick={onNext}>Câu tiếp</Button>
          <Button onClick={onReset}>Làm lại</Button>
        </Space>
        <b>Điểm: {scoreText}</b>
      </Space>
    </Card>
  );
}
