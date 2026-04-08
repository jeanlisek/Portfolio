/* ============================================
   JOLIMENT.FR — main.js
   ============================================ */

// Custom cursor
const cursor = document.createElement('div');
cursor.className = 'cursor';
const cursorRing = document.createElement('div');
cursorRing.className = 'cursor-ring';
document.body.appendChild(cursor);
document.body.appendChild(cursorRing);

let mouseX = 0, mouseY = 0;
let ringX = 0, ringY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
});

function animateRing() {
  ringX += (mouseX - ringX) * 0.12;
  ringY += (mouseY - ringY) * 0.12;
  cursorRing.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
  requestAnimationFrame(animateRing);
}
animateRing();

// Scale cursor on hover
document.querySelectorAll('a, button, .project-card, .project-item, .blog-card, .collab-project-card').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%) scale(1.8)`;
    cursorRing.style.opacity = '0.3';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%) scale(1)`;
    cursorRing.style.opacity = '1';
  });
});

// Hide cursor on mobile
if ('ontouchstart' in window) {
  cursor.style.display = 'none';
  cursorRing.style.display = 'none';
}

// Mobile burger menu
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');

if (burger && mobileMenu) {
  burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    const spans = burger.querySelectorAll('span');
    if (mobileMenu.classList.contains('open')) {
      spans[0].style.transform = 'translateY(6.5px) rotate(45deg)';
      spans[1].style.transform = 'translateY(-6.5px) rotate(-45deg)';
    } else {
      spans[0].style.transform = '';
      spans[1].style.transform = '';
    }
  });
}

// Nav scroll behavior
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    nav.style.padding = '14px 40px';
  } else {
    nav.style.padding = '20px 40px';
  }
});

// Scroll reveal
const revealEls = document.querySelectorAll('.project-card, .project-item, .blog-card, .collab-project-card, .blog-preview-card, .sidebar-card, .skill-item, .contact-link');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '0';
      entry.target.style.transform = 'translateY(20px)';
      entry.target.style.transition = `opacity 0.5s ease ${i * 0.06}s, transform 0.5s ease ${i * 0.06}s`;
      setTimeout(() => {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }, 50);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealEls.forEach(el => {
  el.style.opacity = '0';
  observer.observe(el);
});

// Projects filter
const filterBtns = document.querySelectorAll('.filter-btn');
if (filterBtns.length) {
  const items = document.querySelectorAll('.project-item');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      items.forEach(item => {
        const tags = item.dataset.tags || '';
        item.style.display = (filter === 'all' || tags.includes(filter)) ? 'block' : 'none';
      });
    });
  });
}
