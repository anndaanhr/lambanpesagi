/* ═══════════════════════════════════════════════════════
   FLOORPLAN NAVIGATOR — Sociocultural Space & Artifacts
   ═══════════════════════════════════════════════════════ */

import { SITE_DATA } from './data.js';

export function initFloorplanNavigator() {
  const roomNameEl = document.querySelector('.floorplan__room-name');
  const roomDescEl = document.querySelector('.floorplan__room-desc');
  const hotspots = document.querySelectorAll('.hotspot');
  const roomPolys = document.querySelectorAll('[data-room-id]');
  const pillBtns = document.querySelectorAll('.floorplan__pill-btn');

  let currentRoomId = 'berkumpul';

  function selectRoom(roomId) {
    const room = SITE_DATA.floorplan.rooms.find(r => r.id === roomId);
    if (!room) return;

    currentRoomId = roomId;

    // Update pill buttons
    pillBtns.forEach(pill => {
      pill.classList.toggle('is-active', pill.getAttribute('data-room-target') === roomId);
    });

    // Update Room Details Info Box
    if (roomNameEl && roomDescEl) {
      roomNameEl.style.opacity = '0';
      roomDescEl.style.opacity = '0';

      setTimeout(() => {
        roomNameEl.textContent = room.name;
        roomDescEl.textContent = room.description;
        roomNameEl.style.transition = 'opacity 0.2s ease';
        roomDescEl.style.transition = 'opacity 0.2s ease';
        roomNameEl.style.opacity = '1';
        roomDescEl.style.opacity = '1';
      }, 100);
    }

    // Update SVG room polygons
    roomPolys.forEach(poly => {
      const pId = poly.getAttribute('data-room-id');
      if (pId === roomId) {
        poly.classList.add('is-active-room');
        poly.setAttribute('fill', 'rgba(142, 74, 35, 0.22)');
        poly.setAttribute('stroke', '#8E4A23');
        poly.setAttribute('stroke-width', '2.5');
      } else {
        poly.classList.remove('is-active-room');
        poly.setAttribute('fill', 'rgba(234, 236, 234, 0.55)');
        poly.setAttribute('stroke', 'rgba(20, 23, 22, 0.2)');
        poly.setAttribute('stroke-width', '1.5');
      }
    });

    // Update Hotspots
    hotspots.forEach(hs => {
      const hsId = hs.getAttribute('data-target-room');
      const dot = hs.querySelector('.hotspot__dot');
      if (hsId === roomId) {
        hs.classList.add('is-active');
        if (dot) dot.style.transform = 'translate(-50%, -50%) scale(1.4)';
      } else {
        hs.classList.remove('is-active');
        if (dot) dot.style.transform = 'translate(-50%, -50%) scale(1)';
      }
    });
  }

  // Click on hotspots
  hotspots.forEach(hs => {
    hs.addEventListener('click', (e) => {
      e.stopPropagation();
      const rId = hs.getAttribute('data-target-room');
      selectRoom(rId);
    });
  });

  // Click on SVG room polygons
  roomPolys.forEach(poly => {
    poly.style.cursor = 'pointer';
    poly.addEventListener('click', () => {
      const rId = poly.getAttribute('data-room-id');
      selectRoom(rId);
    });
  });

  // Click on Room Selector Pills
  pillBtns.forEach(pill => {
    pill.addEventListener('click', () => {
      const rId = pill.getAttribute('data-room-target');
      selectRoom(rId);
    });
  });

  // Select initial room
  selectRoom('berkumpul');
}
