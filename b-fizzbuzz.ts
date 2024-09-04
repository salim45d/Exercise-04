////////////
//FIZZBUZZ//
////////////

function fizzBuzz(n: number) {
  let result: string = "";

  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 15 != 0) {
      result += ` Fizz,`;
    } else if (i % 5 == 0 && i % 15 != 0) {
      result += ` Buzz,`;
    } else if (i % 15 == 0) {
      result += ` FizzBuzz,`;
    } else {
      result += ` ${i},`;
    }
  }

  return result;
}

console.log(fizzBuzz(15));
