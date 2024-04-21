let age = Number(prompt('enter your age'));

let movie = prompt('enter movie type (regular or 3D)');

let time = prompt('enter time of day (matinee or evening)');

let tiketPrice = 0;

let discountTicket = true;

switch (true) {
  case time === 'evening' && movie === '3D':
    tiketPrice += 10;
    break;
  case movie === '3D':
    tiketPrice += 5;
    break;
  case time === 'evening':
    tiketPrice += 5;
    break;
  default:
    tiketPrice = 0;
}

// console.log(tiketPrice);

switch (true) {
  case age > 0 && age < 10:
    tiketPrice += 5;
    break;
  case age >= 10 && age <= 65:
    tiketPrice += 15;
    break;
  case age > 65:
    tiketPrice += 10;
    break;
  default:
    alert('invalid age number');
}

console.log(tiketPrice + ' Gel without  discount');
console.log('---------------------');
if (discountTicket) {
  tiketPrice -= (tiketPrice * 25) / 100;
  console.log(`tiket price  for you is  ${tiketPrice} Gel`);
} else {
  console.log(`tiket price  for you is  ${tiketPrice} Gel`);
}
