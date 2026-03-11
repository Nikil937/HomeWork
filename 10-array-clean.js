
function remove(num) {
  return num > 5;
}


function filtering(arr, func) {
  const result = [];

  for (const el of arr) {
    if (!func(el)) {       
      result.push(el);
    }
  }

  return result;
}


const numbers = [3, 6, 9, 2];
const filtered = filtering(numbers, removeGreaterThanFive);

console.log(filtered)