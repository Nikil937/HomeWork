const card = '4561-2612-1234-5464';

function cardLuna(card) {
  const newCard = [];
  const data = card.replace(/-/g,'');
  for (const i in data) {
    if (i % 2 === 0) {
      let qwe = 0;
      qwe = data[i] * 2;
      if (qwe <= 9) {
        newCard.push(qwe)
      } else {
        newCard.push(qwe-9)
      }
    }

    if (i % 2 === 1) {
      newCard.push(i);
    }

  }
  const newCard2 = newCard.join('')
  let answer = 0;
  for (const el of newCard2) {
    answer += el;
  }

  return answer;
}


console.log(cardLuna(card));