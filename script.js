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

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));