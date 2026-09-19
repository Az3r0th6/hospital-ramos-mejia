import { HOSPITAL_DATA } from './src/hospital-data.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initDynamicInstitutionData();
  initNews();
  initSpecialties();
  initPatientGuides();
  initJournal();
  initDirectory();
  initGallery();
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
    'revista',
    'galeria',
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
   NOTICIAS Y ACTUALIDAD 2026
   ========================================================================== */
function initNews() {
  const container = document.getElementById('news-container');
  if (!container || !HOSPITAL_DATA || !HOSPITAL_DATA.news) return;

  container.innerHTML = '';
  HOSPITAL_DATA.news.forEach(item => {
    const card = document.createElement('article');
    card.className = 'news-card';

    card.innerHTML = `
      <div class="news-meta">
        <span class="news-tag">${item.tag}</span>
        <span class="news-date">📅 ${item.date}</span>
      </div>
      <h3 class="news-title">${item.title}</h3>
      <p class="news-summary">${item.summary}</p>
      <div class="news-footer">
        <a href="${item.link}" class="news-link">Más información →</a>
      </div>
    `;

    container.appendChild(card);
  });
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
        (item.category && item.category.toLowerCase().includes(q));

      return matchesCat && matchesQuery;
    });

    resultsCount.textContent = filtered.length;

    if (filtered.length === 0) {
      if (paginationContainer) paginationContainer.innerHTML = '';
      container.innerHTML = `
        <div class="no-results" style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; color: #64748b;">
          <span style="font-size: 3rem; display: block; margin-bottom: 1rem;">🔍</span>
          <h3>No encontramos servicios que coincidan con "${searchQuery}"</h3>
          <p>Pruebe buscando por término general (ej: "Clínica", "Cirugía", "Laboratorio", "Pediatría") o consulte al conmutador <strong>4127-0200</strong>.</p>
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

      card.innerHTML = `
        <div class="card-top">
          <span class="badge-category">${spec.category}</span>
          <span class="spec-icon">🏥</span>
        </div>
        <h3 class="spec-title">${spec.title}</h3>
        <p class="spec-loc">${spec.location ? spec.location.slice(0, 100) + '...' : 'Pabellón central'}</p>
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

  modal.classList.add('active');
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
   REVISTA CIENTÍFICA (ACTUALIZADA 2026)
   ========================================================================== */
function initJournal() {
  const container = document.getElementById('journal-container');
  if (!container || !HOSPITAL_DATA || !HOSPITAL_DATA.journalEditions) return;

  container.innerHTML = '';
  HOSPITAL_DATA.journalEditions.forEach(ed => {
    const item = document.createElement('div');
    item.className = `journal-card ${ed.isOpenCall ? 'journal-current-year' : ''}`;

    let articlesHtml = ed.articles.map(a => `
      <li>
        <strong>${a.title}</strong>
        <span class="art-authors">✍️ ${a.authors}</span>
      </li>
    `).join('');

    const awardNotice = ed.awardInfo ? `
      <div class="journal-award-notice">
        ${ed.awardInfo}
      </div>
    ` : '';

    const actionButton = ed.isOpenCall ? `
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
        <a href="mailto:codei_rm@yahoo.com.ar?subject=Envio%20de%20Trabajo%20Revista%202026" class="btn btn-sm btn-primary">
          📤 Enviar Manuscrito 2026
        </a>
      </div>
    ` : `
      <a href="${ed.downloadUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline-dark">
        📥 Descargar Volumen
      </a>
    `;

    item.innerHTML = `
      <div class="journal-card-top">
        <div>
          <h4>${ed.volume} (${ed.year})</h4>
          <span class="journal-status-pill ${ed.isOpenCall ? 'pulse-pill' : ''}">${ed.status}</span>
        </div>
        ${actionButton}
      </div>
      ${awardNotice}
      <ul class="journal-articles">
        ${articlesHtml}
      </ul>
    `;

    container.appendChild(item);
  });

  // Buscador interactivo a LILACS / BVS con motor iAHx (Apache Solr)
  const lilacsForm = document.getElementById('lilacs-search-form');
  const lilacsInput = document.getElementById('lilacs-query-input');
  if (lilacsForm && lilacsInput) {
    lilacsForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const val = lilacsInput.value.trim();
      let query = '"Hospital Ramos Mejía"';
      if (val) {
        query += ` AND ${val}`;
      }
      const encodedQuery = encodeURIComponent(query);
      const url = `https://pesquisa.bvsalud.org/portal/?q=${encodedQuery}&filter%5Bdb%5D%5B%5D=LILACS&sort=YEAR_DESC`;
      window.open(url, '_blank', 'noopener,noreferrer');
    });
  }
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

    div.innerHTML = `
      <img src="${item.src}" alt="${item.title}" loading="lazy" />
      <div class="gallery-overlay">
        <h4>${item.title}</h4>
        <p>${item.desc}</p>
        <span class="gallery-zoom-btn">🔍 Ampliar foto</span>
      </div>
    `;

    div.addEventListener('click', () => {
      lightboxImg.src = item.src;
      lightboxTitle.textContent = item.title;
      lightboxDesc.textContent = item.desc;
      lightbox.classList.add('active');
    });

    container.appendChild(div);
  });

  if (closeLightbox && lightbox) {
    closeLightbox.addEventListener('click', () => {
      lightbox.classList.remove('active');
    });
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) lightbox.classList.remove('active');
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
    closeSpecBtn.addEventListener('click', () => modalSpec.classList.remove('active'));
    modalSpec.addEventListener('click', (e) => {
      if (e.target === modalSpec) modalSpec.classList.remove('active');
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
        modalDonar.classList.add('active');
      });
    });

    if (closeDonarBtn) {
      closeDonarBtn.addEventListener('click', () => modalDonar.classList.remove('active'));
    }

    modalDonar.addEventListener('click', (e) => {
      if (e.target === modalDonar) modalDonar.classList.remove('active');
    });
  }

  // Reglamento 2026 Modal
  const modalReglamento = document.getElementById('modal-reglamento');
  const openReglamentoBtn = document.getElementById('btn-open-reglamento');
  const closeReglamentoBtn = document.getElementById('close-reglamento-modal');

  if (modalReglamento && openReglamentoBtn) {
    openReglamentoBtn.addEventListener('click', (e) => {
      e.preventDefault();
      modalReglamento.classList.add('active');
    });
  }
  if (modalReglamento && closeReglamentoBtn) {
    closeReglamentoBtn.addEventListener('click', () => modalReglamento.classList.remove('active'));
    modalReglamento.addEventListener('click', (e) => {
      if (e.target === modalReglamento) modalReglamento.classList.remove('active');
    });
  }

  // Close modals on ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay.active').forEach(m => m.classList.remove('active'));
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
    newsDesc.textContent = `Información actualizada al corriente año ${currentYear}: convocatorias académicas, mejoras asistenciales y programas comunitarios de salud.`;
  }

  const navNewsLink = document.getElementById('nav-news-link');
  if (navNewsLink) navNewsLink.textContent = 'Noticias';

  const heroNewsBtn = document.getElementById('hero-news-btn');
  if (heroNewsBtn) heroNewsBtn.innerHTML = `<span>📰 Novedades ${currentYear}</span>`;

  const heroTagYear = document.getElementById('hero-tag-year');
  if (heroTagYear) {
    heroTagYear.textContent = `Sistema de Salud Pública • Ciudad de Buenos Aires • Actualizado ${currentYear}`;
  }

  // 3. Sección Revista del Hospital
  const journalTitle = document.getElementById('journal-section-title');
  if (journalTitle) journalTitle.textContent = `Revista del Hospital Ramos Mejía (Año ${currentYear})`;

  const journalBannerVolume = document.getElementById('journal-banner-volume');
  if (journalBannerVolume) {
    journalBannerVolume.textContent = `Convocatoria Abierta • Volumen XXVIII (${currentYear}) y Premio Bienal del Hospital`;
  }

  const journalBannerText = document.getElementById('journal-banner-text');
  if (journalBannerText) {
    journalBannerText.innerHTML = `Se encuentra abierta la recepción de manuscritos, artículos originales, revisiones y casos clínicos para la edición ${currentYear}. Los trabajos presentados optan por el <strong>"Premio Revista del Hospital Ramos Mejía"</strong>, que se otorgará en diciembre de ${currentYear} durante los actos conmemorativos del Día del Médico.`;
  }

  const journalBtnGuidelines = document.getElementById('btn-open-reglamento');
  if (journalBtnGuidelines) {
    journalBtnGuidelines.textContent = `📜 Ver Pautas de Publicación ${currentYear}`;
  }

  const journalMailLinks = document.querySelectorAll('.journal-submit-email');
  journalMailLinks.forEach(link => {
    link.href = `mailto:codei_rm@yahoo.com.ar?subject=Envio%20de%20Trabajo%20Cientifico%20-%20Revista%20Ramos%20Mejia%20${currentYear}`;
  });

  const modalAwardTitle = document.getElementById('modal-award-title');
  if (modalAwardTitle) {
    modalAwardTitle.textContent = `Premio Bienal "Revista del Hospital Ramos Mejía" ${currentYear}`;
  }

  const modalAwardBadge = document.getElementById('modal-reglamento-badge');
  if (modalAwardBadge) {
    modalAwardBadge.textContent = `Reglamento Oficial ${currentYear}`;
  }

  const currentYearSpan = document.getElementById('current-year');
  if (currentYearSpan) currentYearSpan.textContent = currentYear;
}
