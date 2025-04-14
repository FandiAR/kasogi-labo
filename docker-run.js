const path = require("path");
const fs = require("fs");
const { execSync } = require("child_process");

// Menentukan path absolut ke folder `output` di direktori project
const outputDir = path.resolve(__dirname, "output");
// Mengecek apakah folder `output` ada atau tidak
if (!fs.existsSync(outputDir)) {
  console.error(`❌ Folder tidak ditemukan: ${outputDir}`); // Tampilkan error jika folder tidak ditemukan
  process.exit(1); // Keluar dari proses dengan kode error
}

// Menyusun perintah Docker untuk menjalankan image `kasagi-parser`
// Volume `outputDir` akan di-mount ke dalam container di path `/app/output`
const command = `docker run --rm -v "${outputDir}:/app/output" kasagi-parser`;

// Menampilkan perintah yang akan dijalankan ke terminal
console.log(`Running: ${command}`);

// Menjalankan perintah Docker di atas secara sinkron dan mewariskan stdio terminal
execSync(command, { stdio: "inherit" });
