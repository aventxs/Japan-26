// =========================================================
// JAPAN'26
// =========================================================

// ---------- STORAGE HELPERS ----------
const LS_KEYS = {
  ITIN: 'jp26_itinerary',
  PACK: 'jp26_packing',
  BUDG: 'jp26_budget',
  NOTES: 'jp26_notes'
};

const saveLS = (k, v) => {
  try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {}
};
const loadLS = (k, fallback) => {
  try {
    const v = localStorage.getItem(k);
    return v ? JSON.parse(v) : fallback;
  } catch (e) { return fallback; }
};

// ---------- ORIGINAL ITINERARY (YOUR DATA) ----------
const baseItinerary = [
  {
    day: 1,
    date: "2026-05-09",
    title: "Arrival in Tokyo",
    city: "Tokyo",
    walk: 1,
    items: [
      { time: "18:30", name: "Arrive at Haneda Airport (HND)", tags: ["travel"] },
      { time: "20:00", name: "Check-in at hotel (Akasaka)", tags: ["travel"] },
      { time: "21:00", name: "Shibuya Crossing & short night walk", tags: ["fun","walk"] },
      { time: "21:30", name: "Dinner (halal-friendly options)", tags: ["food","halal"] }
    ]
  },
  {
    day: 2,
    date: "2026-05-10",
    title: "Shinjuku + Drift Tour",
    city: "Tokyo",
    walk: 2,
    items: [
      { time: "11:00", name: "Shinjuku exploring (Kabukicho, tech stores)", tags: ["shop","fun"] },
      { time: "16:00", name: "Rest at hotel", tags: ["rest"] },
      { time: "17:30", name: "Tokyo Drift / Go-Kart Experience", tags: ["fun","experience"] }
    ]
  },
  {
    day: 3,
    date: "2026-05-11",
    title: "Ikebukuro + Harry Potter Studio Tour",
    city: "Tokyo",
    walk: 2,
    items: [
      { time: "10:00", name: "Ikebukuro – Animate & anime shops", tags: ["shop","fun"] },
      { time: "12:00", name: "Travel to Harry Potter Studio Tour", tags: ["travel"] },
      { time: "13:00", name: "Harry Potter Studio Tour Tokyo", tags: ["fun","experience"] }
    ]
  },
  {
    day: 4,
    date: "2026-05-12",
    title: "Shibuya • Harajuku • Mario Kart • Shibuya Sky",
    city: "Tokyo",
    walk: 2,
    items: [
      { time: "10:30", name: "Shibuya 109 (fashion)", tags: ["shop"] },
      { time: "11:30", name: "LOFT / lifestyle stores", tags: ["shop"] },
      { time: "12:00", name: "Harajuku Takeshita Street", tags: ["shop","walk"] },
      { time: "13:00", name: "Mario Kart Street Tour (Afternoon slot)", tags: ["fun","experience"] },
      { time: "15:00", name: "Break / explore Shibuya", tags: ["rest"] },
      { time: "17:30", name: "Shibuya Sky (sunset → night)", tags: ["view","fun"] },
      { time: "19:30", name: "Gyumon Halal Yakiniku (Dinner)", tags: ["food","halal"] }
    ]
  },
  {
    day: 5,
    date: "2026-05-13",
    title: "Tokyo → Kyoto + Fushimi Inari (gentle route)",
    city: "Kyoto",
    walk: 2,
    items: [
      { time: "09:00", name: "Shinkansen to Kyoto", tags: ["travel"] },
      { time: "12:00", name: "Hotel check-in / luggage drop", tags: ["travel"] },
      { time: "14:00", name: "Fushimi Inari (first section only)", tags: ["walk","view"] }
    ]
  },
  {
    day: 6,
    date: "2026-05-14",
    title: "Arashiyama + teamLab Biovortex",
    city: "Kyoto",
    walk: 2,
    items: [
      { time: "09:00", name: "Arashiyama Bamboo Grove (flat path)", tags: ["walk","view"] },
      { time: "11:00", name: "River cafés (relax)", tags: ["rest","food"] },
      { time: "18:00", name: "teamLab Biovortex Kyoto", tags: ["fun","experience"] }
    ]
  },
  {
    day: 7,
    date: "2026-05-15",
    title: "Kiyomizu-dera → Sannenzaka → Gion",
    city: "Kyoto",
    walk: 3,
    items: [
      { time: "10:30", name: "Taxi to Kiyomizu-dera", tags: ["travel"] },
      { time: "11:00", name: "Kiyomizu-dera Temple", tags: ["walk","view"] },
      { time: "12:30", name: "Downhill Sannenzaka / Ninenzaka", tags: ["walk","shop"] },
      { time: "17:00", name: "Gion District evening walk", tags: ["walk","view"] }
    ]
  },
  {
    day: 8,
    date: "2026-05-16",
    title: "Kyoto → Osaka + Namba + Dotonbori",
    city: "Osaka",
    walk: 2,
    items: [
      { time: "10:00", name: "Train to Osaka", tags: ["travel"] },
      { time: "12:00", name: "Hotel check-in (Namba area)", tags: ["travel"] },
      { time: "14:00", name: "Namba Yasaka Shrine", tags: ["view"] },
      { time: "18:00", name: "Dotonbori night walk", tags: ["walk","food","fun"] }
    ]
  },
  {
    day: 9,
    date: "2026-05-17",
    title: "Osaka Castle + Umeda Sky",
    city: "Osaka",
    walk: 2,
    items: [
      { time: "09:00", name: "Osaka Castle (elevator route)", tags: ["view","walk"] },
      { time: "15:00", name: "Rest / café break", tags: ["rest"] },
      { time: "18:00", name: "Umeda Sky Building (sunset)", tags: ["view","fun"] }
    ]
  },
  {
    day: 10,
    date: "2026-05-18",
    title: "Shinsaibashi + Rinku Premium Outlets",
    city: "Osaka",
    walk: 2,
    items: [
      { time: "11:00", name: "Shinsaibashi Shopping Street", tags: ["shop"] },
      { time: "15:00", name: "Rinku Premium Outlets (near KIX)", tags: ["shop","food"] },
      { time: "21:00", name: "Round 1 Stadium Sennichimae", tags: ["fun"] }
    ]
  },
  {
    day: 11,
    date: "2026-05-19",
    title: "Chill Day + Packing",
    city: "Osaka",
    walk: 1,
    items: [
      { time: "10:00", name: "Free time (arcades, cafés, shopping)", tags: ["fun","rest"] },
      { time: "18:00", name: "Packing + early night", tags: ["rest"] }
    ]
  },
  {
    day: 12,
    date: "2026-05-20",
    title: "Departure from KIX",
    city: "Osaka",
    walk: 1,
    items: [
      { time: "07:00", name: "Travel to Kansai Airport (KIX)", tags: ["travel"] },
      { time: "09:30", name: "Flight departure", tags: ["travel"] }
    ]
  }
];

// add done flags
const withDone = arr =>
  arr.map(d => ({
    ...d,
    items: d.items.map(i => ({ ...i, done: i.done ?? false }))
  }));

let itinerary = withDone(loadLS(LS_KEYS.ITIN, baseItinerary));

// ---------- OTHER DATA (LIGHT) ----------
const basePacking = [
  'Passport & BRP',
  'Flight confirmations',
  'JR Pass / IC card',
  'Wallet & cards',
  'Phone & charger',
  'Power adapter',
  'Light jacket',
  'Comfortable shoes',
  'Medication',
  'Toiletries',
  'Camera',
  'Umbrella'
];
let packingState = loadLS(
  LS_KEYS.PACK,
  basePacking.map(n => ({ name: n, done: false }))
);

let budgetState = loadLS(LS_KEYS.BUDG, {
  limitJPY: 200000,
  rate: 0.0052,
  entries: [],
  activeCat: 'Food'
});

let notesState = loadLS(LS_KEYS.NOTES, '');

// ---------- DOM SHORTCUT ----------
const $ = sel => document.querySelector(sel);
const $$ = sel => Array.from(document.querySelectorAll(sel));

// ---------- TOAST ----------
let toastTimer = null;
function showToast(msg) {
  const t = $('#toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2200);
}

// ---------- OFFLINE BADGE ----------
function updateOfflineBadge() {
  const b = $('#offbadge');
  if (!b) return;
  b.style.display = navigator.onLine ? 'none' : 'block';
}
window.addEventListener('online', updateOfflineBadge);
window.addEventListener('offline', updateOfflineBadge);
updateOfflineBadge();

// =========================================================
// NAVIGATION
// =========================================================
function initNav() {
  const tabs = document.querySelectorAll('.bntab');
  const views = document.querySelectorAll('.view');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.view;

      // highlight active tab
      tabs.forEach(t => t.classList.toggle('active', t === tab));

      // show correct view
      views.forEach(v => {
        v.classList.toggle('active', v.id === `view-${target}`);
      });

      // scroll to top of the view
      document.querySelector('#app').scrollTop = 0;
    });
  });
}

// =========================================================
// COUNTDOWN + ROUTE
// =========================================================
function initCountdown() {
  const target = new Date('2026-05-09T00:00:00+09:00');
  const now = new Date();
  const diff = Math.ceil((target - now) / (1000 * 60 * 60 * 24));
  const numEl = $('#cd-num');
  const labelEl = $('#cd-label');
  const subEl = $('#cd-sub');
  if (!numEl) return;

  if (diff > 0) {
    numEl.textContent = diff;
    labelEl.textContent = 'Days to go';
    subEl.textContent = 'You’re getting closer to Tokyo.';
  } else if (diff === 0) {
    numEl.textContent = '0';
    labelEl.textContent = 'Today';
    subEl.textContent = 'Your Japan adventure begins.';
  } else {
    numEl.textContent = '✓';
    labelEl.textContent = 'Trip complete';
    subEl.textContent = 'Relive it in your notes.';
  }
}

function initRouteBar() {
  const rb = $('#route-bar');
  if (!rb) return;
  const cities = ['Tokyo', 'Kyoto', 'Osaka'];
  rb.innerHTML = '';
  cities.forEach((c, i) => {
    const wrap = document.createElement('div');
    wrap.className = 'route-city';
    const dot = document.createElement('div');
    dot.className = 'rc-dot';
    const name = document.createElement('div');
    name.className = 'rc-name';
    name.textContent = c;
    wrap.append(dot, name);
    rb.appendChild(wrap);
    if (i < cities.length - 1) {
      const line = document.createElement('div');
      line.className = 'route-line';
      rb.appendChild(line);
    }
  });
}

// =========================================================
// ITINERARY RENDERING
// =========================================================
function dayProgress(day) {
  if (!day.items.length) return 0;
  const done = day.items.filter(i => i.done).length;
  return Math.round((done / day.items.length) * 100);
}

function renderOverallProgress() {
  const allItems = itinerary.flatMap(d => d.items);
  const done = allItems.filter(i => i.done).length;
  const pct = allItems.length ? Math.round((done / allItems.length) * 100) : 0;

  const ringFill = $('#ring-fill');
  const ringPct = $('#ring-pct');
  if (ringFill && ringPct) {
    const r = 30;
    const circ = 2 * Math.PI * r;
    const offset = circ * (1 - pct / 100);
    ringFill.style.strokeDasharray = `${circ}`;
    ringFill.style.strokeDashoffset = `${offset}`;
    ringPct.textContent = pct;
  }

  const dots = $('#day-dots');
  if (!dots) return;
  dots.innerHTML = '';
  itinerary.forEach(day => {
    const d = document.createElement('div');
    d.className = 'day-dot';
    const p = dayProgress(day);
    if (p === 100) d.classList.add('full');
    else if (p > 0) d.classList.add('partial');
    dots.appendChild(d);
  });
}

function renderDays() {
  const cont = $('#days-container');
  if (!cont) return;
  cont.innerHTML = '';

  itinerary.forEach((day, idx) => {
    const card = document.createElement('div');
    card.className = 'day-card';
    card.dataset.dayIndex = idx;

    const hdr = document.createElement('div');
    hdr.className = 'dc-hdr';

    const num = document.createElement('div');
    num.className = 'dc-num';
    num.innerHTML = `<div>${day.day}</div><div class="dc-num-sub">DAY</div>`;

    const info = document.createElement('div');
    info.className = 'dc-info';

    const title = document.createElement('div');
    title.className = 'dc-title';
    title.textContent = day.title;

    const meta = document.createElement('div');
    meta.className = 'dc-meta';
    const cityDot = document.createElement('div');
    cityDot.className = 'dc-city-dot';
    const city = document.createElement('div');
    city.textContent = day.city;
    meta.append(cityDot, city);

    const date = document.createElement('div');
    date.className = 'dc-date';
    date.textContent = day.date;

    const prog = document.createElement('div');
    prog.className = 'dc-progress';
    const progFill = document.createElement('div');
    progFill.className = 'dc-progress-fill';
    progFill.style.width = dayProgress(day) + '%';
    prog.appendChild(progFill);

    info.append(title, meta, date, prog);

    const chev = document.createElement('div');
    chev.className = 'dc-chevron';
    chev.textContent = '⌄';

    const editBtn = document.createElement('div');
    editBtn.className = 'dc-edit-btn';
    editBtn.textContent = '✎';
    editBtn.addEventListener('click', e => {
      e.stopPropagation();
      openEditor(idx);
    });

    hdr.append(num, info, chev, editBtn);

    const body = document.createElement('div');
    body.className = 'dc-body';
    const inner = document.createElement('div');
    inner.className = 'dc-body-inner';

    const acts = document.createElement('div');
    acts.className = 'activities';

    day.items.forEach((item, aIdx) => {
      const act = document.createElement('div');
      act.className = 'act';
      if (item.done) act.classList.add('done');
      act.dataset.dayIndex = idx;
      act.dataset.itemIndex = aIdx;

      const chk = document.createElement('div');
      chk.className = 'act-chk';
      chk.textContent = '✓';

      const body = document.createElement('div');
      body.className = 'act-body';

      const time = document.createElement('div');
      time.className = 'act-time';
      time.textContent = item.time;

      const name = document.createElement('div');
      name.className = 'act-name';
      name.textContent = item.name;

      const tags = document.createElement('div');
      tags.className = 'act-tags';
      (item.tags || []).forEach(tag => {
        const t = document.createElement('div');
        t.className = 'act-tag tag-' + tag;
        t.textContent = tag;
        tags.appendChild(t);
      });

      body.append(time, name, tags);
      act.append(chk, body);
      act.addEventListener('click', () => toggleActivity(idx, aIdx));
      acts.appendChild(act);
    });

    inner.appendChild(acts);
    body.appendChild(inner);

    hdr.addEventListener('click', () => {
      card.classList.toggle('day-open');
    });

    card.append(hdr, body);
    cont.appendChild(card);

    if (dayProgress(day) === 100 && day.items.length > 0) {
      card.classList.add('completed');
    }
  });

  renderOverallProgress();
}

function toggleActivity(dayIdx, itemIdx) {
  const day = itinerary[dayIdx];
  if (!day) return;
  const item = day.items[itemIdx];
  if (!item) return;
  item.done = !item.done;
  saveLS(LS_KEYS.ITIN, itinerary);
  renderDays();
}

// =========================================================
// EDITOR MODAL
// =========================================================

const editorModal = $('#editor-modal');
const editTitleInput = $('#edit-title');
const editCityInput = $('#edit-city');
const editItemsContainer = $('#edit-items');
const addItemBtn = $('#add-item-btn');
const saveDayBtn = $('#save-day-btn');
const closeBtn = $('#modal-close-btn');

let editingDayIndex = null;

// ---------- OPEN EDITOR ----------
function openEditor(dayIdx) {
  const day = itinerary[dayIdx];
  if (!day) return;

  editingDayIndex = dayIdx;

  editTitleInput.value = day.title;
  editCityInput.value = day.city;

  renderEditorItems(day.items);

  editorModal.classList.add('show');
}

// ---------- CLOSE EDITOR ----------
function closeEditor() {
  editorModal.classList.remove('show');
  editingDayIndex = null;
}

closeBtn.addEventListener('click', closeEditor);
editorModal.addEventListener('click', e => {
  if (e.target === editorModal) closeEditor();
});

// =========================================================
// RENDER EDITOR ITEMS
// =========================================================

function renderEditorItems(items) {
  editItemsContainer.innerHTML = '';

  items.forEach((item, idx) => {
    const row = document.createElement('div');
    row.className = 'edit-item-row';
    row.dataset.index = idx;

    const handle = document.createElement('div');
    handle.className = 'drag-handle';
    handle.textContent = '⋮⋮';

    const time = document.createElement('input');
    time.className = 'edit-time';
    time.value = item.time || '';
    time.placeholder = 'Time';

    const name = document.createElement('input');
    name.className = 'edit-name';
    name.value = item.name || '';
    name.placeholder = 'Activity';

    const del = document.createElement('button');
    del.className = 'del-item';
    del.textContent = '×';

    del.addEventListener('click', () => {
      const day = itinerary[editingDayIndex];
      day.items.splice(idx, 1);
      renderEditorItems(day.items);
    });

    row.append(handle, time, name, del);
    editItemsContainer.appendChild(row);

    attachDragHandle(handle, row);
  });
}

// =========================================================
// ADD NEW ACTIVITY
// =========================================================

addItemBtn.addEventListener('click', () => {
  if (editingDayIndex == null) return;
  const day = itinerary[editingDayIndex];
  day.items.push({ time: '', name: '', tags: [], done: false });
  renderEditorItems(day.items);
});

// =========================================================
// SAVE DAY CHANGES
// =========================================================

saveDayBtn.addEventListener('click', () => {
  if (editingDayIndex == null) return;

  const day = itinerary[editingDayIndex];

  day.title = editTitleInput.value.trim() || day.title;
  day.city = editCityInput.value.trim() || day.city;

  const rows = Array.from(editItemsContainer.querySelectorAll('.edit-item-row'));

  const newItems = rows.map((r, i) => {
    const time = r.querySelector('.edit-time').value.trim();
    const name = r.querySelector('.edit-name').value.trim();

    // preserve tags if possible
    const old = day.items[i];
    const tags = old ? old.tags : [];

    return { time, name, tags, done: false };
  });

  day.items = newItems;

  saveLS(LS_KEYS.ITIN, itinerary);
  renderDays();
  showToast('Day updated');
  closeEditor();
});

// =========================================================
// DRAG & DROP (LONG‑PRESS)
// =========================================================

function attachDragHandle(handle, row) {
  let longPressTimer = null;
  let dragging = false;
  let startY = 0;
  let startIndex = 0;

  const container = editItemsContainer;

  const onMove = e => {
    if (!dragging) return;
    const dy = e.clientY - startY;
    row.style.transform = `translateY(${dy}px)`;

    const rows = Array.from(container.querySelectorAll('.edit-item-row'));
    const currentRect = row.getBoundingClientRect();
    const midY = currentRect.top + currentRect.height / 2;

    let newIndex = startIndex;
    rows.forEach((r, idx) => {
      if (r === row) return;
      const rect = r.getBoundingClientRect();
      if (midY > rect.top + rect.height / 2) newIndex = idx;
    });

    if (newIndex !== startIndex) {
      if (newIndex > startIndex) {
        container.insertBefore(row, rows[newIndex].nextSibling);
      } else {
        container.insertBefore(row, rows[newIndex]);
      }
      startIndex = newIndex;
    }
  };

  const endDrag = () => {
    if (!dragging) return;
    dragging = false;

    row.style.transform = '';
    row.style.position = '';
    row.style.zIndex = '';
    row.style.pointerEvents = '';

    document.removeEventListener('pointermove', onMove);
    document.removeEventListener('pointerup', endDrag);

    // rebuild order
    if (editingDayIndex != null) {
      const day = itinerary[editingDayIndex];
      const rows = Array.from(container.querySelectorAll('.edit-item-row'));
      const newItems = rows.map((r, i) => {
        const t = r.querySelector('.edit-time').value.trim();
        const n = r.querySelector('.edit-name').value.trim();
        const old = day.items[i];
        const tags = old ? old.tags : [];
        return { time: t, name: n, tags, done: false };
      });
      day.items = newItems;
    }
  };

  const startDrag = e => {
    dragging = true;
    startY = e.clientY;

    row.style.position = 'relative';
    row.style.zIndex = '10';
    row.style.pointerEvents = 'none';

    const rows = Array.from(container.querySelectorAll('.edit-item-row'));
    startIndex = rows.indexOf(row);

    document.addEventListener('pointermove', onMove);
    document.addEventListener('pointerup', endDrag);
  };

  const onDown = e => {
    e.preventDefault();
    longPressTimer = setTimeout(() => startDrag(e), 220);
  };

  const cancel = () => clearTimeout(longPressTimer);

  handle.addEventListener('pointerdown', onDown);
  handle.addEventListener('pointerup', cancel);
  handle.addEventListener('pointerleave', cancel);
}

// =========================================================
// PACKING LIST
// =========================================================

function renderPacking() {
  const cont = $('#pack-container');
  if (!cont) return;

  cont.innerHTML = '';

  packingState.forEach((item, idx) => {
    const row = document.createElement('div');
    row.className = 'pack-item';
    if (item.done) row.classList.add('done');

    const chk = document.createElement('div');
    chk.className = 'pack-check';
    chk.textContent = '✓';

    const name = document.createElement('div');
    name.className = 'pack-name';
    name.textContent = item.name;

    row.append(chk, name);

    row.addEventListener('click', () => {
      item.done = !item.done;
      saveLS(LS_KEYS.PACK, packingState);
      renderPacking();
    });

    cont.appendChild(row);
  });
}

// =========================================================
// BUDGET
// =========================================================

function renderBudget() {
  const totalJPY = budgetState.entries.reduce((s, e) => s + (e.amount || 0), 0);
  const totalGBP = totalJPY * budgetState.rate;

  $('#budget-total').textContent = totalJPY.toLocaleString('ja-JP');
  $('#budget-gbp').textContent = '£' + totalGBP.toFixed(0);
  $('#budget-limit-label').textContent =
    `of ¥${budgetState.limitJPY.toLocaleString('ja-JP')} budget`;

  const pct = Math.min(100, (totalJPY / budgetState.limitJPY) * 100);
  $('#budget-fill').style.width = `${pct}%`;

  const catsWrap = $('#budget-cats');
  catsWrap.innerHTML = '';

  const cats = ['Food', 'Transport', 'Attractions', 'Shopping', 'Other'];
  if (!budgetState.activeCat) budgetState.activeCat = cats[0];

  cats.forEach(c => {
    const btn = document.createElement('button');
    btn.className = 'budget-cat';
    if (budgetState.activeCat === c) btn.classList.add('active');
    btn.textContent = c;

    btn.addEventListener('click', () => {
      budgetState.activeCat = c;
      renderBudget();
    });

    catsWrap.appendChild(btn);
  });

  const entriesWrap = $('#budget-entries');
  entriesWrap.innerHTML = '';

  budgetState.entries.forEach((e, idx) => {
    const row = document.createElement('div');
    row.className = 'budget-entry';

    const left = document.createElement('div');
    const desc = document.createElement('div');
    desc.className = 'budget-entry-desc';
    desc.textContent = e.desc || '(No description)';
    const cat = document.createElement('div');
    cat.className = 'budget-entry-cat';
    cat.textContent = e.cat;
    left.append(desc, cat);

    const right = document.createElement('div');
    right.style.textAlign = 'right';
    const amt = document.createElement('div');
    amt.className = 'budget-entry-amt';
    amt.textContent = '¥' + (e.amount || 0).toLocaleString('ja-JP');
    const gbp = document.createElement('div');
    gbp.className = 'budget-entry-gbp';
    gbp.textContent = '£' + ((e.amount || 0) * budgetState.rate).toFixed(0);
    right.append(amt, gbp);

    const del = document.createElement('div');
    del.className = 'budget-del';
    del.textContent = '×';
    del.addEventListener('click', () => {
      budgetState.entries.splice(idx, 1);
      saveLS(LS_KEYS.BUDG, budgetState);
      renderBudget();
    });

    row.append(left, right, del);
    entriesWrap.appendChild(row);
  });
}

function initBudgetInputs() {
  $('#budget-add-btn').addEventListener('click', () => {
    const desc = $('#budget-desc').value.trim();
    const amt = parseInt($('#budget-amt').value, 10);

    if (!amt || amt <= 0) {
      showToast('Enter an amount');
      return;
    }

    budgetState.entries.push({
      desc,
      amount: amt,
      cat: budgetState.activeCat || 'Other'
    });

    $('#budget-desc').value = '';
    $('#budget-amt').value = '';

    saveLS(LS_KEYS.BUDG, budgetState);
    renderBudget();
  });
}

// =========================================================
// INFO + TIPS + PHRASES
// =========================================================

function initInfo() {
  const infoGrid = $('#info-grid');
  const tipsList = $('#tips-list');
  const phrasesCont = $('#phrases-container');

  if (!infoGrid || !tipsList || !phrasesCont) return;

  const infoCards = [
    { title: 'IC Cards', body: 'Suica / PASMO work on most trains and buses.' },
    { title: 'Cash vs Card', body: 'Cards are accepted widely, but keep some cash.' },
    { title: 'Trains', body: 'Queue politely and let passengers exit first.' },
    { title: 'Etiquette', body: 'Keep voices low on public transport.' }
  ];

  infoGrid.innerHTML = '';
  infoCards.forEach(c => {
    const card = document.createElement('div');
    card.className = 'budget-card';

    const t = document.createElement('div');
    t.className = 'budget-title';
    t.textContent = c.title;

    const b = document.createElement('div');
    b.style.fontSize = '13px';
    b.style.color = 'var(--snow)';
    b.textContent = c.body;

    card.append(t, b);
    infoGrid.appendChild(card);
  });

  const tips = [
    'Arrive early for Shinkansen to find luggage space.',
    'Use coin lockers for heavy bags.',
    'Carry a small towel and hand sanitiser.',
    'Download offline maps.',
    'Keep backups of passport and bookings.'
  ];

  tipsList.innerHTML = '';
  tips.forEach(t => {
    const row = document.createElement('div');
    row.className = 'budget-entry';
    const d = document.createElement('div');
    d.className = 'budget-entry-desc';
    d.textContent = t;
    row.appendChild(d);
    tipsList.appendChild(row);
  });

  const phrases = [
    { jp: 'すみません', en: 'Excuse me / I’m sorry' },
    { jp: 'ありがとうございます', en: 'Thank you very much' },
    { jp: '英語は話せますか？', en: 'Do you speak English?' },
    { jp: 'これをください', en: 'I’ll take this, please' },
    { jp: 'どこですか？', en: 'Where is it?' }
  ];

  phrasesCont.innerHTML = '';
  phrases.forEach(p => {
    const row = document.createElement('div');
    row.className = 'budget-entry';

    const left = document.createElement('div');
    const jp = document.createElement('div');
    jp.className = 'budget-entry-desc';
    jp.textContent = p.jp;

    const en = document.createElement('div');
    en.className = 'budget-entry-cat';
    en.textContent = p.en;

    left.append(jp, en);
    row.appendChild(left);

    phrasesCont.appendChild(row);
  });
}

// =========================================================
// NOTES
// =========================================================

function initNotes() {
  const ta = $('#notes-ta');
  const saved = $('#notes-saved');
  if (!ta) return;

  ta.value = notesState || '';

  let saveTimer = null;

  ta.addEventListener('input', () => {
    clearTimeout(saveTimer);
    saveTimer = setTimeout(() => {
      notesState = ta.value;
      saveLS(LS_KEYS.NOTES, notesState);
      saved.classList.add('show');
      setTimeout(() => saved.classList.remove('show'), 1200);
    }, 400);
  });
}

// =========================================================
// PETALS ANIMATION
// =========================================================

function spawnPetal() {
  const p = document.createElement('div');
  p.className = 'petal';

  const startX = Math.random() * window.innerWidth;
  p.style.left = `${startX}px`;

  const duration = 6000 + Math.random() * 4000;
  p.style.animationDuration = `${duration}ms`;

  document.body.appendChild(p);

  setTimeout(() => p.remove(), duration + 200);
}

function burstPetals(count = 24) {
  for (let i = 0; i < count; i++) {
    setTimeout(spawnPetal, i * 120);
  }
}

$('#petal-btn').addEventListener('click', () => {
  burstPetals(26);
});

// =========================================================
// RESET EVERYTHING
// =========================================================

$('#reset-btn').addEventListener('click', () => {
  if (!confirm('Reset itinerary, packing, budget and notes?')) return;

  itinerary = withDone(JSON.parse(JSON.stringify(baseItinerary)));
  packingState = basePacking.map(n => ({ name: n, done: false }));
  budgetState = { limitJPY: 200000, rate: 0.0052, entries: [], activeCat: 'Food' };
  notesState = '';

  saveLS(LS_KEYS.ITIN, itinerary);
  saveLS(LS_KEYS.PACK, packingState);
  saveLS(LS_KEYS.BUDG, budgetState);
  saveLS(LS_KEYS.NOTES, notesState);

  renderDays();
  renderPacking();
  renderBudget();
  initNotes();

  showToast('Reset complete');
});

// =========================================================
// INSTALL BANNER
// =========================================================

let deferredPrompt = null;

window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  deferredPrompt = e;
  $('#install-banner').style.display = 'flex';
});

$('#install-btn').addEventListener('click', async () => {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  await deferredPrompt.userChoice;
  $('#install-banner').style.display = 'none';
});

// =========================================================
// INIT APP
// =========================================================

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initCountdown();
  initRouteBar();

  renderDays();
  renderPacking();
  renderBudget();

  initBudgetInputs();
  initInfo();
  initNotes();
});

