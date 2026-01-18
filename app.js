// Mobile menu
const toggle = document.querySelector(".nav__toggle");
const links = document.querySelector(".nav__links");
if (toggle && links) {
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
}

// Year in footer
const y = document.getElementById("year");
if (y) y.textContent = String(new Date().getFullYear());
