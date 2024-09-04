///////////////////
/*BODY MASS INDEX*/
///////////////////

function bodyMassIndex(weight: number, height: number) {
  height /= 100;
  weight /= Math.pow(height, 2);

  if (weight < 18.5) {
    return "Less Weight";
  } else if (weight >= 18.5 && weight <= 24.9) {
    return "Ideal";
  } else if (weight >= 25.0 && weight <= 29.9) {
    return "Overweight";
  } else if (weight >= 30.0 && weight <= 39.9) {
    return "Very Overweight";
  } else if (weight > 39.9) {
    return "Obesity";
  }
}

console.log(bodyMassIndex(60, 170));
