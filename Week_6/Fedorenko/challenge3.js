function takeAvgScore(...scores) {
  return (scores.reduce((total, curVal) => {
    return (total + curVal);
  }) / scores.length).toFixed(0);
}

const avgDolphScr = takeAvgScore(96, 108, 89);
const avgKoalaScr = takeAvgScore(88, 91, 110);

console.log(`Average Dolphins score is ${avgDolphScr}`); //set the desired values
console.log(`Average Koalas score is ${avgKoalaScr}`); //set the desired values

let result;

if (avgDolphScr >= 100 && avgKoalaScr >= 100) {
  if (avgDolphScr > avgKoalaScr) {
    result = `Dolphins score ${avgDolphScr} is higher than Koalas ${avgKoalaScr} and Dolphins win the trophy!`
  } else if (avgKoalaScr > avgDolphScr) {
    result = `Koalas score ${avgKoalaScr} is higher than Dolphins ${avgDolphScr} and Dolphins win the trophy!`
  } else {
    result = 'It is a draw - Dolphins and Koalas have the same strength or scored less than 100 points each one and' +
      ' the trophy remains intact!'
  }
} else {
  if (avgDolphScr < 100 && avgKoalaScr >= 100) {
    result = 'Dolphins lost because their score was below 100!'
  } else if (avgKoalaScr < 100 && avgDolphScr >= 100) {
    result = 'Koalas lost because their score was below 100!'
  } else {
    result = 'No team wins the trophy'
  }
}

console.log(result);



