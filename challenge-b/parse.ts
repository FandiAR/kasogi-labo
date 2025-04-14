import * as fs from "fs";
import * as path from "path";

const INPUT_PATH = path.join(__dirname, "..", "output", "data.txt");
const OUTPUT_PATH = path.join(__dirname, "..", "output", "result.txt");

const classify = (value: string): string => {
  const trimmed = value.trim();
  if (/^[a-zA-Z]+$/.test(trimmed)) return "Alphabetical";
  if (/^-?\d+$/.test(trimmed)) return "Integer";
  if (/^-?\d+\.\d+$/.test(trimmed)) return "Real Number";
  if (/^[a-zA-Z0-9]+$/.test(trimmed)) return "Alphanumeric";
  return "Unknown";
};

const content = fs.readFileSync(INPUT_PATH, "utf-8");
const entries = content.split(",").filter(Boolean);

const results: string[] = [];

entries.forEach((entry) => {
  const value = entry.trim();
  const type = classify(value);
  const output = `${value} => ${type}`;
  results.push(output);
  console.log(output);
});

fs.writeFileSync(OUTPUT_PATH, results.join("\n"), "utf-8");
console.log(`\n✅ Result written to: ${OUTPUT_PATH}`);
