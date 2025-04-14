import * as fs from "fs";
import * as path from "path";

// Path file input (data mentah yang akan diklasifikasi)
const INPUT_PATH = path.join(__dirname, "..", "output", "data.txt");

// Path file output (hasil klasifikasi akan ditulis ke file ini)
const OUTPUT_PATH = path.join(__dirname, "..", "output", "result.txt");

/**
 * Fungsi untuk mengklasifikasikan string berdasarkan pola regex.
 * @param value - String yang akan diklasifikasi
 * @returns Jenis data: Alphabetical, Integer, Real Number, Alphanumeric, atau Unknown
 */
const classify = (value: string): string => {
  const trimmed = value.trim();
  if (/^[a-zA-Z]+$/.test(trimmed)) return "Alphabetical";
  if (/^-?\d+$/.test(trimmed)) return "Integer";
  if (/^-?\d+\.\d+$/.test(trimmed)) return "Real Number";
  if (/^[a-zA-Z0-9]+$/.test(trimmed)) return "Alphanumeric";
  return "Unknown";
};

// Membaca seluruh isi file input sebagai string
const content = fs.readFileSync(INPUT_PATH, "utf-8");

// Memecah isi file berdasarkan delimiter koma dan menghapus entri kosong
const entries = content.split(",").filter(Boolean);

// Array untuk menyimpan hasil klasifikasi dalam format string
const results: string[] = [];

// Iterasi setiap entri, klasifikasikan, lalu simpan hasilnya ke array dan tampilkan di console
entries.forEach((entry) => {
  const value = entry.trim();
  const type = classify(value);
  const output = `${value} => ${type}`;
  results.push(output);
  console.log(output);
});

// Tulis seluruh hasil klasifikasi ke file output
fs.writeFileSync(OUTPUT_PATH, results.join("\n"), "utf-8");

// Tampilkan notifikasi setelah selesai
console.log(`\n✅ Result written to: ${OUTPUT_PATH}`);
