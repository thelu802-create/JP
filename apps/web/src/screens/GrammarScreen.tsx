import { Collapse, Pagination, Select, Segmented, Space, Typography } from "antd";
import { useEffect, useMemo, useState } from "react";
import { grammarService, type GrammarCategory, type GrammarLevel } from "@learnjp/core";
import { GrammarCard } from "../ui/components/GrammarCard";

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

export function GrammarScreen() {
  const [level, setLevel] = useState<GrammarLevel | "all">("all");
  const [category, setCategory] = useState<GrammarCategory | "all">("all");
  const [viewMode, setViewMode] = useState<"grouped" | "paged">("grouped");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(4);

  const points = useMemo(() => grammarService.filter(level, category), [level, category]);

  useEffect(() => {
    setPage(1);
  }, [level, category, pageSize]);

  const pagedPoints = useMemo(() => {
    const start = (page - 1) * pageSize;
    return points.slice(start, start + pageSize);
  }, [points, page, pageSize]);

  const groupedItems = useMemo(() => {
    const map = new Map<string, typeof points>();

    points.forEach((point) => {
      const groupLabel = categoryLabels[point.category];
      const existing = map.get(groupLabel) ?? [];
      existing.push(point);
      map.set(groupLabel, existing);
    });

    return [...map.entries()].map(([label, groupPoints]) => ({
      key: label,
      label: `${label} (${groupPoints.length})`,
      children: (
        <Space direction="vertical" style={{ width: "100%" }}>
          {groupPoints.map((point) => (
            <GrammarCard key={point.id} point={point} categoryLabel={categoryLabels[point.category]} />
          ))}
        </Space>
      )
    }));
  }, [points]);

  return (
    <Space direction="vertical" size={12} style={{ width: "100%" }}>
      <Typography.Title level={4}>Ngữ pháp từ N5 đến N1</Typography.Title>
      <Segmented
        options={[{ label: "Tất cả", value: "all" }, ...grammarService.levels().map((lv) => ({ label: lv, value: lv }))]}
        value={level}
        onChange={(value) => setLevel(value as GrammarLevel | "all")}
      />
      <Space wrap>
        <Select
          style={{ width: 260 }}
          value={category}
          onChange={(value) => setCategory(value as GrammarCategory | "all")}
          options={[
            { label: "Tất cả chủ đề", value: "all" },
            ...grammarService.categories().map((item) => ({ label: categoryLabels[item], value: item }))
          ]}
        />
        <Segmented
          options={[
            { label: "Theo nhóm", value: "grouped" },
            { label: "Theo trang", value: "paged" }
          ]}
          value={viewMode}
          onChange={(value) => setViewMode(value as "grouped" | "paged")}
        />
        {viewMode === "paged" ? (
          <Select
            style={{ width: 150 }}
            value={pageSize}
            onChange={setPageSize}
            options={[
              { label: "4 thẻ/trang", value: 4 },
              { label: "6 thẻ/trang", value: 6 },
              { label: "8 thẻ/trang", value: 8 }
            ]}
          />
        ) : null}
      </Space>
      <Typography.Text type="secondary">Tổng số mẫu: {points.length}</Typography.Text>

      {viewMode === "grouped" ? (
        <Collapse items={groupedItems} defaultActiveKey={groupedItems.map((item) => item.key)} />
      ) : (
        <>
          {pagedPoints.map((point) => (
            <GrammarCard key={point.id} point={point} categoryLabel={categoryLabels[point.category]} />
          ))}
          <Pagination
            current={page}
            pageSize={pageSize}
            total={points.length}
            onChange={(next) => setPage(next)}
            showSizeChanger={false}
          />
        </>
      )}
    </Space>
  );
}
