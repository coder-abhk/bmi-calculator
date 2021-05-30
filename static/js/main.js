// calculate button
const calculate = document.querySelector(".calculate_button");
// show result element
const result_element = document.querySelector(".show_result");
// weight
let weight_input_element = document.querySelector("#weight");
//height
let height_input_element = document.querySelector("#height");

let weight;
let height;

weight_input_element.addEventListener("input", (e) => {
  weight = parseFloat(e.target.value);
});

height_input_element.addEventListener("input", (e) => {
  height = parseFloat(e.target.value);
});

const bmi_calculate = () => {
  bmi = Math.round(weight / (height * height));
  bmi ? result_element.style.padding = `${1}rem` : null;
  
  if (bmi < 18) {
    result_element.innerHTML = `${bmi} BMI <b style="color: #ffa92b;">Underweight</b>`;
  } else if (bmi <= 25) {
    result_element.innerHTML = `${bmi} BMI <b style="color: #70ff36;">Normal</b>`;
  } else if (bmi < 40 || bmi > 40) {
    result_element.innerHTML = `${bmi} BMI <b style="color: #fb6b60;">Overweight</b>`;
  }
}

calculate.addEventListener("click", bmi_calculate, false);
