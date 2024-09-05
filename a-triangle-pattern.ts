/////////////////////
//TRIANGLE PATTERN//
////////////////////

/*  01
    02 03
    04 05 06
    07 08 09 010
 */

function triangleHeight(height: number) {
  let nums: number = 1;
  let trianglePatern: string = "";

  for (let i = 1; i <= height; i++) {
    for (let j = 1; j <= i; j++) {
      trianglePatern += `0${nums} `;
      nums++;
    }
    trianglePatern += "\n";
  }
  return trianglePatern;
}

let height: number = 4;
let triangleResult: string = triangleHeight(height);
console.log(triangleResult);
