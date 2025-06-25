// Smooth scrolling for in-page links
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('a[href^="#"]');
  for (const link of links) {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
  // Theme Toggle
  const themeToggleBtn = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.body.classList.add(savedTheme);
  themeToggleBtn.textContent = savedTheme === 'light' ? 'Dark Mode' : 'Light Mode';
  themeToggleBtn.addEventListener('click', () => {
    const newTheme = document.body.classList.contains('light') ? 'dark' : 'light';
    document.body.classList.toggle('light');
    document.body.classList.toggle('dark');
    themeToggleBtn.textContent = newTheme === 'light' ? 'Dark Mode' : 'Light Mode';
    localStorage.setItem('theme', newTheme);
  });
});

// Placeholder for future interactivity (theme toggle, animations)
// Interactive Pointer, Parallax & Gradient
(() => {
  const root = document.documentElement;
  const pointer = document.getElementById('floating-pointer');
  const trailContainer = document.querySelector('.pointer-trail');
  const layers = document.querySelectorAll('.parallax-layer');
  let ticking = false;

  function updatePointer(e) {
    const x = e.clientX, y = e.clientY;
    const w = window.innerWidth, h = window.innerHeight;
    const normX = (x / w) * 100, normY = (y / h) * 100;
    root.style.setProperty('--pointer-x', `${normX}%`);
    root.style.setProperty('--pointer-y', `${normY}%`);
    const hue = Math.round(260 + normX * 1.2);
    root.style.setProperty('--gradient-hue', hue);

    layers.forEach(layer => {
      const depth = parseFloat(layer.dataset.depth) || 0;
      const moveX = (x - w / 2) * depth;
      const moveY = (y - h / 2) * depth;
      layer.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
    });

    // trail dot
    const dot = document.createElement('div');
    dot.className = 'pointer-dot';
    dot.style.left = `${x}px`;
    dot.style.top = `${y}px`;
    trailContainer.appendChild(dot);
    setTimeout(() => dot.remove(), 800);
  }

  document.addEventListener('mousemove', e => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(() => {
        updatePointer(e);
        ticking = false;
      });
    }
  });

  // Scroll-triggered fade-up
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('[data-animate="fade-up"]').forEach(el => {
    el.classList.add('fade-up');
    observer.observe(el);
  });
})();