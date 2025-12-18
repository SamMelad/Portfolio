(() => {
  // Footer year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Close navbar on link click (mobile)
  const navCollapse = document.getElementById("navbarSupportedContent");
  document.querySelectorAll(".navbar .nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      if (navCollapse && navCollapse.classList.contains("show")) {
        navCollapse.classList.remove("show");
      }
    });
  });

  // Active link on scroll
  const sections = Array.from(document.querySelectorAll("header[id], section[id]"));
  const links = Array.from(document.querySelectorAll(".navbar .nav-link"));

  const setActive = () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    const offset = 130;

    let currentId = "";
    for (const el of sections) {
      const top = el.getBoundingClientRect().top + scrollY;
      if (scrollY + offset >= top) currentId = el.id;
    }

    links.forEach((a) => {
      const href = a.getAttribute("href") || "";
      const isActive = href === `#${currentId}`;
      a.classList.toggle("active", Boolean(currentId) && isActive);
    });
  };

  window.addEventListener("scroll", setActive, { passive: true });
  window.addEventListener("load", setActive);
})();


