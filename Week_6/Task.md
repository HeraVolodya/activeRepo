const markHeight = 169;
const johnHeight = 188;
const markMass = 78;
const johnMass = 92;
/*
let markHigherBMI;
let BMIMark, BMIJohn;

function BMI(mass, height){
  return mass / height ** 2;
}

BMIMark = BMI(markMass, markHeight);
BMIJohn = BMI(johnMass, johnHeight);

BMIJohn = BMIMark;

if (BMIMark == BMIJohn) {
  console.log('Paritet');
} else if (BMIMark > BMIJohn) {
  markHigherBMI = true;
} else {
  markHigherBMI = false;
}

console.log(markHigherBMI);
*/
console.log('%i', 10000*markHeight/markMass**2);
console.log('%i', 10000*johnHeight/johnMass**2);
console.log('Marks weights %i kg and is %i cm tall.', markMass, markHeight)
console.log(markHeight/markMass**2 > johnHeight/johnMass**2 ? true : false );
