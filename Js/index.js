//declaring variables
const bmiForm = document.getElementById("bmi-form");
const bmiSubmit = document.getElementById("bmi-submit");
const calorieSubmit = document.getElementById("calorie-submit");
const fullbodyworkout = document.getElementById("fullbody workout");
const mylist = document.getElementById("exercise");
const excerciseForm = document.getElementById("unlisted");
const calForm = document.getElementById("calorie-form");
// BMI Calculator
bmiSubmit.addEventListener("click", function (event) {
  event.preventDefault();
  const height = parseFloat(document.getElementById("bmi-height").value) / 100;
  const weight = parseFloat(document.getElementById("bmi-weight").value);
  const result = weight / (height * height);

  if (!isNaN(result) && result > 0) {
    if (result < 18.5)
      document.getElementById("bmi-result").innerHTML =
        "YOUR BMI = " + result.toFixed(1) + " (Underweight)";
    else if (result < 24.9)
      document.getElementById("bmi-result").innerHTML =
        "YOUR BMI = " + result.toFixed(1) + " (Normal weight)";
    else
      document.getElementById("bmi-result").innerHTML =
        "YOUR BMI = " + result.toFixed(1) + " (Overweight)";
  } else {
    alert("Please enter a valid input!");
  }
  bmiForm.reset();
});

// Calorie Calculator:
calorieSubmit.addEventListener("click", function (event) {
  // Declarations:
  let bmr, need;
  const gender = document.getElementsByName("gender");
  const age = parseInt(document.getElementById("age").value);
  const height = parseFloat(document.getElementById("calorie-height").value);
  const weight = parseFloat(document.getElementById("calorie-weight").value);
  const activity = document.getElementById("activity").selectedIndex;
  event.preventDefault();
  // Inputs are valid:
  if (age <= 80 && age >= 15 && height > 0 && weight > 0) {
    // Male:
    if (gender[0].checked) {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    }
    //Female:
    else if (gender[1].checked) {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }
    // Gender unchecked:
    else {
      alert("Please enter a valid input!");
      return;
    }
    if (activity == 0) need = bmr;
    else if (activity == 1) need = bmr * 1.2;
    else if (activity == 2) need = bmr * 1.465;
    else if (activity == 3) need = bmr * 1.375;
    else if (activity == 4) need = bmr * 1.55;
    else if (activity == 5) need = bmr * 1.725;
    else need = bmr * 1.9;

    document.getElementById("calorie-result").innerHTML =
      "YOUR CALORIE NEEDING = " + Math.round(need) + " cal/day";
  }
  // Inputs are invalid:
  else alert("Please enter a valid input!");
  calForm.reset();
});
// *****************

// *****************

//Excercise guide section

//set selected excercise value to the value of the selected radio button
selectedExcercise = document.querySelector(
  'input[name="workoutplanning"]:checked'
).value;

//Adding event-listener to Excecise Guide  Section
excerciseForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  // fetch the data from the api
  const excerciseData = await fetchExcerciseDataFromServer();

  // clear the trailhead div to avoid stacking of elements from previous trail fetch
  document.querySelector("#excerhead").innerHTML = "";

  // title of the excercise(note called outside of the loop)
  selectedExcerciseTitle();

  // clear the #allexcercise div to avoid stacking of elements from previous trail fetch
  document.querySelector("#allexcercise").innerHTML = "";

  // loop through the data and render each trail item
  excerciseData.forEach((excercise) => {
    renderexcercise(excercise);
  });
  // clears the form fields
  excerciseForm.reset();
});
//Using async/await to fetch the data from the API
async function fetchExcerciseDataFromServer() {
  // set the server url endpoint to fetch the data from
  let url = `http://localhost:3000/${selectedExcercise}`;
  // fetch the data from the server
  const response = await fetch(url);
  //parse the data as json
  const data = await response.json();
  // check if an error occurred during the fetch
  if (!response.ok) {
    throw new Error(`Error fetching data ${response.statusText}`);
  }
  // else the fetch was a success return the data(json object)
  return data;
}
function selectedExcerciseTitle() {}
