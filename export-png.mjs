import { chromium } from "playwright";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const htmlPath = path.join(__dirname, "index.html");
const outPath = path.join(__dirname, "jeju-2026-itinerary.png");
const fileUrl = "file:///" + htmlPath.replace(/\\/g, "/");

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1320, height: 800 } });
await page.goto(fileUrl, { waitUntil: "networkidle" });
await page.evaluate(() => document.fonts.ready);
const height = await page.evaluate(() => document.getElementById("infographic").scrollHeight + 40);
await page.setViewportSize({ width: 1320, height });
await page.screenshot({ path: outPath, fullPage: true });
await browser.close();
console.log("PNG saved:", outPath);
