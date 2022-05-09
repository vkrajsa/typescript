// METHODS

class Vehicle {
  honk(): void {
    console.log('beep');
  }
  // now it can be use
  protected tank(): void {
    console.log('fuel');
  }
}

class Car extends Vehicle {
  // this is just overriding the method from parent Vehicle
  private drive(): void {
    console.log('vroom');
  }
  startDrivingProcess(): void {
    this.drive();
    this.honk();

    this.tank();
  }

}

const car = new Car();
const vehicle = new Vehicle();
car.drive();
vehicle.honk();
vehicle.tank();

// FIELDS

class House {


  // DEFAULT MODIFIER IS PUBLIC ....

  // color: string;

  // constructor(color: string) {
  //   this.color = color;
  // }
  // this is shortcut for the above typed version

  constructor(public location: string) {

  }

  // constructor(private color: string) {
  //   this.color = color;
  // }

}

const house = new House('Canada');
console.log(house.location);


// no constructor but it works because it usees parent constroctor
class Garage extends House {

}

class Kitchen extends House {
  constructor(public summer: boolean, location: string) {
    // you must
    super(location)
  }
}


const garage = new Garage('Canada');
console.log(garage.location);
const kitchen = new Kitchen(true, 'Canada');
console.log('kitchen: ', kitchen);
kitchen.location
kitchen.summer
console.log('kitchen.summer: ', kitchen.summer);
console.log('kitchen.location: ', kitchen.location);