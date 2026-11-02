(() => {
  const button = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  if (button && nav) {
    button.addEventListener('click', () => {
      const open = button.getAttribute('aria-expanded') !== 'true';
      button.setAttribute('aria-expanded', String(open));
      button.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
      nav.classList.toggle('is-open', open);
    });
    nav.addEventListener('click', e => {
      if (e.target.closest('a')) { nav.classList.remove('is-open'); button.setAttribute('aria-expanded', 'false'); button.setAttribute('aria-label', 'Open navigation'); }
    });
  }
  const themeButton = document.querySelector('.theme-toggle');
  const root = document.documentElement;
  let savedTheme = null;
  try { savedTheme = localStorage.getItem('alilauncher-theme'); } catch {}
  root.dataset.theme = savedTheme === 'light' ? 'light' : 'dark';
  const updateThemeButton = () => {
    const light = root.dataset.theme === 'light';
    const themeMeta = document.querySelector('meta[name="theme-color"]');
    if (themeMeta) themeMeta.content = light ? '#f7f9f8' : '#0b100e';
    if (themeButton) {
      themeButton.setAttribute('aria-label', light ? 'Switch to dark mode' : 'Switch to light mode');
      themeButton.title = light ? 'Switch to dark mode' : 'Switch to light mode';
      themeButton.querySelector('.theme-toggle-label').textContent = light ? 'Dark mode' : 'Light mode';
      themeButton.querySelector('[aria-hidden]').textContent = light ? '◐' : '☼';
    }
  };
  updateThemeButton();
  themeButton?.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light';
    try { localStorage.setItem('alilauncher-theme', root.dataset.theme); } catch {}
    updateThemeButton();
  });
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    }), { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  } else document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));
})();
