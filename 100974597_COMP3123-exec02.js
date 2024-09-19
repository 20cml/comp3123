//1
const greetText = 'Hello ';
function gretter(myArray, counter) {
  for (let name of myArray) {
    console.log(`${greetText}${name}`);
  }
}
gretter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);

//2
function capitalize([first, ...rest]) {
  return first.toUpperCase() + rest.join('');
}
console.log(capitalize('fooBar')); // Foobar
console.log(capitalize('nodeJs'));

//3
const colors = ['red', 'green', 'blue'];
const capitalizedColors = colors.map(color => color.charAt(0).toUpperCase() + color.slice(1));
console.log(capitalizedColors);

//4
var values = [1, 60, 34, 30, 20, 5];
var filterLessThan20 = values.filter(value => value < 20);
console.log(filterLessThan20);

//5
var array = [1, 2, 3, 4];
var calculateSum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
var calculateProduct = array.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
console.log(calculateSum); 
console.log(calculateProduct);

//6
class Car {
  constructor(model, year) {
    this.model = model;
    this.year = year;
  }

  details() {
    return `Model: ${this.model} Year: ${this.year}`;
  }
}

class Sedan extends Car {
  constructor(model, year, balance) {
    super(model, year); 
    this.balance = balance;
  }

  info() {
    return `${super.details()} has a balance of $${this.balance.toFixed(2)}`;
  }
}

const car2 = new Car('Pontiac Firebird', 1976);
console.log(car2.details()); 

const sedan = new Sedan('Volvo SD', 2018, 30000);
console.log(sedan.info()); 