(function () {
  var key = "showcase-lang";
  var params = new URLSearchParams(location.search);
  var param = params.get("lang");
  var saved = localStorage.getItem(key);
  var cookieMatch = document.cookie.match(/(?:^|;\s*)locale=(zh|en)/);
  var browser = (navigator.language || "zh").toLowerCase();

  var lang =
    param === "zh" || param === "en"
      ? param
      : saved === "zh" || saved === "en"
        ? saved
        : cookieMatch
          ? cookieMatch[1]
          : browser.indexOf("en") === 0
            ? "en"
            : "zh";

  function apply(next) {
    document.body.dataset.lang = next;
    var button = document.getElementById("lang-toggle");
    if (button) button.textContent = next === "zh" ? "EN" : "中";
  }

  apply(lang);

  var button = document.getElementById("lang-toggle");
  if (button) {
    button.addEventListener("click", function () {
      var next = document.body.dataset.lang === "zh" ? "en" : "zh";
      localStorage.setItem(key, next);
      apply(next);
    });
  }
})();