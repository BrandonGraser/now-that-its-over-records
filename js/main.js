/* ============================================
   NOW THAT ITS OVER RECORDS — main.js
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ---- Scale header title to fill full available width ----
  function fitLogoText() {
    const el = document.querySelector('.logo-text');
    if (!el) return;
    // Reset first
    el.style.fontSize = '10px';
    const available = el.parentElement.clientWidth - (el.parentElement.querySelector('.logo-icon')?.offsetWidth || 0);
    const ratio = available / el.scrollWidth;
    el.style.fontSize = (10 * ratio * 0.97) + 'px'; // 0.97 = slight breathing room
  }

  fitLogoText();
  window.addEventListener('resize', fitLogoText);


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
