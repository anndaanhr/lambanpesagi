/* ═══════════════════════════════════════════════════════
   ANATOMY VIEWER — 3-Layer Architectural Inspector
   ═══════════════════════════════════════════════════════ */

import { SITE_DATA } from './data.js';

export function initAnatomyViewer() {
  const tabs = document.querySelectorAll('.anatomy .tab-btn');
  const titleEl = document.querySelector('.anatomy__detail-title');
  const descEl = document.querySelector('.anatomy__detail-desc');
  const dataGridEl = document.querySelector('.anatomy__data-grid');
  const svgLayers = document.querySelectorAll('[data-anatomy-part]');

  if (!tabs.length || !titleEl || !descEl || !dataGridEl) return;

  function switchLayer(layerId) {
    const layerData = SITE_DATA.anatomy.layers.find(l => l.id === layerId);
    if (!layerData) return;

    // 1. Update Tabs
    tabs.forEach(tab => {
      const isActive = tab.getAttribute('data-layer') === layerId;
      tab.classList.toggle('is-active', isActive);
      tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    // 2. Update Details with subtle transition
    titleEl.style.opacity = '0';
    descEl.style.opacity = '0';
    dataGridEl.style.opacity = '0';

    setTimeout(() => {
      titleEl.textContent = `${layerData.title} — ${layerData.subtitle}`;
      descEl.textContent = layerData.description;

      // Render data items
      dataGridEl.innerHTML = '';
      Object.entries(layerData.data).forEach(([key, val]) => {
        const keyEl = document.createElement('div');
        keyEl.className = 'anatomy__data-key';
        keyEl.textContent = key;

        const valEl = document.createElement('div');
        valEl.className = 'anatomy__data-val';
        valEl.textContent = val;

        dataGridEl.appendChild(keyEl);
        dataGridEl.appendChild(valEl);
      });

      titleEl.style.transition = 'opacity 0.25s ease';
      descEl.style.transition = 'opacity 0.25s ease';
      dataGridEl.style.transition = 'opacity 0.25s ease';

      titleEl.style.opacity = '1';
      descEl.style.opacity = '1';
      dataGridEl.style.opacity = '1';
    }, 150);

    // 3. Highlight SVG
    svgLayers.forEach(part => {
      const partLayer = part.getAttribute('data-anatomy-part');
      if (partLayer === layerId) {
        part.classList.add('is-highlighted');
        part.classList.remove('is-dimmed');
      } else {
        part.classList.remove('is-highlighted');
        part.classList.add('is-dimmed');
      }
    });
  }

  // Bind tab clicks
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const layerId = tab.getAttribute('data-layer');
      switchLayer(layerId);
    });
  });

  // Bind SVG part clicks
  svgLayers.forEach(part => {
    part.style.cursor = 'pointer';
    part.addEventListener('click', () => {
      const layerId = part.getAttribute('data-anatomy-part');
      switchLayer(layerId);
    });
  });

  // Initial load
  switchLayer('atas');
}
