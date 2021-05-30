// calculate button
const calculate = document.querySelector(".calculate_button");
// show result element
const result_element = document.querySelector(".show_result");
// weight
let weight = document.querySelector("#weight");
//height
let height = document.querySelector("#height");

let w;
let h;

weight.addEventListener("input", (e) => {
  w = parseFloat(e.target.value);
});

height.addEventListener("input", (e) => {
  h = parseFloat(e.target.value);
});

calculate.addEventListener("click", () => {
  bmi = Math.round(w / (h * h));
  bmi ? result_element.style.padding = `${1}rem` : null;
  
  if (bmi < 18) {
    result_element.innerHTML = `${bmi} BMI <b style="color: #ffa92b;">Underweight</b>`;
  } else if (bmi <= 25) {
    result_element.innerHTML = `${bmi} BMI <b style="color: #70ff36;">Normal</b>`;
  } else if (bmi < 40 || bmi > 40) {
    result_element.innerHTML = `${bmi} BMI <b style="color: #fb6b60;">Overweight</b>`;
  }
});
