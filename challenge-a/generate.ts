import * as fs from "fs";
import * as path from "path";

// Konstanta untuk path file output
const OUTPUT_PATH = path.join(__dirname, "..", "output", "data.txt");

// Batas maksimal ukuran file yang akan dibuat (10 MB)
const FILE_SIZE_LIMIT = 10 * 1024 * 1024;

// Fungsi utilitas untuk menghasilkan angka acak antara min dan max (inklusif)
const randomInt = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1)) + min;

// Fungsi untuk menghasilkan string alfabet acak (panjang antara 3–12 karakter)
const genAlphabetical = (): string =>
  Array.from({ length: randomInt(3, 12) }, () =>
    String.fromCharCode(randomInt(97, 122))
  ).join("");

// Fungsi untuk menghasilkan angka bulat acak sebagai string
const genInteger = (): string => String(randomInt(-100000, 100000));

// Fungsi untuk menghasilkan angka real/desimal acak sebagai string
const genReal = (): string => (Math.random() * 100000).toFixed(4);

// Fungsi untuk menghasilkan string alfanumerik acak dengan spasi acak di depan/belakang
const genAlphanumeric = (): string => {
  const length = randomInt(5, 15); // Panjang karakter utama
  const base = Array.from(
    { length },
    () =>
      Math.random() < 0.5
        ? String.fromCharCode(randomInt(97, 122)) // Generate // huruf
        : String(randomInt(0, 9)) // Generate angka
  ).join("");
  const spaceBefore = " ".repeat(randomInt(0, 10)); // Spasi acak di depan
  const spaceAfter = " ".repeat(randomInt(0, 10)); // Spasi acak di belakang
  return `${spaceBefore}${base}${spaceAfter}`;
};

// Kumpulan fungsi generator yang akan dipilih secara acak
const generators = [genAlphabetical, genReal, genInteger, genAlphanumeric];

// Pastikan folder output sudah ada (jika belum, dibuat otomatis)
fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });

// Buat stream untuk menulis ke file (lebih efisien daripada writeFileSync)
const stream = fs.createWriteStream(OUTPUT_PATH, { flags: "w" });

let currentSize = 0; // Ukuran file yang sudah ditulis (dalam byte)

while (currentSize < FILE_SIZE_LIMIT) {
  const obj = generators[randomInt(0, 3)](); // Ambil salah satu generator secara acak
  const entry = obj + ","; // Tambahkan koma sebagai pemisah antar entri
  stream.write(entry); // Tulis ke stream/file
  currentSize += Buffer.byteLength(entry, "utf-8"); // Update ukuran saat ini
}

// Tutup stream dan tampilkan pesan selesai
stream.end(() => {
  console.log(`✅ Generated file: ${OUTPUT_PATH}`);
});
