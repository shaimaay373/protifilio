
    // ─── THEME TOGGLE ───
    const toggle = document.getElementById('themeToggle');
    const html = document.documentElement;

    const savedTheme = localStorage.getItem('theme') || 'dark';
    html.setAttribute('data-theme', savedTheme);

    toggle.addEventListener('click', () => {
      const current = html.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    });

    // ─── CURSOR GLOW ───
    const glow = document.getElementById('cursorGlow');
    document.addEventListener('mousemove', (e) => {
      glow.style.opacity = '1';
      glow.style.left = e.clientX + 'px';
      glow.style.top = e.clientY + 'px';
    });
    document.addEventListener('mouseleave', () => { glow.style.opacity = '0'; });

    // ─── SCROLL ANIMATIONS ───
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, entry.target.dataset.delay || 0);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.fade-up').forEach((el, i) => {
      el.dataset.delay = (i % 3) * 100;
      observer.observe(el);
    });

    // ─── NAV ACTIVE LINK ───
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 80) current = sec.id;
      });
      navLinks.forEach(a => {
        a.style.color = a.getAttribute('href') === '#' + current
          ? 'var(--accent2)' : '';
      });
    });

    // ─── COUNTER ANIMATION ───
    function animateCounter(el) {
      const target = parseInt(el.textContent);
      let count = 0;
      const step = Math.ceil(target / 40);
      const timer = setInterval(() => {
        count = Math.min(count + step, target);
        el.textContent = '+' + count;
        if (count >= target) clearInterval(timer);
      }, 40);
    }

    const counterObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.metric-num').forEach(animateCounter);
          counterObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    document.querySelectorAll('.about-metrics').forEach(el => counterObs.observe(el));

    // ─── SKILL BARS ANIMATION ───
    const skillObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.skill-bar').forEach((bar, i) => {
            setTimeout(() => {
              bar.style.animation = `grow 1.2s ease ${i * 0.15}s forwards`;
            }, 100);
          });
          skillObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    document.querySelectorAll('.skills-grid').forEach(el => skillObs.observe(el));
