(function () {
  function getTranslations(lang) {
    if (!window.translations || !window.translations[lang]) {
      return {};
    }
    return window.translations[lang];
  }

  function applyTranslations(lang) {
    const dictionary = getTranslations(lang);
    const nodes = document.querySelectorAll("[data-i18n]");

    nodes.forEach((node) => {
      const key = node.getAttribute("data-i18n");
      const value = dictionary[key];

      if (!value) return;

      node.textContent = value;
    });

    document.documentElement.lang = lang;
    localStorage.setItem("site-language", lang);

    const buttons = document.querySelectorAll(".lang-btn");
    buttons.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === lang);
    });

    const titles = {
      ru: "Ilya Kuzmin — Websites, AI Automation, Telegram Bots",
      en: "Ilya Kuzmin — Websites, AI Automation, Telegram Bots"
    };

    document.title = titles[lang] || titles.ru;
  }

  window.siteI18n = {
    applyTranslations
  };
})();
