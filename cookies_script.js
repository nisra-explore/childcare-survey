let cookieBanner = document.getElementById('cookie-banner');
cookieBanner.style.display = "none";

if (window.location.protocol != "file:") {

  cookieBanner.classList.add("cookies-infobar");
  cookieBanner.style.width = "100%";
  cookieBanner.role = "cookies-information";
  
  cookieBanner.innerHTML =
    '<div class="container-fluid main-container">' +
  '<p><strong>Cookies on the Northern Ireland Statistics and Research Agency website</strong></p>' +
  '<p>This prototype web page places small amounts of information known as cookies on your device. <a href = "https://www.nisra.gov.uk/cookies" class = "cookiesbarlink" target = "_blank" rel = "noopener noreferrer">Find out more about cookies</a>.</p>' +
  '<button id="accept-cookies" class="cookies-infobar_btn">Accept cookies</button>' +
  '<button id="reject-cookies" class="cookies-infobar_btn_reject">Reject cookies</button>' +
  '</div>';
 
 const today = new Date();

  document.getElementById('accept-cookies').onclick = function() {
    localStorage.setItem('cookie_answered', "true");
    localStorage.setItem('cookie_date', today);
    cookieBanner.style.display = 'none';
    loadGoogleAnalytics();
  };

  document.getElementById('reject-cookies').onclick = function() {
    localStorage.setItem('cookie_answered', "true");
    localStorage.setItem('cookie_date', today);
    cookieBanner.style.display = 'none';
  };
  
  function loadGoogleAnalytics() {
  
      (function(w, d, s, l, i){
        w[l] = w[l]||[];
        w[l].push({'gtm.start': new Date().getTime(),
                    event:'gtm.js'});
        var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s),
            dl = l !='dataLayer'?'&l='+l: '';
        j.async = true;
        j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
        f.parentNode.insertBefore(j,f);
    })
    (window,document,'script','dataLayer','GTM-KF6WGSG');
  
  }
  
 function showCookieBanner() {
    const cookieDate = localStorage.getItem('cookie_date');
    const answered = localStorage.getItem('cookie_answered');
    if (cookieDate) {
      const diff = (today - new Date(cookieDate)) / 1000 / 60 / 60 / 24;
      if (diff > 365) {
        localStorage.removeItem("cookie_answered");
        localStorage.removeItem("cookie_date");
      }
    }
    if (answered !== "true") {
      cookieBanner.style.display = 'block';
    }
  }

  document.addEventListener('DOMContentLoaded', showCookieBanner);
}