/* =========================================================
JAPAN’26 — MAIN SCRIPT
========================================================= */

/* ── TRIP DATES ── */
const TRIP_START = new Date(“2026-05-09”);
const TRIP_END   = new Date(“2026-05-20”);

/* ── ITINERARY — unchanged from your original ── */
const ITINERARY = [
{
day: 1,
date: “2026-05-09”,
title: “Arrival in Tokyo”,
city: “Tokyo”,
walk: 1,
items: [
{ time: “18:30”, name: “Arrive at Haneda Airport (HND)”, tags: [“travel”] },
{ time: “20:00”, name: “Check-in at hotel (Akasaka)”, tags: [“travel”] },
{ time: “21:00”, name: “Shibuya Crossing & short night walk”, tags: [“fun”, “walk”] },
{ time: “21:30”, name: “Dinner — halal-friendly options near Shibuya”, tags: [“food”, “halal”] }
]
},
{
day: 2,
date: “2026-05-10”,
title: “Shibuya · Harajuku · Mario Kart · Shibuya Sky”,
city: “Tokyo”,
walk: 2,
items: [
{ time: “10:30”, name: “Shibuya 109 (fashion)”, tags: [“shop”] },
{ time: “11:30”, name: “LOFT / lifestyle stores”, tags: [“shop”] },
{ time: “12:00”, name: “Harajuku Takeshita Street”, tags: [“shop”, “walk”] },
{ time: “13:00”, name: “Mario Kart Street Tour (Afternoon slot)”, tags: [“fun”, “experience”] },
{ time: “15:00”, name: “Break / explore Shibuya”, tags: [“rest”] },
{ time: “17:30”, name: “Shibuya Sky (sunset → night)”, tags: [“view”, “fun”] },
{ time: “19:30”, name: “Gyumon Halal Yakiniku — Dinner”, tags: [“food”, “halal”] }
]
},
{
day: 3,
date: “2026-05-11”,
title: “Ikebukuro + Harry Potter Studio Tour”,
city: “Tokyo”,
walk: 2,
items: [
{ time: “10:00”, name: “Ikebukuro — Animate & anime shops”, tags: [“shop”, “fun”] },
{ time: “12:00”, name: “Travel to Harry Potter Studio Tour”, tags: [“travel”] },
{ time: “13:00”, name: “Harry Potter Studio Tour Tokyo”, tags: [“fun”, “experience”] }
]
},
{
day: 4,
date: “2026-05-12”,
title: “Shinjuku + Drift Tour”,
city: “Tokyo”,
walk: 2,
items: [
{ time: “11:00”, name: “Shinjuku exploring (Kabukicho, tech stores)”, tags: [“shop”, “fun”] },
{ time: “15:00”, name: “Rest at hotel”, tags: [“rest”] },
{ time: “18:00”, name: “Tokyo Drift / Go-Kart Experience”, tags: [“fun”, “experience”] }
]
},
{
day: 5,
date: “2026-05-13”,
title: “Tokyo → Kyoto + Fushimi Inari”,
city: “Kyoto”,
walk: 2,
items: [
{ time: “09:00”, name: “Shinkansen to Kyoto”, tags: [“travel”] },
{ time: “12:00”, name: “Hotel check-in / luggage drop”, tags: [“travel”] },
{ time: “14:00”, name: “Fushimi Inari (first section only)”, tags: [“walk”, “view”] }
]
},
{
day: 6,
date: “2026-05-14”,
title: “Kiyomizu-dera → Sannenzaka → Gion”,
city: “Kyoto”,
walk: 3,
items: [
{ time: “10:30”, name: “Taxi to Kiyomizu-dera”, tags: [“travel”] },
{ time: “11:00”, name: “Kiyomizu-dera Temple”, tags: [“walk”, “view”] },
{ time: “12:30”, name: “Downhill Sannenzaka / Ninenzaka”, tags: [“walk”, “shop”] },
{ time: “17:00”, name: “Gion District evening walk”, tags: [“walk”, “view”] }
]
},
{
day: 7,
date: “2026-05-15”,
title: “Arashiyama + teamLab Biovortex”,
city: “Kyoto”,
walk: 2,
items: [
{ time: “09:00”, name: “Arashiyama Bamboo Grove (flat path)”, tags: [“walk”, “view”] },
{ time: “11:00”, name: “River cafés (relax)”, tags: [“rest”, “food”] },
{ time: “18:00”, name: “teamLab Biovortex Kyoto”, tags: [“fun”, “experience”] }
]
},
{
day: 8,
date: “2026-05-16”,
title: “Kyoto → Osaka + Namba + Dotonbori”,
city: “Osaka”,
walk: 2,
items: [
{ time: “10:00”, name: “Train to Osaka”, tags: [“travel”] },
{ time: “12:00”, name: “Hotel check-in (Namba area)”, tags: [“travel”] },
{ time: “14:00”, name: “Namba Yasaka Shrine”, tags: [“view”] },
{ time: “18:00”, name: “Dotonbori night walk”, tags: [“walk”, “food”, “fun”] }
]
},
{
day: 9,
date: “2026-05-17”,
title: “Osaka Castle + Umeda Sky”,
city: “Osaka”,
walk: 2,
items: [
{ time: “09:00”, name: “Osaka Castle (elevator route)”, tags: [“view”, “walk”] },
{ time: “15:00”, name: “Rest / café break”, tags: [“rest”] },
{ time: “18:00”, name: “Umeda Sky Building (sunset)”, tags: [“view”, “fun”] }
]
},
{
day: 10,
date: “2026-05-18”,
title: “Shinsaibashi + Rinku Premium Outlets”,
city: “Osaka”,
walk: 2,
items: [
{ time: “11:00”, name: “Shinsaibashi Shopping Street”, tags: [“shop”] },
{ time: “15:00”, name: “Rinku Premium Outlets (near KIX)”, tags: [“shop”, “food”] }
]
},
{
day: 11,
date: “2026-05-19”,
title: “Chill Day + Packing”,
city: “Osaka”,
walk: 1,
items: [
{ time: “10:00”, name: “Free time — arcades, cafés, last shops”, tags: [“fun”, “rest”] },
{ time: “18:00”, name: “Packing + early night”, tags: [“rest”] }
]
},
{
day: 12,
date: “2026-05-20”,
title: “Departure from KIX”,
city: “Osaka”,
walk: 1,
items: [
{ time: “07:00”, name: “Travel to Kansai Airport (KIX)”, tags: [“travel”] },
{ time: “09:30”, name: “Flight departure — さようなら Japan 🇯🇵”, tags: [“travel”] }
]
}
];

/* ── PACKING — categorised ── */
const PACKING = [
{ cat: “📄 Documents”, items: [
{ name: “Passport (valid 6+ months)”, essential: true },
{ name: “Travel insurance docs”, essential: true },
{ name: “Printed hotel confirmations”, essential: false },
{ name: “Emergency contact card”, essential: true },
]},
{ cat: “💳 Tech & Money”, items: [
{ name: “Unlocked smartphone”, essential: true },
{ name: “Japan SIM card (pre-order)”, essential: true },
{ name: “Power bank 20,000mAh”, essential: true },
{ name: “Type A plug adaptor (2-pin flat)”, essential: true },
{ name: “¥150,000+ cash — many places cash only”, essential: true },
{ name: “IC / Suica card (top up at airport)”, essential: true },
{ name: “Google Maps offline — Tokyo & Osaka”, essential: true },
{ name: “Google Translate offline Japanese pack”, essential: true },
]},
{ cat: “👟 Clothing”, items: [
{ name: “Comfortable walking trainers”, essential: true },
{ name: “Slip-on shoes (for temples)”, essential: true },
{ name: “Light rain jacket / travel umbrella”, essential: true },
{ name: “Smart-casual outfit for restaurants”, essential: false },
{ name: “12 days casual clothing”, essential: true },
]},
{ cat: “💊 Health”, items: [
{ name: “Prescription meds + spare supply”, essential: true },
{ name: “Blister plasters — lots!”, essential: true },
{ name: “Sunscreen SPF 50+”, essential: true },
{ name: “Hand sanitiser”, essential: false },
{ name: “Ibuprofen / paracetamol”, essential: false },
]},
{ cat: “⛩ Japan-Specific”, items: [
{ name: “Hyperdia / Navitime app installed”, essential: true },
{ name: “Small day bag / tote for outings”, essential: false },
{ name: “Coin wallet (vending machines!)”, essential: false },
{ name: “Snacks from home”, essential: false },
]},
];

/* ── INFO CARDS ── */
const INFO = [
{ ico: “🚨”, val: “110 / 119”,      lbl: “Police / Ambulance” },
{ ico: “💴”, val: “¥ JPY”,          lbl: “Currency” },
{ ico: “🔌”, val: “100V Type A”,    lbl: “Plug / Voltage” },
{ ico: “⏰”, val: “JST +9”,         lbl: “Timezone” },
{ ico: “🌡”, val: “18–25°C”,        lbl: “May Weather” },
{ ico: “🚆”, val: “IC Card”,        lbl: “Best Transit” },
{ ico: “💧”, val: “Tap safe”,       lbl: “Drinking Water” },
{ ico: “📶”, val: “IIJmio / Docomo”,lbl: “Best SIMs” },
];

/* ── TIPS ── */
const TIPS = [
{ num: “01”, text: “Remove shoes at ryokans, some restaurants and traditional spaces.” },
{ num: “02”, text: “Don’t eat while walking. Find a spot to sit — it’s a cultural norm.” },
{ num: “03”, text: “Quiet on trains. No phone calls. Headphones are fine.” },
{ num: “04”, text: “Carry cash. Ramen shops, shrines, small izakayas: cash only.” },
{ num: “05”, text: “IC card (Suica) works on almost all transit AND most konbinis.” },
{ num: “06”, text: “7-Eleven ATMs reliably accept foreign cards for cash.” },
{ num: “07”, text: “Book popular restaurants 2–3 weeks ahead online.” },
{ num: “08”, text: “Bins are rare outside konbinis — carry a small bag.” },
{ num: “09”, text: “Konbini (convenience stores) are outstanding. Use them daily.” },
{ num: “10”, text: “Google Translate camera mode works brilliantly on menus.” },
{ num: “11”, text: “Halal: look for ハラール labels or ask staff. Gyumon in Shinjuku is great.” },
{ num: “12”, text: “Bowing is the greeting — a small nod is perfectly polite.” },
];

/* ── PHRASES ── */
const PHRASES = [
{ jp: “ありがとうございます”, rom: “Arigatou gozaimasu”,        en: “Thank you very much” },
{ jp: “すみません”,           rom: “Sumimasen”,                 en: “Excuse me / Sorry” },
{ jp: “お願いします”,         rom: “Onegaishimasu”,             en: “Please” },
{ jp: “英語を話せますか？”,   rom: “Eigo o hanasemasu ka?”,     en: “Do you speak English?” },
{ jp: “どこですか？”,         rom: “Doko desu ka?”,             en: “Where is it?” },
{ jp: “いくらですか？”,       rom: “Ikura desu ka?”,            en: “How much is this?” },
{ jp: “ハラールですか？”,     rom: “Harāru desu ka?”,           en: “Is this Halal?” },
{ jp: “おいしい！”,           rom: “Oishii!”,                   en: “Delicious!” },
{ jp: “ひとつください”,       rom: “Hitotsu kudasai”,           en: “One please” },
{ jp: “トイレはどこですか？”, rom: “Toire wa doko desu ka?”,    en: “Where is the toilet?” },
];

/* ── BUDGET CATEGORIES ── */
const BUDGET_CATS = [
{ ico: “🍜”, label: “Food” },
{ ico: “🚆”, label: “Travel” },
{ ico: “🏨”, label: “Stay” },
{ ico: “🛍”, label: “Shopping” },
{ ico: “🎭”, label: “Activities” },
{ ico: “🧾”, label: “Misc” },
];

const BUDGET_LIMIT = 200000;
const JPY_GBP      = 0.0053;

/* =========================================================
STATE
========================================================= */
const STATE_KEY = “jp26_v2”;

function loadState() {
try {
const s = JSON.parse(localStorage.getItem(STATE_KEY)) || {};
if (!s.completed)  s.completed  = {};
if (!s.packing)    s.packing    = {};
if (!s.budget)     s.budget     = [];
if (!s.budgetCat)  s.budgetCat  = 0;
if (s.notes === undefined) s.notes = “”;
return s;
} catch { return { completed:{}, packing:{}, budget:[], budgetCat:0, notes:”” }; }
}

function saveState() {
localStorage.setItem(STATE_KEY, JSON.stringify(state));
}

let state = loadState();

/* =========================================================
INIT
========================================================= */
document.addEventListener(“DOMContentLoaded”, () => {
renderDays();
renderRoute();
renderPacking();
renderBudget();
renderInfo();
renderTips();
renderPhrases();
renderNotes();
updateProgress();
updateCountdown();
setupTabs();
setupInstallBanner();
setupOfflineBadge();
setupReset();

document.getElementById(“petal-btn”).addEventListener(“click”, () => {
for (let i = 0; i < 20; i++) setTimeout(spawnPetal, i * 60);
});
});

/* =========================================================
COUNTDOWN
========================================================= */
function updateCountdown() {
const now  = new Date();
const diff = Math.ceil((TRIP_START - now) / (1000 * 60 * 60 * 24));

const numEl   = document.getElementById(“cd-num”);
const lblEl   = document.getElementById(“cd-label”);
const subEl   = document.getElementById(“cd-sub”);
const hdrSub  = document.getElementById(“hdr-sub”);

if (diff > 0) {
numEl.textContent = diff;
lblEl.textContent = diff === 1 ? “Day to go!” : “Days to go”;
subEl.textContent = diff <= 7 ? “Pack your bags — nearly time! 🎒” : “Planning mode activated 🗾”;
hdrSub.textContent = `${diff}d until Tokyo`;
} else if (diff === 0) {
numEl.textContent = “✈”;
lblEl.textContent = “Today’s the day!”;
subEl.textContent = “Have an incredible trip! いってらっしゃい”;
hdrSub.textContent = “Travel day! ✈”;
for (let i = 0; i < 20; i++) setTimeout(spawnPetal, i * 80);
} else {
const dayIn = Math.abs(diff);
numEl.textContent = dayIn;
lblEl.textContent = dayIn === 1 ? “Day in Japan” : “Days in Japan”;
subEl.textContent = “Explore, eat, enjoy every moment 🇯🇵”;
hdrSub.textContent = “In Japan right now 🇯🇵”;
}
}

/* =========================================================
ITINERARY RENDER
========================================================= */
function renderDays() {
const wrap = document.getElementById(“days-container”);
wrap.innerHTML = “”;

ITINERARY.forEach(day => {
const card = document.createElement(“div”);
card.className = “day-card”;
card.dataset.day = day.day;

```
/* ── Header ── */
const hdr = document.createElement("div");
hdr.className = "dc-hdr";

// Walk intensity dots
const walkDots = "●".repeat(day.walk) + "○".repeat(3 - day.walk);

hdr.innerHTML = `
  <div class="dc-num">${day.day}<div class="dc-num-sub">DAY</div></div>
  <div class="dc-info">
    <div class="dc-title">${day.title}</div>
    <div class="dc-meta">
      <div class="dc-city-dot"></div>
      <span>${day.city}</span>
      <span>·</span>
      <span>${day.items.length} activities</span>
      <span>·</span>
      <span style="color:var(--gold);font-size:9px;letter-spacing:-1px" title="Walk intensity">${walkDots}</span>
    </div>
    <div class="dc-progress">
      <div class="dc-progress-fill" id="dc-prog-${day.day}"></div>
    </div>
  </div>
  <div class="dc-chevron">▾</div>
`;

/* ── Body (grid accordion) ── */
const body  = document.createElement("div");
body.className = "dc-body";
const inner = document.createElement("div");
inner.className = "dc-body-inner";
const acts  = document.createElement("div");
acts.className = "activities";

// Divider
const divider = document.createElement("div");
divider.className = "act-divider";
acts.appendChild(divider);

day.items.forEach((item, idx) => {
  const key  = `${day.day}-${idx}`;
  const done = !!state.completed[key];

  const act = document.createElement("div");
  act.className = "act" + (done ? " done" : "");
  act.dataset.key = key;
  act.dataset.day = day.day;

  const tagHTML = item.tags.map(t =>
    `<div class="act-tag tag-${t}">${t}</div>`
  ).join("");

  act.innerHTML = `
    <div class="act-chk">${done ? "✓" : ""}</div>
    <div class="act-body">
      <div class="act-time">${item.time}</div>
      <div class="act-name">${item.name}</div>
      <div class="act-tags">${tagHTML}</div>
    </div>
  `;

  // Single listener per item — no re-render issues
  act.addEventListener("click", () => toggleActivity(key, act, day.day));
  acts.appendChild(act);
});

inner.appendChild(acts);
body.appendChild(inner);

// Toggle open/close
hdr.addEventListener("click", () => {
  card.classList.toggle("day-open");
});

card.appendChild(hdr);
card.appendChild(body);
wrap.appendChild(card);
```

});

// Restore open state for any days that were open
ITINERARY.forEach(day => {
updateDayProgress(day.day);
});
}

/* =========================================================
ACTIVITY TOGGLE
========================================================= */
function toggleActivity(key, element, dayNum) {
state.completed[key] = !state.completed[key];
saveState();

if (state.completed[key]) {
element.classList.add(“done”);
element.querySelector(”.act-chk”).textContent = “✓”;
} else {
element.classList.remove(“done”);
element.querySelector(”.act-chk”).textContent = “”;
}

updateDayProgress(dayNum);
updateProgress();
}

/* =========================================================
DAY PROGRESS
========================================================= */
function updateDayProgress(dayNum) {
const day   = ITINERARY.find(d => d.day === dayNum);
const total = day.items.length;
let done = 0;

day.items.forEach((_, idx) => {
if (state.completed[`${dayNum}-${idx}`]) done++;
});

const pct  = Math.round((done / total) * 100);
const fill = document.getElementById(`dc-prog-${dayNum}`);
if (fill) fill.style.width = pct + “%”;

const card = document.querySelector(`.day-card[data-day="${dayNum}"]`);
if (card) {
card.classList.toggle(“completed”, pct === 100);
}
}

/* =========================================================
OVERALL PROGRESS
========================================================= */
function updateProgress() {
let total = 0, done = 0;
ITINERARY.forEach(day => {
day.items.forEach((_, idx) => {
total++;
if (state.completed[`${day.day}-${idx}`]) done++;
});
});

const pct  = Math.round((done / total) * 100);
const circ = 2 * Math.PI * 30;

document.getElementById(“ring-pct”).textContent = pct;
document.getElementById(“ring-fill”).style.strokeDashoffset = circ - (pct / 100) * circ;

const msgs = [
[“Your journey awaits 🌸”,    “Tap activities to log them as complete.”],
[“First steps taken 🍜”,       “One activity at a time — you’ve got this.”],
[“Making great progress 🚄”,   “The ramen, the shrines, the neon — soaking it in.”],
[“Halfway through Japan 🗾”,   “Memories being made every step of the way.”],
[“Almost done — amazing! ⛩”,  “You’ve seen so much — finish strong!”],
[“Trip complete! 🎌”,          “Arigatou gozaimashita! What an adventure. 🙏”],
];
const idx = Math.min(Math.floor(pct / 20), 5);
document.getElementById(“prog-title”).textContent = msgs[idx][0];
document.getElementById(“prog-sub”).textContent   = msgs[idx][1];

/* Day dots */
const dots = document.getElementById(“day-dots”);
dots.innerHTML = “”;
ITINERARY.forEach(day => {
let d = 0;
day.items.forEach((_, i) => { if (state.completed[`${day.day}-${i}`]) d++; });
const dot = document.createElement(“div”);
dot.className = “day-dot”;
if (d === day.items.length) dot.classList.add(“full”);
else if (d > 0) dot.classList.add(“partial”);
dot.title = `Day ${day.day}: ${day.title}`;
dots.appendChild(dot);
});
}

/* =========================================================
ROUTE BAR
========================================================= */
function renderRoute() {
const wrap = document.getElementById(“route-bar”);
wrap.innerHTML = “”;

const cities = [];
ITINERARY.forEach(d => { if (!cities.includes(d.city)) cities.push(d.city); });

// Find “current” city = first city with incomplete activities
const firstIncomplete = ITINERARY.find(d =>
d.items.some((_, i) => !state.completed[`${d.day}-${i}`])
);
const activeCity = firstIncomplete ? firstIncomplete.city : cities[cities.length - 1];

cities.forEach((name, i) => {
const city = document.createElement(“div”);
city.className = “route-city” + (name === activeCity ? “ active-city” : “”);
city.innerHTML = `<div class="rc-dot"></div><div class="rc-name">${name}</div>`;
wrap.appendChild(city);

```
if (i < cities.length - 1) {
  const line = document.createElement("div");
  line.className = "route-line";
  wrap.appendChild(line);
}
```

});
}

/* =========================================================
PACKING LIST
========================================================= */
function renderPacking() {
const wrap = document.getElementById(“pack-container”);
wrap.innerHTML = “”;

PACKING.forEach((cat, catIdx) => {
const section = document.createElement(“div”);
section.className = “pack-cat”;

```
const doneCount = cat.items.filter((_, i) => state.packing[`${catIdx}-${i}`]).length;
const pct = Math.round((doneCount / cat.items.length) * 100);

const hdr = document.createElement("div");
hdr.className = "pack-cat-hdr";
hdr.innerHTML = `
  <div class="pack-cat-left"><span>${cat.cat}</span></div>
  <span class="pack-pct" id="pack-pct-${catIdx}">${doneCount}/${cat.items.length} · ${pct}%</span>
`;
section.appendChild(hdr);

const list = document.createElement("div");
list.className = "pack-items-list";

cat.items.forEach((item, i) => {
  const key  = `${catIdx}-${i}`;
  const done = !!state.packing[key];

  const row = document.createElement("div");
  row.className = "pack-item" + (done ? " done" : "");
  row.dataset.key    = key;
  row.dataset.catidx = catIdx;

  row.innerHTML = `
    <div class="pack-check">${done ? "✓" : ""}</div>
    <div class="pack-name">${item.name}</div>
    <span class="pack-badge ${item.essential ? "badge-must" : "badge-opt"}">${item.essential ? "must" : "opt"}</span>
  `;

  row.addEventListener("click", () => togglePack(key, row, catIdx));
  list.appendChild(row);
});

section.appendChild(list);
wrap.appendChild(section);
```

});
}

function togglePack(key, row, catIdx) {
state.packing[key] = !state.packing[key];
saveState();

row.classList.toggle(“done”, !!state.packing[key]);
row.querySelector(”.pack-check”).textContent = state.packing[key] ? “✓” : “”;

// Update category count
const cat       = PACKING[catIdx];
const doneCount = cat.items.filter((_, i) => state.packing[`${catIdx}-${i}`]).length;
const pct       = Math.round((doneCount / cat.items.length) * 100);
const pctEl     = document.getElementById(`pack-pct-${catIdx}`);
if (pctEl) pctEl.textContent = `${doneCount}/${cat.items.length} · ${pct}%`;
}

/* =========================================================
BUDGET
========================================================= */
function renderBudget() {
renderBudgetCats();
renderBudgetEntries();
updateBudgetTotals();
}

function renderBudgetCats() {
const wrap = document.getElementById(“budget-cats”);
wrap.innerHTML = “”;
BUDGET_CATS.forEach((cat, i) => {
const div = document.createElement(“div”);
div.className = “budget-cat” + (state.budgetCat === i ? “ active” : “”);
div.innerHTML = `${cat.ico} ${cat.label}`;
div.addEventListener(“click”, () => {
state.budgetCat = i;
saveState();
document.querySelectorAll(”.budget-cat”).forEach((c, j) =>
c.classList.toggle(“active”, j === i)
);
});
wrap.appendChild(div);
});
}

function renderBudgetEntries() {
const wrap = document.getElementById(“budget-entries”);
wrap.innerHTML = “”;

if (!state.budget.length) {
wrap.innerHTML = `<div style="font-size:12px;color:var(--mist);text-align:center;padding:20px 0">No expenses yet — start logging!</div>`;
return;
}

// Show newest first
[…state.budget].reverse().forEach((entry, ri) => {
const realIdx = state.budget.length - 1 - ri;
const row = document.createElement(“div”);
row.className = “budget-entry”;
row.innerHTML = `<div class="budget-entry-left"> <div class="budget-entry-ico">${entry.ico}</div> <div> <div class="budget-entry-desc">${entry.desc}</div> <div class="budget-entry-cat">${entry.cat}</div> </div> </div> <div class="budget-entry-right"> <div class="budget-entry-amt">¥${Number(entry.amt).toLocaleString()}</div> <div class="budget-del" data-idx="${realIdx}" title="Delete">✕</div> </div>`;
wrap.appendChild(row);
});

// Delete handler
wrap.addEventListener(“click”, e => {
const del = e.target.closest(”.budget-del”);
if (!del) return;
const idx = parseInt(del.dataset.idx);
if (confirm(`Delete "${state.budget[idx].desc}"?`)) {
state.budget.splice(idx, 1);
saveState();
renderBudgetEntries();
updateBudgetTotals();
}
}, { once: true }); // avoid stacking listeners on re-render
}

function updateBudgetTotals() {
const total     = state.budget.reduce((a, b) => a + Number(b.amt), 0);
const gbp       = Math.round(total * JPY_GBP);
const remaining = BUDGET_LIMIT - total;
const pct       = Math.min(100, Math.round((total / BUDGET_LIMIT) * 100));

document.getElementById(“budget-total”).textContent     = total.toLocaleString();
document.getElementById(“budget-gbp”).textContent       = `£${gbp.toLocaleString()}`;
document.getElementById(“budget-remaining”).textContent = remaining >= 0
? `¥${Math.round(remaining/1000)}k`
: `Over by ¥${Math.round(Math.abs(remaining)/1000)}k`;
document.getElementById(“budget-count”).textContent     = state.budget.length;
document.getElementById(“budget-gbp-label”).textContent = `£${gbp.toLocaleString()}`;
document.getElementById(“budget-fill”).style.width      = pct + “%”;
}

/* Add expense */
document.addEventListener(“DOMContentLoaded”, () => {
document.getElementById(“budget-add-btn”).addEventListener(“click”, () => {
const desc   = document.getElementById(“budget-desc”).value.trim();
const amt    = parseInt(document.getElementById(“budget-amt”).value);
const cat    = BUDGET_CATS[state.budgetCat];

```
if (!desc || !amt || amt <= 0) {
  showToast("Enter a description and amount");
  return;
}

state.budget.push({ desc, amt, ico: cat.ico, cat: cat.label });
saveState();

document.getElementById("budget-desc").value = "";
document.getElementById("budget-amt").value  = "";

renderBudgetEntries();
updateBudgetTotals();
showToast(`¥${amt.toLocaleString()} logged ${cat.ico}`);
```

});
});

/* =========================================================
INFO CARDS
========================================================= */
function renderInfo() {
const wrap = document.getElementById(“info-grid”);
wrap.innerHTML = “”;
INFO.forEach(item => {
const card = document.createElement(“div”);
card.className = “info-card”;
card.innerHTML = `<div class="info-ico">${item.ico}</div> <div class="info-val">${item.val}</div> <div class="info-lbl">${item.lbl}</div>`;
wrap.appendChild(card);
});
}

/* =========================================================
TIPS
========================================================= */
function renderTips() {
const wrap = document.getElementById(“tips-list”);
wrap.innerHTML = “”;
TIPS.forEach(t => {
const row = document.createElement(“div”);
row.className = “tip”;
row.innerHTML = `<div class="tip-num">${t.num}</div><div class="tip-text">${t.text}</div>`;
wrap.appendChild(row);
});
}

/* =========================================================
PHRASES
========================================================= */
function renderPhrases() {
const wrap = document.getElementById(“phrases-container”);
wrap.innerHTML = “”;
PHRASES.forEach(p => {
const row = document.createElement(“div”);
row.className = “phrase”;
row.innerHTML = `<div class="phrase-jp">${p.jp}</div> <div class="phrase-romaji">${p.rom}</div> <div class="phrase-en">${p.en}</div> <div class="phrase-copied">Copied ✓</div>`;
row.addEventListener(“click”, () => {
navigator.clipboard?.writeText(p.jp).catch(() => {});
const c = row.querySelector(”.phrase-copied”);
c.style.display = “block”;
setTimeout(() => c.style.display = “none”, 1600);
});
wrap.appendChild(row);
});
}

/* =========================================================
NOTES
========================================================= */
function renderNotes() {
const ta = document.getElementById(“notes-ta”);
ta.value = state.notes || “”;

let saveTimer;
ta.addEventListener(“input”, () => {
state.notes = ta.value;
clearTimeout(saveTimer);
saveTimer = setTimeout(() => {
saveState();
const el = document.getElementById(“notes-saved”);
el.classList.add(“show”);
setTimeout(() => el.classList.remove(“show”), 1200);
}, 500);
});
}

/* =========================================================
TABS
========================================================= */
function setupTabs() {
document.getElementById(“bnav”).addEventListener(“click”, e => {
const btn = e.target.closest(”[data-view]”);
if (!btn) return;
const view = btn.dataset.view;

```
document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
document.getElementById(`view-${view}`).classList.add("active");

document.querySelectorAll(".bntab").forEach(t => t.classList.remove("active"));
btn.classList.add("active");

document.getElementById("app").scrollTop = 0;
```

});
}

/* =========================================================
RESET
========================================================= */
function setupReset() {
document.getElementById(“reset-btn”).addEventListener(“click”, () => {
if (!confirm(“Reset all trip progress? Notes and budget are kept.”)) return;
state.completed = {};
state.packing   = {};
saveState();
// Re-render without full page reload
renderDays();
renderRoute();
renderPacking();
updateProgress();
showToast(“Progress reset ↺”);
});
}

/* =========================================================
INSTALL BANNER
========================================================= */
function setupInstallBanner() {
let deferredPrompt = null;

window.addEventListener(“beforeinstallprompt”, e => {
e.preventDefault();
deferredPrompt = e;
document.getElementById(“install-banner”).classList.add(“vis”);
});

document.getElementById(“install-btn”).addEventListener(“click”, async () => {
if (!deferredPrompt) return;
deferredPrompt.prompt();
const { outcome } = await deferredPrompt.userChoice;
if (outcome === “accepted”) showToast(“App installed 🎌”);
deferredPrompt = null;
document.getElementById(“install-banner”).classList.remove(“vis”);
});

window.addEventListener(“appinstalled”, () => {
document.getElementById(“install-banner”).classList.remove(“vis”);
showToast(“Japan’26 installed 🌸”);
});
}

/* =========================================================
OFFLINE BADGE
========================================================= */
function setupOfflineBadge() {
function update() {
document.body.classList.toggle(“offline”, !navigator.onLine);
}
window.addEventListener(“online”,  () => { update(); showToast(“Back online ✓”); });
window.addEventListener(“offline”, () => { update(); showToast(“Offline — data saved ✓”); });
update();
}

/* =========================================================
PETALS
========================================================= */
function spawnPetal() {
const emojis = [“🌸”, “🌺”, “🌼”, “🌷”];
const p = document.createElement(“div”);
p.className = “petal”;
p.textContent = emojis[Math.floor(Math.random() * emojis.length)];
p.style.left            = Math.random() * 100 + “vw”;
p.style.animationDuration  = (3 + Math.random() * 3) + “s”;
p.style.animationDelay     = (Math.random() * 0.5) + “s”;
p.style.fontSize        = (14 + Math.random() * 8) + “px”;
document.body.appendChild(p);
setTimeout(() => p.remove(), 7000);
}

/* =========================================================
TOAST
========================================================= */
function showToast(msg) {
const t = document.getElementById(“toast”);
t.textContent = msg;
t.classList.add(“show”);
clearTimeout(t._timer);
t._timer = setTimeout(() => t.classList.remove(“show”), 2000);
}
