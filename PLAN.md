# 🎯 濟州島行程攻略 - 開發計劃

## 📋 專案概述

這是一個**互動式濟州島 8 天 7 夜自駕行程規劃工具**，支持線上編輯、地圖視覺化、和多種分享方式。

---

## ✅ 已完成功能

### 1. ✏️ 可編輯行程（版本 B - 完整版）
- **狀態**: ✅ 完成（已合併至 `main`）
- **實作方式**: 全部 inline 在 `index.html` 中（CSS + HTML + JavaScript）
- **功能清單**:
  - ✅ Toolbar「✏️ 編輯模式」按鈕切換編輯模式
  - ✅ 編輯模式紅色脈衝指示燈（CSS animation）
  - ✅ 編輯模式下可編輯元素 hover 顯示虛線框提示
  - ✅ 點擊可編輯元素彈出 Modal 編輯彈窗（毛玻璃遮罩 + 動畫）
  - ✅ 自動保存到 LocalStorage（key: `jeju-itinerary-edits`）
  - ✅ 頁面載入時自動還原已儲存的編輯
  - ✅ 「🔄 重置」按鈕（僅在有編輯時顯示，含確認對話框）
  - ✅ 清單類型支持新增/刪除項目
  - ✅ ESC 鍵 / 點擊遮罩關閉 Modal
    - 可編輯內容：
      - 主標題（`data-editable="title"`）
      - 副標題（`data-editable="subtitle"`）
      - 航班資訊 - 去程/回程（`data-editable="flight"`）
      - 小提醒列表（`data-editable="tips"`）
      - 機場退稅資訊（`data-editable="tax-refund"`）
      - VENTIMO 附近採買（`data-editable="ventimo"`）
      - 行程小重點（`data-editable="highlights"`）
      - 結尾訊息（`data-editable="closing"`）
      - 每日行程卡片 - 共 8 天（`data-editable="day1"` 至 `day8`，支援編輯日期、每日主題、客製化標籤、行程時段及今日車程，標題修改後自動同步至側邊欄總覽）

---

## 🚀 待實現功能

### 🔴 第一階段（核心功能）

#### 1. 🗺️ 行程地圖視覺化 ⭐⭐⭐⭐⭐
- **優先度**: 最高
- **工作量**: ⭐⭐⭐⭐
- **功能說明**:
  - 用地圖連接 8 天景點路線
  - 顯示自駕里程和車程時間
  - 可互動查看各天詳細位置
  - 用線條連接 Day 1 → Day 2 → ... → Day 8
  - 每個景點標記顯示：日期、活動名稱、時間

- **技術方案**:
  - 使用 Leaflet.js + OpenStreetMap（開源免費）
  - 或 Google Maps API（需 API Key）
  - 在現有行程旁邊加小地圖面板
  - 地圖上標記 8 個主要景點

- **預期交付**:
  - 新文件：可選的 `map.js`
  - 修改：`index.html` 添加地圖容器和連結
  - 修改：CSS 添加地圖樣式

---

#### 2. 📍 Google Maps / Naver Map 整合 ⭐⭐⭐⭐⭐
- **優先度**: 高
- **工作量**: ⭐⭐⭐
- **功能說明**:
  - 嵌入實時地圖（濟州島）
  - 景點評價和照片
  - 路線規劃建議
  - 點擊景點卡片時在地圖上高亮
  - 顯示景點間的最優路線

- **技術方案**:
  - 集成 Google Maps JavaScript API
  - 或 Naver Maps API（亞洲友善）
  - 調用景點 Lat/Lng 坐標
  - 顯示評分、營業時間、照片

- **預期交付**:
  - 新文件：`maps-integration.js`
  - 修改：`index.html` 添加地圖面板
  - 修改：添加景點坐標數據

---

#### 3. 🖼️ 圖片上傳功能 ⭐⭐⭐⭐
- **優先度**: 高
- **工作量**: ⭐⭐⭐⭐⭐
- **功能說明**:
  - 編輯模式下可上傳新照片
  - 替換景點圖片、美食圖片、卡片照片
  - 支持拖拽上傳
  - 圖片預覽
  - 自動裁剪為適當比例

- **技術方案**:
  - 使用 File API 讀取本地文件
  - Canvas 圖片預處理
  - Base64 編碼存儲到 LocalStorage
  - 或上傳到 Firebase Storage / Cloudinary

- **預期交付**:
  - 修改：`index.html` 添加圖片上傳組件
  - 新文件：`image-handler.js`
  - 修改：編輯彈窗支持圖片上傳

---

### 🟡 第二階段（UX 優化）

#### 4. 🎨 深色模式 ⭐⭐⭐
- **優先度**: 中
- **工作量**: ⭐⭐
- **功能說明**:
  - 切換淺色/深色主題
  - 夜間閱讀更舒服
  - 記住用戶偏好設置
  - 自動跟隨系統設置（可選）

- **技術方案**:
  - CSS 變數 + 媒體查詢 `prefers-color-scheme`
  - 主題切換按鈕
  - LocalStorage 保存偏好

- **預期交付**:
  - 修改：`index.html` 添加主題切換按鈕
  - 修改：CSS 添加深色主題變數

---

#### 5. ⏰ 倒計時 & 日期提醒 ⭐⭐⭐
- **優先度**: 中
- **工作量**: ⭐⭐
- **功能說明**:
  - 距出發還有幾天（動態倒計時）
  - 各天的倒計時
  - 行程日期高亮
  - 瀏覽器通知（可選）

- **技術方案**:
  - JavaScript Date 計算
  - 實時更新顯示
  - 使用 Web Notifications API

- **預期交付**:
  - 新文件：`countdown.js`
  - 修改：`index.html` 添加倒計時顯示

---

#### 6. 📱 手機優化 ⭐⭐⭐
- **優先度**: 中
- **工作量**: ⭐⭐
- **功能說明**:
  - 強化響應式設計
  - 觸控友善的編輯界面
  - 大按鈕、易點擊
  - 簡化工具欄布局

- **技術方案**:
  - Media Query 優化
  - Touch Event 支持
  - 浮動操作按鈕（FAB）

- **預期交付**:
  - 修改：`index.html` CSS Media Query 調整

---

### 🟢 第三階段（分享功能）

#### 7. 📤 導出功能 ⭐⭐⭐⭐
- **優先度**: 中高
- **工作量**: ⭐⭐⭐
- **功能說明**:
  - 導出修改後的 PDF
  - 導出 CSV（行程表）
  - 保留所有編輯內容
  - 生成高清長圖

- **技術方案**:
  - 使用 html2pdf.js 生成 PDF
  - Papa Parse 生成 CSV
  - html2canvas 生成長圖截圖

- **預期交付**:
  - 新文件：`export-handler.js`
  - 修改：工具欄添加導出按鈕

---

#### 8. 🔗 分享編輯後的行程 ⭐⭐⭐⭐
- **優先度**: 中
- **工作量**: ⭐⭐⭐⭐
- **功能說明**:
  - 生成可分享的鏈接
  - 其他人可查看和編輯副本
  - 支持短鏈接
  - 複製分享按鈕

- **技術方案**:
  - URL 參數編碼行程數據
  - 或使用短鏈接服務（bit.ly）
  - 或上傳到 Firebase Realtime Database

- **預期交付**:
  - 新文件：`share-handler.js`
  - 修改：工具欄添加分享按鈕

---

#### 9. ☁️ 雲端同步 ⭐⭐⭐
- **優先度**: 低（可選進階功能）
- **工作量**: ⭐⭐⭐⭐⭐
- **功能說明**:
  - 使用 Firebase / Supabase
  - 多裝置同步編輯
  - 版本控制
  - 自動備份

- **技術方案**:
  - Firebase Firestore 儲存數據
  - Authentication 用戶登入
  - 實時同步 Listener

- **預期交付**:
  - 新文件：`firebase-sync.js`
  - 修改：認證相關 UI

---

### 🔵 第四階段（額外功能）

#### 10. 👥 多人協作 ⭐⭐⭐
- **優先度**: 低（進階功能）
- **工作量**: ⭐⭐⭐⭐⭐
- **功能說明**:
  - 邀請家人編輯
  - 留言評論功能
  - 歷史版本追蹤
  - 權限管理

- **技術方案**:
  - Firebase Realtime Database
  - 或 Supabase PostgreSQL
  - WebSocket 實時協作

- **預期交付**:
  - 完整協作系統

---

#### 11. 💰 預算追蹤 ⭐⭐⭐
- **優先度**: 低
- **工作量**: ⭐⭐⭐
- **功能說明**:
  - 記錄每天開支
  - 分類統計（食住行）
  - 預算對比
  - 匯率轉換

- **技術方案**:
  - 添加預算面板
  - 本地 JSON 儲存
  - Chart.js 繪製統計圖

- **預期交付**:
  - 新文件：`budget-tracker.js`
  - 修改：`index.html` 添加預算面板

---

#### 12. 📸 相簿/記憶牆 ⭐⭐⭐
- **優先度**: 低
- **工作量**: ⭐⭐⭐⭐
- **功能說明**:
  - 旅行中的照片展示
  - 動態相冊
  - 照片牆
  - 時間軸視圖

- **技術方案**:
  - Lightbox 圖片庫
  - Grid 佈局
  - Swiper 輪播

- **預期交付**:
  - 新文件：`gallery.js`
  - 新頁面：`gallery.html`

---

#### 13. 🔔 天氣預報 ⭐⭐
- **優先度**: 低
- **工作量**: ⭐⭐
- **功能說明**:
  - 顯示濟州島各天天氣
  - 穿衣建議
  - 天氣警示

- **技術方案**:
  - 調用 OpenWeatherMap API
  - 或 Weather API
  - 顯示天氣圖標和溫度

- **預期交付**:
  - 新文件：`weather.js`
  - 修改：`index.html` 添加天氣面板

---

#### 14. 🍽️ 餐廳預約提醒 ⭐⭐
- **優先度**: 低
- **工作量**: ⭐⭐
- **功能說明**:
  - 記錄已預約餐廳
  - 提前提醒預約
  - 顯示餐廳評分
  - 導航到餐廳

- **技術方案**:
  - Notification API
  - LocalStorage 儲存預約
  - 定時檢查提醒

- **預期交付**:
  - 新文件：`restaurant-reminder.js`
  - 修改：`index.html` 添加預約面板

---

## 📊 開發優先級建議

### 推薦路線圖（按週實施）

```
第 1 週（核心功能 - 立即開始）
├─ 🗺️ 地圖視覺化
├─ 📍 Google Maps 整合
└─ 🖼️ 圖片上傳功能

第 2 週（UX 優化）
├─ 🎨 深色模式
├─ ⏰ 倒計時提醒
└─ 📱 手機優化

第 3 週（分享功能）
├─ 📤 PDF/CSV 導出
├─ 🔗 分享鏈接
└─ ☁️ 雲端同步（可選）

後續（進階功能 - 可選）
├─ 👥 多人協作
├─ 💰 預算追蹤
├─ 📸 相簿記憶牆
├─ 🔔 天氣預報
└─ 🍽️ 餐廳提醒
```

---

## 🔧 技術堆棧

### 前端框架
- HTML5 + CSS3 + Vanilla JavaScript
- 無框架依賴（保持輕量化）

### 外部庫（可選）
- **地圖**: Leaflet.js / Google Maps API
- **導出**: html2pdf.js, html2canvas, Papa Parse
- **圖片**: image-compressor.js, cropperjs
- **UI**: Chart.js（預算圖表）
- **輪播**: Swiper.js（相簿）

### 儲存方案
- **本地**: LocalStorage（無後端）
- **雲端**: Firebase / Supabase（進階功能）

### 部署
- GitHub Pages（自動部署）
- 或 Vercel / Netlify（可選）

---

## 📁 檔案結構規劃

```
jeju-2026-itinerary/
├── index.html                    # 主頁面
├── PLAN.md                       # 本計劃文件
├── package.json                  # 專案配置
├── README.md                     # 專案說明
├── assets/                       # 圖片資源
│   ├── scene-jeju-coast.png
│   ├── food-black-pork.png
│   └── hallabong-mascot.png
├── js/                          # JavaScript 模組（新增）
│   ├── map-visualization.js     # 地圖視覺化
│   ├── maps-integration.js      # Google Maps 整合
│   ├── image-handler.js         # 圖片上傳
│   ├── countdown.js             # 倒計時
│   ├── export-handler.js        # 導出功能
│   ├── share-handler.js         # 分享功能
│   ├── firebase-sync.js         # 雲端同步（可選）
│   ├── budget-tracker.js        # 預算追蹤（可選）
│   ├── weather.js               # 天氣預報（可選）
│   └── restaurant-reminder.js   # 餐廳提醒（可選）
├── css/                         # 樣式表（可選）
│   ├── dark-mode.css            # 深色模式
│   ├── map.css                  # 地圖樣式
│   └── mobile.css               # 手機優化
├── .github/
│   └── workflows/
│       └── deploy-pages.yml     # CI/CD 配置
└── docs/                        # 文檔（可選）
    └── API-USAGE.md             # API 使用說明
```

---

## ✅ 測試檢查清單

### 功能測試
- [ ] 編輯模式啟動/關閉
- [ ] 各項內容可編輯
- [ ] 編輯內容自動保存
- [ ] 重置功能正常
- [ ] 地圖加載正常
- [ ] 圖片上傳成功
- [ ] 導出 PDF/CSV 正常
- [ ] 分享鏈接可用

### 跨瀏覽器測試
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile Safari
- [ ] Android Chrome

### 響應式測試
- [ ] 桌機（1920px）
- [ ] 平板（768px）
- [ ] 手機（375px）

### 性能測試
- [ ] 頁面加載速度 < 3s
- [ ] 編輯操作無延遲
- [ ] 地圖平順滾動
- [ ] 記憶體使用合理

---

## 📝 開發約定

### Git 提交訊息格式
```
feat: 新功能描述
fix: 修復 bug
docs: 文檔更新
style: 代碼格式調整
refactor: 代碼重構
test: 測試相關
chore: 構建或依賴更新
```

### 分支命名規範
```
feature/功能名稱      - 新功能
bugfix/問題名稱       - 修復 bug
hotfix/緊急修復       - 緊急修復
```

### PR 檢查清單
- [ ] 代碼已測試
- [ ] 無控制台錯誤
- [ ] 移動端兼容性檢查
- [ ] 提交訊息清晰
- [ ] 文檔已更新

---

## 🎯 下一步行動

### 立即開始：
1. **新建分支**: `feature/map-visualization`
2. **開發第一週功能**（地圖、Google Maps、圖片上傳）
3. **提交 PR 合併到 main**
4. **繼續第二週功能**（深色模式、倒計時、手機優化）

### 參考資源：
- [Leaflet.js 文檔](https://leafletjs.com/)
- [Google Maps API](https://developers.google.com/maps)
- [html2pdf.js](https://github.com/parallax/html2pdf.js)
- [Firebase 文檔](https://firebase.google.com/docs)

---

**最後更新**: 2026/06/16  
**版本**: v1.2 - 每日行程卡片編輯與側邊欄同步功能已完成並完善  
**狀態**: 🟡 第一階段核心功能開發中
