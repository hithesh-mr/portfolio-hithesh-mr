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
  const themeToggleCheckbox = document.getElementById('theme-toggle-checkbox');
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.body.classList.add(savedTheme);
  themeToggleCheckbox.checked = savedTheme === 'dark';
  themeToggleCheckbox.addEventListener('change', () => {
    const newTheme = themeToggleCheckbox.checked ? 'dark' : 'light';
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
  });

  // Back to Top Button
  const backToTopButton = document.getElementById('backToTop');
  
  // Show/hide back to top button on scroll
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      backToTopButton.classList.add('visible');
    } else {
      backToTopButton.classList.remove('visible');
    }
  });

  // Smooth scroll to top
  backToTopButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Add hover effect to interactive links
  const interactiveLinks = document.querySelectorAll('.interactive-link');
  interactiveLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      link.style.transform = 'translateY(-2px)';
    });
    link.addEventListener('mouseleave', () => {
      link.style.transform = 'translateY(0)';
    });
  });

  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // Add animation class to elements when they come into view
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('[data-aos]');
    elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementTop < windowHeight - 100) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  };

  // Initial check for elements in viewport
  animateOnScroll();
  
  // Check on scroll
  window.addEventListener('scroll', animateOnScroll);

  // Add hover effect to profile images
  const profileImages = document.querySelectorAll('.hero-image img, .about-image img');
  profileImages.forEach(img => {
    img.addEventListener('mousemove', (e) => {
      const { left, top, width, height } = e.target.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      
      e.target.style.transform = `translateY(-5px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg)`;
    });
    
    img.addEventListener('mouseleave', (e) => {
      e.target.style.transform = 'translateY(-5px)';
    });
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