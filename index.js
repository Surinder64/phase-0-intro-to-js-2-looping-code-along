// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}

const gifts = ["teddy bear", "drone", "doll"];
function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts);

const names = ["Guadalupe", "Ollie", "Aki"]
function writeCards(names) {
const names1 = []
for (let i = 0; i < names.length; i++) {
    names1.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
}
return names1;
}
writeCards(names)
function countDown() {
var number = 10;
while (number >= 0){
    number--;
    console.log(number);
}
}