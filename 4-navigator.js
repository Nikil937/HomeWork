const startlat = 3;
const startlong = 3;
const endlat = 7;
const endlong = 7;
let answer = 0;

answer = ((endlat - startlat)**2 + (endlong - startlong)**2)**(1/2);
console.log(answer);

