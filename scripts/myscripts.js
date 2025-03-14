document.addEventListener("DOMContentLoaded", function() {
  let altText = document.getElementById("alttext");
  let img = document.querySelector(".image-container img");

  window.showAltNew = function() {
      altText.innerText = img.alt;
      altText.style.display = "block";
  }

  window.hideAltNew = function() {
      altText.style.display = "none";
  }
});
