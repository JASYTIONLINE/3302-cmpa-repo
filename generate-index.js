const fs = require("fs");
const path = require("path");

const START_DIR = "content";
const OUTPUT_FILE = "content/_site-map.md";

function walk(dir, depth = 0) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let markdown = "";

  entries
    .filter((e) => !e.name.startsWith("."))
    .sort((a, b) => a.name.localeCompare(b.name))
    .forEach((entry) => {
      const fullPath = path.join(dir, entry.name);
      const displayName = entry.name.replace(/\.md$/, "");
      const linkPath = fullPath.replace(/\\/g, "/");

      const indent = "  ".repeat(depth);

      if (entry.isDirectory()) {
        markdown += `${indent}- 📁 **${entry.name}**\n`;
        markdown += walk(fullPath, depth + 1);
      } else if (entry.isFile() && entry.name.endsWith(".md")) {
        markdown += `${indent}- [${displayName}](${linkPath})\n`;
      }
    });

  return markdown;
}

const result = `# 📚 Content Index

> This file lists all notes under \`${START_DIR}/\` for Quartz publishing.

${walk(START_DIR)}
`;

fs.writeFileSync(OUTPUT_FILE, result);
console.log(`✅ Generated: ${OUTPUT_FILE}`);

