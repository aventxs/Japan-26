/* =========================================================
JAPAN’26 — MAIN SCRIPT
Script is loaded at end of <body>, so DOM is ready.
No DOMContentLoaded wrappers needed.
========================================================= */

/* ── TRIP DATES ── */
const TRIP_START = new Date(“2026-05-09”);
const TRIP_END   = new Date(“2026-05-20”);

/* ── ITINERARY ── */
const ITINERARY = [
{
day: 1, date: “2026-05-09”, title: “Arrival in Tokyo”, city: “Tokyo”, walk: 1,
items: [
{ time: “18:30”, name: “Arrive at Haneda Airport (HND)”, tags: [“travel”] },
{ time: “20:00”, name: “Check-in at hotel (Akasaka)”, tags: [“travel”] },
{ time: “21:00”, name: “Shibuya Crossing & short night walk”, tags: [“fun”,“walk”] },
{ time: “21:30”, name: “Dinner — halal-friendly options near Shibuya”, tags: [“food”,“halal”] }
]
},
{
day: 2, date: “2026-05-10”, title: “Shibuya · Harajuku · Mario Kart · Shibuya Sky”, city: “Tokyo”, walk: 2,
items: [
{ time: “10:30”, name: “Shibuya 109 (fashion)”, tags: [“shop”] },
{ time: “11:30”, name: “LOFT / lifestyle stores”, tags: [“shop”] },
{ time: “12:00”, name: “Harajuku Takeshita Street”, tags: [“shop”,“walk”] },
{ time: “13:00”, name: “Mario Kart Street Tour (afternoon slot)”, tags: [“fun”,“experience”] },
{ time: “15:00”, name: “Break / explore Shibuya”, tags: [“rest”] },
{ time: “17:30”, name: “Shibuya Sky (sunset → night)”, tags: [“view”,“fun”] },
{ time: “19:30”, name: “Gyumon Halal Yakiniku — Dinner”, tags: [“food”,“halal”] }
]
},
{
day: 3, date: “2026-05-11”, title: “Ikebukuro + Harry Potter Studio Tour”, city: “Tokyo”, walk: 2,
items: [
{ time: “10:00”, name: “Ikebukuro — Animate & anime shops”, tags: [“shop”,“fun”] },
{ time: “12:00”, name: “Travel to Harry Potter Studio Tour”, tags: [“travel”] },
{ time: “13:00”, name: “Harry Potter Studio Tour Tokyo”, tags: [“fun”,“experience”] }
]
},
{
day: 4, date: “2026-05-12”, title: “Shinjuku + Drift Tour”, city: “Tokyo”, walk: 2,
items: [
{ time: “11:00”, name: “Shinjuku exploring (Kabukicho, tech stores)”, tags: [“shop”,“fun”] },
{ time: “15:00”, name: “Rest at hotel”, tags: [“rest”] },
{ time: “18:00”, name: “Tokyo Drift / Go-Kart Experience”, tags: [“fun”,“experience”] }
]
},
{
day: 5, date: “2026-05-13”, title: “Tokyo → Kyoto + Fushimi Inari”, city: “Kyoto”, walk: 2,
items: [
{ time: “09:00”, name: “Shinkansen to Kyoto”, tags: [“travel”] },
{ time: “12:00”, name: “Hotel check-in / luggage drop”, tags: [“travel”] },
{ time: “14:00”, name: “Fushimi Inari (first section only)”, tags: [“walk”,“view”] }
]
},
{
day: 6, date: “2026-05-14”, title: “Kiyomizu-dera → Sannenzaka → Gion”, city: “Kyoto”, walk: 3,
items: [
{ time: “10:30”, name: “Taxi to Kiyomizu-dera”, tags: [“travel”] },
{ time: “11:00”, name: “Kiyomizu-dera Temple”, tags: [“walk”,“view”] },
{ time: “12:30”, name: “Downhill Sannenzaka / Ninenzaka”, tags: [“walk”,“shop”] },
{ time: “17:00”, name: “Gion District evening walk”, tags: [“walk”,“view”] }
]
},
{
day: 7, date: “2026-05-15”, title: “Arashiyama + teamLab Biovortex”, city: “Kyoto”, walk: 2,
items: [
{ time: “09:00”, name: “Arashiyama Bamboo Grove (flat path)”, tags: [“walk”,“view”] },
{ time: “11:00”, name: “River cafés (relax)”, tags: [“rest”,“food”] },
{ time: “18:00”, name: “teamLab Biovortex Kyoto”, tags: [“fun”,“experience”] }
]
},
{
day: 8, date: “2026-05-16”, title: “Kyoto → Osaka + Namba + Dotonbori”, city: “Osaka”, walk: 2,
items: [
{ time: “10:00”, name: “Train to Osaka”, tags: [“travel”] },
{ time: “12:00”, name: “Hotel check-in (Namba area)”, tags: [“travel”] },
{ time: “14:00”, name: “Namba Yasaka Shrine”, tags: [“view”] },
{ time: “18:00”, name: “Dotonbori night walk”, tags: [“walk”,“food”,“fun”] }
]
},
{
day: 9, date: “2026-05-17”, title: “Osaka Castle + Umeda Sky”, city: “Osaka”, walk: 2,
items: [
{ time: “09:00”, name: “Osaka Castle (elevator route)”, tags: [“view”,“walk”] },
{ time: “15:00”, name: “Rest / café break”, tags: [“rest”] },
{ time: “18:00”, name: “Umeda Sky Building (sunset)”, tags: [“view”,“fun”] }
]
},
{
day: 10, date: “2026-05-18”, title: “Shinsaibashi + Rinku Premium Outlets”, city: “Osaka”, walk: 2,
items: [
{ time: “11:00”, name: “Shinsaibashi Shopping Street”, tags: [“shop”] },
{ time: “15:00”, name: “Rinku Premium Outlets (near KIX)”, tags: [“shop”,“food”] }
]
},
{
day: 11, date: “2026-05-19”, title: “Chill Day + Packing”, city: “Osaka”, walk: 1,
items: [
{ time: “10:00”, name: “Free time — arcades, cafés, last shops”, tags: [“fun”,“rest”] },
{ time: “18:00”, name: “Packing + early night”, tags: [“rest”] }
]
},
{
day: 12, date: “2026-05-20”, title: “Departure from KIX”, city: “Osaka”, walk: 1,
items: [
{ time: “07:00”, name: “Travel to Kansai Airport (KIX)”, tags: [“travel”] },
{ time: “09:30”, name: “Flight departure — さようなら Japan 🇯🇵”, tags: [“travel”] }
]
}
];

/* ── PACKING ── */
const PACKING = [
{ cat: “📄 Documents”, items: [
{ name: “Passport (valid 6+ months)”, essential: true },
{ name: “Travel insurance docs”, essential: true },
{ name: “Printed hotel confirmations”, essential: false },
{ name: “Emergency contact card”, essential: true }
]},
{ cat: “💳 Tech & Money”, items: [
{ name: “Unlocked smartphone”, essential: true },
{ name: “Japan SIM card (pre-order)”, essential: true },
{ name: “Power bank 20,000mAh”, essential: true },
{ name: “Type A plug adaptor (2-pin flat)”, essential: true },
{ name: “¥150,000+ cash — many places cash only”, essential: true },
{ name: “IC / Suica card (top up at airport)”, essential: true },
{ name: “Google Maps offline — Tokyo & Osaka”, essential: true },
{ name: “Google Translate offline Japanese pack”, essential: true }
]},
{ cat: “👟 Clothing”, items: [
{ name: “Comfortable walking trainers”, essential: true },
{ name: “Slip-on shoes (for temples)”, essential: true },
{ name: “Light rain jacket / travel umbrella”, essential: true },
{ name: “Smart-casual outfit for restaurants”, essential: false },
{ name: “12 days casual clothing”, essential: true }
]},
{ cat: “💊 Health”, items: [
{ name: “Prescription meds + spare supply”, essential: true },
{ name: “Blister plasters — lots!”, essential: true },
{ name: “Sunscreen SPF 50+”, essential: true },
{ name: “Hand sanitiser”, essential: false },
{ name: “Ibuprofen / paracetamol”, essential: false }
]},
{ cat: “⛩ Japan-Specific”, items: [
{ name: “Hyperdia / Navitime app installed”, essential: true },
{ name: “Small day bag / tote for outings”, essential: false },
{ name: “Coin wallet (vending machines!)”, essential: false },
{ name: “Snacks from home”, essential: false }
]}
];

/* ── INFO ── */
const INFO = [
{ ico: “🚨”, val: “110 / 119”,       lbl: “Police / Ambulance” },
{ ico: “💴”, val: “¥ JPY”,           lbl: “Currency” },
{ ico: “🔌”, val: “100V Type A”,     lbl: “Plug / Voltage” },
{ ico: “⏰”, val: “JST +9”,          lbl: “Timezone” },
{ ico: “🌡”, val: “18–25°C”,         lbl: “May Weather” },
{ ico: “🚆”, val: “IC Card”,         lbl: “Best Transit” },
{ ico: “💧”, val: “Tap safe”,        lbl: “Drinking Water” },
{ ico: “📶”, val: “IIJmio / Docomo”, lbl: “Best SIMs” }
];

/* ── TIPS ── */
const TIPS = [
“Remove shoes at ryokans, some restaurants and traditional spaces.”,
“Don’t eat while walking. Find a spot to sit — it’s a cultural norm.”,
“Stay quiet on trains. No phone calls. Headphones are fine.”,
“Carry cash. Ramen shops, shrines, small izakayas: cash only.”,
“IC card (Suica) works on almost all transit AND most konbinis.”,
“7-Eleven ATMs reliably accept foreign cards for cash.”,
“Book popular restaurants 2–3 weeks ahead online.”,
“Bins are rare outside konbinis — carry a small bag for rubbish.”,
“Konbini (convenience stores) are outstanding. Use them daily.”,
“Google Translate camera mode works brilliantly on menus.”,
“Halal: look for ハラール labels or ask staff. Gyumon in Shinjuku is great.”,
“Bowing is the greeting — a small nod is perfectly polite as a visitor.”
];

/* ── PHRASES ── */
const PHRASES = [
{ jp: “ありがとうございます”, rom: “Arigatou gozaimasu”,     en: “Thank you very much” },
{ jp: “すみません”,           rom: “Sumimasen”,               en: “Excuse me / Sorry” },
{ jp: “お願いします”,         rom: “Onegaishimasu”,           en: “Please” },
{ jp: “英語を話せますか？”,   rom: “Eigo o hanasemasu ka?”,   en: “Do you speak English?” },
{ jp: “どこですか？”,         rom: “Doko desu ka?”,           en: “Where is it?” },
{ jp: “いくらですか？”,       rom: “Ikura desu ka?”,          en: “How much is this?” },
{ jp: “ハラールですか？”,     rom: “Harāru desu ka?”,         en: “Is this Halal?” },
{ jp: “おいしい！”,           rom: “Oishii!”,                 en: “Delicious!” },
{ jp: “ひとつください”,       rom: “Hitotsu kudasai”,         en: “One please” },
{ jp: “トイレはどこですか？”, rom: “Toire wa doko desu ka?”,  en: “Where is the toilet?” }
];

/* ── BUDGET CATS ── */
const BUDGET_CATS = [
{ ico: “🍜”, label: “Food” },
{ ico: “🚆”, label: “Travel” },
{ ico: “🏨”, label: “Stay” },
{ ico: “🛍”,  label: “Shopping” },
{ ico: “🎭”, label: “Activities” },
{ ico: “🧾”, label: “Misc” }
];

const BUDGET_LIMIT = 200000;
const JPY_GBP      = 0.0053;

/* =========================================================
STATE
========================================================= */
const STATE_KEY = “jp26_v2”;

function loadState() {
try {
const raw = localStorage.getItem(STATE_KEY);
const s   = raw ? JSON.parse(raw) : {};
return {
completed: s.completed  || {},
packing:   s.packing    || {},
budget:    s.budget     || [],
budgetCat: s.budgetCat  || 0,
notes:     s.notes      || “”
};
} catch {
return { completed:{}, packing:{}, budget:[], budgetCat:0, notes:”” };
}
}

function saveState() {
localStorage.setItem(STATE_KEY, JSON.stringify(state));
}

let state = loadState();

/* =========================================================
BOOT — script is at end of <body>, DOM already ready
========================================================= */
(function init() {
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
setupReset();
setupInstallBanner();
setupOfflineBadge();

document.getElementById(“petal-btn”).addEventListener(“click”, () => {
for (let i = 0; i < 20; i++) setTimeout(spawnPetal, i * 55);
});

document.getElementById(“budget-add-btn”).addEventListener(“click”, addExpense);
})();

/* =========================================================
COUNTDOWN
========================================================= */
function updateCountdown() {
const now  = new Date();
const diff = Math.ceil((TRIP_START - now) / (1000 * 60 * 60 * 24));

const numEl  = document.getElementById(“cd-num”);
const lblEl  = document.getElementById(“cd-label”);
const subEl  = document.getElementById(“cd-sub”);
const hdrEl  = document.getElementById(“hdr-sub”);

if (diff > 0) {
numEl.textContent = diff;
lblEl.textContent = diff === 1 ? “Day to go!” : “Days to go”;
subEl.textContent = diff <= 14
? “Pack your bags — nearly time! 🎒”
: “Planning mode activated 🗾”;
hdrEl.textContent = diff + “d until Tokyo”;
} else if (diff === 0) {
numEl.textContent = “✈”;
lblEl.textContent = “Today’s the day!”;
subEl.textContent = “Have an incredible trip! いってらっしゃい”;
hdrEl.textContent = “Travel day! ✈”;
for (let i = 0; i < 24; i++) setTimeout(spawnPetal, i * 70);
} else {
const d = Math.abs(diff);
numEl.textContent = d;
lblEl.textContent = d === 1 ? “Day in Japan” : “Days in Japan”;
subEl.textContent = “Explore, eat, enjoy every moment 🇯🇵”;
hdrEl.textContent = “In Japan 🇯🇵”;
}
}

/* =========================================================
ITINERARY
========================================================= */
function renderDays() {
const wrap = document.getElementById(“days-container”);
wrap.innerHTML = “”;

ITINERARY.forEach(function(day) {
var card = document.createElement(“div”);
card.className = “day-card”;
card.dataset.day = day.day;

```
/* Walk dots */
var walkStr = "";
for (var w = 0; w < 3; w++) walkStr += w < day.walk ? "●" : "○";

/* Header */
var hdr = document.createElement("div");
hdr.className = "dc-hdr";
hdr.innerHTML =
  '<div class="dc-num">' + day.day + '<div class="dc-num-sub">DAY</div></div>' +
  '<div class="dc-info">' +
    '<div class="dc-title">' + day.title + '</div>' +
    '<div class="dc-meta">' +
      '<div class="dc-city-dot"></div>' +
      '<span>' + day.city + '</span>' +
      '<span> · </span>' +
      '<span>' + day.items.length + ' activities</span>' +
      '<span> · </span>' +
      '<span class="walk-dots">' + walkStr + '</span>' +
    '</div>' +
    '<div class="dc-progress"><div class="dc-progress-fill" id="dc-prog-' + day.day + '"></div></div>' +
  '</div>' +
  '<div class="dc-chevron">▾</div>';

/* Body */
var body  = document.createElement("div");
body.className = "dc-body";
var inner = document.createElement("div");
inner.className = "dc-body-inner";
var acts  = document.createElement("div");
acts.className = "activities";

/* Divider */
var div = document.createElement("div");
div.className = "act-divider";
acts.appendChild(div);

day.items.forEach(function(item, idx) {
  var key  = day.day + "-" + idx;
  var done = !!state.completed[key];

  var act = document.createElement("div");
  act.className = "act" + (done ? " done" : "");
  act.dataset.key = key;
  act.dataset.daynum = day.day;

  var tagHTML = item.tags.map(function(t) {
    return '<span class="act-tag tag-' + t + '">' + t + '</span>';
  }).join("");

  act.innerHTML =
    '<div class="act-chk">' + (done ? "✓" : "") + '</div>' +
    '<div class="act-body">' +
      '<div class="act-time">' + item.time + '</div>' +
      '<div class="act-name">' + item.name + '</div>' +
      '<div class="act-tags">' + tagHTML + '</div>' +
    '</div>';

  act.addEventListener("click", function() {
    toggleActivity(key, act, day.day);
  });

  acts.appendChild(act);
});

inner.appendChild(acts);
body.appendChild(inner);

hdr.addEventListener("click", function() {
  card.classList.toggle("day-open");
});

card.appendChild(hdr);
card.appendChild(body);
wrap.appendChild(card);
```

});

/* Restore progress fills */
ITINERARY.forEach(function(day) {
updateDayProgress(day.day);
});
}

/* =========================================================
ACTIVITY TOGGLE
========================================================= */
function toggleActivity(key, el, dayNum) {
state.completed[key] = !state.completed[key];
saveState();

if (state.completed[key]) {
el.classList.add(“done”);
el.querySelector(”.act-chk”).textContent = “✓”;
} else {
el.classList.remove(“done”);
el.querySelector(”.act-chk”).textContent = “”;
}

updateDayProgress(dayNum);
updateProgress();
}

/* =========================================================
DAY PROGRESS BAR
========================================================= */
function updateDayProgress(dayNum) {
var day   = ITINERARY.find(function(d) { return d.day === dayNum; });
var total = day.items.length;
var done  = 0;

day.items.forEach(function(_, idx) {
if (state.completed[dayNum + “-” + idx]) done++;
});

var pct  = Math.round((done / total) * 100);
var fill = document.getElementById(“dc-prog-” + dayNum);
if (fill) fill.style.width = pct + “%”;

var card = document.querySelector(”.day-card[data-day=’” + dayNum + “’]”);
if (card) card.classList.toggle(“completed”, pct === 100);
}

/* =========================================================
OVERALL PROGRESS
========================================================= */
function updateProgress() {
var total = 0, done = 0;
ITINERARY.forEach(function(day) {
day.items.forEach(function(_, idx) {
total++;
if (state.completed[day.day + “-” + idx]) done++;
});
});

var pct  = total ? Math.round((done / total) * 100) : 0;
var circ = 2 * Math.PI * 30;

document.getElementById(“ring-pct”).textContent = pct;
document.getElementById(“ring-fill”).style.strokeDashoffset = circ - (pct / 100) * circ;

var msgs = [
[“Your journey awaits 🌸”,   “Tap activities to log them as complete.”],
[“First steps taken 🍜”,      “One activity at a time — you’ve got this.”],
[“Making great progress 🚄”,  “The ramen, the shrines, the neon — soaking it in.”],
[“Halfway through Japan 🗾”,  “Memories being made every step of the way.”],
[“Almost done — amazing! ⛩”, “You’ve seen so much — finish strong!”],
[“Trip complete! 🎌”,         “Arigatou gozaimashita! What an adventure. 🙏”]
];
var idx = Math.min(Math.floor(pct / 20), 5);
document.getElementById(“prog-title”).textContent = msgs[idx][0];
document.getElementById(“prog-sub”).textContent   = msgs[idx][1];

/* Day dots */
var dots = document.getElementById(“day-dots”);
dots.innerHTML = “”;
ITINERARY.forEach(function(day) {
var d = 0;
day.items.forEach(function(_, i) {
if (state.completed[day.day + “-” + i]) d++;
});
var dot = document.createElement(“div”);
dot.className = “day-dot”;
if (d === day.items.length) dot.classList.add(“full”);
else if (d > 0) dot.classList.add(“partial”);
dot.title = “Day “ + day.day + “: “ + day.title;
dots.appendChild(dot);
});
}

/* =========================================================
ROUTE BAR
========================================================= */
function renderRoute() {
var wrap = document.getElementById(“route-bar”);
wrap.innerHTML = “”;

var cities = [];
ITINERARY.forEach(function(d) {
if (cities.indexOf(d.city) === -1) cities.push(d.city);
});

/* Active city = first city that still has incomplete items */
var activeCity = cities[cities.length - 1];
for (var i = 0; i < ITINERARY.length; i++) {
var day = ITINERARY[i];
var incomplete = false;
for (var j = 0; j < day.items.length; j++) {
if (!state.completed[day.day + “-” + j]) { incomplete = true; break; }
}
if (incomplete) { activeCity = day.city; break; }
}

cities.forEach(function(name, i) {
var city = document.createElement(“div”);
city.className = “route-city” + (name === activeCity ? “ active-city” : “”);
city.innerHTML = ‘<div class="rc-dot"></div><div class="rc-name">’ + name + ‘</div>’;
wrap.appendChild(city);

```
if (i < cities.length - 1) {
  var line = document.createElement("div");
  line.className = "route-line";
  wrap.appendChild(line);
}
```

});
}

/* =========================================================
PACKING
========================================================= */
function renderPacking() {
var wrap = document.getElementById(“pack-container”);
wrap.innerHTML = “”;

PACKING.forEach(function(cat, catIdx) {
var section = document.createElement(“div”);
section.className = “pack-cat”;

```
var doneCount = 0;
cat.items.forEach(function(_, i) {
  if (state.packing[catIdx + "-" + i]) doneCount++;
});
var pct = Math.round((doneCount / cat.items.length) * 100);

var hdr = document.createElement("div");
hdr.className = "pack-cat-hdr";
hdr.innerHTML =
  '<div class="pack-cat-left">' + cat.cat + '</div>' +
  '<span class="pack-pct" id="pack-pct-' + catIdx + '">' + doneCount + '/' + cat.items.length + ' · ' + pct + '%</span>';
section.appendChild(hdr);

var list = document.createElement("div");
list.className = "pack-items-list";

cat.items.forEach(function(item, i) {
  var key  = catIdx + "-" + i;
  var done = !!state.packing[key];

  var row = document.createElement("div");
  row.className = "pack-item" + (done ? " done" : "");

  row.innerHTML =
    '<div class="pack-check">' + (done ? "✓" : "") + '</div>' +
    '<div class="pack-name">' + item.name + '</div>' +
    '<span class="pack-badge ' + (item.essential ? "badge-must" : "badge-opt") + '">' +
      (item.essential ? "must" : "opt") +
    '</span>';

  row.addEventListener("click", (function(k, r, ci) {
    return function() { togglePack(k, r, ci); };
  })(key, row, catIdx));

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

var cat  = PACKING[catIdx];
var done = 0;
cat.items.forEach(function(_, i) { if (state.packing[catIdx + “-” + i]) done++; });
var pctEl = document.getElementById(“pack-pct-” + catIdx);
if (pctEl) pctEl.textContent = done + “/” + cat.items.length + “ · “ + Math.round((done / cat.items.length) * 100) + “%”;
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
var wrap = document.getElementById(“budget-cats”);
wrap.innerHTML = “”;
BUDGET_CATS.forEach(function(cat, i) {
var div = document.createElement(“div”);
div.className = “budget-cat” + (state.budgetCat === i ? “ active” : “”);
div.textContent = cat.ico + “ “ + cat.label;
div.addEventListener(“click”, function() {
state.budgetCat = i;
saveState();
document.querySelectorAll(”.budget-cat”).forEach(function(c, j) {
c.classList.toggle(“active”, j === i);
});
});
wrap.appendChild(div);
});
}

function renderBudgetEntries() {
var wrap = document.getElementById(“budget-entries”);
wrap.innerHTML = “”;

if (!state.budget.length) {
wrap.innerHTML = ‘<div style="font-size:12px;color:var(--mist);text-align:center;padding:20px 0">No expenses yet — start logging!</div>’;
return;
}

/* Newest first */
var reversed = state.budget.slice().reverse();
reversed.forEach(function(entry, ri) {
var realIdx = state.budget.length - 1 - ri;
var row = document.createElement(“div”);
row.className = “budget-entry”;
row.innerHTML =
‘<div class="budget-entry-left">’ +
‘<div class="budget-entry-ico">’ + entry.ico + ‘</div>’ +
‘<div>’ +
‘<div class="budget-entry-desc">’ + entry.desc + ‘</div>’ +
‘<div class="budget-entry-cat">’ + entry.cat + ‘</div>’ +
‘</div>’ +
‘</div>’ +
‘<div class="budget-entry-right">’ +
‘<div class="budget-entry-amt">¥’ + Number(entry.amt).toLocaleString() + ‘</div>’ +
‘<div class="budget-del" data-idx="' + realIdx + '">✕</div>’ +
‘</div>’;

```
row.querySelector(".budget-del").addEventListener("click", function() {
  var idx = parseInt(this.dataset.idx);
  if (confirm('Delete "' + state.budget[idx].desc + '"?')) {
    state.budget.splice(idx, 1);
    saveState();
    renderBudgetEntries();
    updateBudgetTotals();
  }
});

wrap.appendChild(row);
```

});
}

function updateBudgetTotals() {
var total     = state.budget.reduce(function(a, b) { return a + Number(b.amt); }, 0);
var gbp       = Math.round(total * JPY_GBP);
var remaining = BUDGET_LIMIT - total;
var pct       = Math.min(100, Math.round((total / BUDGET_LIMIT) * 100));

document.getElementById(“budget-total”).textContent     = total.toLocaleString();
document.getElementById(“budget-gbp”).textContent       = “£” + gbp.toLocaleString();
document.getElementById(“budget-remaining”).textContent =
remaining >= 0 ? “¥” + Math.round(remaining / 1000) + “k” : “Over budget!”;
document.getElementById(“budget-count”).textContent     = state.budget.length;
document.getElementById(“budget-gbp-label”).textContent = “£” + gbp.toLocaleString();
document.getElementById(“budget-fill”).style.width      = pct + “%”;
}

function addExpense() {
var desc = document.getElementById(“budget-desc”).value.trim();
var amt  = parseInt(document.getElementById(“budget-amt”).value);
var cat  = BUDGET_CATS[state.budgetCat];

if (!desc || !amt || amt <= 0) {
showToast(“Enter a description and amount ¥”);
return;
}

state.budget.push({ desc: desc, amt: amt, ico: cat.ico, cat: cat.label });
saveState();

document.getElementById(“budget-desc”).value = “”;
document.getElementById(“budget-amt”).value  = “”;

renderBudgetEntries();
updateBudgetTotals();
showToast(“¥” + amt.toLocaleString() + “ logged “ + cat.ico);
}

/* =========================================================
INFO
========================================================= */
function renderInfo() {
var wrap = document.getElementById(“info-grid”);
wrap.innerHTML = “”;
INFO.forEach(function(item) {
var card = document.createElement(“div”);
card.className = “info-card”;
card.innerHTML =
‘<div class="info-ico">’ + item.ico + ‘</div>’ +
‘<div class="info-val">’ + item.val + ‘</div>’ +
‘<div class="info-lbl">’ + item.lbl + ‘</div>’;
wrap.appendChild(card);
});
}

/* =========================================================
TIPS
========================================================= */
function renderTips() {
var wrap = document.getElementById(“tips-list”);
wrap.innerHTML = “”;
TIPS.forEach(function(text, i) {
var num = (i + 1 < 10 ? “0” : “”) + (i + 1);
var row = document.createElement(“div”);
row.className = “tip”;
row.innerHTML = ‘<div class="tip-num">’ + num + ‘</div><div class="tip-text">’ + text + ‘</div>’;
wrap.appendChild(row);
});
}

/* =========================================================
PHRASES
========================================================= */
function renderPhrases() {
var wrap = document.getElementById(“phrases-container”);
wrap.innerHTML = “”;
PHRASES.forEach(function(p) {
var row = document.createElement(“div”);
row.className = “phrase”;
row.innerHTML =
‘<div class="phrase-jp">’ + p.jp + ‘</div>’ +
‘<div class="phrase-romaji">’ + p.rom + ‘</div>’ +
‘<div class="phrase-en">’ + p.en + ‘</div>’ +
‘<div class="phrase-copied">Copied ✓</div>’;

```
row.addEventListener("click", function() {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(p.jp).catch(function(){});
  }
  var c = row.querySelector(".phrase-copied");
  c.style.display = "block";
  setTimeout(function() { c.style.display = "none"; }, 1600);
});
wrap.appendChild(row);
```

});
}

/* =========================================================
NOTES
========================================================= */
function renderNotes() {
var ta = document.getElementById(“notes-ta”);
ta.value = state.notes || “”;
var timer;
ta.addEventListener(“input”, function() {
state.notes = ta.value;
clearTimeout(timer);
timer = setTimeout(function() {
saveState();
var el = document.getElementById(“notes-saved”);
el.classList.add(“show”);
setTimeout(function() { el.classList.remove(“show”); }, 1200);
}, 500);
});
}

/* =========================================================
TABS
========================================================= */
function setupTabs() {
document.getElementById(“bnav”).addEventListener(“click”, function(e) {
var btn = e.target.closest(”[data-view]”);
if (!btn) return;
var view = btn.dataset.view;

```
document.querySelectorAll(".view").forEach(function(v) { v.classList.remove("active"); });
document.getElementById("view-" + view).classList.add("active");
document.querySelectorAll(".bntab").forEach(function(t) { t.classList.remove("active"); });
btn.classList.add("active");
document.getElementById("app").scrollTop = 0;
```

});
}

/* =========================================================
RESET
========================================================= */
function setupReset() {
document.getElementById(“reset-btn”).addEventListener(“click”, function() {
if (!confirm(“Reset all trip progress? Notes and budget are kept.”)) return;
state.completed = {};
state.packing   = {};
saveState();
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
var deferredPrompt = null;

window.addEventListener(“beforeinstallprompt”, function(e) {
e.preventDefault();
deferredPrompt = e;
document.getElementById(“install-banner”).classList.add(“vis”);
});

document.getElementById(“install-btn”).addEventListener(“click”, function() {
if (!deferredPrompt) return;
deferredPrompt.prompt();
deferredPrompt.userChoice.then(function(result) {
if (result.outcome === “accepted”) showToast(“App installed 🎌”);
deferredPrompt = null;
document.getElementById(“install-banner”).classList.remove(“vis”);
});
});

window.addEventListener(“appinstalled”, function() {
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
window.addEventListener(“online”,  function() { update(); showToast(“Back online ✓”); });
window.addEventListener(“offline”, function() { update(); showToast(“Offline — data saved ✓”); });
update();
}

/* =========================================================
PETALS
========================================================= */
function spawnPetal() {
var emojis = [“🌸”,“🌺”,“🌼”,“🌷”];
var p = document.createElement(“div”);
p.className = “petal”;
p.textContent = emojis[Math.floor(Math.random() * emojis.length)];
p.style.left              = Math.random() * 100 + “vw”;
p.style.animationDuration = (3 + Math.random() * 3) + “s”;
p.style.animationDelay    = (Math.random() * 0.4) + “s”;
p.style.fontSize          = (14 + Math.random() * 8) + “px”;
document.body.appendChild(p);
setTimeout(function() { p.remove(); }, 7000);
}

/* =========================================================
TOAST
========================================================= */
function showToast(msg) {
var t = document.getElementById(“toast”);
t.textContent = msg;
t.classList.add(“show”);
clearTimeout(t._timer);
t._timer = setTimeout(function() { t.classList.remove(“show”); }, 2200);
}