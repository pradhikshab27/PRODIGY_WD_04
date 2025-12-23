// Smooth scroll reveal with depth
const elements = document.querySelectorAll(
  ".about-content, .profile-card, .skills-grid div, .project-card"
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0) scale(1)";
        entry.target.style.transitionDelay = `${index * 0.08}s`;
      }
    });
  },
  { threshold: 0.15 }
);

elements.forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(80px) scale(0.96)";
  el.style.transition = "1s cubic-bezier(0.19, 1, 0.22, 1)";
  observer.observe(el);
});

// Parallax depth for hero background
window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;
  const hero = document.querySelector(".hero");
  hero.style.backgroundPositionY = `${scrolled * 0.4}px`;
});
