const header__toggle = document.getElementById("header__toggle");
const header__close = document.getElementById("header__close");
const headerNav = document.querySelector("header nav");
const header = document.querySelector("header");

const sections = document.querySelectorAll("section[id]");

header__toggle.addEventListener("click", () => {
  headerNav.classList.toggle("active");
  header__close.style.display = "block";
});

header__close.addEventListener("click", () => {
  headerNav.classList.toggle("active");
  header__close.style.display = "none";
});
headerNav.querySelectorAll("a").forEach((item) => {
  item.addEventListener("click", () => {
    headerNav.classList.remove("active");
    header__close.style.display = "none";
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > header.clientHeight) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 64;
    const id = section.getAttribute("id");

    if (scrollY > sectionTop && scrollY < sectionTop + sectionHeight) {
      document
        .querySelector("header nav a[href*=" + id + "]")
        .classList.add("active");
    } else {
      document
        .querySelector("header nav  a[href*=" + id + "]")
        .classList.remove("active");
    }
  });
});

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset: true
});

sr.reveal(".hero__container", { origin: "top" });
sr.reveal(".destination__item", {
  interval: 300,
  distance: "30px",
});
sr.reveal(".faq__img", {
  origin: "left",
});
sr.reveal(".faq__info", {
  origin: "right",
});
sr.reveal(".vacation", {});
