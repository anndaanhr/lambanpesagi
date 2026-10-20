/* ═══════════════════════════════════════════════════════
   APP.JS — Main Orchestrator for Lamban Pesagi Platform
   ═══════════════════════════════════════════════════════ */

import { initNavigation } from './navigation.js';
import { initScrollAnimations } from './scroll-animations.js';
import { initAnatomyViewer } from './anatomy-viewer.js';
import { initJoineryExplorer } from './joinery-explorer.js';
import { initFloorplanNavigator } from './floorplan-navigator.js';
import { initProtocolGuide } from './protocol-guide.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all interactive components
  initNavigation();
  initScrollAnimations();
  initAnatomyViewer();
  initJoineryExplorer();
  initFloorplanNavigator();
  initProtocolGuide();

  console.log('Lamban Pesagi Platform initialized.');
});
