# LearnJP (React TS + Ant Design)

## Stack
- Monorepo npm workspaces
- `apps/web`: React + TypeScript + Ant Design
- `apps/mobile`: React + TypeScript + Ant Design Mobile
- `packages/core`: data + business logic dung chung

## Chay du an
```bash
npm install
npm run dev:web
npm run dev:mobile
```

## Build
```bash
npm run build
```

## Cau truc
- `packages/core/src/models`: kieu du lieu
- `packages/core/src/data`: du lieu chia nho theo chu de
- `packages/core/src/logic`: service + hooks (xu ly nghiep vu)
- `apps/web/src/ui`: component/layout thuần UI
- `apps/web/src/screens`: man hinh dung logic
- `apps/mobile/src/ui`: component/layout thuần UI
- `apps/mobile/src/screens`: man hinh dung logic

## Tinh nang hien tai
- Bang chu cai: Hiragana, Katakana
- Bang chu cai chia theo nhom: basic, voiced, semi-voiced, small kana
- Co du lieu am ghep (kya, shu, cho, ...)
- Co quiz theo tung hang (a, ka, sa, ...)
- Tu vung theo bai (Minna no Nihongo So cap 1) da tach nho theo file lesson
- Ngu phap: cac mau N5 co ban + vi du
- Luyen nghe: nghe bang SpeechSynthesis tieng Nhat, chon nghia tieng Viet, cham diem, qua cau tiep
