// ORa Pitch Deck - Reveal.js Initialization

// Initialize Reveal.js
Reveal.initialize({
  hash: true,
  transition: 'slide',
  transitionSpeed: 'default',
  backgroundTransition: 'fade',
  slideNumber: 'c/t',
  progress: true,
  controls: true,
  controlsTutorial: true,
  overview: true,
  center: false,
  touch: true,
  loop: false,
  rtl: false,
  navigationMode: 'default',
  shuffle: false,
  fragments: true,
  fragmentInURL: true,
  embedded: false,
  help: true,
  pause: true,
  showNotes: false,
  autoPlayMedia: null,
  preloadIframes: null,
  autoAnimate: true,
  autoAnimateMatcher: null,
  autoAnimateEasing: 'ease',
  autoAnimateDuration: 1.0,
  autoAnimateUnmatched: true,
  autoSlide: 0,
  autoSlideStoppable: true,
  mouseWheel: false,
  previewLinks: false,
  postMessage: true,
  postMessageEvents: false,
  focusBodyOnPageVisibilityChange: true,
  keyboard: true,
  disableLayout: false,
  width: 1920,
  height: 1080,
  margin: 0.04,
  minScale: 0.2,
  maxScale: 2.0,
  display: 'block'
});

// Initialize Lucide icons after Reveal is ready
Reveal.on('ready', function() {
  if (window.lucide) {
    lucide.createIcons();
  }
});

// Re-render icons after each slide change
Reveal.on('slidechanged', function(event) {
  if (window.lucide) {
    lucide.createIcons();
  }
  
  // Masquer le logo fixe sur la première slide
  const logo = document.querySelector('.ora-logo');
  if (logo) {
    if (event.indexh === 0) {
      logo.style.display = 'none';
    } else {
      logo.style.display = 'block';
    }
  }
});

// Masquer le logo sur la première slide au chargement
Reveal.on('ready', function(event) {
  const logo = document.querySelector('.ora-logo');
  if (logo && event.indexh === 0) {
    logo.style.display = 'none';
  }
});
