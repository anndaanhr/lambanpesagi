/* ═══════════════════════════════════════════════════════
   JOINERY EXPLORER — Zero-Nail Wood Joint Pull-Apart
   ═══════════════════════════════════════════════════════ */

import { SITE_DATA } from './data.js';

export function initJoineryExplorer() {
  const cards = document.querySelectorAll('.joinery__card');
  const slider = document.querySelector('.range-slider');
  const titleEl = document.querySelector('.joinery__info h4');
  const descEl = document.querySelector('.joinery__info p');
  const locationEl = document.querySelector('.joinery__location-val');
  const svgContainer = document.querySelector('.joinery__svg-area');

  let currentTechnique = 'tanggam-purus';

  function renderTechnique(id) {
    const data = SITE_DATA.joinery.techniques.find(t => t.id === id);
    if (!data) return;

    currentTechnique = id;

    // Update active card
    cards.forEach(card => {
      card.classList.toggle('is-active', card.getAttribute('data-joint') === id);
    });

    // Update text
    if (titleEl) titleEl.textContent = `${data.name} (${data.english})`;
    if (descEl) descEl.textContent = data.description;
    if (locationEl) locationEl.textContent = data.location;

    // Reset slider
    if (slider) {
      slider.value = 0;
    }

    // Render corresponding SVG
    updateSvgDiagram(id, 0);
  }

  function updateSvgDiagram(id, progress) {
    if (!svgContainer) return;

    const p = progress / 100;
    const statusText = p < 0.1 ? 'STATUS: TERKUNCI' : p > 0.8 ? 'STATUS: TERURAI' : 'STATUS: PELEPASAN';

    if (id === 'tanggam-purus') {
      const tenonOffset = p * 55;
      svgContainer.innerHTML = `
        <svg viewBox="0 0 320 240" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" class="joinery-svg">
          <defs>
            <linearGradient id="woodGrad1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#C59B27" stop-opacity="0.8"/>
              <stop offset="100%" stop-color="#9E3B24" stop-opacity="0.9"/>
            </linearGradient>
            <linearGradient id="woodGrad2" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#8A8173" stop-opacity="0.7"/>
              <stop offset="100%" stop-color="#5C5346" stop-opacity="0.85"/>
            </linearGradient>
          </defs>

          <!-- Grid Blueprint Lines -->
          <line x1="40" y1="120" x2="280" y2="120" stroke="rgba(244,239,230,0.1)" stroke-dasharray="3,3" />
          <line x1="160" y1="30" x2="160" y2="210" stroke="rgba(244,239,230,0.1)" stroke-dasharray="3,3" />

          <!-- MORTISE -->
          <g class="joint-mortise">
            <rect x="70" y="130" width="180" height="70" fill="url(#woodGrad2)" stroke="#EDE5D5" stroke-width="1.5"/>
            <rect x="130" y="130" width="60" height="35" fill="#1C1917" stroke="#EDE5D5" stroke-width="1.5" stroke-dasharray="4,2"/>
            <text x="160" y="180" font-family="var(--font-mono)" font-size="10" fill="#EDE5D5" text-anchor="middle" letter-spacing="1">BALOK TANGGAM (MORTISE)</text>
          </g>

          <!-- TENON -->
          <g class="joint-tenon" transform="translate(0, -${tenonOffset})" style="transition: transform 0.08s ease-out;">
            <rect x="100" y="40" width="120" height="70" fill="url(#woodGrad1)" stroke="#EDE5D5" stroke-width="1.5"/>
            <rect x="132" y="110" width="56" height="32" fill="#C59B27" stroke="#F4EFE6" stroke-width="2"/>
            <text x="160" y="80" font-family="var(--font-mono)" font-size="10" fill="#F4EFE6" text-anchor="middle" font-weight="600" letter-spacing="1">TIANG PURUS (TENON)</text>
          </g>

          <!-- Technical Callouts -->
          <text x="290" y="50" font-family="var(--font-mono)" font-size="9" fill="#C59B27" text-anchor="end">CELAH: ${(p * 25).toFixed(1)} mm</text>
          <text x="290" y="66" font-family="var(--font-mono)" font-size="8" fill="#8A8173" text-anchor="end">${statusText}</text>
        </svg>
      `;
    } else if (id === 'pasak-kayu') {
      const pegOffset = p * 65;
      svgContainer.innerHTML = `
        <svg viewBox="0 0 320 240" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" class="joinery-svg">
          <line x1="40" y1="120" x2="280" y2="120" stroke="rgba(244,239,230,0.1)" stroke-dasharray="3,3" />

          <!-- Induk Balok -->
          <rect x="80" y="80" width="160" height="80" fill="#5C5346" stroke="#EDE5D5" stroke-width="1.5"/>
          <line x1="160" y1="80" x2="160" y2="160" stroke="#EDE5D5" stroke-width="1.5" stroke-dasharray="4,3"/>

          <!-- Lubang Pasak -->
          <circle cx="160" cy="120" r="14" fill="#1C1917" stroke="#C59B27" stroke-width="1.5"/>

          <!-- Pasak Kayu -->
          <g transform="translate(0, -${pegOffset})" style="transition: transform 0.08s ease-out;">
            <polygon points="152,70 168,70 165,140 155,140" fill="#C59B27" stroke="#F4EFE6" stroke-width="2"/>
            <circle cx="160" cy="65" r="9" fill="#9E3B24" stroke="#EDE5D5" stroke-width="1.5"/>
            <text x="160" y="50" font-family="var(--font-mono)" font-size="10" fill="#F4EFE6" text-anchor="middle" font-weight="600">PASAK KAYU</text>
          </g>

          <text x="160" y="200" font-family="var(--font-mono)" font-size="10" fill="#EDE5D5" text-anchor="middle" letter-spacing="1">PENGUNCI SEISMIK MELINTANG</text>
          <text x="290" y="50" font-family="var(--font-mono)" font-size="9" fill="#C59B27" text-anchor="end">PENETRASI: ${(100 - p * 100).toFixed(0)}%</text>
          <text x="290" y="66" font-family="var(--font-mono)" font-size="8" fill="#8A8173" text-anchor="end">${statusText}</text>
        </svg>
      `;
    } else if (id === 'jepit') {
      const clampOffset = p * 40;
      svgContainer.innerHTML = `
        <svg viewBox="0 0 320 240" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" class="joinery-svg">
          <rect x="130" y="40" width="60" height="160" fill="#8A8173" stroke="#EDE5D5" stroke-width="1.5"/>
          <text x="160" y="125" font-family="var(--font-mono)" font-size="9" fill="#EDE5D5" text-anchor="middle">KOMPONEN INTI</text>

          <g transform="translate(-${clampOffset}, 0)" style="transition: transform 0.08s ease-out;">
            <rect x="75" y="65" width="45" height="110" fill="#9E3B24" stroke="#F4EFE6" stroke-width="1.5"/>
            <text x="97" y="125" font-family="var(--font-mono)" font-size="9" fill="#F4EFE6" text-anchor="middle">PAPAN L</text>
          </g>

          <g transform="translate(${clampOffset}, 0)" style="transition: transform 0.08s ease-out;">
            <rect x="200" y="65" width="45" height="110" fill="#9E3B24" stroke="#F4EFE6" stroke-width="1.5"/>
            <text x="222" y="125" font-family="var(--font-mono)" font-size="9" fill="#F4EFE6" text-anchor="middle">PAPAN R</text>
          </g>

          <text x="160" y="215" font-family="var(--font-mono)" font-size="10" fill="#EDE5D5" text-anchor="middle" letter-spacing="1">DISTRIBUSI BEBAN VERTIKAL-TRANSVERSAL</text>
          <text x="290" y="50" font-family="var(--font-mono)" font-size="9" fill="#C59B27" text-anchor="end">CENGKERAM: ${(100 - p * 100).toFixed(0)}%</text>
          <text x="290" y="66" font-family="var(--font-mono)" font-size="8" fill="#8A8173" text-anchor="end">${statusText}</text>
        </svg>
      `;
    } else if (id === 'miring') {
      const scarfOffset = p * 45;
      svgContainer.innerHTML = `
        <svg viewBox="0 0 320 240" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" class="joinery-svg">
          <g transform="translate(-${scarfOffset}, 0)" style="transition: transform 0.08s ease-out;">
            <polygon points="50,90 170,90 140,150 50,150" fill="#8A8173" stroke="#EDE5D5" stroke-width="1.5"/>
            <text x="95" y="125" font-family="var(--font-mono)" font-size="9" fill="#F4EFE6" text-anchor="middle">BALOK A</text>
          </g>

          <g transform="translate(${scarfOffset}, 0)" style="transition: transform 0.08s ease-out;">
            <polygon points="172,90 270,90 270,150 142,150" fill="#C59B27" stroke="#F4EFE6" stroke-width="1.5"/>
            <text x="220" y="125" font-family="var(--font-mono)" font-size="9" fill="#1C1917" text-anchor="middle">BALOK B</text>
          </g>

          <line x1="141" y1="150" x2="171" y2="90" stroke="#9E3B24" stroke-width="2" stroke-dasharray="4,2"/>

          <text x="160" y="195" font-family="var(--font-mono)" font-size="10" fill="#EDE5D5" text-anchor="middle" letter-spacing="1">SAMBUNGAN BENTANGAN HORIZONTAL</text>
          <text x="290" y="50" font-family="var(--font-mono)" font-size="9" fill="#C59B27" text-anchor="end">KONTAK: ${(100 - p * 80).toFixed(0)}%</text>
          <text x="290" y="66" font-family="var(--font-mono)" font-size="8" fill="#8A8173" text-anchor="end">${statusText}</text>
        </svg>
      `;
    } else if (id === 'ikatan') {
      const lashScale = 1 + p * 0.35;
      svgContainer.innerHTML = `
        <svg viewBox="0 0 320 240" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" class="joinery-svg">
          <rect x="140" y="30" width="40" height="180" rx="2" fill="#8A8173" stroke="#EDE5D5" stroke-width="1.5"/>
          <rect x="50" y="100" width="220" height="40" rx="2" fill="#5C5346" stroke="#EDE5D5" stroke-width="1.5"/>

          <g transform="translate(160, 120) scale(${lashScale}) translate(-160, -120)" style="transition: transform 0.08s ease-out;">
            <circle cx="160" cy="120" r="28" stroke="#C59B27" stroke-width="3" stroke-dasharray="5,3" fill="rgba(197,155,39,0.15)"/>
            <line x1="135" y1="95" x2="185" y2="145" stroke="#9E3B24" stroke-width="2.5"/>
            <line x1="185" y1="95" x2="135" y2="145" stroke="#9E3B24" stroke-width="2.5"/>
          </g>

          <text x="160" y="215" font-family="var(--font-mono)" font-size="10" fill="#EDE5D5" text-anchor="middle" letter-spacing="1">IKATAN IJUK FLEKSIBEL PEREDAM SEISMIK</text>
          <text x="290" y="50" font-family="var(--font-mono)" font-size="9" fill="#C59B27" text-anchor="end">KERAPATAN: ${(100 - p * 90).toFixed(0)}%</text>
          <text x="290" y="66" font-family="var(--font-mono)" font-size="8" fill="#8A8173" text-anchor="end">${statusText}</text>
        </svg>
      `;
    }
  }

  // Card click bindings
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-joint');
      renderTechnique(id);
    });
  });

  // Slider change bindings
  if (slider) {
    slider.addEventListener('input', (e) => {
      const val = parseFloat(e.target.value);
      updateSvgDiagram(currentTechnique, val);
    });
  }

  // Initial render
  renderTechnique('tanggam-purus');
}
