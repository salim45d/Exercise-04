///////////////////////
//ODD AND EVEN NUMBER//
///////////////////////

let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let numbersResult = numbers.filter((number) => {
  return number % 2 === 0;
});

console.log(numbersResult);
