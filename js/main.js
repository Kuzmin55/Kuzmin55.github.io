
document.addEventListener("DOMContentLoaded", function () {
  const currentYear = document.getElementById("year");
  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  const defaultLanguage = localStorage.getItem("site-language") || "ru";
  window.siteI18n.applyTranslations(defaultLanguage);

  const langButtons = document.querySelectorAll(".lang-btn");
  langButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const selectedLang = button.dataset.lang;
      window.siteI18n.applyTranslations(selectedLang);
    });
  });
});
