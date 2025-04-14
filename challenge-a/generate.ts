import * as fs from "fs";
import * as path from "path";

// Constants
const OUTPUT_PATH = path.join(__dirname, "..", "output", "data.txt");
const FILE_SIZE_LIMIT = 10 * 1024 * 1024; // 10 MB

// Utility function for generating random integers
const randomInt = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1)) + min;

// Generate a random alphabetical string
const genAlphabetical = (): string =>
  Array.from({ length: randomInt(3, 12) }, () =>
    String.fromCharCode(randomInt(97, 122))
  ).join("");

// Generate a random integer as string
const genInteger = (): string => String(randomInt(-100000, 100000));

// Generate a random real number as string
const genReal = (): string => (Math.random() * 100000).toFixed(4);

// Generate a random alphanumeric string with random spaces before and after
const genAlphanumeric = (): string => {
  const length = randomInt(5, 15);
  const base = Array.from(
    { length },
    () =>
      Math.random() < 0.5
        ? String.fromCharCode(randomInt(97, 122)) // Generate a letter
        : String(randomInt(0, 9)) // Generate a number
  ).join("");
  const spaceBefore = " ".repeat(randomInt(0, 10));
  const spaceAfter = " ".repeat(randomInt(0, 10));
  return `${spaceBefore}${base}${spaceAfter}`;
};

// Object generators for various data types
const generators = [genAlphabetical, genReal, genInteger, genAlphanumeric];

// Ensure the output directory exists
fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });

// Create a writable stream for the output file
const stream = fs.createWriteStream(OUTPUT_PATH, { flags: "w" });

let currentSize = 0;

while (currentSize < FILE_SIZE_LIMIT) {
  const obj = generators[randomInt(0, 3)]();
  const entry = obj + ","; // Add delimiter
  stream.write(entry); // Write to stream
  currentSize += Buffer.byteLength(entry, "utf-8"); // Update current size
}

// Close the stream and notify user
stream.end(() => {
  console.log(`✅ Generated file: ${OUTPUT_PATH}`);
});
