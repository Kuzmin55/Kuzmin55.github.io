document.addEventListener("DOMContentLoaded", function () {
  const currentYear = document.getElementById("year");
  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  const defaultLanguage = localStorage.getItem("site-language") || "ru";
  window.siteI18n.applyTranslations(defaultLanguage);

  document.querySelectorAll(".lang-btn").forEach((button) => {
    button.addEventListener("click", function () {
      const selectedLang = button.dataset.lang;
      window.siteI18n.applyTranslations(selectedLang);
    });
  });

  const revealElements = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12
      }
    );

    revealElements.forEach((element) => observer.observe(element));
  } else {
    revealElements.forEach((element) => element.classList.add("is-visible"));
  }
});
