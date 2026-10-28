// Hanya informasi PUBLIK yang boleh diketahui bot.
// Jangan pernah menaruh HPP, margin, cashflow, data investor, data pribadi tim,
// atau data pesanan pembeli di file ini: apa pun yang ada di sini bisa dibocorkan model.

const KNOWLEDGE = `
TENTANG USAHA
- Nama: Dapur Ka Tanya. Konsep "Trendi Comfort Street Food": jajanan pedas-gurih-creamy (kuah keju + chili oil) dipasangkan dengan Es Mambo dingin.
- Usaha rintisan mahasiswa (Kelompok 2, kelas SI-23-01), home industry, semua menu dimasak sendiri oleh tim.
- Lokasi jualan: lingkungan Telkom University Jakarta. Belum ada toko fisik.
- Jadwal: Market Day setiap hari Sabtu (ambil di booth Dapur Ka Tanya). Hari lain bisa pre-order lewat website, admin konfirmasi titik temu dan jam via WhatsApp. Slot pre-order: Pagi 08.00–10.00, Siang 10.00–12.00, Siang 12.00–14.00, bisa dipesan mulai besok sampai 3 minggu ke depan.
- Kontak: WhatsApp admin 0823-7340-5607. Instagram & TikTok: @dapurkatanya.

MENU & HARGA (setiap porsi SUDAH TERMASUK 1 Es Mambo)
1. Dimsum Kuah Keju — Rp15.000. Dimsum kukus dalam bowl, disiram kuah keju gurih creamy. Menu best seller.
2. Cireng Kuah Keju — Rp12.000. Isi 5 pcs cireng, renyah di luar kenyal di dalam, dengan kuah keju. Paling ramah kantong.
3. Paket Cepat Lulus — Rp17.000. 2 dimsum keju + 3 cireng dalam satu bowl. Combo untuk yang lapar berat atau mau coba dua menu.

LEVEL CHILI OIL (gratis, pilih saat pesan)
- Level 0 "Anti Pedas": tanpa chili oil, full kuah keju.
- Level 1 "Anget": chili oil sedikit.
- Level 2 "Nendang": pedas terasa, masih aman.
- Level 3 "Ka Tanya Level": paling pedas.

ES MAMBO (pilih 1 per porsi, sudah termasuk harga)
- Escopus = Es Matcha (Matcha Sariwangi), adem, pas untuk menetralkan pedas.
- Esjosjis = Es Teh (teh tubruk manis).
- Eskom = Es Coklat, creamy.

CARA PESAN DI WEBSITE
1. Pilih menu, atur jumlah, level chili oil, varian Es Mambo, dan catatan.
2. Checkout: isi nama, nomor WhatsApp, kelas/jurusan (opsional).
3. Pilih jadwal: Market Day Sabtu atau pre-order hari lain.
4. Pilih bayar: QRIS (semua e-wallet & m-banking) atau tunai saat ambil.
5. Klik "Kirim via WhatsApp" — pesan pesanan otomatis terisi, tinggal kirim ke admin. Pembayaran QRIS: lampirkan bukti bayar di chat.
- Ada fitur Mood Matcher di website untuk rekomendasi menu sesuai mood.
- Riwayat pesanan ada di ikon "Pesanan Saya" (tersimpan di perangkat pembeli).

PROMO
- Pembeli pertama (pesanan pertama dari perangkat itu) otomatis dapat potongan Rp2.000.
- Kartu stamp digital: setiap pesanan dari website = 1 stamp. Setelah 5 stamp, pesanan berikutnya dapat 1 Es Mambo gratis. Stamp tersimpan di perangkat pembeli, tunjukkan ke kasir saat ambil.
- Pesanan banyak untuk kelas/acara: bisa, lewat website atau chat admin, makin awal makin aman stoknya.

INFO PRODUK LAIN
- Kemasan bowl food grade, higienis.
- Informasi sertifikasi (misalnya halal), kandungan gizi, dan alergen TIDAK tersedia di data ini. Menu mengandung keju/susu. Untuk alergi atau pertanyaan sertifikasi, arahkan ke admin via WhatsApp.
`.trim();

const MENU_IDS = ["dimsum", "cireng", "paket"];

module.exports = { KNOWLEDGE, MENU_IDS };
