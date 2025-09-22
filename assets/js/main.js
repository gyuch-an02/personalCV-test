document.addEventListener('DOMContentLoaded', () => {
  const yearTarget = document.querySelector('[data-current-year]');
  if (yearTarget) {
    yearTarget.textContent = new Date().getFullYear().toString();
  }

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const targetId = link.getAttribute('href');
      if (!targetId || targetId === '#') {
        return;
      }

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        event.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});
