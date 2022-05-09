// mostly arrays in TS are used so that they contain one type of values...

const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

// its empty so you need to specify what will be inside
const carsByMake: string[][] = [];

const carsTest = [
  ['10', '23'],
  [1,3,5]
];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.p op();

// Prevent incompatible values
carMakers.push(100);

// Help with 'map'
carMakers.map(
  (car: string): string => {
    // autocomplete options

    return car.toUpperCase();
  }
);


// Flexible types
const importantDates: (Date | string)[] = [];
importantDates.push('2030-10-10');
importantDates.push(new Date());
