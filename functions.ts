const add = (a: number, b: number) => {
  return a + b;
};

// Arrow function
const subtract = (a: number, b: number): number => {
  return a - b;
};

// Normal function
function divide(a: number, b: number): number {
  return a / b;
}

// Anonymoys function assigned to variable
const multiply = function(a: number, b: number): number {
  return a * b;
};

// Function that doesnt return anything
const logger = (message: string): void => {
  console.log(message);
};

// you could place there never if you planned never to reach end of the function...but its rare case
const throwError = (message: string): void => {
  if (!message) {
    throw new Error(message);
  }
};

// Descturing and annotaions
// First you desctructure
// Then you annotate
const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
};

const logWeather = ({
  date,
  weather
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);
