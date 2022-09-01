const bmiForm = document.getElementById("bmi-form");
const bmiSubmit = document.getElementById("bmi-submit");
const calorieForm = document.getElementById("calorie-form");
const calorieSubmit = document.getElementById("calorie-submit");

// BMI Calculator
bmiSubmit.addEventListener("click", function (event) {
    evt.preventDefault();
    const height = parseFloat(document.getElementById("bmi-height").value) / 100;
    const weight = parseFloat(document.getElementById("bmi-weight").value);
    const result = weight / (height * height);
  
    if (!isNaN(result) && result > 0) {
      if (result < 18.5)
        document.getElementById("bmi-result").innerHTML = "YOUR BMI = " + result.toFixed(1) + " (Underweight)";
      else if (result < 24.9)
        document.getElementById("bmi-result").innerHTML = "YOUR BMI = " + result.toFixed(1) + " (Normal weight)";
      else
        document.getElementById("bmi-result").innerHTML = "YOUR BMI = " + result.toFixed(1) + " (Overweight)";
    }
    else {
      alert("Please enter a valid input!");
    }
  });
  // *****************
  console.log(bmiForm)


