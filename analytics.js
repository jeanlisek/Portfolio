(function () {
  const GA_ID = 'G-T3NNT40K1W';
  const STORAGE_KEY = 'joliment-cookie-consent';

  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = gtag;

  gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
    wait_for_update: 500
  });

  gtag('js', new Date());
  gtag('config', GA_ID, { anonymize_ip: true });

  const gaScript = document.createElement('script');
  gaScript.async = true;
  gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
  document.head.appendChild(gaScript);

  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'accepted') {
    gtag('consent', 'update', { analytics_storage: 'granted' });
  }

  function showBanner() {
    if (document.getElementById('cookie-banner')) return;
    const banner = document.createElement('div');
    banner.id = 'cookie-banner';
    banner.className = 'cookie-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-label', 'Consentement cookies');
    banner.innerHTML =
      '<p class="cookie-banner-text">' +
        'Ce site utilise <strong>Google Analytics</strong> pour mesurer son audience de manière anonyme. ' +
        'Aucune donnée personnelle, aucun tracking publicitaire.' +
      '</p>' +
      '<div class="cookie-banner-actions">' +
        '<button class="cookie-banner-btn cookie-banner-btn--ghost" id="cookie-refuse">Refuser</button>' +
        '<button class="cookie-banner-btn cookie-banner-btn--primary" id="cookie-accept">Accepter</button>' +
      '</div>';
    document.body.appendChild(banner);

    requestAnimationFrame(function () {
      banner.classList.add('cookie-banner--visible');
    });

    document.getElementById('cookie-accept').addEventListener('click', function () {
      localStorage.setItem(STORAGE_KEY, 'accepted');
      gtag('consent', 'update', { analytics_storage: 'granted' });
      hideBanner();
    });

    document.getElementById('cookie-refuse').addEventListener('click', function () {
      localStorage.setItem(STORAGE_KEY, 'refused');
      hideBanner();
    });
  }

  function hideBanner() {
    const banner = document.getElementById('cookie-banner');
    if (!banner) return;
    banner.classList.remove('cookie-banner--visible');
    setTimeout(function () { banner.remove(); }, 300);
  }

  function injectFooterLink() {
    const footers = document.querySelectorAll('.footer-bottom');
    footers.forEach(function (footer) {
      if (footer.querySelector('.cookie-settings-link')) return;
      const link = document.createElement('a');
      link.href = '#';
      link.className = 'cookie-settings-link';
      link.textContent = 'Gérer les cookies';
      link.addEventListener('click', function (e) {
        e.preventDefault();
        localStorage.removeItem(STORAGE_KEY);
        gtag('consent', 'update', { analytics_storage: 'denied' });
        showBanner();
      });
      footer.appendChild(link);
    });
  }

  function init() {
    if (!localStorage.getItem(STORAGE_KEY)) showBanner();
    injectFooterLink();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
