// =========================================
// UTILITAIRES
// =========================================
function starsHTML(rating) {
  const full  = Math.floor(rating);
  const half  = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
}

function formatPrice(price) {
  return price.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' });
}

function showToast(msg) {
  let t = document.querySelector('.toast');
  if (!t) {
    t = document.createElement('div');
    t.className = 'toast';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 2500);
}

// =========================================
// FAVORIS
// =========================================
let favorites = JSON.parse(localStorage.getItem('tp_favs') || '[]');

function toggleFav(id) {
  const idx = favorites.indexOf(id);
  if (idx === -1) {
    favorites.push(id);
    showToast('❤️ Ajouté aux favoris');
  } else {
    favorites.splice(idx, 1);
    showToast('Retiré des favoris');
  }
  localStorage.setItem('tp_favs', JSON.stringify(favorites));
  document.querySelectorAll(`.fav-btn[data-id="${id}"]`).forEach(btn => {
    btn.classList.toggle('active', favorites.includes(id));
    btn.textContent = favorites.includes(id) ? '❤️' : '🤍';
  });
}

// =========================================
// RENDU PRODUIT
// =========================================
function renderProductCard(p) {
  const isFav = favorites.includes(p.id);
  const savings = p.oldPrice ? Math.round((1 - p.price / p.oldPrice) * 100) : 0;
  return `
    <div class="product-card" data-cat="${p.cat}" data-id="${p.id}">
      <div class="product-card__img">
        <img src="${p.img}" alt="${p.name}" loading="lazy" />
        ${p.badge ? `<span class="product-card__badge product-card__badge--${p.badgeClass}">${p.badge}</span>` : ''}
        <button class="product-card__fav fav-btn ${isFav ? 'active' : ''}" data-id="${p.id}" aria-label="Favori" onclick="toggleFav(${p.id})">${isFav ? '❤️' : '🤍'}</button>
      </div>
      <div class="product-card__body">
        <span class="product-card__cat">${p.catLabel}</span>
        <h3 class="product-card__title">${p.name}</h3>
        <p class="product-card__desc">${p.desc}</p>
        <div class="product-card__rating">
          <span class="stars">${starsHTML(p.rating)}</span>
          <strong>${p.rating}</strong>
          <span class="rating-count">(${p.reviews.toLocaleString('fr-FR')} avis)</span>
        </div>
      </div>
      <div class="product-card__footer">
        <div class="product-card__price">
          <div class="price-row">
            <span class="price-current">${formatPrice(p.price)}</span>
            ${savings > 0 ? `<span class="price-savings">-${savings}%</span>` : ''}
          </div>
          ${p.oldPrice ? `<span class="price-old">au lieu de ${formatPrice(p.oldPrice)}</span>` : ''}
        </div>
        <a href="${p.link}" target="_blank" rel="noopener noreferrer sponsored" class="btn btn--amazon">🛒 Voir sur Amazon</a>
      </div>
    </div>
  `;
}

// =========================================
// TOP DEALS
// =========================================
function renderDeals() {
  const grid = document.getElementById('dealsGrid');
  if (!grid) return;
  const deals = [...PRODUCTS]
    .filter(p => p.oldPrice)
    .map(p => ({ ...p, _savings: Math.round((1 - p.price / p.oldPrice) * 100) }))
    .sort((a, b) => b._savings - a._savings)
    .slice(0, 4);
  grid.innerHTML = deals.map(renderProductCard).join('');
}

// =========================================
// FILTRES, TRI, PAGINATION
// =========================================
const ITEMS_PER_PAGE = 8;
let currentCat  = 'all';
let currentSort = 'default';
let currentPage = 1;

function filteredAndSorted() {
  let list = currentCat === 'all' ? [...PRODUCTS] : PRODUCTS.filter(p => p.cat === currentCat);
  if (currentSort === 'price-asc')  list.sort((a, b) => a.price - b.price);
  if (currentSort === 'price-desc') list.sort((a, b) => b.price - a.price);
  if (currentSort === 'rating')     list.sort((a, b) => b.rating - a.rating);
  return list;
}

function renderProducts() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  const list  = filteredAndSorted();
  const total = list.length;
  const pages = Math.ceil(total / ITEMS_PER_PAGE);
  if (currentPage > pages) currentPage = 1;

  const slice = list.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  grid.innerHTML = slice.length
    ? slice.map(renderProductCard).join('')
    : '<p style="color:var(--clr-gray-400);grid-column:1/-1;text-align:center;padding:3rem 0">Aucun produit dans cette catégorie.</p>';

  renderPagination(pages);
}

function renderPagination(pages) {
  const pg = document.getElementById('pagination');
  if (!pg) return;
  if (pages <= 1) { pg.innerHTML = ''; return; }

  let html = '';
  html += `<button class="page-btn" onclick="changePage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}>‹</button>`;
  for (let i = 1; i <= pages; i++) {
    html += `<button class="page-btn ${i === currentPage ? 'active' : ''}" onclick="changePage(${i})">${i}</button>`;
  }
  html += `<button class="page-btn" onclick="changePage(${currentPage + 1})" ${currentPage === pages ? 'disabled' : ''}>›</button>`;
  pg.innerHTML = html;
}

function changePage(page) {
  currentPage = page;
  renderProducts();
  document.getElementById('products')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// =========================================
// FILTRES PAR CATÉGORIE
// =========================================
function initFilters() {
  const btns = document.querySelectorAll('.filter-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      currentCat  = btn.dataset.cat;
      currentPage = 1;
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProducts();
    });
  });

  // Clic sur les cat-cards
  document.querySelectorAll('.cat-card').forEach(card => {
    card.addEventListener('click', e => {
      e.preventDefault();
      const cat = card.dataset.filter;
      currentCat  = cat;
      currentPage = 1;
      btns.forEach(b => {
        b.classList.toggle('active', b.dataset.cat === cat);
      });
      renderProducts();
      document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

// =========================================
// TRI
// =========================================
function initSort() {
  const select = document.getElementById('sortSelect');
  if (!select) return;
  select.addEventListener('change', () => {
    currentSort = select.value;
    currentPage = 1;
    renderProducts();
  });
}

// =========================================
// RECHERCHE
// =========================================
function initSearch() {
  const toggle    = document.getElementById('searchToggle');
  const bar       = document.getElementById('searchBar');
  const input     = document.getElementById('searchInput');
  const close     = document.getElementById('closeSearch');
  const results   = document.getElementById('searchResults');
  if (!toggle || !bar || !input) return;

  toggle.addEventListener('click', () => {
    bar.classList.add('open');
    input.focus();
  });
  close.addEventListener('click', () => {
    bar.classList.remove('open');
    input.value = '';
    results.innerHTML = '';
  });

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    if (q.length < 2) { results.innerHTML = ''; return; }
    const hits = PRODUCTS.filter(p =>
      p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q) || p.catLabel.toLowerCase().includes(q)
    ).slice(0, 5);

    results.innerHTML = hits.length
      ? hits.map(p => `
          <div class="search-result-item" onclick="goToProduct(${p.id})">
            <img src="${p.img}" alt="${p.name}" />
            <div class="search-result-item__info">
              <strong>${p.name}</strong>
              <span>${p.catLabel} — ${formatPrice(p.price)}</span>
            </div>
          </div>`).join('')
      : '<p style="padding:.5rem;color:var(--clr-gray-400);font-size:.88rem">Aucun résultat pour « ' + q + ' »</p>';
  });
}

function goToProduct(id) {
  currentCat  = 'all';
  currentPage = 1;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.toggle('active', b.dataset.cat === 'all'));
  renderProducts();
  document.getElementById('searchBar')?.classList.remove('open');
  document.getElementById('searchInput').value = '';
  document.getElementById('searchResults').innerHTML = '';
  setTimeout(() => {
    const card = document.querySelector(`.product-card[data-id="${id}"]`);
    card?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    card?.classList.add('highlight');
    setTimeout(() => card?.classList.remove('highlight'), 1500);
  }, 100);
}

// =========================================
// MENU MOBILE
// =========================================
function initMobileMenu() {
  const btn = document.getElementById('menuToggle');
  const nav = document.getElementById('nav');
  if (!btn || !nav) return;
  btn.addEventListener('click', () => {
    nav.classList.toggle('open');
    btn.classList.toggle('open');
  });

  // Fermer si on clique dehors
  document.addEventListener('click', e => {
    if (!nav.contains(e.target) && !btn.contains(e.target)) {
      nav.classList.remove('open');
    }
  });
}

// =========================================
// BACK TO TOP
// =========================================
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// =========================================
// NEWSLETTER
// =========================================
function handleNewsletter(e) {
  e.preventDefault();
  showToast('✅ Inscription confirmée, merci !');
  e.target.reset();
}

// =========================================
// HEADER SCROLL SHADOW
// =========================================
function initHeaderScroll() {
  const header = document.querySelector('.header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    header.style.boxShadow = window.scrollY > 10 ? '0 2px 20px rgba(0,0,0,.12)' : '';
  });
}

// =========================================
// INIT
// =========================================
document.addEventListener('DOMContentLoaded', () => {
  renderDeals();
  renderProducts();
  initFilters();
  initSort();
  initSearch();
  initMobileMenu();
  initBackToTop();
  initHeaderScroll();
});
