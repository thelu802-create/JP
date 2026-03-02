import { Button, Card, Radio, Select, Space, Typography } from "antd";

interface Props {
  rows: string[];
  row: string;
  promptRomaji?: string;
  options: string[];
  selected?: string;
  scoreText: string;
  empty: boolean;
  onRowChange: (row: string) => void;
  onSelect: (kana: string) => void;
  onCheck: () => void;
  onNext: () => void;
  onReset: () => void;
}

export function AlphabetRowQuizCard({
  rows,
  row,
  promptRomaji,
  options,
  selected,
  scoreText,
  empty,
  onRowChange,
  onSelect,
  onCheck,
  onNext,
  onReset
}: Props) {
  return (
    <Card title="Quiz theo hàng">
      <Space direction="vertical" style={{ width: "100%" }}>
        <Select
          value={row}
          onChange={onRowChange}
          options={rows.map((value) => ({ label: `${value}-row`, value }))}
          style={{ width: 180 }}
        />
        {empty ? (
          <Typography.Text type="secondary">Hàng này chưa có dữ liệu.</Typography.Text>
        ) : (
          <>
            <Typography.Text>Chọn kana cho romaji: <b>{promptRomaji}</b></Typography.Text>
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
          </>
        )}
      </Space>
    </Card>
  );
}
