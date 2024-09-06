///////////////////
/*BODY MASS INDEX*/
///////////////////

const weights: number = 60;
const heights: number = 170;

function bodyMassIndex(weight: number, height: number) {
  height /= 100;
  weight /= Math.pow(height, 2);

  let resultBMI: string = "";
  if (weight < 18.5) {
    resultBMI = "Less Weight";
  } else if (weight >= 18.5 && weight <= 24.9) {
    resultBMI = "Ideal";
  } else if (weight >= 25.0 && weight <= 29.9) {
    resultBMI = "Overweight";
  } else if (weight >= 30.0 && weight <= 39.9) {
    resultBMI = "Very Overweight";
  } else if (weight > 39.9) {
    resultBMI = "Obesity";
  }
  return resultBMI;
}

const resultBMI: string = bodyMassIndex(weights, heights);
console.log(resultBMI);
