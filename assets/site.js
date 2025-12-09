(function () {
  // Lazy-load sidebar images
  document.querySelectorAll('.sidebar img').forEach((img) => {
    if (!img.getAttribute('loading')) img.setAttribute('loading', 'lazy');
    if (!img.getAttribute('decoding')) img.setAttribute('decoding', 'async');
  });
})();
