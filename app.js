// Delgets
var uiController = (function () {})();

// Sanhuu
var financeController = (function () {})();

// Holbogc
var appController = (function (uiController, financeController) {
  var ctrlAddItem = function () {
    // 1. Oruulah ugugdliig delgetsees olj avah
    console.log("Delgetsees ogogdol avah");
    // 2. Olj avsan ugugdluudiig sanhuugiin controllert damjuulj tend hadgaln
    // 3. Olj avasan ugugdluudee web deeree tohiroh hesegt gargana
    // 4. Tusviig tootsooln
    // 5. Etssiin uldegdel, tootsoog delgetsend gargan
  };
  document.querySelector(".add__btn").addEventListener("click", function () {
    ctrlAddItem();
  });

  document.addEventListener("keypress", function (event) {
    if (event.keyCode === 13) {
      ctrlAddItem();
    }
  });
})(uiController, financeController);
