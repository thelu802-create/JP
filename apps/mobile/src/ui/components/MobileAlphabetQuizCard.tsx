import { Button, Card, Radio, Selector, Space } from "antd-mobile";

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

export function MobileAlphabetQuizCard({
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
    <Card>
      <Space direction="vertical" block>
        <b>Quiz theo hàng</b>
        <Selector
          columns={5}
          options={rows.map((value) => ({ label: value, value }))}
          value={[row]}
          onChange={(values) => onRowChange(values[0] ?? row)}
        />
        {empty ? (
          <div>Hàng này chưa có dữ liệu.</div>
        ) : (
          <>
            <div>
              Chọn kana cho romaji: <b>{promptRomaji}</b>
            </div>
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
              <Button onClick={onNext}>Tiếp</Button>
              <Button onClick={onReset}>Reset</Button>
            </Space>
            <b>Điểm: {scoreText}</b>
          </>
        )}
      </Space>
    </Card>
  );
}
