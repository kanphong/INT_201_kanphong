let change = {
  count_500: 0,
  count_100: 0,
  count_50: 0,
  count_20: 0,
  count_10: 0,
  count_5: 0,
  count_2: 0,
  count_1: 0,
};

function calculation(price, pay) {
  if (price > pay) {
    console.log(`You need more Money :p`);
  }

  let bill = pay - price;

  while (bill > 0) {
    if (bill >= 500) {
      bill -= 500;
      change.count_500 += 1;
    } else if (bill >= 100) {
      bill -= 100;
      change.count_100 += 1;
    } else if (bill >= 50) {
      bill -= 50;
      change.count_50 += 1;
    } else if (bill >= 20) {
      bill -= 20;
      change.count_20 += 1;
    } else if (bill >= 10) {
      bill -= 10;
      change.count_10 += 1;
    } else if (bill >= 5) {
      bill -= 5;
      change.count_5 += 1;
    } else if (bill >= 2) {
      bill -= 2;
      change.count_2 += 1;
    } else if (bill >= 1) {
      bill -= 1;
      change.count_1 += 1;
    }
  }
  return change;
}

console.log(calculation(700, 7000));
console.log(calculation(634, 7984));