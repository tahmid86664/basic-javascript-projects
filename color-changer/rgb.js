const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let rgb = "rgb(";

  for (let i = 0; i < 3; i++) {
    rgb += getRandomNumber().toString() + ",";
  }

  rgb = rgb.slice(0, rgb.length - 1);
  rgb += ")";

  document.body.style.backgroundColor = rgb;
  color.textContent = rgb;
});

function getRandomNumber() {
  return Math.floor(Math.random() * 256);
}
