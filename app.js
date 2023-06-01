function currentTime() {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = "AM";

  if (hh == 0) {
    hh = 12;
  }
  if (hh > 12) {
    hh = hh - 12;
    session = "PM";
  }

  hh = hh < 10 ? "0" + hh : hh;
  mm = mm < 10 ? "0" + mm : mm;
  ss = ss < 10 ? "0" + ss : ss;

  let dateTime = hh + ":" + mm + " " + session;

  document.getElementById("dateTime").innerText = dateTime;
  let t = setTimeout(function() {
    currentTime();
  }, 1000);
}
currentTime();

function submitFormData() {
  var name = $("#name").val();
  $.post("submit.php", { name: name },
    function(data) {
      $('#results').html(data);
      $('#search-form')[0].reset();
    });
}

var randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);

var parentElement = document.getElementById("parent");
var subParentElement = document.getElementById("subParent");

if (randomNumber == 1) {
  parentElement.innerHTML += "I came, I saw, I conquered.";
  subParentElement.innerHTML += "-Julius Caesar";
}
if (randomNumber == 2) {
  parentElement.innerHTML += "I think, therefore I am.";
  subParentElement.innerHTML += "-René Descartes";
}
if (randomNumber == 3) {
  parentElement.innerHTML += "Wisdom begins in wonder.";
  subParentElement.innerHTML += "-Socrates";
}
if (randomNumber == 4) {
  parentElement.innerHTML += "Go forth a conquerer, and win great victories.";
  subParentElement.innerHTML += "-Virgil";
}
if (randomNumber == 5) {
  parentElement.innerHTML += "Practice, the master of all things.";
  subParentElement.innerHTML += "-Augustus";
}
if (randomNumber == 6) {
  parentElement.innerHTML += "I shall either find a way, or make one.";
  subParentElement.innerHTML += "-Hannibal";
}
if (randomNumber == 7) {
  parentElement.innerHTML += "He who learns must suffer.";
  subParentElement.innerHTML += "-Aeschylus";
}
if (randomNumber == 8) {
  parentElement.innerHTML += "Experience is the teacher of all things.";
  subParentElement.innerHTML += "-Julius Caesar";
}
if (randomNumber == 9) {
  parentElement.innerHTML += "Carpe Diem.";
  subParentElement.innerHTML += "-Horace";
}
if (randomNumber == 10) {
  parentElement.innerHTML += "Sapere Aude.";
  subParentElement.innerHTML += "-Horace";
}