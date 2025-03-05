// old scripts
function showAlt(x) {
  document.getElementById("alttext").innerHTML=x.alt;
}

function hideAlt(x) {
  document.getElementById("alttext").innerHTML="";
}

// new scripts
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
