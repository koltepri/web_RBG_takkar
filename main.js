// Nota ID til að velja
const redB = document.getElementById("red-button");

// Eins og að velja í CSS
const greenB = document.querySelector("#green-button");

// Velja þriðja skiptið (index 2) sem <button> kemur fyrir í HTML skránni
const blueB = document.body.getElementsByTagName("button")[2]; // Margir hlutir! (ekki listi samt)

// Velja með nafni á klösunum
const colorA = document.getElementsByClassName("color-area")[0]; // Margir hlutir ! (ekki listi samt)

var rbgText = document.getElementById("color-text");

// Svart til að byrja með
var red = 0;
var green = 0;
var blue = 0;
var inc = 20;

function updateBackgroundColor() {
  colorA.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`; // Goggla RBG ef þið kannist ekki við það
  rbgText.textContent = `RBG (${red}, ${green}, ${blue})`; // ATH ` í stað fyrir ""
}

redB.addEventListener("click", function () {
  red = (red + inc) % 255; // % 255 þýðir að við förum í 0 þegar við komumst upp í 256
  updateBackgroundColor();
});

greenB.addEventListener("click", function () {
  green = (green + inc) % 255;
  updateBackgroundColor();
});

blueB.addEventListener("click", function () {
  blue = (blue + inc) % 255;
  updateBackgroundColor();
});

updateBackgroundColor();
