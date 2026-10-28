/* ==========================================================
   Dapur Ka Tanya — semua data yang sering diubah ada di sini
   ========================================================== */
const CONFIG = {
  // Nomor WhatsApp admin, format internasional tanpa "+" (contoh: 6281234567890).
  // Kosongkan "" kalau belum ada: WhatsApp akan minta pembeli memilih kontak.
  waNumber: "6282373405607",
  instagram: "dapurkatanya",
  tiktok: "dapurkatanya",
  location: "Telkom University Jakarta",
  firstOrderDiscount: 2000,
  // Taruh gambar QRIS di assets/qris.png. Kalau file belum ada, bagian gambar disembunyikan.
  qrisImage: "/assets/qris.png",
  stampsForReward: 5,
};

const MENU = [
  {
    id: "dimsum",
    name: "Dimsum Kuah Keju",
    price: 15000,
    tag: "Best Seller",
    tagClass: "red",
    desc: "Dimsum kukus dalam bowl, disiram kuah keju gurih yang creamy. Tambah chili oil sesuai nyalimu.",
    perks: ["🧊 + Es Mambo", "🌶️ Level bebas"],
    img: "", // isi path foto asli, mis. "/assets/dimsum.jpg", kalau sudah ada
  },
  {
    id: "cireng",
    name: "Cireng Kuah Keju",
    price: 12000,
    tag: "Ramah Kantong",
    tagClass: "alt",
    desc: "5 pcs cireng renyah di luar, kenyal di dalam, nyemplung di kuah keju. Pas buat jajan ringan.",
    perks: ["5 pcs", "🧊 + Es Mambo"],
    img: "",
  },
  {
    id: "paket",
    name: "Paket Cepat Lulus",
    price: 17000,
    tag: "Combo Hemat",
    tagClass: "",
    desc: "2 dimsum keju + 3 cireng dalam satu bowl. Cobain dua-duanya sekaligus, biar kenyang, biar cepet lulus.",
    perks: ["2 dimsum + 3 cireng", "🧊 + Es Mambo"],
    img: "",
  },
];

const MAMBO = [
  { id: "escopus", name: "Escopus", real: "Es Matcha", color: "#6fa35a", dark: "#4d7a3c", desc: "Matcha Sariwangi yang adem, pahit-manisnya pas buat netralin pedas." },
  { id: "esjosjis", name: "Esjosjis", real: "Es Teh", color: "#c98b4a", dark: "#9a6430", desc: "Teh tubruk manis legit. Rasa rumahan yang gak pernah salah." },
  { id: "eskom", name: "Eskom", real: "Es Coklat", color: "#7a4528", dark: "#4f2a17", desc: "Coklat creamy kesukaan semua umur. Teman paling cocok buat kuah keju." },
];

const LEVELS = [
  { name: "Anti Pedas", flames: "🧀", note: "Tanpa chili oil, full keju" },
  { name: "Anget", flames: "🌶️", note: "Chili oil dikit, buat pemanasan" },
  { name: "Nendang", flames: "🌶️🌶️", note: "Pedasnya kerasa, masih aman" },
  { name: "Ka Tanya Level", flames: "🌶️🌶️🌶️", note: "Siapin Es Mambo-mu" },
];

const MOODS = [
  { id: "laper", emoji: "😵‍💫", title: "Laper berat abis kelas pagi", sub: "Perut udah demo", pick: { menu: "paket", level: 2, mambo: "eskom" }, why: "Dua menu sekaligus biar kenyang sampai kelas siang, pedas sedang biar melek, ditutup coklat dingin." },
  { id: "ngemil", emoji: "😌", title: "Pengen ngemil santai", sub: "Nongkrong sambil ngobrol", pick: { menu: "cireng", level: 1, mambo: "esjosjis" }, why: "Cireng renyah porsi pas buat ngemil, pedas tipis, es teh manis klasik." },
  { id: "stres", emoji: "🤯", title: "Stres deadline / UTS", sub: "Butuh pelampiasan", pick: { menu: "dimsum", level: 3, mambo: "escopus" }, why: "Pedas maksimal buat lampiasan, lalu matcha adem buat nenangin kepala. Dopamine race!" },
  { id: "aman", emoji: "🥺", title: "Gak kuat pedes tapi pengen", sub: "Main aman dulu", pick: { menu: "dimsum", level: 0, mambo: "eskom" }, why: "Full kuah keju tanpa chili oil, creamy ketemu creamy. Tetap enak tanpa drama." },
];

const TEAM = [
  { name: "Jauza Najla", role: "CEO", div: "Leader" },
  { name: "Laisyawhara Fhateha Syam", role: "Content Creator", div: "Marketing" },
  { name: "Adiba Mauliya", role: "Social Media Officer", div: "Marketing" },
  { name: "Sela Inriani Hutagalung", role: "Finance Officer", div: "Finance" },
  { name: "Hajar Khodijah", role: "Admin", div: "Finance" },
  { name: "Rian Hapsari", role: "Head Production", div: "Production" },
  { name: "Ana Roehana", role: "Food Preparation", div: "Production" },
  { name: "Veronika Benita Sanjaya", role: "Beverage Preparation", div: "Production" },
  { name: "Muhamad Alsel Ashori", role: "Sales Officer", div: "Sales & CS" },
  { name: "Muhammad Abrar Rayhan", role: "Customer Service", div: "Sales & CS" },
];

const FAQ = [
  ["Kapan dan di mana kalian jualan?", "Setiap Market Day hari Sabtu di lingkungan Telkom University Jakarta. Di luar itu kamu bisa pre-order lewat web ini, nanti admin konfirmasi titik temu dan jamnya lewat WhatsApp."],
  ["Es Mambo-nya bayar lagi?", "Nggak. Setiap porsi sudah termasuk 1 Es Mambo, tinggal pilih Escopus, Esjosjis, atau Eskom."],
  ["Aku gak kuat pedas, bisa?", "Bisa banget. Pilih level \"Anti Pedas\" dan bowl-mu disajikan tanpa chili oil, full kuah keju."],
  ["Bayarnya pakai apa?", "QRIS (semua e-wallet & m-banking) atau tunai saat ambil pesanan."],
  ["Kartu stamp-nya gimana cara kerjanya?", "Setiap pesanan yang kamu kirim dari web ini menambah 1 stamp di perangkatmu. Setelah 5 stamp, pesanan berikutnya dapat Es Mambo gratis. Tunjukkan halaman ini ke kasir saat ambil."],
  ["Mau pesan banyak buat kelas atau acara?", "Boleh! Pesan lewat web atau chat admin langsung. Makin awal kabarin, makin aman stoknya."],
];

/* ========================= helpers ========================= */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const rp = (n) => "Rp" + Math.round(n).toLocaleString("id-ID");
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const byId = (arr, id) => arr.find((x) => x.id === id);
const store = {
  get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} },
};
const fmtDate = (d) => new Date(d).toLocaleDateString("id-ID", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
const isoDate = (d) => { const x = new Date(d); x.setMinutes(x.getMinutes() - x.getTimezoneOffset()); return x.toISOString().slice(0, 10); };
function nextSaturday() {
  const d = new Date(); d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() + ((6 - d.getDay() + 7) % 7));
  return d;
}

/* ========================= illustrations ========================= */
const steam = `<g class="steam" fill="none" stroke="#e7c9a4" stroke-width="5" stroke-linecap="round">
  <path d="M95 52c-8-10 8-16 0-28"/><path d="M122 48c-8-10 8-16 0-28"/><path d="M149 52c-8-10 8-16 0-28"/></g>`;
const dimsumPiece = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})">
  <ellipse cx="0" cy="4" rx="22" ry="15" fill="#fff4dc" stroke="#e7c48c" stroke-width="2.5"/>
  <path d="M-15 0c4-14 26-14 30 0" fill="#ffecc4" stroke="#e7c48c" stroke-width="2.5"/>
  <path d="M-7 -3l2-7M0 -4v-8M7 -3l-2-7" stroke="#e7c48c" stroke-width="2" stroke-linecap="round"/>
  <circle cx="0" cy="-10" r="4.5" fill="#f7931e"/></g>`;
const cirengPiece = (x, y, r = 0) => `<g transform="translate(${x} ${y}) rotate(${r})">
  <path d="M-24 2c2-12 18-15 30-12s20 8 18 15-18 11-30 9-20-4-18-12z" fill="#f2d39c" stroke="#d6a15a" stroke-width="2.5"/>
  <circle cx="-8" cy="0" r="1.6" fill="#d6a15a"/><circle cx="4" cy="-3" r="1.6" fill="#d6a15a"/><circle cx="12" cy="3" r="1.6" fill="#d6a15a"/></g>`;
function bowlSVG(kind) {
  let items = "";
  if (kind === "dimsum") items = dimsumPiece(88, 92) + dimsumPiece(152, 92) + dimsumPiece(120, 80, 1.1);
  if (kind === "cireng") items = cirengPiece(86, 96, -12) + cirengPiece(154, 96, 14) + cirengPiece(120, 104, 4) + cirengPiece(102, 80, -24) + cirengPiece(140, 80, 20);
  if (kind === "paket") items = cirengPiece(80, 98, -14) + cirengPiece(160, 98, 16) + cirengPiece(120, 108, 0) + dimsumPiece(100, 82, .95) + dimsumPiece(142, 82, .95);
  return `<svg viewBox="0 0 240 210" role="img" aria-hidden="true">
    ${steam}
    <ellipse cx="120" cy="196" rx="86" ry="9" fill="rgba(36,26,23,.12)"/>
    <path d="M24 98c0 58 40 92 96 92s96-34 96-92z" fill="#c01b2c"/>
    <path d="M30 120c10 40 44 64 90 64s80-24 90-64" fill="none" stroke="#fff" stroke-width="4" stroke-dasharray="2 10" stroke-linecap="round" opacity=".55"/>
    <text x="120" y="160" text-anchor="middle" font-family="Bagel Fat One, sans-serif" font-size="20" fill="#fff">KA TANYA</text>
    <ellipse cx="120" cy="98" rx="96" ry="24" fill="#8f1220"/>
    <ellipse cx="120" cy="99" rx="88" ry="19" fill="#ffc93c"/>
    <ellipse cx="104" cy="94" rx="40" ry="7" fill="#ffe08a" opacity=".8"/>
    ${items}
    <g class="drip" fill="#d7261e" opacity=".9">
      <circle cx="70" cy="104" r="4"/><circle cx="170" cy="106" r="3.5"/><circle cx="120" cy="114" r="3"/><circle cx="96" cy="110" r="2.5"/><circle cx="148" cy="112" r="2.5"/>
    </g>
  </svg>`;
}
function mamboSVG(m) {
  return `<svg viewBox="0 0 80 200" aria-hidden="true">
    <g transform="rotate(10 40 100)">
      <rect x="18" y="10" width="44" height="176" rx="18" fill="${m.color}" stroke="${m.dark}" stroke-width="3"/>
      <rect x="18" y="4" width="44" height="18" rx="4" fill="#f3f3f3" stroke="#ddd" stroke-width="2"/>
      <path d="M22 8h36M22 13h36M22 18h36" stroke="#d8d8d8" stroke-width="1.5"/>
      <rect x="26" y="34" width="7" height="130" rx="3.5" fill="#fff" opacity=".35"/>
      <circle cx="48" cy="60" r="3" fill="#fff" opacity=".5"/><circle cx="44" cy="100" r="2.2" fill="#fff" opacity=".5"/><circle cx="50" cy="140" r="2.6" fill="#fff" opacity=".5"/>
    </g></svg>`;
}
const media = (m) => (m.img ? `<img src="${m.img}" alt="${esc(m.name)}" loading="lazy" />` : bowlSVG(m.id));

/* ========================= state ========================= */
let cart = store.get("dkt_cart", []);
let orders = store.get("dkt_orders", []);
let profile = store.get("dkt_profile", { name: "", wa: "", kelas: "" });

const saveCart = () => { store.set("dkt_cart", cart); renderCartBadge(); };
const subtotal = () => cart.reduce((s, l) => s + byId(MENU, l.menu).price * l.qty, 0);
const count = () => cart.reduce((s, l) => s + l.qty, 0);
const stampCount = () => orders.length % (CONFIG.stampsForReward + 1);
const rewardReady = () => stampCount() === CONFIG.stampsForReward;
const discount = () => (orders.length === 0 && cart.length ? CONFIG.firstOrderDiscount : 0);

function addToCart({ menu, qty = 1, level = 1, mambo = MAMBO[0].id, note = "" }) {
  const key = [menu, level, mambo, note.trim()].join("|");
  const found = cart.find((l) => l.key === key);
  if (found) found.qty += qty;
  else cart.push({ key, menu, qty, level, mambo, note: note.trim() });
  saveCart();
  const b = $("#cartCount"); b.classList.remove("bump"); void b.offsetWidth; b.classList.add("bump");
  toast(`${byId(MENU, menu).name} masuk keranjang 🛒`);
}

/* ========================= render: static sections ========================= */
function renderMenu() {
  $("#menuGrid").innerHTML = MENU.map((m) => `
    <article class="card reveal">
      <div class="card-media">${media(m)}<span class="card-tag ${m.tagClass}">${m.tag}</span></div>
      <div class="card-body">
        <h3>${m.name}</h3>
        <p>${m.desc}</p>
        <div class="card-perks">${m.perks.map((p) => `<span class="perk">${p}</span>`).join("")}</div>
        <div class="card-foot">
          <div class="price"><small>Harga</small><b>${rp(m.price)}</b></div>
          <button class="btn btn-primary" data-open="${m.id}">Pesan +</button>
        </div>
      </div>
    </article>`).join("");
}

function renderMambo() {
  $("#mamboGrid").innerHTML = MAMBO.map((m) => `
    <article class="mambo-card reveal" style="background:linear-gradient(160deg, ${m.color}, ${m.dark})">
      ${mamboSVG(m)}
      <span class="real">${m.real}</span>
      <h3>${m.name}</h3>
      <p>${m.desc}</p>
    </article>`).join("");
}

function renderMoods() {
  $("#moodOptions").innerHTML = MOODS.map((m) => `
    <button class="mood-opt" role="radio" aria-checked="false" data-mood="${m.id}">
      <span>${m.emoji}</span><b>${m.title}</b><small>${m.sub}</small>
    </button>`).join("");
}
function showMood(id) {
  const m = byId(MOODS, id), item = byId(MENU, m.pick.menu), mb = byId(MAMBO, m.pick.mambo), lv = LEVELS[m.pick.level];
  $$(".mood-opt").forEach((b) => b.setAttribute("aria-checked", String(b.dataset.mood === id)));
  $("#moodResult").innerHTML = `
    <div class="mood-card">
      <div class="mc-visual">${media(item)}</div>
      <p class="kicker" style="margin:0;justify-self:start">Rekomendasi buatmu</p>
      <h3>${item.name}</h3>
      <div class="mc-row"><span class="mc-chip">${lv.flames} ${lv.name}</span><span class="mc-chip y">🧊 ${mb.name} (${mb.real})</span></div>
      <p>${m.why}</p>
      <button class="btn btn-primary btn-block" data-quick="${id}">Tambah ke Keranjang · ${rp(item.price)}</button>
    </div>`;
}

const AVATAR_COLORS = ["#c01b2c", "#f7931e", "#ef4a3a", "#3b3b3d", "#6fa35a", "#7a4528", "#c98b4a", "#8f1220", "#e0a800", "#d7261e"];
function renderTeam() {
  $("#teamGrid").innerHTML = TEAM.map((t, i) => {
    const ini = t.name.split(" ").slice(0, 2).map((w) => w[0]).join("");
    return `<div class="member reveal"><div class="avatar" style="background:${AVATAR_COLORS[i % AVATAR_COLORS.length]}">${ini}</div>
      <b>${t.name}</b><small>${t.role}</small><br/><span class="div">${t.div}</span></div>`;
  }).join("");
}

function renderFaq() {
  $("#faqList").innerHTML = FAQ.map(([q, a]) => `<details class="faq-item reveal"><summary>${q}</summary><p>${a}</p></details>`).join("");
}

function renderStamps() {
  const n = stampCount();
  const slots = [];
  for (let i = 0; i < CONFIG.stampsForReward; i++) slots.push(`<div class="slot ${i < n ? "on" : ""}" style="animation-delay:${i * 0.08}s">${i < n ? "🧀" : ""}</div>`);
  slots.push(`<div class="slot gift ${rewardReady() ? "ready" : ""}">🎁</div>`);
  $("#stampSlots").innerHTML = slots.join("");
  $("#stampNote").textContent = rewardReady()
    ? "🎉 Stamp penuh! Pesanan berikutnya dapat Es Mambo gratis."
    : orders.length === 0
      ? `Belum ada stamp. Pesanan pertamamu langsung hemat ${rp(CONFIG.firstOrderDiscount)}!`
      : `Kamu punya ${n} stamp. ${CONFIG.stampsForReward - n} lagi menuju Es Mambo gratis.`;
  $("#firstDiscLabel").textContent = rp(CONFIG.firstOrderDiscount);
}

/* ========================= product sheet ========================= */
let draft = null;
function openProduct(id, preset = {}) {
  const m = byId(MENU, id);
  draft = { menu: id, qty: 1, level: 1, mambo: MAMBO[0].id, note: "", ...preset };
  $("#productBody").innerHTML = `
    <div class="ps-media">${media(m)}</div>
    <h3 class="ps-title" id="psTitle">${m.name}</h3>
    <p class="ps-desc">${m.desc}</p>

    <span class="field-label">Level chili oil <small>(gratis)</small></span>
    <div class="spice">
      <input type="range" min="0" max="3" step="1" value="${draft.level}" id="psLevel" aria-label="Level chili oil" />
      <div class="spice-read"><span id="psLevelName"></span><span class="flames" id="psFlames"></span></div>
    </div>

    <span class="field-label">Es Mambo-nya <small>(sudah termasuk)</small></span>
    <div class="chips" id="psMambo">${MAMBO.map((x) => `
      <button class="chip" data-mambo="${x.id}" aria-pressed="${x.id === draft.mambo}"><span class="sw" style="background:${x.color}"></span>${x.name} <small style="font-weight:600;opacity:.7">${x.real}</small></button>`).join("")}
    </div>

    <label class="field-label" for="psNote">Catatan <small>(opsional)</small></label>
    <textarea class="textarea" id="psNote" rows="2" maxlength="120" placeholder="Contoh: kuah keju dipisah ya ka">${esc(draft.note)}</textarea>

    <div class="ps-foot">
      <div class="qty" aria-label="Jumlah">
        <button data-q="-1" aria-label="Kurangi">−</button><span id="psQty">${draft.qty}</span><button data-q="1" aria-label="Tambah">+</button>
      </div>
      <button class="btn btn-primary" id="psAdd"></button>
    </div>`;
  const sync = () => {
    const lv = LEVELS[draft.level];
    $("#psLevelName").textContent = `${lv.name} · ${lv.note}`;
    $("#psFlames").textContent = lv.flames;
    $("#psQty").textContent = draft.qty;
    $("#psAdd").textContent = `Tambah · ${rp(m.price * draft.qty)}`;
  };
  sync();
  $("#psLevel").addEventListener("input", (e) => { draft.level = +e.target.value; sync(); });
  $("#psMambo").addEventListener("click", (e) => {
    const b = e.target.closest("[data-mambo]"); if (!b) return;
    draft.mambo = b.dataset.mambo;
    $$("#psMambo .chip").forEach((c) => c.setAttribute("aria-pressed", String(c === b)));
  });
  $$("#productBody [data-q]").forEach((b) => b.addEventListener("click", () => { draft.qty = Math.max(1, Math.min(50, draft.qty + +b.dataset.q)); sync(); }));
  $("#psAdd").addEventListener("click", () => {
    draft.note = $("#psNote").value;
    addToCart(draft);
    closeAll();
  });
  openLayer("#productSheet");
}

/* ========================= cart ========================= */
function renderCartBadge() {
  const c = count();
  $("#cartCount").textContent = c;
  $("#fabCount").textContent = `${c} item`;
  $("#fabTotal").textContent = rp(subtotal());
  $("#fab").classList.toggle("show", c > 0);
}
function lineDesc(l) {
  const lv = LEVELS[l.level], mb = byId(MAMBO, l.mambo);
  return `${lv.flames} ${lv.name} · 🧊 ${mb.name}${l.note ? ` · "${esc(l.note)}"` : ""}`;
}
function renderCart() {
  const body = $("#cartBody"), foot = $("#cartFoot");
  if (!cart.length) {
    body.innerHTML = `<div class="empty"><span>🥣</span><b>Keranjang masih kosong</b><p>Bowl-mu lagi nungguin, ka.</p><a href="#menu" class="btn btn-primary" data-close>Lihat Menu</a></div>`;
    foot.innerHTML = "";
    return;
  }
  body.innerHTML = cart.map((l, i) => {
    const m = byId(MENU, l.menu);
    return `<div class="line-item">
      <div class="li-thumb">${media(m)}</div>
      <div><b>${m.name}</b><small>${lineDesc(l)}</small></div>
      <div class="li-right"><span class="li-price">${rp(m.price * l.qty)}</span>
        <div class="qty sm"><button data-li="${i}" data-d="-1" aria-label="Kurangi">−</button><span>${l.qty}</span><button data-li="${i}" data-d="1" aria-label="Tambah">+</button></div>
      </div></div>`;
  }).join("") + (cart.some((l) => l.menu === "paket") ? "" : `
    <div class="upsell"><span>🔥 Laper berat? Paket Cepat Lulus cuma ${rp(byId(MENU, "paket").price)}</span><button data-open="paket">+ Tambah</button></div>`);
  const d = discount();
  foot.innerHTML = `
    <div class="sum-row"><span>Subtotal (${count()} porsi)</span><span>${rp(subtotal())}</span></div>
    ${d ? `<div class="sum-row disc"><span>🎉 Diskon pembeli pertama</span><span>−${rp(d)}</span></div>` : ""}
    ${rewardReady() ? `<div class="sum-row disc"><span>🎁 Reward stamp</span><span>+1 Es Mambo</span></div>` : ""}
    <div class="sum-row total"><span>Total</span><b>${rp(subtotal() - d)}</b></div>
    <button class="btn btn-primary btn-lg btn-block" id="goCheckout">Lanjut Checkout →</button>`;
}

/* ========================= checkout ========================= */
let co = null;
function startCheckout() {
  const sat = nextSaturday();
  co = {
    step: 0,
    name: profile.name, wa: profile.wa, kelas: profile.kelas,
    pickup: "marketday", date: isoDate(sat), slot: "Pagi (08.00–10.00)",
    pay: "qris",
  };
  closeAll();
  renderCheckout();
  openLayer("#checkout");
}
function stepper() {
  $$("#coSteps li").forEach((li) => {
    const i = +li.dataset.i;
    li.className = i === co.step ? "on" : i < co.step ? "done" : "";
  });
  $("#coSteps").style.display = co.step > 3 ? "none" : "";
}
function pickupLabel() {
  return co.pickup === "marketday"
    ? `Market Day · ${fmtDate(co.date)} · Booth Dapur Ka Tanya`
    : `Pre-order · ${fmtDate(co.date)} · ${co.slot} · titik temu kampus (dikonfirmasi admin)`;
}
function renderCheckout() {
  stepper();
  const b = $("#coBody");
  const nav = (next = "Lanjut →", back = true) => `<div class="co-nav">${back ? `<button class="btn btn-ghost" data-co="back">← Kembali</button>` : ""}<button class="btn btn-primary" data-co="next">${next}</button></div>`;

  if (co.step === 0) {
    b.innerHTML = `<div class="co-pane">
      <label class="field-label" for="coName">Nama kamu</label>
      <input class="input" id="coName" autocomplete="name" value="${esc(co.name)}" placeholder="Nama panggilan juga boleh" maxlength="40" />
      <label class="field-label" for="coWa">Nomor WhatsApp</label>
      <input class="input" id="coWa" inputmode="tel" autocomplete="tel" value="${esc(co.wa)}" placeholder="08xxxxxxxxxx" maxlength="16" />
      <label class="field-label" for="coKelas">Kelas / Jurusan <small>(opsional)</small></label>
      <input class="input" id="coKelas" value="${esc(co.kelas)}" placeholder="Contoh: SI-23-01" maxlength="30" />
      <p class="err-msg" id="coErr" hidden></p>
      ${nav("Lanjut →", false)}</div>`;
  }

  if (co.step === 1) {
    const sat = isoDate(nextSaturday());
    const tmr = new Date(); tmr.setDate(tmr.getDate() + 1);
    const max = new Date(); max.setDate(max.getDate() + 21);
    b.innerHTML = `<div class="co-pane">
      <span class="field-label">Mau ambil kapan?</span>
      <div class="opt-cards">
        <button class="opt-card" data-pick="marketday" aria-pressed="${co.pickup === "marketday"}"><span>🎪</span><div><b>Market Day Sabtu</b><small>${fmtDate(sat)} · ambil di booth</small></div></button>
        <button class="opt-card" data-pick="preorder" aria-pressed="${co.pickup === "preorder"}"><span>📅</span><div><b>Pre-order hari lain</b><small>Pilih tanggal & jam, admin konfirmasi titik temu</small></div></button>
      </div>
      ${co.pickup === "preorder" ? `
      <div class="grid-2">
        <div><label class="field-label" for="coDate">Tanggal</label><input type="date" class="input" id="coDate" min="${isoDate(tmr)}" max="${isoDate(max)}" value="${co.date}" /></div>
        <div><label class="field-label" for="coSlot">Jam</label>
          <select class="select input" id="coSlot">${["Pagi (08.00–10.00)", "Siang (10.00–12.00)", "Siang (12.00–14.00)"].map((s) => `<option ${s === co.slot ? "selected" : ""}>${s}</option>`).join("")}</select></div>
      </div>` : ""}
      <p class="err-msg" id="coErr" hidden></p>
      ${nav()}</div>`;
  }

  if (co.step === 2) {
    b.innerHTML = `<div class="co-pane">
      <span class="field-label">Metode pembayaran</span>
      <div class="opt-cards">
        <button class="opt-card" data-pay="qris" aria-pressed="${co.pay === "qris"}"><span>📱</span><div><b>QRIS</b><small>GoPay, OVO, DANA, ShopeePay, m-banking</small></div></button>
        <button class="opt-card" data-pay="cash" aria-pressed="${co.pay === "cash"}"><span>💵</span><div><b>Tunai</b><small>Bayar saat ambil pesanan</small></div></button>
      </div>
      ${co.pay === "qris" ? `<div class="qris-box"><b>Total bayar: ${rp(subtotal() - discount())}</b>
        <img src="${CONFIG.qrisImage}" alt="Kode QRIS Dapur Ka Tanya" onerror="this.remove();document.getElementById('qrisAlt').hidden=false" />
        <p id="qrisAlt" hidden style="margin:8px 0 0;color:var(--muted)">Kode QRIS akan dikirim admin lewat WhatsApp setelah pesanan masuk.</p>
        <p style="margin:8px 0 0;font-size:.85rem;color:var(--muted)">Simpan bukti bayar, lalu lampirkan di chat WhatsApp.</p></div>` : ""}
      ${nav()}</div>`;
  }

  if (co.step === 3) {
    const d = discount();
    b.innerHTML = `<div class="co-pane">
      <div class="review">
        ${cart.map((l) => { const m = byId(MENU, l.menu); return `<div class="review-row"><span>${l.qty}× ${m.name}<br/><small>${lineDesc(l)}</small></span><span>${rp(m.price * l.qty)}</span></div>`; }).join("")}
        <hr/>
        ${d ? `<div class="review-row"><span>Diskon pembeli pertama</span><span style="color:#15803d">−${rp(d)}</span></div>` : ""}
        ${rewardReady() ? `<div class="review-row"><span>Reward stamp</span><span style="color:#15803d">+1 Es Mambo gratis</span></div>` : ""}
        <div class="review-row" style="font-size:1.1rem"><span><b style="color:var(--ink)">Total</b></span><span style="color:var(--red)">${rp(subtotal() - d)}</span></div>
        <hr/>
        <div class="review-row"><span>Nama</span><span>${esc(co.name)}</span></div>
        <div class="review-row"><span>WhatsApp</span><span>${esc(co.wa)}</span></div>
        ${co.kelas ? `<div class="review-row"><span>Kelas</span><span>${esc(co.kelas)}</span></div>` : ""}
        <div class="review-row"><span>Ambil</span><span>${esc(pickupLabel())}</span></div>
        <div class="review-row"><span>Bayar</span><span>${co.pay === "qris" ? "QRIS" : "Tunai saat ambil"}</span></div>
      </div>
      <p style="color:var(--muted);font-size:.88rem;margin:14px 0 0">Klik tombol di bawah, WhatsApp akan terbuka dengan pesan pesanan yang sudah terisi. Tinggal tekan kirim.</p>
      ${nav("Kirim via WhatsApp 💬")}</div>`;
  }

  if (co.step === 4) {
    const o = co.order;
    b.innerHTML = `<div class="co-pane success">
      <span class="big">🎉</span>
      <h3 class="co-title">Order Berhasil Dibuat!</h3>
      <div class="order-code">${o.code}</div>
      <p style="color:var(--muted);margin:6px 0 0">Pastikan pesan WhatsApp-nya sudah terkirim ke admin ya. Stamp kamu sekarang: <b>${stampCount()}/${CONFIG.stampsForReward}</b>${rewardReady() ? " 🎁" : ""}.</p>
      <div class="co-nav" style="flex-wrap:wrap">
        <a class="btn btn-primary" href="${o.waUrl}" target="_blank" rel="noopener">Buka WhatsApp Lagi</a>
        <button class="btn btn-ghost" data-copy="${o.code}">Salin Pesan</button>
      </div>
      <button class="link-btn" data-close style="margin-top:14px">Tutup</button>
    </div>`;
  }
  const first = $(".co-pane input, .co-pane button", b);
  if (first) setTimeout(() => first.focus({ preventScroll: true }), 50);
}
function coError(msg, field) {
  const e = $("#coErr"); e.textContent = msg; e.hidden = false;
  if (field) { field.classList.add("err"); field.focus(); }
}
function coNext() {
  if (co.step === 0) {
    co.name = $("#coName").value.trim(); co.wa = $("#coWa").value.trim(); co.kelas = $("#coKelas").value.trim();
    $$(".input").forEach((i) => i.classList.remove("err"));
    if (co.name.length < 2) return coError("Nama minimal 2 huruf ya ka.", $("#coName"));
    const digits = co.wa.replace(/[^\d]/g, "");
    if (!/^(08|628)\d{7,12}$/.test(digits)) return coError("Nomor WA belum valid. Contoh: 081234567890", $("#coWa"));
    co.wa = digits;
    profile = { name: co.name, wa: co.wa, kelas: co.kelas };
    store.set("dkt_profile", profile);
  }
  if (co.step === 1 && co.pickup === "preorder") {
    co.date = $("#coDate").value; co.slot = $("#coSlot").value;
    const min = $("#coDate").min, max = $("#coDate").max;
    if (!co.date || co.date < min || co.date > max) return coError("Pilih tanggal antara besok sampai 3 minggu ke depan.", $("#coDate"));
  }
  if (co.step === 3) return submitOrder();
  co.step++;
  renderCheckout();
}

function buildMessage(o) {
  const lines = o.items.map((l, i) => {
    const m = byId(MENU, l.menu), lv = LEVELS[l.level], mb = byId(MAMBO, l.mambo);
    return `${i + 1}. ${m.name} x${l.qty} = ${rp(m.price * l.qty)}\n   Level: ${lv.name} ${lv.flames} | Es Mambo: ${mb.name} (${mb.real})${l.note ? `\n   Catatan: ${l.note}` : ""}`;
  });
  return [
    `Halo Dapur Ka Tanya! 👋 Aku mau pesan ya ka.`,
    ``,
    `*Kode Order:* ${o.code}`,
    `*Nama:* ${o.name}`,
    `*No. WA:* ${o.wa}`,
    o.kelas ? `*Kelas/Jurusan:* ${o.kelas}` : null,
    ``,
    `*Pesanan:*`,
    ...lines,
    ``,
    `Subtotal: ${rp(o.subtotal)}`,
    o.discount ? `Diskon pembeli pertama: -${rp(o.discount)}` : null,
    o.reward ? `Reward stamp: +1 Es Mambo gratis 🎁` : null,
    `*Total: ${rp(o.total)}*`,
    ``,
    `*Ambil:* ${o.pickup}`,
    `*Bayar:* ${o.pay === "qris" ? "QRIS (bukti bayar aku lampirkan)" : "Tunai saat ambil"}`,
    ``,
    `Terima kasih! 🧀🌶️`,
  ].filter((x) => x !== null).join("\n");
}

function submitOrder() {
  const code = "DKT-" + Math.random().toString(36).slice(2, 6).toUpperCase();
  const d = discount();
  const o = {
    code, at: Date.now(),
    name: co.name, wa: co.wa, kelas: co.kelas,
    items: cart.map((l) => ({ ...l })),
    subtotal: subtotal(), discount: d, total: subtotal() - d,
    reward: rewardReady(),
    pickup: pickupLabel(), pay: co.pay,
  };
  o.message = buildMessage(o);
  o.waUrl = `https://wa.me/${CONFIG.waNumber}?text=${encodeURIComponent(o.message)}`;
  window.open(o.waUrl, "_blank", "noopener");

  orders.unshift(o);
  store.set("dkt_orders", orders);
  cart = [];
  saveCart();
  renderStamps();
  co.order = o;
  co.step = 4;
  renderCheckout();
  confetti();
}

/* ========================= orders ========================= */
function renderOrders() {
  const body = $("#ordersBody");
  if (!orders.length) {
    body.innerHTML = `<div class="empty"><span>🧾</span><b>Belum ada pesanan</b><p>Pesanan yang kamu kirim dari perangkat ini akan muncul di sini.</p></div>`;
    return;
  }
  body.innerHTML = orders.map((o, i) => `
    <div class="order-card">
      <header><b>${o.code}</b><span class="status">Terkirim</span></header>
      <small>${new Date(o.at).toLocaleString("id-ID", { dateStyle: "medium", timeStyle: "short" })}</small>
      <div>${o.items.map((l) => `${l.qty}× ${byId(MENU, l.menu)?.name ?? l.menu}`).join(", ")}</div>
      <small>${esc(o.pickup)}</small>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-top:4px">
        <b style="color:var(--red)">${rp(o.total)}</b>
        <span style="display:flex;gap:14px"><button class="link-btn" data-reorder="${i}">Pesan lagi</button><a class="link-btn" href="${o.waUrl}" target="_blank" rel="noopener">Chat admin</a></span>
      </div>
    </div>`).join("");
}

/* ========================= layers ========================= */
const layers = [];
let lastFocus = null;
function openLayer(sel) {
  const el = $(sel);
  if (!layers.length) lastFocus = document.activeElement;
  if (!layers.includes(el)) layers.push(el);
  el.classList.add("show");
  $("#overlay").classList.add("show");
  document.body.classList.add("locked");
  setTimeout(() => { const f = $("button, input, a", el); f && f.focus({ preventScroll: true }); }, 60);
}
function closeAll() {
  layers.splice(0).forEach((el) => el.classList.remove("show"));
  $("#overlay").classList.remove("show");
  document.body.classList.remove("locked");
  lastFocus && lastFocus.focus && lastFocus.focus({ preventScroll: true });
}
function openCart() { renderCart(); openLayer("#cartDrawer"); }

/* ========================= fx ========================= */
let toastT;
function toast(msg) {
  const t = $("#toast"); t.textContent = msg; t.classList.add("show");
  clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove("show"), 2200);
}
function confetti() {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const c = $("#confetti"), ctx = c.getContext("2d");
  c.width = innerWidth * devicePixelRatio; c.height = innerHeight * devicePixelRatio; ctx.scale(devicePixelRatio, devicePixelRatio);
  const colors = ["#c01b2c", "#ffe03b", "#f7931e", "#ef4a3a", "#ffffff", "#6fa35a"];
  const ps = Array.from({ length: 160 }, () => ({
    x: innerWidth / 2, y: innerHeight * 0.45, vx: (Math.random() - 0.5) * 16, vy: Math.random() * -16 - 4,
    s: Math.random() * 8 + 4, r: Math.random() * 6, vr: (Math.random() - 0.5) * 0.3, c: colors[(Math.random() * colors.length) | 0],
  }));
  let f = 0;
  (function tick() {
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    ps.forEach((p) => { p.vy += 0.42; p.vx *= 0.99; p.x += p.vx; p.y += p.vy; p.r += p.vr;
      ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.r); ctx.fillStyle = p.c; ctx.fillRect(-p.s / 2, -p.s / 4, p.s, p.s / 2); ctx.restore(); });
    if (++f < 180) requestAnimationFrame(tick); else ctx.clearRect(0, 0, innerWidth, innerHeight);
  })();
}

/* ========================= events ========================= */
document.addEventListener("click", (e) => {
  const t = e.target;
  const open = t.closest("[data-open]");
  if (open) { closeAll(); return openProduct(open.dataset.open); }
  if (t.closest("[data-close]") || t === $("#overlay")) return closeAll();

  const mood = t.closest("[data-mood]"); if (mood) return showMood(mood.dataset.mood);
  const quick = t.closest("[data-quick]");
  if (quick) { const m = byId(MOODS, quick.dataset.quick); return addToCart({ ...m.pick }); }

  const li = t.closest("[data-li]");
  if (li) {
    const l = cart[+li.dataset.li]; l.qty += +li.dataset.d;
    if (l.qty <= 0) cart.splice(+li.dataset.li, 1);
    saveCart(); return renderCart();
  }
  if (t.closest("#goCheckout")) return startCheckout();

  const pick = t.closest("[data-pick]");
  if (pick) { co.pickup = pick.dataset.pick; if (co.pickup === "marketday") co.date = isoDate(nextSaturday()); else { const d = new Date(); d.setDate(d.getDate() + 1); co.date = isoDate(d); } return renderCheckout(); }
  const pay = t.closest("[data-pay]"); if (pay) { co.pay = pay.dataset.pay; return renderCheckout(); }
  const cob = t.closest("[data-co]");
  if (cob) { if (cob.dataset.co === "back") { co.step--; return renderCheckout(); } return coNext(); }

  const cp = t.closest("[data-copy]");
  if (cp) {
    const o = orders.find((x) => x.code === cp.dataset.copy);
    navigator.clipboard?.writeText(o.message).then(() => toast("Pesan disalin ✅"), () => toast("Gagal menyalin"));
    return;
  }
  const re = t.closest("[data-reorder]");
  if (re) { orders[+re.dataset.reorder].items.forEach((l) => addToCart({ ...l })); closeAll(); return openCart(); }
});
$("#openCart").addEventListener("click", openCart);
$("#fab").addEventListener("click", openCart);
$("#openOrders").addEventListener("click", () => { renderOrders(); openLayer("#ordersDrawer"); });
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && layers.length) closeAll();
  if (e.key === "Enter" && co && $("#checkout").classList.contains("show") && e.target.matches(".co-pane input")) { e.preventDefault(); coNext(); }
});

/* nav: shrink + active link */
const nav = $("#nav");
const sections = $$("main section[id]");
addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", scrollY > 30);
  let cur = "";
  sections.forEach((s) => { if (s.getBoundingClientRect().top < 140) cur = s.id; });
  $$(".nav-links a").forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + cur));
}, { passive: true });

/* hero parallax */
const art = $(".hero-art");
if (art && matchMedia("(pointer:fine)").matches) {
  art.addEventListener("mousemove", (e) => {
    const r = art.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
    $$("[data-depth]", art).forEach((el) => { const d = +el.dataset.depth * 30; el.style.transform = `translate(${x * d}px, ${y * d}px)`; });
  });
  art.addEventListener("mouseleave", () => $$("[data-depth]", art).forEach((el) => (el.style.transform = "")));
}

/* ========================= init ========================= */
renderMenu(); renderMambo(); renderMoods(); renderTeam(); renderFaq(); renderStamps(); renderCartBadge();
$("#year").textContent = new Date().getFullYear();
$("#lnkWa").href = `https://wa.me/${CONFIG.waNumber}`;
$("#lnkIg").href = `https://instagram.com/${CONFIG.instagram}`;
$("#lnkTt").href = `https://tiktok.com/@${CONFIG.tiktok}`;

const io = new IntersectionObserver((ents) => ents.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }), { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
$$(".reveal").forEach((el, i) => { el.style.transitionDelay = `${(i % 4) * 70}ms`; io.observe(el); });

const t0 = performance.now();
addEventListener("load", () => setTimeout(() => $("#loader").classList.add("done"), Math.max(0, 1500 - (performance.now() - t0))));
setTimeout(() => $("#loader").classList.add("done"), 4000);
