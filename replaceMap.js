const fs = require("fs");
const path = require("path");

// ► tipograf.txt должен лежать рядом со скриптом
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

const replacements = {};
const lines = fs.readFileSync(mapFile, "utf8").split("\n");

console.log("\n🔍 Парсинг tipograf.txt:");
lines.forEach((rawLine, i) => {
  console.log(`  [${i + 1}] RAW:`, JSON.stringify(rawLine));

  const line = rawLine.replace(/[\r\uFEFF]/g, "");
  const arrowIndex = line.indexOf("=>") >= 0 ? line.indexOf("=>") : line.indexOf("→");

  if (arrowIndex === -1) {
    if (line.trim()) {
      console.warn(`⚠️ Строка ${i + 1} игнорируется:`, JSON.stringify(rawLine));
    }
    return;
  }

  const from = line.slice(0, arrowIndex).replace(/\s+$/, " ");
  const to = line.slice(arrowIndex + 2).trim();

  if (from && to) {
    replacements[from] = to;
    console.log(`  ✅ '${from}' => '${to}'`);
  } else {
    console.warn(`⚠️ Строка ${i + 1} неполная:`, JSON.stringify(rawLine));
  }
});

let content = fs.readFileSync(targetFile, "utf8");

console.log(`\n📄 Обрабатываем файл: ${targetFile}`);
for (const [from, to] of Object.entries(replacements)) {
  const regex = new RegExp(from.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g");
  const matches = content.match(regex);
  console.log(`➡ '${from}' → '${to}' — найдено:`, matches?.length || 0);
  content = content.replace(regex, to);
}

fs.writeFileSync(targetFile, content);
console.log(`\n✔ Готово! Файл перезаписан: ${targetFile}`);
