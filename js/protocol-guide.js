/* ═══════════════════════════════════════════════════════
   PROTOCOL GUIDE — Cultural Etiquette & Field Directory
   ═══════════════════════════════════════════════════════ */

import { SITE_DATA } from './data.js';

export function initProtocolGuide() {
  const protocolCards = document.querySelectorAll('.protocol-card');
  const copyBtn = document.querySelector('#btn-copy-address');
  const copyStatus = document.querySelector('#copy-status');

  // 1. Interactive Protocol Card Accordion / Highlight
  protocolCards.forEach(card => {
    card.addEventListener('click', () => {
      const isAlreadyActive = card.classList.contains('is-expanded');
      
      // Close other cards for clean accordion behavior
      protocolCards.forEach(c => c.classList.remove('is-expanded'));

      if (!isAlreadyActive) {
        card.classList.add('is-expanded');
      }
    });
  });

  // 2. Copy Location / Address to Clipboard
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const textToCopy = "Pekon Kenali, Kecamatan Belalau, Kabupaten Lampung Barat, Lampung (Lamban Pesagi)";
      navigator.clipboard.writeText(textToCopy).then(() => {
        if (copyStatus) {
          copyStatus.textContent = "ALAMAT DISALIN KE PAPAN KLIP";
          copyStatus.style.opacity = "1";
          setTimeout(() => {
            copyStatus.style.opacity = "0";
          }, 3000);
        }
      }).catch(() => {
        if (copyStatus) {
          copyStatus.textContent = "Lokasi: Pekon Kenali, Belalau";
        }
      });
    });
  }
}
