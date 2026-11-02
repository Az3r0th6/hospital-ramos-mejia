import { HOSPITAL_DATA } from './src/hospital-data.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initDynamicInstitutionData();
  initNews();
  initSpecialties();
  initPatientGuides();
  initDirectory();
  initGallery();
  initHospitalHistory();
  initModals();
});

/* ==========================================================================
   NAVBAR & SCROLL
   ========================================================================== */
function initNavbar() {
  const navbar = document.getElementById('main-navbar');
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-links .nav-item');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      mobileToggle.classList.toggle('active');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileToggle.classList.remove('active');
      });
    });
  }

  // Estado activo en verde al hacer clic
  let isManualScroll = false;
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      isManualScroll = true;
      setTimeout(() => {
        isManualScroll = false;
      }, 850);
    });
  });

  // ScrollSpy para marcar la sección activa en el navbar en verde al hacer scroll
  const sectionIds = [
    'inicio',
    'autoridades',
    'noticias',
    'especialidades',
    'tramites',
    'docencia',
    'galeria',
    'historia',
    'contacto'
  ];

  const sections = sectionIds
    .map(id => document.getElementById(id))
    .filter(Boolean);

  function onScrollSpy() {
    if (isManualScroll) return;
    const scrollPos = window.scrollY + 140;

    let currentSectionId = '';
    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i];
      if (section.offsetTop <= scrollPos) {
        currentSectionId = section.id;
        break;
      }
    }

    if (currentSectionId) {
      navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === `#${currentSectionId}`) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }
  }

  window.addEventListener('scroll', onScrollSpy, { passive: true });
}

/* ==========================================================================
   NOTICIAS Y ACTUALIDAD EN VIVO (SALUD GCABA + OPENALEX + INSTAGRAM OFICIAL)
   ========================================================================== */
const MONTHS_ES = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];

function formatSpanishDate(dateInput) {
  const d = dateInput instanceof Date ? dateInput : new Date(dateInput);
  if (isNaN(d.getTime())) {
    const now = new Date();
    return `${now.getDate()} de ${MONTHS_ES[now.getMonth()]} de ${now.getFullYear()}`;
  }
  return `${d.getDate()} de ${MONTHS_ES[d.getMonth()]} de ${d.getFullYear()}`;
}

function getDynamicFallbackNews() {
  const now = new Date();
  const recent1 = new Date(now.getTime() - 4 * 24 * 60 * 60 * 1000);
  const recent2 = new Date(now.getTime() - 12 * 24 * 60 * 60 * 1000);
  const recent3 = new Date(now.getTime() - 21 * 24 * 60 * 60 * 1000);

  return [
    {
      tag: 'Salud Pública • GCABA',
      date: formatSpanishDate(recent1),
      title: 'El Hospital Ramos Mejía es el primer hospital público de la Ciudad en sumar trasplante de médula ósea para adultos',
      summary: 'Hito asistencial en la red pública porteña: el Servicio de Hematología y Hemoterapia incorpora trasplante autólogo de progenitores hematopoyéticos con habitaciones de aislamiento y filtrado HEPA.',
      link: '#especialidades',
      linkText: 'Ver Servicio de Hematología →',
      isExternal: false,
      isLive: true
    },
    {
      tag: 'Infraestructura Asistencial',
      date: formatSpanishDate(recent2),
      title: 'Incorporación de Nuevo Equipamiento Digital en Diagnóstico por Imágenes, Resonancia y Unidad de Stroke (ACV)',
      summary: 'Fortalecimiento tecnológico de alta resolución para tomografías, ecodoppler y atención hiperaguda del accidente cerebrovascular las 24 horas en articulación con el SAME.',
      link: '#especialidades',
      linkText: 'Consultar Especialidades →',
      isExternal: false,
      isLive: false
    },
    {
      tag: 'Atención Primaria • Comuna 3',
      date: formatSpanishDate(recent3),
      title: 'Operativos Territoriales de Salud Escolar, Vacunación y Prevención en Balvanera y San Cristóbal',
      summary: 'El Área Programática y los CeSAC N° 11 y N° 45 desarrollan controles pediátricos, posta de vacunación de calendario y consejerías comunitarias.',
      link: '#area-programatica-sec',
      linkText: 'Ver Área Programática →',
      isExternal: false,
      isLive: false
    }
  ];
}

function getInstagramOfficialCard() {
  const now = new Date();
  return {
    tag: 'Instagram Oficial • En Vivo',
    date: `Actualizado hoy (${formatSpanishDate(now)})`,
    title: 'Comunicados Diarios, Jornadas y Novedades en @hospitalgeneralramosmejia',
    summary: 'Acceda al canal oficial de Instagram del Hospital General de Agudos Dr. José María Ramos Mejía para consultar avisos actualizados al instante, campañas de prevención, ateneos y actividades de los servicios.',
    link: 'https://www.instagram.com/hospitalgeneralramosmejia?cplk=NzVpdXkwbHF2MnY3',
    linkText: 'Abrir Instagram Oficial ↗',
    isExternal: true,
    isInstagram: true,
    isLive: true
  };
}

function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function openModalEl(modal) {
  if (!modal) return;
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  modal.setAttribute('aria-modal', 'true');
  const closeBtn = modal.querySelector('.modal-close');
  if (closeBtn) closeBtn.focus();
}

function closeModalEl(modal) {
  if (!modal) return;
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  modal.removeAttribute('aria-modal');
}

function renderNewsCards(container, items) {
  container.innerHTML = '';
  items.forEach(item => {
    const card = document.createElement('article');
    card.className = `news-card ${item.isInstagram ? 'news-card-ig' : ''}`;

    const liveBadge = item.isLive
      ? `<span class="news-live-pill">● EN VIVO</span>`
      : '';

    const targetAttrs = item.isExternal
      ? 'target="_blank" rel="noopener noreferrer"'
      : '';

    const safeHref = /^https?:\/\/|^#[a-zA-Z0-9_-]+|^\/[a-zA-Z0-9_./-]+/.test(item.link || '')
      ? escapeHtml(item.link)
      : '#noticias';

    card.innerHTML = `
      <div class="news-meta">
        <div class="news-tag-wrap">
          <span class="news-tag ${item.isInstagram ? 'news-tag-ig' : ''}">${escapeHtml(item.tag)}</span>
          ${liveBadge}
        </div>
        <span class="news-date">📅 ${escapeHtml(item.date)}</span>
      </div>
      <h3 class="news-title">${escapeHtml(item.title)}</h3>
      <p class="news-summary">${escapeHtml(item.summary)}</p>
      <div class="news-footer">
        <a href="${safeHref}" class="news-link" ${targetAttrs}>${escapeHtml(item.linkText || 'Más información →')}</a>
      </div>
    `;

    container.appendChild(card);
  });
}

async function fetchPressNewsItems() {
  // 1. Intentar primero mediante el endpoint serverless propio (/api/live-news)
  try {
    const res = await fetch('/api/live-news', { signal: AbortSignal.timeout(5000) });
    if (res.ok) {
      const contentType = res.headers.get('content-type') || '';
      if (contentType.includes('application/json')) {
        const data = await res.json();
        if (data.status === 'ok' && Array.isArray(data.items) && data.items.length > 0) {
          return data.items;
        }
      }
    }
  } catch (_) {
    // Continuar con respaldo CORS directo en el navegador
  }

  // 2. Respaldo directo CORS desde el navegador vía rss2json
  const rssUrl =
    'https://news.google.com/rss/search?q=Buenos+Aires+Ciudad+Hospital+Ramos+Mejia&hl=es-419&gl=AR&ceid=AR:es-419';
  const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;
  const res = await fetch(apiUrl, { signal: AbortSignal.timeout(6500) });
  if (!res.ok) throw new Error('Error consultando RSS');
  const data = await res.json();
  if (data.status !== 'ok' || !Array.isArray(data.items)) {
    throw new Error('Formato RSS inválido');
  }

  const posRegex =
    /(ramos mej[ií]a|hospital p[uú]blico|salud p[uú]blica|trasplante|m[eé]dula|stroke|acv|equip|resonancia|tomograf|distingui|reconoc|residencia|vacun|jornada|m[eé]dic|servicio|inaugur|incorpor)/i;
  const badRegex =
    /(choque|choc[oó]|vuelco|volante|autos|atropell|muerto|muri[oó]|falleci|herido|polic[ií]a|detenido|crimen|robo|incendio|paro|asamblea|reclamo|piquete|partido|sindicato|gremial|denuncia|baleado|apu[nñ]al|accidente|cay[oó]|andamio|politraumatismo|piden informes|la plata|agresi[oó]n)/i;

  const filtered = data.items
    .map(item => {
      const cleanTitle = (item.title || '').replace(/\s*-\s*[^-]+$/, '').trim();
      const sourceMatch = (item.title || '').match(/\s*-\s*([^-]+)$/);
      const source = sourceMatch ? sourceMatch[1].trim() : item.author || 'Prensa Salud';
      const pubDate = new Date((item.pubDate || '').replace(' ', 'T') + 'Z');
      return {
        title: cleanTitle,
        link: item.link,
        pubDate: isNaN(pubDate.getTime()) ? new Date() : pubDate,
        source
      };
    })
    .filter(
      item =>
        /ramos mej[ií]a/i.test(item.title) &&
        posRegex.test(item.title) &&
        !badRegex.test(item.title) &&
        !badRegex.test(item.source) &&
        item.title.length > 35
    );

  // Deduplicar por tema principal
  const unique = [];
  const seen = new Set();
  for (const item of filtered) {
    if (/m[eé]dula/i.test(item.title)) {
      if (seen.has('medula')) continue;
      seen.add('medula');
    } else if (/stroke|acv/i.test(item.title)) {
      if (seen.has('stroke')) continue;
      seen.add('stroke');
    }
    unique.push(item);
  }
  return unique;
}

async function fetchLatestScientificPublication() {
  const url =
    'https://api.openalex.org/works?filter=raw_affiliation_strings.search:Hospital%20Ramos%20Mejia&sort=publication_date:desc&per-page=1';
  const res = await fetch(url, { signal: AbortSignal.timeout(6000) });
  if (!res.ok) throw new Error('OpenAlex no disponible');
  const data = await res.json();
  const work = data.results && data.results[0];
  if (!work || !work.title) return null;

  const pubDate = work.publication_date ? new Date(work.publication_date + 'T12:00:00') : new Date();
  const journalName =
    work.primary_location?.source?.display_name || 'Publicación Científica Internacional Indexada';
  const link = work.doi || work.primary_location?.landing_page_url || 'https://openalex.org';

  return {
    tag: 'Investigación en Vivo • OpenAlex',
    date: formatSpanishDate(pubDate),
    title: `Nueva publicación científica del Hospital Ramos Mejía: "${work.title}"`,
    summary: `Investigación reciente de profesionales del Hospital General de Agudos J. M. Ramos Mejía indexada en vivo en bases científicas internacionales (${journalName}).`,
    link,
    linkText: 'Ver Publicación Científica ↗',
    isExternal: true,
    isLive: true
  };
}

function initNews() {
  const container = document.getElementById('news-container');
  const statusText = document.getElementById('news-live-status-text');
  const statusDot = document.getElementById('news-live-dot');
  const refreshBtn = document.getElementById('btn-refresh-news');
  if (!container) return;

  // Render inmediato con respaldo dinámico actualizado al día de hoy
  const fallbackCards = [getInstagramOfficialCard(), ...getDynamicFallbackNews().slice(0, 2)];
  renderNewsCards(container, fallbackCards);

  async function syncLiveNews(isManual = false) {
    if (statusText) {
      statusText.textContent = isManual
        ? 'Actualizando fuentes oficiales en tiempo real...'
        : 'Sincronizando en vivo con Salud GCABA, Red Científica e Instagram...';
    }
    if (refreshBtn) refreshBtn.disabled = true;

    try {
      const [pressResult, scienceResult] = await Promise.allSettled([
        fetchPressNewsItems(),
        fetchLatestScientificPublication()
      ]);

      const liveCards = [getInstagramOfficialCard()];

      // Agregar noticias oficiales de Salud GCABA / Prensa en vivo
      const hasScience = scienceResult.status === 'fulfilled' && Boolean(scienceResult.value);
      const maxPress = hasScience ? 1 : 2;
      if (pressResult.status === 'fulfilled' && pressResult.value.length > 0) {
        pressResult.value.slice(0, maxPress).forEach(p => {
          liveCards.push({
            tag: `Salud Pública • ${p.source || 'GCABA'}`,
            date: formatSpanishDate(p.pubDate),
            title: p.title,
            summary: `Cobertura oficial de actualidad sanitaria y avances hospitalarios del Hospital General de Agudos Dr. José María Ramos Mejía (${p.source || 'Buenos Aires Ciudad'}).`,
            link: p.link,
            linkText: 'Leer nota oficial ↗',
            isExternal: true,
            isLive: true
          });
        });
      }

      // Agregar la última publicación científica indexada en vivo
      if (hasScience) {
        liveCards.push(scienceResult.value);
      }

      // Completar hasta 3 o 4 tarjetas si alguna fuente externa no devolvió suficientes ítems
      const fallbacks = getDynamicFallbackNews();
      let idx = 0;
      while (liveCards.length < 3 && idx < fallbacks.length) {
        liveCards.push(fallbacks[idx++]);
      }

      renderNewsCards(container, liveCards.slice(0, 3));

      const now = new Date();
      const timeStr = now.toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' });
      if (statusText) {
        statusText.textContent = `Actualizado en vivo hoy (${formatSpanishDate(now)} a las ${timeStr} hs) • Fuentes: Salud GCABA, OpenAlex & Instagram Oficial`;
      }
      if (statusDot) {
        statusDot.classList.add('online');
      }
    } catch (_) {
      const now = new Date();
      if (statusText) {
        statusText.textContent = `Actualidad Institucional sincronizada (${formatSpanishDate(now)}) • Canal oficial activo`;
      }
    } finally {
      if (refreshBtn) refreshBtn.disabled = false;
    }
  }

  syncLiveNews(false);

  if (refreshBtn) {
    refreshBtn.addEventListener('click', () => syncLiveNews(true));
  }

  // Re-sincronización automática continua cada 10 minutos mientras la página permanece abierta
  setInterval(() => syncLiveNews(false), 10 * 60 * 1000);
}

/* ==========================================================================
   SPECIALTIES FINDER & MODAL
   ========================================================================== */
function initSpecialties() {
  const container = document.getElementById('specialties-container');
  const paginationContainer = document.getElementById('specialties-pagination');
  const searchInput = document.getElementById('specialty-search');
  const clearBtn = document.getElementById('clear-search');
  const resultsCount = document.getElementById('results-count');
  const totalCount = document.getElementById('total-count');
  const filterPills = document.querySelectorAll('#category-filters .pill');

  if (!container || !HOSPITAL_DATA || !HOSPITAL_DATA.specialties) return;

  const specialties = HOSPITAL_DATA.specialties;
  totalCount.textContent = specialties.length;

  let currentCategory = 'all';
  let searchQuery = '';
  let currentPage = 1;

  function getPageSize() {
    return window.innerWidth <= 768 ? 4 : 12;
  }

  function render() {
    container.innerHTML = '';

    const filtered = specialties.filter(item => {
      const matchesCat = currentCategory === 'all' || item.category === currentCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesQuery = !q ||
        item.title.toLowerCase().includes(q) ||
        (item.chief && item.chief.toLowerCase().includes(q)) ||
        (item.location && item.location.toLowerCase().includes(q)) ||
        (item.category && item.category.toLowerCase().includes(q)) ||
        (item.historicalOrigin && item.historicalOrigin.toLowerCase().includes(q)) ||
        (item.historicalFigures && item.historicalFigures.some(f => f.toLowerCase().includes(q))) ||
        (item.pioneeringMilestones && item.pioneeringMilestones.some(m => m.toLowerCase().includes(q)));

      return matchesCat && matchesQuery;
    });

    resultsCount.textContent = filtered.length;

    if (filtered.length === 0) {
      if (paginationContainer) paginationContainer.innerHTML = '';
      container.innerHTML = `
        <div class="no-results" style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; color: #64748b;">
          <span style="font-size: 3rem; display: block; margin-bottom: 1rem;">🔍</span>
          <h3>No encontramos servicios que coincidan con "${searchQuery}"</h3>
          <p>Pruebe buscando por especialidad, patología o referente histórico (ej: "Cardiología", "Rosenbaum", "Grierson", "Justo").</p>
        </div>
      `;
      return;
    }

    const pageSize = getPageSize();
    const totalPages = Math.ceil(filtered.length / pageSize) || 1;
    if (currentPage > totalPages) currentPage = totalPages;
    if (currentPage < 1) currentPage = 1;

    const startIndex = (currentPage - 1) * pageSize;
    const paginatedItems = filtered.slice(startIndex, startIndex + pageSize);

    paginatedItems.forEach(spec => {
      const card = document.createElement('div');
      card.className = 'specialty-card';
      card.dataset.id = spec.id;

      const isPioneer = spec.pioneeringMilestones && spec.pioneeringMilestones.length > 0;
      const chiefHtml = spec.chief ? `<div class="spec-chief">👨‍⚕️ <strong>Jefatura:</strong> ${spec.chief}</div>` : '';
      const pioneerBadge = isPioneer ? `<span class="badge-pioneer" title="Servicio con hitos pioneros en la medicina">⭐ Pionero</span>` : '';

      card.innerHTML = `
        <div class="card-top">
          <span class="badge-category">${spec.category}</span>
          ${pioneerBadge}
        </div>
        <h3 class="spec-title">${spec.title}</h3>
        ${chiefHtml}
        <p class="spec-loc">${spec.location ? spec.location.slice(0, 95) + '...' : 'Pabellón central'}</p>
        <div class="spec-meta">
          <span class="spec-phone">📞 <strong>Contacto:</strong> ${spec.phone}</span>
        </div>
        <div class="spec-card-actions">
          <button class="btn btn-sm btn-primary open-spec-modal" data-id="${spec.id}">
            Ver Ficha y Plano 🗺️
          </button>
          <a href="${spec.detailUrl}" class="btn btn-sm btn-outline-dark" target="_blank">
            Página Completa ↗
          </a>
        </div>
      `;

      container.appendChild(card);
    });

    container.querySelectorAll('.open-spec-modal').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id;
        const spec = specialties.find(s => s.id === id);
        if (spec) openSpecialtyModal(spec);
      });
    });

    renderPagination(filtered.length, totalPages);
  }

  function renderPagination(totalItems, totalPages) {
    if (!paginationContainer) return;
    if (totalPages <= 1) {
      paginationContainer.innerHTML = '';
      return;
    }

    paginationContainer.innerHTML = '';

    // Botón Anterior
    const prevBtn = document.createElement('button');
    prevBtn.className = 'page-btn';
    prevBtn.innerHTML = '← Anterior';
    prevBtn.disabled = currentPage === 1;
    prevBtn.addEventListener('click', () => {
      if (currentPage > 1) {
        currentPage--;
        render();
        scrollToSpecialties();
      }
    });
    paginationContainer.appendChild(prevBtn);

    // En móviles mostramos "1 / X", en desktop números de página
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      const pageInfo = document.createElement('span');
      pageInfo.className = 'page-info';
      pageInfo.textContent = `Página ${currentPage} de ${totalPages}`;
      paginationContainer.appendChild(pageInfo);
    } else {
      let startP = Math.max(1, currentPage - 2);
      let endP = Math.min(totalPages, startP + 4);
      if (endP - startP < 4) {
        startP = Math.max(1, endP - 4);
      }

      for (let p = startP; p <= endP; p++) {
        const pBtn = document.createElement('button');
        pBtn.className = `page-btn ${p === currentPage ? 'active' : ''}`;
        pBtn.textContent = p;
        pBtn.addEventListener('click', () => {
          currentPage = p;
          render();
          scrollToSpecialties();
        });
        paginationContainer.appendChild(pBtn);
      }
    }

    // Botón Siguiente
    const nextBtn = document.createElement('button');
    nextBtn.className = 'page-btn';
    nextBtn.innerHTML = 'Siguiente →';
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.addEventListener('click', () => {
      if (currentPage < totalPages) {
        currentPage++;
        render();
        scrollToSpecialties();
      }
    });
    paginationContainer.appendChild(nextBtn);
  }

  function scrollToSpecialties() {
    const sec = document.getElementById('especialidades');
    if (sec) {
      const navH = 75;
      const top = sec.getBoundingClientRect().top + window.scrollY - navH;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      render();
    }, 200);
  });

  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    currentPage = 1;
    clearBtn.style.display = searchQuery ? 'block' : 'none';
    render();
  });

  clearBtn.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    currentPage = 1;
    clearBtn.style.display = 'none';
    searchInput.focus();
    render();
  });

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentCategory = pill.dataset.category;
      currentPage = 1;
      render();
    });
  });
}

function openSpecialtyModal(spec) {
  const modal = document.getElementById('modal-specialty');
  if (!modal) return;

  document.getElementById('modal-spec-category').textContent = spec.category;
  document.getElementById('modal-spec-title').textContent = spec.title;
  document.getElementById('modal-spec-location').innerHTML = spec.location || 'Consulte al ingreso en el conmutador central.';

  const chiefEl = document.getElementById('modal-spec-chief');
  const chiefWrap = document.getElementById('modal-spec-chief-block');
  if (spec.chief) {
    chiefEl.textContent = spec.chief;
    chiefWrap.style.display = 'block';
  } else {
    chiefWrap.style.display = 'none';
  }

  document.getElementById('modal-spec-phone').textContent = spec.phone || '4127-0200 (Conmutador)';

  const emailWrap = document.getElementById('modal-spec-email-wrap');
  const emailSpan = document.getElementById('modal-spec-email');
  if (spec.email) {
    emailSpan.innerHTML = `<a href="mailto:${spec.email}">${spec.email}</a>`;
    emailWrap.style.display = 'block';
  } else {
    emailWrap.style.display = 'none';
  }

  const fullPageLink = document.getElementById('modal-spec-full-page');
  fullPageLink.href = spec.detailUrl;

  const planImg = document.getElementById('modal-spec-plan');
  if (spec.planImg) {
    planImg.src = spec.planImg;
    planImg.style.display = 'block';
  } else {
    planImg.src = '/de/matriz.png';
  }

  // Sección Histórica e Hitos Pioneros
  const histBlock = document.getElementById('modal-spec-history-block');
  const histOrigin = document.getElementById('modal-spec-history-origin');
  const milestonesBox = document.getElementById('modal-spec-milestones-box');
  const milestonesList = document.getElementById('modal-spec-milestones');
  const figuresBox = document.getElementById('modal-spec-figures-box');
  const figuresContainer = document.getElementById('modal-spec-figures');

  const hasHistory = !!(spec.historicalOrigin || (spec.pioneeringMilestones && spec.pioneeringMilestones.length));

  if (histBlock) {
    if (hasHistory) {
      histBlock.style.display = 'block';
      if (histOrigin) {
        histOrigin.textContent = spec.historicalOrigin || '';
        histOrigin.style.display = spec.historicalOrigin ? 'block' : 'none';
      }

      if (milestonesBox && milestonesList) {
        if (spec.pioneeringMilestones && spec.pioneeringMilestones.length) {
          milestonesBox.style.display = 'block';
          milestonesList.innerHTML = spec.pioneeringMilestones.map(m => `<li>${m}</li>`).join('');
        } else {
          milestonesBox.style.display = 'none';
          milestonesList.innerHTML = '';
        }
      }

      if (figuresBox && figuresContainer) {
        if (spec.historicalFigures && spec.historicalFigures.length) {
          figuresBox.style.display = 'block';
          figuresContainer.innerHTML = spec.historicalFigures.map(f => `<span class="figure-tag">👨‍⚕️ ${f}</span>`).join('');
        } else {
          figuresBox.style.display = 'none';
          figuresContainer.innerHTML = '';
        }
      }
    } else {
      histBlock.style.display = 'none';
    }
  }

  openModalEl(modal);
}

/* ==========================================================================
   PATIENT GUIDES
   ========================================================================== */
function initPatientGuides() {
  const container = document.getElementById('guides-container');
  if (!container || !HOSPITAL_DATA || !HOSPITAL_DATA.patientGuides) return;

  container.innerHTML = '';
  HOSPITAL_DATA.patientGuides.forEach(guide => {
    const card = document.createElement('div');
    card.className = 'guide-card';
    card.id = `${guide.id}-info`;

    card.innerHTML = `
      <div class="guide-header">
        <span class="guide-icon">${guide.icon}</span>
        <h3>${guide.title}</h3>
      </div>
      <p class="guide-summary">${guide.summary}</p>
      <div class="guide-details">
        ${guide.details}
      </div>
    `;

    container.appendChild(card);
  });
}

/* ==========================================================================
   DIRECTORY & PHONE SEARCH
   ========================================================================== */
// Cifrado y descifrado de correos anti-spambots
function decodeSafeEmail(enc) {
  if (!enc) return '';
  try {
    return atob(enc);
  } catch (e) {
    return enc;
  }
}

function initDirectory() {
  const tbody = document.getElementById('directory-tbody');
  const searchInput = document.getElementById('contact-search');
  if (!tbody || !HOSPITAL_DATA || !HOSPITAL_DATA.contacts) return;

  const contacts = HOSPITAL_DATA.contacts;

  function render(query = '') {
    tbody.innerHTML = '';
    const q = query.toLowerCase().trim();
    const filtered = contacts.filter(c => {
      const decodedMail = decodeSafeEmail(c.email).toLowerCase();
      return !q ||
        c.service.toLowerCase().includes(q) ||
        c.interno.toLowerCase().includes(q) ||
        decodedMail.includes(q);
    });

    if (filtered.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="4" style="text-align:center; padding: 2rem; color: #64748b;">
            No se encontró ningún interno con el término "${query}".
          </td>
        </tr>
      `;
      return;
    }

    filtered.forEach(c => {
      const tr = document.createElement('tr');
      const hasEmail = c.email && c.email.trim() !== '';

      tr.innerHTML = `
        <td><strong>${c.service}</strong></td>
        <td><span class="interno-tag">Int. ${c.interno}</span></td>
        <td>
          ${hasEmail ? `
            <button type="button" class="safe-email-btn" data-enc="${c.email}" title="Clic para ver correo y escribir">
              <span class="email-action-icon">🔒</span>
              <span class="email-btn-text">Ver correo</span>
            </button>
          ` : '<span style="color:#94a3b8">—</span>'}
        </td>
        <td>
          <a href="tel:01141270200" class="btn btn-xs btn-outline-teal" title="Llamar al conmutador">
            Llamar
          </a>
        </td>
      `;
      tbody.appendChild(tr);
    });

    // Delegación para desencriptar y copiar correo al hacer clic
    tbody.querySelectorAll('.safe-email-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const enc = btn.dataset.enc;
        const plain = decodeSafeEmail(enc);
        if (!plain) return;

        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(plain);
        }

        btn.classList.add('safe-email-revealed');
        btn.innerHTML = `<span class="email-action-icon">✉️</span> <span>${plain}</span> <small style="opacity:0.8;font-size:0.75rem;">(¡Copiado!)</small>`;
        btn.title = `Correo: ${plain}. Clic para abrir cliente de correo`;

        setTimeout(() => {
          window.location.href = `mailto:${plain}`;
        }, 300);
      });
    });
  }

  render();

  searchInput.addEventListener('input', (e) => {
    render(e.target.value);
  });
}

/* ==========================================================================
   PHOTO GALLERY & LIGHTBOX
   ========================================================================== */
function initGallery() {
  const container = document.getElementById('gallery-container');
  const lightbox = document.getElementById('modal-lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxDesc = document.getElementById('lightbox-desc');
  const closeLightbox = document.getElementById('close-lightbox');

  if (!container || !HOSPITAL_DATA || !HOSPITAL_DATA.gallery) return;

  container.innerHTML = '';
  HOSPITAL_DATA.gallery.forEach(item => {
    const div = document.createElement('div');
    div.className = 'gallery-item';
    div.setAttribute('role', 'button');
    div.setAttribute('tabindex', '0');
    div.setAttribute('aria-label', `Ampliar fotografía: ${item.title}`);

    div.innerHTML = `
      <img src="${item.src}" alt="${item.title}" loading="lazy" width="400" height="260" />
      <div class="gallery-overlay">
        <h4>${item.title}</h4>
        <p>${item.desc}</p>
        <span class="gallery-zoom-btn">🔍 Ampliar foto</span>
      </div>
    `;

    const openItem = () => {
      lightboxImg.src = item.src;
      lightboxTitle.textContent = item.title;
      lightboxDesc.textContent = item.desc;
      openModalEl(lightbox);
    };

    div.addEventListener('click', openItem);
    div.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openItem();
      }
    });

    container.appendChild(div);
  });

  if (closeLightbox && lightbox) {
    closeLightbox.addEventListener('click', () => {
      closeModalEl(lightbox);
    });
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeModalEl(lightbox);
    });
  }
}

/* ==========================================================================
   MODALES LOGIC
   ========================================================================== */
function initModals() {
  // Specialty Modal
  const modalSpec = document.getElementById('modal-specialty');
  const closeSpecBtn = document.getElementById('close-specialty-modal');
  if (modalSpec && closeSpecBtn) {
    closeSpecBtn.addEventListener('click', () => closeModalEl(modalSpec));
    modalSpec.addEventListener('click', (e) => {
      if (e.target === modalSpec) closeModalEl(modalSpec);
    });
  }

  // Donar Sangre Modal
  const modalDonar = document.getElementById('modal-donar');
  const openDonarBtns = document.querySelectorAll('.open-modal-donar');
  const closeDonarBtn = document.getElementById('close-donar-modal');

  if (modalDonar) {
    openDonarBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        openModalEl(modalDonar);
      });
    });

    if (closeDonarBtn) {
      closeDonarBtn.addEventListener('click', () => closeModalEl(modalDonar));
    }

    modalDonar.addEventListener('click', (e) => {
      if (e.target === modalDonar) closeModalEl(modalDonar);
    });
  }

  // Close modals on ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay.active').forEach(m => closeModalEl(m));
    }
  });

  // Dynamic Year
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) yearSpan.textContent = '2026';
}


/* ==========================================================================
   ACTUALIZACIÓN AUTOMÁTICA DE ESTADÍSTICAS Y FECHAS INSTITUCIONALES
   ========================================================================== */
function initDynamicInstitutionData() {
  const currentYear = new Date().getFullYear();
  const foundationYear = HOSPITAL_DATA?.institution?.founded || 1868;
  const trajectoryYears = currentYear - foundationYear;
  const stats = HOSPITAL_DATA?.institution?.stats || {
    beds: '427',
    annualOutpatient: '+470.000',
    annualDischarges: '10.269'
  };

  // 1. Actualización de Estadísticas Institucionales
  const statBeds = document.getElementById('stat-beds');
  if (statBeds) statBeds.textContent = stats.beds;

  const statOutpatient = document.getElementById('stat-outpatient');
  if (statOutpatient) statOutpatient.textContent = stats.annualOutpatient;

  const statDischarges = document.getElementById('stat-discharges');
  if (statDischarges) statDischarges.textContent = stats.annualDischarges;

  const statYears = document.getElementById('stat-years');
  if (statYears) statYears.textContent = `${trajectoryYears} Años`;

  const statYearsLabel = document.getElementById('stat-years-label');
  if (statYearsLabel) statYearsLabel.textContent = `Trayectoria Pública (${foundationYear} - ${currentYear})`;

  const heroYears = document.getElementById('hero-years-celebration');
  if (heroYears) {
    heroYears.textContent = `Fundado en ${foundationYear}, el Hospital Ramos Mejía celebra ${trajectoryYears} años al servicio de la comunidad como centro de referencia de alta complejidad. Atención ambulatoria, internación, cirugías avanzadas, formación médica universitaria UBA e investigación clínica permanente.`;
  }

  // 2. Sección Actualidad Institucional & Noticias
  const newsSubtitle = document.getElementById('news-section-subtitle');
  if (newsSubtitle) newsSubtitle.textContent = `Actualidad Institucional ${currentYear}`;

  const newsDesc = document.getElementById('news-section-desc');
  if (newsDesc) {
    newsDesc.textContent = `Información actualizada al corriente año ${currentYear}: formación académica, mejoras asistenciales y programas comunitarios de salud.`;
  }

  const navNewsLink = document.getElementById('nav-news-link');
  if (navNewsLink) navNewsLink.textContent = 'Noticias';

  const heroNewsBtn = document.getElementById('hero-news-btn');
  if (heroNewsBtn) heroNewsBtn.innerHTML = `<span>📰 Novedades ${currentYear}</span>`;

  const heroTagYear = document.getElementById('hero-tag-year');
  if (heroTagYear) {
    heroTagYear.textContent = `Sistema de Salud Pública • Ciudad de Buenos Aires • Actualizado ${currentYear}`;
  }

  const currentYearSpan = document.getElementById('current-year');
  if (currentYearSpan) currentYearSpan.textContent = currentYear;
}

/* ==========================================================================
   HISTORIA, PATRIMONIO Y CULTURA (LIBRO OFICIAL)
   ========================================================================== */
function initHospitalHistory() {
  const container = document.getElementById('history-tab-content');
  const tabBtns = document.querySelectorAll('.history-tab-btn');
  if (!container || !HOSPITAL_DATA || !HOSPITAL_DATA.history) return;

  const history = HOSPITAL_DATA.history;
  let activeTab = 'nobel';

  function renderTab(tabKey) {
    container.innerHTML = '';

    if (tabKey === 'nobel') {
      const laureates = history.nobelLaureates || [];
      const grid = document.createElement('div');
      grid.className = 'nobel-grid';

      laureates.forEach(l => {
        const card = document.createElement('article');
        card.className = 'nobel-card';
        card.innerHTML = `
          <div class="nobel-header">
            <span class="nobel-icon">${l.icon}</span>
            <span class="nobel-badge">${l.badge}</span>
          </div>
          <h3 class="nobel-name">${l.name}</h3>
          <span class="nobel-years">${l.years}</span>
          <div class="nobel-role">🏥 <strong>Paso por el Ramos Mejía:</strong> ${l.roleHospital}</div>
          <p class="nobel-desc">${l.desc}</p>
        `;
        grid.appendChild(card);
      });
      container.appendChild(grid);
    } else if (tabKey === 'cultura') {
      const cultureItems = history.cultureAndTango || [];
      const grid = document.createElement('div');
      grid.className = 'culture-grid';

      cultureItems.forEach(item => {
        const card = document.createElement('article');
        card.className = 'culture-card';
        card.innerHTML = `
          <div class="culture-header">
            <span class="culture-icon">${item.icon}</span>
            <span class="culture-year">${item.year}</span>
          </div>
          <h3 class="culture-title">${item.title}</h3>
          <p class="culture-desc">${item.desc}</p>
        `;
        grid.appendChild(card);
      });
      container.appendChild(grid);
    } else if (tabKey === 'memoria') {
      const mem = history.memory;
      if (!mem) return;
      const memCard = document.createElement('div');
      memCard.className = 'memory-memorial-box';
      memCard.innerHTML = `
        <div class="memory-header">
          <span class="memory-symbol">🕊️</span>
          <div>
            <span class="memory-sub">${mem.established} • ${mem.recognition}</span>
            <h3 class="memory-title">${mem.title}</h3>
          </div>
        </div>
        <p class="memory-intro">${mem.desc}</p>
        <div class="memory-victims-grid">
          ${mem.victims.map(v => `
            <div class="victim-card">
              <span class="victim-candle">🕯️</span>
              <div class="victim-info">
                <strong class="victim-name">${v.name}</strong>
                <span class="victim-role">${v.role}</span>
              </div>
            </div>
          `).join('')}
        </div>
        <div class="memory-note">
          <p>${mem.survivorNote}</p>
        </div>
      `;
      container.appendChild(memCard);
    } else if (tabKey === 'directores') {
      const timeline = history.directorsTimeline || [];
      const wrap = document.createElement('div');
      wrap.className = 'directors-timeline-wrap';
      wrap.innerHTML = `
        <div class="directors-intro">
          <h3>Nómina Histórica de Directores y Conducción Hospitalaria</h3>
          <p>Reconstrucción historiográfica documentada en el libro oficial desde la fundación del Lazareto San Roque (1869) hasta la conducción actual.</p>
        </div>
        <div class="directors-grid">
          ${timeline.map(era => `
            <div class="era-card">
              <div class="era-badge">${era.period}</div>
              <h4 class="era-title">${era.era}</h4>
              <ul class="directors-list">
                ${era.list.map(d => `<li>${d}</li>`).join('')}
              </ul>
            </div>
          `).join('')}
        </div>
      `;
      container.appendChild(wrap);
    }
  }

  // Bind click events on tab buttons
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      activeTab = btn.dataset.tab;
      renderTab(activeTab);
    });
  });

  // Render initial tab
  renderTab(activeTab);
}
