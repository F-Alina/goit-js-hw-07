const button = document.querySelector(".change-color");
const colorRandom = document.querySelector(".color");

button.addEventListener("click", handleColorChange);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function handleColorChange() {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;

  colorRandom.textContent = color;
}
