import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const html = fs.readFileSync(path.join(__dirname, "index.html"), "utf8");
const refs = [...html.matchAll(/src="assets\/([^"]+)"/g)].map((m) => m[1]);
const unique = [...new Set(refs)];

let ok = true;
for (const file of unique) {
  const full = path.join(__dirname, "assets", file);
  if (!fs.existsSync(full)) {
    console.error("缺少圖片:", file);
    ok = false;
  }
}

if (ok) {
  console.log(`圖片檢查通過（${unique.length} 個檔案）`);
} else {
  process.exit(1);
}
