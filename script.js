/* =========================================================
   JAPAN'26 — MAIN SCRIPT
   ========================================================= */

/* =========================================================
   CONSTANTS
   ========================================================= */
const TRIP_START = new Date("2026-05-08");   // Arrival
const TRIP_END   = new Date("2026-05-20");   // Departure

/* =========================================================
   ITINERARY DATA — 12 DAYS
   ========================================================= */
const ITINERARY = [
  {
    day: 1,
    title: "Arrival in Tokyo",
    city: "Tokyo",
    walk: 2,
    items: [
      { name: "Arrive at Haneda Airport", tags: ["fun"], note: "Welcome to Japan!" },
      { name: "Check-in at hotel (Akasaka)", tags: ["shop"] },
      { name: "Explore Akasaka area", tags: ["walk"] },
      { name: "Dinner (Halal-friendly options nearby)", tags: ["hala","food"] }
    ]
  },
  {
    day: 2,
    title: "Shibuya & Harajuku",
    city: "Tokyo",
    walk: 3,
    items: [
      { name: "Shibuya Crossing", tags: ["fun","walk"] },
      { name: "Hachiko Statue", tags: ["fun"] },
      { name: "Harajuku Takeshita Street", tags: ["shop","walk"] },
      { name: "Meiji Shrine", tags: ["walk"] }
    ]
  },
  {
    day: 3,
    title: "Shinjuku Day",
    city: "Tokyo",
    walk: 3,
    items: [
      { name: "Tokyo Metropolitan Gov. Building", tags: ["fun"] },
      { name: "Shinjuku Gyoen Park", tags: ["walk"] },
      { name: "Kabukicho exploration", tags: ["fun"] }
    ]
  },
  {
    day: 4,
    title: "Akihabara & Ueno",
    city: "Tokyo",
    walk: 3,
    items: [
      { name: "Akihabara Electric Town", tags: ["shop","fun"] },
      { name: "Ueno Park", tags: ["walk"] },
      { name: "Ameyoko Market", tags: ["shop"] }
    ]
  },
  {
    day: 5,
    title: "Asakusa & Skytree",
    city: "Tokyo",
    walk: 2,
    items: [
      { name: "Senso-ji Temple", tags: ["walk"] },
      { name: "Nakamise Street", tags: ["shop"] },
      { name: "Tokyo Skytree", tags: ["fun"] }
    ]
  },
  {
    day: 6,
    title: "Odaiba Day",
    city: "Tokyo",
    walk: 2,
    items: [
      { name: "TeamLab Planets", tags: ["fun"] },
      { name: "DiverCity Gundam", tags: ["fun"] },
      { name: "Odaiba Seaside Park", tags: ["walk"] }
    ]
  },
  {
    day: 7,
    title: "Mario Kart Street Tour",
    city: "Tokyo",
    walk: 1,
    items: [
      { name: "Mario Kart Driving Experience", tags: ["fun"], note: "License required" },
      { name: "Explore Roppongi", tags: ["walk"] }
    ]
  },
  {
    day: 8,
    title: "Travel to Osaka",
    city: "Osaka",
    walk: 2,
    items: [
      { name: "Shinkansen to Osaka", tags: ["fun"] },
      { name: "Check-in at hotel", tags: ["shop"] },
      { name: "Dotonbori Night Walk", tags: ["walk","food"] }
    ]
  },
  {
    day: 9,
    title: "Universal Studios Japan",
    city: "Osaka",
    walk: 3,
    items: [
      { name: "Super Nintendo World", tags: ["fun"] },
      { name: "Harry Potter World", tags: ["fun"] },
      { name: "USJ Attractions", tags: ["fun","walk"] }
    ]
  },
  {
    day: 10,
    title: "Kyoto Day Trip",
    city: "Kyoto",
    walk: 3,
    items: [
      { name: "Fushimi Inari Shrine", tags: ["walk"] },
      { name: "Kiyomizu-dera", tags: ["walk"] },
      { name: "Gion District", tags: ["walk","shop"] }
    ]
  },
  {
    day: 11,
    title: "Nara Day Trip",
    city: "Nara",
    walk: 2,
    items: [
      { name: "Nara Deer Park", tags: ["fun","walk"] },
      { name: "Todaiji Temple", tags: ["walk"] }
    ]
  },
  {
    day: 12,
    title: "Departure from KIX",
    city: "Osaka",
    walk: 1,
    items: [
      { name: "Last-minute shopping", tags: ["shop"] },
      { name: "Travel to Kansai Airport (KIX)", tags: ["fun"] }
    ]
  }
];
/* =========================================================
   STATE
   ========================================================= */
let state = {
  completed: {},     // activity completion
  packing: {},       // packing items
  budget: [],        // expenses
  notes: ""          // saved notes
};

/* Load saved state */
const saved = localStorage.getItem("jp26");
if (saved) {
  try { state = JSON.parse(saved); }
  catch { /* ignore corrupted save */ }
}

/* Save state */
function saveState() {
  localStorage.setItem("jp26", JSON.stringify(state));
}

/* =========================================================
   RENDER — MAIN
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
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
});

/* =========================================================
   RENDER — DAYS & ACTIVITIES
   ========================================================= */
function renderDays() {
  const wrap = document.getElementById("days-container");
  wrap.innerHTML = "";

  ITINERARY.forEach(day => {
    const card = document.createElement("div");
    card.className = "day-card";
    card.dataset.day = day.day;

    /* HEADER */
    const hdr = document.createElement("div");
    hdr.className = "dc-hdr";

    hdr.innerHTML = `
      <div class="dc-num">${day.day}<div class="dc-num-sub">DAY</div></div>
      <div class="dc-info">
        <div class="dc-title">${day.title}</div>
        <div class="dc-meta">
          <div class="dc-city-dot"></div>
          <span>${day.city}</span>
          <span>•</span>
          <span>${day.items.length} activities</span>
        </div>
        <div class="dc-progress">
          <div class="dc-progress-fill" id="dc-prog-${day.day}"></div>
        </div>
      </div>
      <div class="dc-chevron">⌄</div>
    `;

    /* BODY */
    const body = document.createElement("div");
    body.className = "dc-body";

    const inner = document.createElement("div");
    inner.className = "dc-body-inner";

    const acts = document.createElement("div");
    acts.className = "activities";

    day.items.forEach((item, idx) => {
      const key = `${day.day}-${idx}`;
      const done = state.completed[key];

      const act = document.createElement("div");
      act.className = "act" + (done ? " done" : "");
      act.dataset.key = key;

      act.innerHTML = `
        <div class="act-chk">${done ? "✓" : ""}</div>
        <div class="act-body">
          <div class="act-name">${item.name}</div>
          <div class="act-tags">
            ${item.tags.map(t => `<div class="act-tag tag-${t}">${t}</div>`).join("")}
          </div>
          ${item.note ? `<div class="act-note">${item.note}</div>` : ""}
        </div>
      `;

      act.addEventListener("click", () => toggleActivity(key, act, day.day));
      acts.appendChild(act);
    });

    inner.appendChild(acts);
    body.appendChild(inner);

    hdr.addEventListener("click", () => {
      card.classList.toggle("day-open");
    });

    card.appendChild(hdr);
    card.appendChild(body);
    wrap.appendChild(card);
  });
}

/* =========================================================
   ACTIVITY TOGGLE
   ========================================================= */
function toggleActivity(key, element, dayNum) {
  state.completed[key] = !state.completed[key];
  saveState();

  if (state.completed[key]) {
    element.classList.add("done");
    element.querySelector(".act-chk").textContent = "✓";
  } else {
    element.classList.remove("done");
    element.querySelector(".act-chk").textContent = "";
  }

  updateDayProgress(dayNum);
  updateProgress();
}

/* =========================================================
   DAY PROGRESS
   ========================================================= */
function updateDayProgress(dayNum) {
  const day = ITINERARY.find(d => d.day === dayNum);
  const total = day.items.length;

  let done = 0;
  day.items.forEach((_, idx) => {
    const key = `${dayNum}-${idx}`;
    if (state.completed[key]) done++;
  });

  const pct = Math.round((done / total) * 100);
  const fill = document.getElementById(`dc-prog-${dayNum}`);
  if (fill) fill.style.width = pct + "%";

  const card = document.querySelector(`.day-card[data-day="${dayNum}"]`);
  if (card) {
    if (pct === 100) card.classList.add("completed");
    else card.classList.remove("completed");
  }
}

/* =========================================================
   OVERALL PROGRESS
   ========================================================= */
function updateProgress() {
  let total = 0;
  let done = 0;

  ITINERARY.forEach(day => {
    day.items.forEach((_, idx) => {
      total++;
      const key = `${day.day}-${idx}`;
      if (state.completed[key]) done++;
    });
  });

  const pct = Math.round((done / total) * 100);

  document.getElementById("ring-pct").textContent = pct;
  const ring = document.getElementById("ring-fill");

  const circ = 2 * Math.PI * 30;
  ring.style.strokeDashoffset = circ - (pct / 100) * circ;

  /* Update day dots */
  const dots = document.getElementById("day-dots");
  dots.innerHTML = "";

  ITINERARY.forEach(day => {
    let d = 0;
    day.items.forEach((_, idx) => {
      if (state.completed[`${day.day}-${idx}`]) d++;
    });

    const dot = document.createElement("div");
    dot.className = "day-dot";

    if (d === day.items.length) dot.classList.add("full");
    else if (d > 0) dot.classList.add("partial");

    dots.appendChild(dot);
  });
}
/* =========================================================
   ROUTE BAR
   ========================================================= */
function renderRoute() {
  const wrap = document.getElementById("route-bar");
  wrap.innerHTML = "";

  ITINERARY.forEach((day, i) => {
    const city = document.createElement("div");
    city.className = "route-city";

    city.innerHTML = `
      <div class="rc-dot"></div>
      <div class="rc-name">${day.city}</div>
    `;

    wrap.appendChild(city);

    if (i < ITINERARY.length - 1) {
      const line = document.createElement("div");
      line.className = "route-line";
      wrap.appendChild(line);
    }
  });
}

/* =========================================================
   COUNTDOWN
   ========================================================= */
function updateCountdown() {
  const now = new Date();
  const diff = TRIP_START - now;

  const num = document.getElementById("cd-num");
  const label = document.getElementById("cd-label");

  if (diff <= 0) {
    num.textContent = "0";
    label.textContent = "Trip in progress";
    return;
  }

  const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
  num.textContent = days;
  label.textContent = days === 1 ? "Day to go" : "Days to go";
}

/* =========================================================
   PACKING LIST
   ========================================================= */
const PACKING_ITEMS = [
  "Passport",
  "Flight documents",
  "JR Pass / IC Card",
  "Phone charger",
  "Power bank",
  "Universal adapter",
  "Clothes",
  "Walking shoes",
  "Toiletries",
  "Medication",
  "Camera",
  "Travel pillow",
  "Umbrella",
  "Snacks"
];

function renderPacking() {
  const wrap = document.getElementById("pack-container");
  wrap.innerHTML = "";

  PACKING_ITEMS.forEach((item, idx) => {
    const key = `p-${idx}`;
    const done = state.packing[key];

    const row = document.createElement("div");
    row.className = "pack-item" + (done ? " done" : "");
    row.dataset.key = key;

    row.innerHTML = `
      <div class="pack-name">${item}</div>
      <div class="pack-check">${done ? "✓" : ""}</div>
    `;

    row.addEventListener("click", () => togglePack(key, row));
    wrap.appendChild(row);
  });
}

function togglePack(key, row) {
  state.packing[key] = !state.packing[key];
  saveState();

  if (state.packing[key]) {
    row.classList.add("done");
    row.querySelector(".pack-check").textContent = "✓";
  } else {
    row.classList.remove("done");
    row.querySelector(".pack-check").textContent = "";
  }
}

/* =========================================================
   BUDGET SYSTEM
   ========================================================= */
const BUDGET_CATEGORIES = [
  "Food",
  "Transport",
  "Shopping",
  "Attractions",
  "Misc"
];

function renderBudget() {
  renderBudgetCats();
  renderBudgetEntries();
  updateBudgetTotals();
}

function renderBudgetCats() {
  const wrap = document.getElementById("budget-cats");
  wrap.innerHTML = "";

  BUDGET_CATEGORIES.forEach(cat => {
    const div = document.createElement("div");
    div.className = "budget-cat";
    div.textContent = cat;

    div.addEventListener("click", () => {
      document.querySelectorAll(".budget-cat").forEach(c => c.classList.remove("active"));
      div.classList.add("active");
    });

    wrap.appendChild(div);
  });
}

function renderBudgetEntries() {
  const wrap = document.getElementById("budget-entries");
  wrap.innerHTML = "";

  if (state.budget.length === 0) {
    wrap.innerHTML = `
      <div style="font-size:12px;color:var(--mist);text-align:center;padding:20px 0">
        No expenses yet. Start logging!
      </div>
    `;
    return;
  }

  state.budget.forEach((entry, idx) => {
    const row = document.createElement("div");
    row.className = "budget-entry";

    row.innerHTML = `
      <div class="budget-entry-left">
        <div class="budget-entry-desc">${entry.desc}</div>
        <div class="budget-entry-cat">${entry.cat}</div>
      </div>
      <div class="budget-entry-amt">¥${entry.amt}</div>
    `;

    wrap.appendChild(row);
  });
}

function updateBudgetTotals() {
  const total = state.budget.reduce((a, b) => a + b.amt, 0);
  document.getElementById("budget-total").textContent = total;

  const gbp = Math.round(total * 0.0052); // approx conversion
  document.getElementById("budget-gbp").textContent = `£${gbp}`;

  const limit = 200000;
  const pct = Math.min(100, Math.round((total / limit) * 100));
  document.getElementById("budget-fill").style.width = pct + "%";
}

/* Add expense */
document.getElementById("budget-add-btn").addEventListener("click", () => {
  const desc = document.getElementById("budget-desc").value.trim();
  const amt = parseInt(document.getElementById("budget-amt").value);
  const catEl = document.querySelector(".budget-cat.active");

  if (!desc || !amt || !catEl) {
    showToast("Enter description, amount, and category");
    return;
  }

  state.budget.push({
    desc,
    amt,
    cat: catEl.textContent
  });

  saveState();
  document.getElementById("budget-desc").value = "";
  document.getElementById("budget-amt").value = "";

  renderBudgetEntries();
  updateBudgetTotals();
  showToast("Expense added");
});
/* =========================================================
   INFO CARDS
   ========================================================= */
const INFO = [
  { title: "Emergency", text: "Dial 110 for police, 119 for fire/ambulance." },
  { title: "Cash", text: "Many places accept card, but small shops prefer cash." },
  { title: "Transport", text: "IC Cards work across Tokyo, Osaka, Kyoto, Nara." },
  { title: "Etiquette", text: "No loud calls on trains. Stand on the left of escalators." }
];

function renderInfo() {
  const wrap = document.getElementById("info-grid");
  wrap.innerHTML = "";

  INFO.forEach(i => {
    const card = document.createElement("div");
    card.className = "info-card";

    card.innerHTML = `
      <div class="info-title">${i.title}</div>
      <div class="info-text">${i.text}</div>
    `;

    wrap.appendChild(card);
  });
}

/* =========================================================
   TIPS
   ========================================================= */
const TIPS = [
  { title: "Google Maps", text: "Best for trains, walking routes, and live schedules." },
  { title: "Cash Withdrawals", text: "7-Eleven ATMs accept foreign cards reliably." },
  { title: "Convenience Stores", text: "Lawson, FamilyMart, 7-Eleven have great food." },
  { title: "Weather", text: "May is warm — carry water and light layers." }
];

function renderTips() {
  const wrap = document.getElementById("tips-list");
  wrap.innerHTML = "";

  TIPS.forEach(t => {
    const card = document.createElement("div");
    card.className = "tip";

    card.innerHTML = `
      <div class="tip-title">${t.title}</div>
      <div class="tip-text">${t.text}</div>
    `;

    wrap.appendChild(card);
  });
}

/* =========================================================
   PHRASES
   ========================================================= */
const PHRASES = [
  { jp: "ありがとうございます", en: "Thank you" },
  { jp: "すみません", en: "Excuse me / Sorry" },
  { jp: "お願いします", en: "Please" },
  { jp: "英語を話せますか？", en: "Do you speak English?" },
  { jp: "どこですか？", en: "Where is it?" }
];

function renderPhrases() {
  const wrap = document.getElementById("phrases-container");
  wrap.innerHTML = "";

  PHRASES.forEach(p => {
    const row = document.createElement("div");
    row.className = "phrase";

    row.innerHTML = `
      <div class="phrase-jp">${p.jp}</div>
      <div class="phrase-en">${p.en}</div>
    `;

    row.addEventListener("click", () => {
      navigator.clipboard.writeText(p.jp);
      showToast("Copied!");
    });

    wrap.appendChild(row);
  });
}

/* =========================================================
   NOTES AUTOSAVE
   ========================================================= */
function renderNotes() {
  const ta = document.getElementById("notes-ta");
  ta.value = state.notes || "";

  ta.addEventListener("input", () => {
    state.notes = ta.value;
    saveState();

    const saved = document.getElementById("notes-saved");
    saved.classList.add("show");
    setTimeout(() => saved.classList.remove("show"), 800);
  });
}

/* =========================================================
   PETALS ANIMATION
   ========================================================= */
document.getElementById("petal-btn").addEventListener("click", () => {
  for (let i = 0; i < 18; i++) spawnPetal();
});

function spawnPetal() {
  const p = document.createElement("div");
  p.className = "petal";

  p.style.left = Math.random() * 100 + "vw";
  p.style.animationDuration = 4 + Math.random() * 3 + "s";
  p.style.opacity = 0.6 + Math.random() * 0.4;

  document.body.appendChild(p);
  setTimeout(() => p.remove(), 7000);
}

/* =========================================================
   TABS
   ========================================================= */
function setupTabs() {
  const tabs = document.querySelectorAll(".bntab");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const view = tab.dataset.view;

      document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
      document.getElementById(`view-${view}`).classList.add("active");

      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      document.getElementById("app").scrollTop = 0;
    });
  });
}

/* =========================================================
   INSTALL BANNER
   ========================================================= */
let deferredPrompt = null;

window.addEventListener("beforeinstallprompt", e => {
  e.preventDefault();
  deferredPrompt = e;
  document.getElementById("install-banner").style.display = "flex";
});

document.getElementById("install-btn").addEventListener("click", async () => {
  if (!deferredPrompt) return;

  deferredPrompt.prompt();
  const choice = await deferredPrompt.userChoice;

  if (choice.outcome === "accepted") {
    showToast("App installed");
  }

  deferredPrompt = null;
  document.getElementById("install-banner").style.display = "none";
});

/* =========================================================
   OFFLINE BADGE
   ========================================================= */
function setupOfflineBadge() {
  const badge = document.getElementById("offbadge");

  function update() {
    if (navigator.onLine) badge.style.display = "none";
    else badge.style.display = "block";
  }

  window.addEventListener("online", update);
  window.addEventListener("offline", update);
  update();
}

/* =========================================================
   TOAST
   ========================================================= */
function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");

  setTimeout(() => t.classList.remove("show"), 1800);
}
