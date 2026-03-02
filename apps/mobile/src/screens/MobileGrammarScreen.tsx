import { Button, Card, Segmented, Selector, Space } from "antd-mobile";
import { useEffect, useMemo, useState } from "react";
import { grammarService, type GrammarCategory, type GrammarLevel } from "@learnjp/core";

const categoryLabels: Record<GrammarCategory, string> = {
  "co-ban": "Cơ bản",
  "tro-tu": "Trợ từ",
  "dong-tu": "Động từ",
  "thoi-gian": "Thời gian",
  "dieu-kien": "Điều kiện",
  "y-dinh": "Ý định",
  "ly-do": "Lý do",
  "ke-hoach": "Kế hoạch",
  "trang-trong": "Trang trọng",
  "nang-cao": "Nâng cao"
};

export function MobileGrammarScreen() {
  const [level, setLevel] = useState<GrammarLevel | "all">("all");
  const [category, setCategory] = useState<GrammarCategory | "all">("all");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState<number>(3);

  const points = useMemo(() => grammarService.filter(level, category), [level, category]);
  const totalPages = Math.max(1, Math.ceil(points.length / pageSize));

  useEffect(() => {
    setPage(1);
  }, [level, category, pageSize]);

  const pagedPoints = useMemo(() => {
    const start = (page - 1) * pageSize;
    return points.slice(start, start + pageSize);
  }, [points, page, pageSize]);

  const renderCard = (point: (typeof points)[number]) => (
    <Card key={point.id} title={`${point.level} | ${point.title}`}>
      <Space direction="vertical" block>
        <b>{point.pattern}</b>
        <span>{point.meaningVi}</span>
        <span style={{ color: "#666" }}>Chủ đề: {categoryLabels[point.category]}</span>

        <details>
          <summary>Chi tiết</summary>
          <Space direction="vertical" block style={{ marginTop: 8 }}>
            <span>{point.explanation}</span>
            <b>Lưu ý:</b>
            {point.notes.map((note) => (
              <div key={`${point.id}-${note}`}>- {note}</div>
            ))}
            {point.examples.map((example, idx) => (
              <div key={`${point.id}-${idx}`}>
                <b>{example.jp}</b>
                <div>{example.vi}</div>
              </div>
            ))}
          </Space>
        </details>
      </Space>
    </Card>
  );

  return (
    <Space direction="vertical" block>
      <h3>Ngữ pháp N5 đến N1</h3>

      <Segmented
        options={[{ label: "Tất cả", value: "all" }, ...grammarService.levels().map((lv) => ({ label: lv, value: lv }))]}
        value={level}
        onChange={(value) => setLevel(value as GrammarLevel | "all")}
      />

      <Selector
        columns={3}
        options={[
          { label: "Tất cả", value: "all" },
          ...grammarService.categories().map((item) => ({ label: categoryLabels[item], value: item }))
        ]}
        value={[category]}
        onChange={(values) => setCategory((values[0] as GrammarCategory | "all") ?? "all")}
      />

      <Segmented
        options={[
          { label: "3 mẫu/trang", value: 3 },
          { label: "5 mẫu/trang", value: 5 }
        ]}
        value={pageSize}
        onChange={(value) => setPageSize(value as number)}
      />

      <div>Tổng số mẫu: {points.length}</div>
      <div>Trang: {page}/{totalPages}</div>

      <Space>
        <Button disabled={page <= 1} onClick={() => setPage((prev) => Math.max(1, prev - 1))}>
          Trang trước
        </Button>
        <Button disabled={page >= totalPages} onClick={() => setPage((prev) => Math.min(totalPages, prev + 1))}>
          Trang sau
        </Button>
      </Space>

      {pagedPoints.map((point) => renderCard(point))}
    </Space>
  );
}
