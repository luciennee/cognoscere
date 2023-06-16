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

var randomNumber = Math.floor(1 + Math.random() * (12 - 1 + 1));
console.log(randomNumber);

var parentElement = document.getElementById("parent");
var subParentElement = document.getElementById("subParent");

if (randomNumber == 1) {
  parentElement.innerText += "I came, I saw, I conquered.";
  subParentElement.innerText += "-Julius Caesar";
}
if (randomNumber == 2) {
  parentElement.innerText += "I think, therefore I am.";
  subParentElement.innerText += "-René Descartes";
}
if (randomNumber == 3) {
  parentElement.innerText += "Wisdom begins in wonder.";
  subParentElement.innerText += "-Socrates";
}
if (randomNumber == 4) {
  parentElement.innerText += "Go forth a conquerer, and win great victories.";
  subParentElement.innerText += "-Virgil";
}
if (randomNumber == 5) {
  parentElement.innerText += "Practice, the master of all things.";
  subParentElement.innerText += "-Augustus";
}
if (randomNumber == 6) {
  parentElement.innerText += "I shall either find a way, or make one.";
  subParentElement.innerText += "-Hannibal";
}
if (randomNumber == 7) {
  parentElement.innerText += "He who learns must suffer.";
  subParentElement.innerText += "-Aeschylus";
}
if (randomNumber == 8) {
  parentElement.innerText += "Experience is the teacher of all things.";
  subParentElement.innerText += "-Julius Caesar";
}
if (randomNumber == 9) {
  parentElement.innerText += "Carpe Diem.";
  subParentElement.innerText += "-Horace";
}
if (randomNumber == 10) {
  parentElement.innerText += "Sapere Aude.";
  subParentElement.innerText += "-Horace";
}
if (randomNumber == 11) {
  parentElement.innerText += "Abeunt studia in mores.";
  subParentElement.innerText += "-Ovid";
}
if (randomNumber == 12) {
  parentElement.innerText += "Fortune favors the bold.";
  subParentElement.innerText += "-Terentius";
}

// You don't *really* need to use a form. I usually would see them used when submitting some kind of array of data i.e.: mulitple inputs with different data that needs to be sent at once, but it shouldn't be a problem.
// It really comes down to personal preference, so for me I would just have the text input and a button with no form because submitting a form will reload the page by default

// If you do want to use a form, the below code is required. Otherwise you just need to declare the fetchFact function and call it in index.html with a button element. I'll leave a commented example there.
// The other option is to combine the two and make a submit button that has type="button" and an onclick tag that calls fetchFact inside the form to keep the form and avoid this extra code. https://www.tutorialspoint.com/How-to-use-an-HTML-button-to-call-a-JavaScript-function 

// -------------- Code needed when using form with submit event --------------

// Retrieve the form element
const form = document.getElementById("myForm");
//const input = 
//https://luc.axelwp.repl.co
// Wait for the submit event of the form
form.addEventListener('submit', formSubmit);



async function formSubmit(event) {
  // Subitting form reloads page by default, we want to prevent this
  event.preventDefault();
  // Call the actual code we want to run when the submit event fires and pass the value in the input box
  await fetchFact(event.target[0].value);
}

// -------------- End of form code --------------



async function fetchFact(text) {
  console.log('Fetching data');

  // Small thing that does not matter at all but you will see in the future - it's good practice to use 'const' for all variabled that arent going to have their value set to something else down the line

  //the url for the replit site
  const URL = 'https://luc.axelwp.repl.co'

  const response = await fetch(URL + '/api/latin-english/' + text, {
    headers: {
      accept: 'application/json',
      // ['X-CSRFToken']: '' // I think you'll need to make an account on the site to get this token so that the request actually goes through
    },
  });

  console.log(response)
  let returned = await response.json();
  
  console.log(returned);

  // Write the output tho our output element
  const output = document.getElementById('output-text');

  //reset the output area
  output.innerHTML = "";
  //loop through each of the items returned by the call and add it to the output area
  for (item in returned){
    output.innerHTML += returned[item].intern_type;
    output.innerHTML += " ";
    output.innerHTML += returned[item].full_name;
    output.innerHTML += " : ";
    output.innerHTML += returned[item].translations_unstructured.en;
  }
  
}