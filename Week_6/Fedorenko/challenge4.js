function tipCalc(bill) {
  let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
  console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
}

tipCalc(275); //40, 430




