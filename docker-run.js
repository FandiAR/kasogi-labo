const path = require("path");
const fs = require("fs");
const { execSync } = require("child_process");

// ✅ Pastikan ini mengarah ke output di dalam kasogi-labo
const outputDir = path.resolve(__dirname, "output");
if (!fs.existsSync(outputDir)) {
  console.error(`❌ Folder tidak ditemukan: ${outputDir}`);
  process.exit(1);
}

const command = `docker run --rm -v "${outputDir}:/app/output" kasagi-parser`;

console.log(`Running: ${command}`);
execSync(command, { stdio: "inherit" });
