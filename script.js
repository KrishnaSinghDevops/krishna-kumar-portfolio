document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("mainNav");
  const progress = document.getElementById("progressLine");
  const year = document.getElementById("year");
  const linkedinBtn = document.getElementById("linkedinBtn");

  year.textContent = new Date().getFullYear();

  // IMPORTANT: replace this with the real LinkedIn profile URL.
  // linkedinBtn.addEventListener("click", (e) => {
  //   e.preventDefault();
  //   alert("Please add your LinkedIn profile URL in index.html (search for: Replace # with the actual LinkedIn profile URL).");
  // });

  const updateScrollUI = () => {
    nav.classList.toggle("scrolled", window.scrollY > 20);
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
  };
  window.addEventListener("scroll", updateScrollUI, { passive: true });
  updateScrollUI();

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

  // Close mobile menu after navigation.
  document.querySelectorAll(".navbar-nav .nav-link").forEach(link => {
    link.addEventListener("click", () => {
      const menu = document.getElementById("navMenu");
      if (menu.classList.contains("show")) {
        bootstrap.Collapse.getOrCreateInstance(menu).hide();
      }
    });
  });
});
