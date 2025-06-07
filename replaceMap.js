const fs = require("fs");
const path = require("path");

const mapFile = path.join(__dirname, "tipograf.txt");
const targetFile = process.argv[2];

if (!targetFile) {
  console.error("❌ Укажи путь к файлу: node replaceMap.js путь/к/файлу.jsx");
  process.exit(1);
}

if (!fs.existsSync(mapFile)) {
  console.error(`❌ Не найден файл карты: ${mapFile}`);
  process.exit(1);
}

console.log(`📦 Файл замен: ${mapFile}`);
console.log(`🎯 Файл для обработки: ${targetFile}`);

const replacements = [];
const lines = fs.readFileSync(mapFile, "utf8").split("\n");

console.log("\n🔍 Парсинг tipograf.txt:");
lines.forEach((rawLine, i) => {
  console.log(`  [${i + 1}] RAW:`, JSON.stringify(rawLine));

  const line = rawLine.replace(/[\r\uFEFF]/g, "").trim();
  if (!line || line.startsWith("#")) return;

  const arrowIndex = line.indexOf("=>") >= 0 ? line.indexOf("=>") : line.indexOf("→");
  if (arrowIndex === -1) {
    console.warn(`⚠️ Строка ${i + 1} игнорируется:`, JSON.stringify(rawLine));
    return;
  }

  const fromRaw = line.slice(0, arrowIndex).trim();
  const to = line.slice(arrowIndex + 2).trim();

  if (!fromRaw || !to) {
    console.warn(`⚠️ Строка ${i + 1} неполная:`, JSON.stringify(rawLine));
    return;
  }

  // Регулярка — помечена префиксом r:
  if (fromRaw.startsWith("r:")) {
    const pattern = fromRaw.slice(2).trim();
    try {
      const regex = new RegExp(pattern, "g");
      replacements.push({ type: "regex", regex, to });
      console.log(`  🔁 [regex] /${pattern}/ => '${to}'`);
    } catch (err) {
      console.error(`❌ Ошибка компиляции регекспа на строке ${i + 1}:`, err.message);
    }
  } else {
    const escaped = fromRaw.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    replacements.push({ type: "plain", regex: new RegExp(escaped, "g"), to });
    console.log(`  ✅ [plain] '${fromRaw}' => '${to}'`);
  }
});

let content = fs.readFileSync(targetFile, "utf8");

console.log(`\n📄 Обрабатываем файл: ${targetFile}`);
replacements.forEach(({ regex, to }, i) => {
  const matches = content.match(regex);
  console.log(`➡ Замена #${i + 1}: ${regex} → '${to}' — найдено: ${matches?.length || 0}`);
  content = content.replace(regex, to);
});

fs.writeFileSync(targetFile, content);
console.log(`\n✔ Готово! Файл перезаписан: ${targetFile}`);
