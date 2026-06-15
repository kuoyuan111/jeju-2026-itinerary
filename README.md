# 2026 濟州島 8 天 7 夜行程攻略

自駕遊行程資訊圖專案，可編輯 HTML、預覽網頁、匯出 PNG。

**日期：** 2026/7/4（六）～ 7/11（六）  
**住宿：** VENTIMO（蓮洞）

## 檔案結構

```
jeju-2026-itinerary/
├── index.html              # 行程主檔（編輯這個）
├── assets/                 # 插畫與美食圖片
├── jeju-2026-itinerary.png # 匯出的完整行程圖
├── export-png.mjs          # PNG 匯出腳本
├── validate-assets.mjs     # 檢查圖片是否齊全
└── package.json
```

## 快速開始

### 1. 預覽行程

直接用瀏覽器開啟 `index.html`，或：

```bash
npm install
npm run preview
```

### 2. 編輯行程

修改 `index.html` 內的文字、時間、地點即可。  
圖片路徑在 `assets/` 資料夾，檔名需與 HTML 中的 `src` 一致。

編輯後執行檢查：

```bash
npm run validate
```

### 3. 匯出 PNG

```bash
npm install
npm run export:png
```

會產生（或覆蓋）`jeju-2026-itinerary.png`。

首次匯出若失敗，請先安裝 Chromium：

```bash
npx playwright install chromium
```

### 4. 列印 / 存成 PDF

開啟 `index.html` → 點「列印 / 存成 PDF」→ 選擇「另存為 PDF」。

## 推上 GitHub

```bash
git init
git add .
git commit -m "Initial commit: Jeju 2026 itinerary"
git branch -M main
git remote add origin https://github.com/<你的帳號>/jeju-2026-itinerary.git
git push -u origin main
```

### GitHub Pages（線上預覽）

**網址：** https://kuoyuan111.github.io/jeju-2026-itinerary/

首次啟用請到 Repository → **Settings** → **Pages** → **Build and deployment** → Source 選 **GitHub Actions**。

之後每次 `git push` 到 `main`，會自動部署最新行程。可在 **Actions** 分頁查看部署狀態。

## 圖片清單

| 檔案 | 用途 |
|------|------|
| `hallabong-mascot.png` | 吉祥物、Day 6、柑橘 |
| `scene-jeju-coast.png` | 海岸場景、多個 Day 縮圖 |
| `scene-snoopy.png` | Day 2 史努比花園 |
| `food-black-pork.png` | Day 4 黑豬肉、必吃美食 |
| `food-garlic-bread.png` | Day 7 大蒜麵包、必吃美食 |
| `food-abalone.png` | 必吃美食・鮑魚粥 |

替換圖片時保持檔名不變，或同步修改 `index.html` 中的路徑。
