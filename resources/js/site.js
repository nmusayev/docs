import { Alpine, Livewire } from '../../vendor/livewire/livewire/dist/livewire.esm';
import intersect from '@alpinejs/intersect';
import './collapsible-side-menu.js';
import './anchors.js';
import './cookies.js';
import './color-scheme-preferences.js';
import './font-preferences.js';
import './external-links.js';
import './dl.js';
import './tables.js';
import './language-badges.js';
import './dayjs.js';
import './docsearch.js';
import './torchlight.js';
import './toc-navigation.js';

// Register plugins before starting Alpine
Alpine.plugin(intersect);

// Start Alpine
Livewire.start();
window.Alpine = Alpine;
