const hasLience = true;
const age = 21;
const isDrunk = true;

const permission = age && hasLience && !isDrunk;
console.log(`Машину водить ${permission ? 'может' : 'не может'}!`);