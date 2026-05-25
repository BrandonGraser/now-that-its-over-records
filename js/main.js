/* ============================================
   NOW THAT ITS OVER RECORDS — main.js
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {


  // ---- Active nav link ----
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href').split('/').pop();
    if (href === currentPath) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // ---- Placeholder images: swap broken images for CSS placeholders ----
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function () {
      this.style.minWidth = this.style.minWidth || '60px';
      this.style.minHeight = this.style.minHeight || '60px';
      this.style.backgroundColor = '#d4d0c8';
      this.removeAttribute('src'); // prevent repeated error firing
    });
  });

});
