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

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === lang);
    });

    const titles = {
      ru: "Ilya Kuzmin — Сайты, Telegram-боты, AI-автоматизация",
      en: "Ilya Kuzmin — Websites, Telegram Bots, AI Automation"
    };

    document.title = titles[lang] || titles.ru;
  }

  window.siteI18n = {
    applyTranslations
  };
})();
