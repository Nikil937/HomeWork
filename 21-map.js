const arr = [
  { id: 1, name: "Вася" },
  { id: 2, name: "Петя" },
  { id: 1, name: "Вася" },
];

const unique = [...new Set(arr.map(item => item.id))]
  .map(id => arr.find(item => item.id === id));

console.log(unique);