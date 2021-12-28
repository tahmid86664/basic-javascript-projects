let count = 0;

value = document.querySelector("#value");
btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const btnClass = e.currentTarget.classList;

    if (btnClass.contains("decrease")) {
      count--;
    } else if (btnClass.contains("increase")) {
      count++;
    } else if (btnClass.contains("reset")) {
      count = 0;
    }

    if (count > 0) value.style.color = "green";
    else if (count < 0) value.style.color = "red";
    else value.style.color = "var(--clr-grey-1)";

    value.textContent = count;
  });
});
