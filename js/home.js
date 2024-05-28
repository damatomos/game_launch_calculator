document.getElementById("price").addEventListener("input", function (e) {
  e.target.value = maskCurrencyUSD(e.target.value);
});

document.getElementById("factor").addEventListener("input", function (e) {
  e.target.value = maskPercent(e.target.value);
});

document.getElementById("factor").addEventListener("keydown", function (e) {
  if (e.key === "Backspace") {
    e.target.value = removeMask(e.target.value);
  }
});

document.getElementById("wishlist").addEventListener("input", function (e) {
  e.target.value = maskWishList(e.target.value);
});
