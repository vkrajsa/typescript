
interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}

const mazda = {
  name: 'mazda',
  year: 2000,
  broken: true,
};

// WITHOUT INTERFACE
// const printVehicle = (vehicle: {
//   name: string;
//   year: number;
//   broken: boolean;
// }): void => {
//   console.log(`Name: ${vehicle.name}`);
//   console.log(`Year: ${vehicle.year}`);
//   console.log(`Broken: ${ve hicle.broken}`);
// };

const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.broken}`);
};

printVehicle(mazda);


interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};

// Interface allows you to make generic and more reusable code...
const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

// Notice that it only cares if there is summary() method on object, nothing else, cause that the only thing defined in Reportable..
printSummary(oldCivic);
printSummary(drink);
