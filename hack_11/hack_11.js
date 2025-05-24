/**
 * [1,2,3,4,5]
 * ["foo","bar","baz","qux","echo"]
 * 
 * 1) incluir los 2 array en 1 solo array
 * 2) los items del number array 1,3,5 se reescriben one,three,five
 * del string array todos sus items mutan de acuerdo a lo siguiente:
 * foo => f00
 * bar => Bar
 * baz => b@z   
 * qux => quX
 * echo => 3ch0
 * 3) anexar al inicio, al final y entre la unión de los array el string "h@ck"
 * 
 * 
 * output => ["h@ck","one",2,"three",4,"five","h@ck","f00","Bar","b@z","quX","3ch0","h@ck"]   
 */
let numberArray = [1,2,3,4,5];
let stringArray = ["foo","bar","baz","qux","echo"];
let result = [];


let procesarArreglos = [];
for (let i = 0; i < numberArray.length; i++) {
  let num = numberArray[i];
  if (num === 1) procesarArreglos.push("one");
  else if (num === 3) procesarArreglos.push("three");
  else if (num === 5) procesarArreglos.push("five");
  else procesarArreglos.push(num);
}


let procesarString = [];
for (let j = 0; j < stringArray.length; j++) {
  let str = stringArray[j];
  if (str === "foo") procesarString.push("f00");
  else if (str === "bar") procesarString.push("Bar");
  else if (str === "baz") procesarString.push("b@z");
  else if (str === "qux") procesarString.push("quX");
  else if (str === "echo") procesarString.push("3ch0");
  else procesarString.push(str);
}

result.push("h@ck");
for (let num of procesarArreglos) {
  result.push(num);
}
result.push("h@ck");
for (let str of procesarString) {
  result.push(str);
}
result.push("h@ck");

module.exports = result;