# 2026 濟州島 8 天 7 夜自駕行程攻略 ｜ 專案維護指南

本專案是一個**響應式（Responsive）網頁行程表與自駕攻略資訊圖**。除了可以直接在瀏覽器上開啟並預覽，還具備了自動化的圖片檢查機制，並可透過 Playwright 腳本將網頁渲染並匯出為高解析度的 PNG 長圖（`jeju-2026-itinerary.png`），方便存入手機離線查看；同時配置了 GitHub Actions，在程式碼推送時自動部署至 GitHub Pages。

---

## 📌 專案快速連結
* 🚀 **線上行程預覽**：[https://kuoyuan111.github.io/jeju-2026-itinerary/](https://kuoyuan111.github.io/jeju-2026-itinerary/)
* 📂 **行程主檔**：[index.html](file:///C:/Users/owen.hsu/Projects/jeju-2026-itinerary/index.html)
* 🖼️ **匯出 PNG 圖檔**：[jeju-2026-itinerary.png](file:///C:/Users/owen.hsu/Projects/jeju-2026-itinerary/jeju-2026-itinerary.png)

---

## 📁 檔案結構與說明

```
jeju-2026-itinerary/
├── .github/
│   └── workflows/
│       └── deploy-pages.yml    # GitHub Pages 自動部署腳本 (CI/CD)
├── assets/                     # 行程插畫與美食圖片存放目錄
├── index.html                  # 核心行程網頁（編輯行程、主要樣式都在這裡）
├── jeju-2026-itinerary.png     # 自動匯出的完整行程資訊圖 (高解析度 PNG)
├── package.json                # 專案套件配置及執行指令
├── package-lock.json
├── validate-assets.mjs         # 圖片檢查腳本：防止網頁引用不存在的圖片而破圖
└── export-png.mjs              # PNG 匯出腳本：使用 Playwright 截圖
```

---

## 🛠️ 開發與維護指令

在開始維護前，請先於專案根目錄下安裝相依套件：

```bash
npm install
```

> 💡 **注意事項**：
> 首次在本地端匯出 PNG 時，若 Playwright 缺少瀏覽器核心，請執行以下指令進行安裝：
> ```bash
> npx playwright install chromium
> ```

### 1. 啟動本地預覽
若不想直接點擊兩下開啟 `index.html`，可以使用以下指令啟動本地 Web 伺服器（預設埠為 `3456`）：
```bash
npm run preview
```
啟動後可在瀏覽器開啟 `http://localhost:3456` 查看。

### 2. 驗證圖片完整性
修改 `index.html` 中的圖片路徑後，應執行此指令確保圖片皆有正確存放在 `assets/` 目錄下：
```bash
npm run validate
```

### 3. 匯出/更新 PNG 長圖
行程或圖片修改完成後，請務必執行此指令更新 `jeju-2026-itinerary.png`，以供手機端離線查看：
```bash
npm run export:png
```
*此指令會先自動執行圖片驗證，驗證通過後才會啟動無頭瀏覽器（Playwright）進行高解析度長圖截圖。*

---

## ✍️ 行程編輯與客製化指南

### 1. 修改基本資訊 (航班/日期/標題)
在 [index.html](file:///C:/Users/owen.hsu/Projects/jeju-2026-itinerary/index.html) 中：
* **航班資訊**：在 `<div class="flight-box">` (約第 242 行) 進行調整。
* **行程大標題**：在 `<h1>` (約第 255 行) 修改。
* **副標題 (住宿/日期)**：在 `<div class="subtitle">` (約第 256 行) 進行修改。

### 2. 修改天數行程 (Day Card)
每一天行程皆是由一個 `<article class="day-card">` 所構成：
* **背景顏色**：在 `.day-head` 行內樣式中的 `background: var(--d1)` 修改（`--d1` 至 `--d8` 顏色變數定義於 CSS `:root` 中）。
* **行程時間區段**：使用 `<div class="slot">` 包裹，內部可包含時段標題（例如：`上午`、`午餐`、`下午`）以及 `<ul>` 清單。
* **自駕車程**：使用 `<div class="drive">` 填寫預估車程與里程數。
* **卡片照片**：在 `.day-photo` 修改 `src="assets/你的圖片.png"`。為了避免畫面失真，建議景點照片剪裁為 **1:1 正方形** 比例。

### 3. 修改側邊欄 (Sidebar) 與底部 (Footer)
* **快速總覽與提醒**：在 `<aside class="sidebar">` (約第 407 行) 中的各個 `.side-card` 修改。
* **必吃美食列表**：在 `<div class="food-row">` (約第 448 行) 裡更新圖片及文字。
* **附近採買與重點**：在 `<div class="points-grid">` (約第 456 行) 裡編輯 `.info-card` 內容。

---

## 🌐 GitHub Pages 自動部署說明

本專案使用 GitHub Actions 來管理部署。流程如下：
1. **觸發條件**：每次 `git push` 變更到 `main` 分支。
2. **自動檢驗**：執行 `node validate-assets.mjs`。如果發現 HTML 內引用的圖片在 `assets/` 中不存在，部署流程將會失敗並報錯，防止破損的網頁上線。
3. **網頁部署**：圖片驗證通過後，會自動將最新版網頁部署至 GitHub Pages。

### ⚙️ 首次啟用 GitHub Pages 步驟
1. 進入您的 GitHub Repository 頁面。
2. 點擊 **Settings** ➔ **Pages**。
3. 在 **Build and deployment** 下方的 **Source** 選擇 **GitHub Actions**。
4. 之後只要推送程式碼至 `main` 分支，GitHub 就會自動執行 [deploy-pages.yml](file:///C:/Users/owen.hsu/Projects/jeju-2026-itinerary/.github/workflows/deploy-pages.yml) 進行部署，您可以在 **Actions** 頁籤中查看即時進度。
