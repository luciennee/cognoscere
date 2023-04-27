const button = document.querySelector('input');
const text = document.querySelector('p');

button.addEventListener("click", updateButton);

function updateButton() {
  if (button.value === "continue") {
    button.value = "continue";
    text.textContent = "starting...";
  } else {
    button.value = "continue"
    text.textContent = "welcome to cognoscere.";
  }
}