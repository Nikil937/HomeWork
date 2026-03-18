const hasLicence = true;
const age = 21;
const isDrunk = true;

const permission = age>=18 && hasLicence && !isDrunk;
console.log(`Машину водить ${permission ? 'может' : 'не может'}!`);