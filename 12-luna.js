const card = '4561-2612-1234-5464';

function cardLuna(card) {
  const digits = card.replace(/-/g, '');

  let sum = 0;
  let shouldDouble = false;

  for (let i = digits.length - 1; i >= 0; i--) {
    let num = Number(digits[i]);

    if (shouldDouble) {
      num *= 2;
      if (num > 9) {
        num -= 9;
      }
    }

    sum += num;
    shouldDouble = !shouldDouble;
  }

  return sum % 10 === 0;
}

console.log(cardLuna(card));