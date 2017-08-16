// CLASSES PROJECT
// In this project, you will build a Mazda car factory that manufactures both cars and trucks.
// Read each set of instructions carefully!

// BUILD YOUR FACTORY!

// DECLARE A FACTORY CLASS
// All automobiles manufacutered should have the following properties: make (Mazda), location (USA),
// airbags (true), abs (true), warranty (60,000 miles / 3 years)
// This factory should also run two functions: massBuild()
// and customerBuild()

// massBuild should receive the following parameters: quantity, options.
// It should print "Building QUANTITY COLOR TRIM MODEL's"
//i.e: "Building 100 blue Touring CX-5's"

// customerBuild should receive the following parameters: color, options.
// It should print "Building one COLOR TRIM MODEL
//with the following options: OPTIONS",
//i.e: "Building one red Sport Mazda3 with the
//following options: heated seats, rear spoiler"

// Create the Factory class bellow:

class Factory {
  constructor() {
    this.make = "Mazda"
    this.location = "USA"
    this.aribags = true
    this.abs = true
    this.warranty = "60,000 miles / 3 years"
  }

  massBuild(quantity, options) {
    console.log(`Building ${quantity} ${options.color} ${options.trim} ${options.model} with the following options: ${options.option1}, ${options.option2}, ${options.option3}`)
  }

  customerBuild(color, options){
    console.log(`Building one ${color} ${options.trim} ${options.model} with the following options: ${options.option1}, ${options.option2}, ${options.option3}, ${options.option4}, ${options.option5}`)
  }
}

const factory = new Factory()
factory.massBuild(300,{
  color: 'pink',
  trim: 'Touring',
  model: 'cabrio',
  option1: 'vegan leather seats',
  option2: 'unbreakable tires',
  option3: 'water fuel',
} )
console.log(factory);
// CREATE A SUB-CLASS CALLED CAR
// It should extend from Factory.
// The constructor should have the following properties: model, doors, color, enginetype,
//transmission, trim, wheelstrim, audio, seatstrim, moonroof. The values should be specified when creating an instance of Car.
// It should specifically inherit the warranty property from Factory so we can modify it.
// Car should also have the following additional properties: enginesize (4), navigation (true),
// backupcamera (true), warranty (100,000 miles / 5 years)
// Write your code below:
class Car extends Factory {
  constructor(options = {}) {
    // Pass in options, you can pass in whatever you want. However, we're only interested in the below values for our options.
    super();
    // If the option is not provided, let's use a default value of 'premium'.
    this.audio = options.audio || "premium";
    this.backupcamera = options.backupcamera || true;
    this.color = options.color || "red";
    this.doors = options.doors || 4;
    this.enginesize = options.enginesize || 4;
    this.enginetype = options.enginetype || "hybrid";
    this.model = options.model || "Mazda3";
    this.moonroof = options.moonroof || true;
    this.navigation = options.navigation || true;
    this.seatstrim = options.seatstrim || "leather";
    this.transmission = options.transmission || "automatic";
    this.trim = options.trim || "Touring";
    this.warranty = options.warranty || "100000 miles 5 years";
    this.wheelstrim = options.wheelstrim || "base";
  }
}

const car = new Car()
console.log('car', car);
// CREATE A SUB-CLASS CALLED SPORT
// It should extend from Car.
// The constructor should have the following properties: model, trim, transmission,
//top, color, seatstrim, audio, wheelstrim. The values should be specified when creating an instance of Sport.
// Sports cars should also have the following additional
// properties: moonroof (false), enginetype (gasoline), convertible (true), doors (2)
// Write your code below:
class Sport extends Car {
  constructor(model, trim, transmission, top, color, seatstrim, audio, wheelstrim) {
    super()
    this.model = model;
    this.convertible = true;
    this.top = top;
    this.trim = trim;
    this.wheelstrim = wheelstrim;
    this.moonroof = false;
    this.enginesize = "gasoline";
    this.convertible = true;
    this.doors = 2;
  }
}

let sport = new Sport({ model: "Miata-RF", top:"Hard Top", trim: "Grand Touring", wheelstrim: "Premium", transmission: "Manual"});
console.log(sport);
// CREATE A SUB-CLASS CALLED TRUCK
// Yes...this Mazda factory makes trucks....
// It should extend from 'Factory'.
// The constructor should have the following properties: model, color, enginesize, hitch, bed, navigation. The values should be specified when creating an instance of Truck.
// Truck should also have the following properties, standard: backupcamera (true), audio (basic)
// It should also inherit the warranty property so we can extend it to: 150,000 miles / 6 years.
// Write your code below:

class Truck extends Factory {
  constructor(model, color, enginesize, hitch, bed, navigation, backupcamera, audio) {
    super()
    this.model = model;
    this.warranty = "150,000 miles / years";
    this.audio = "basic";
    this.backupcamera = true;
    this.doors = 2;
    this.trim = "sport";
  }
}

let truck = new Truck({model: "Trail Blazer", color: "blue", enginesize: 8, hitch: true, bed: "standard", navigation: true})
// LET'S BUILD SOME CARS AND TRUCKS!

// MAZDA3 MASS PRODUCTION
// Create an instance  Car.
// The following properties must be specified: model (mazda3), color (red), enginetype (hybrid), transmission (automatic), trim (touring), wheels (base), audio (premium), seats (leather), and moonroof (true)
// Write your 'mazda3' instance below:
let mazda3 = new Car({model:'mazda3', color:'red', enginetype:'hybrid', transmission:'automatic', trim:'touring', wheelstrim:'base', audio:'premium', seats:'leather', moonroof:true })
// Print mazda3. I should have all the above properties.
// Write your code below:
console.log(mazda3);
// Print calling massBuild(), building 35000 cars.
// It should print: "Building 35000 Red Touring Mazda3's."
// Write your code below:
Factory.massBuild(3500, {color: "red", trim: "Touring", model:"Mazda3"});
// Print, calling customerBuild(), building one yellow mazda3 with the following options, as an array: weather package, satellite radio, rear spoiler.
// It should read: "Building one yellow Touring Mazda3 with the following options: weather package, satellite radio, rear spoiler"
// Write your code below:
Factory.customerBuild( "yellow", { trim: "Touring", model:"Mazda3" }, ["weather package, satellite radio, rear spoiler"] );
// MIATA-RF MASS PRODUCTION
// Create an instance  Sport.
// The following properties must be specified: model (Miata-RF), trim (Grand Touring), transmission (manual),  top (hard top), color (red), seats (leather), audio (premium), wheels (premium).

// Write your 'miataRf' instance below:
// Write your code below:
let miataRf = new Sport({model:'Miata-RF', trim:'Grand Touring', transmission:'manual', top:'hard top', color:'red', seats:'leather', audio: 'premium', wheels:'premium'})
// Print miataRf. It should have all of the above properties. Plus, the extended warranty.
// Write your code below:
console.log(miataRf);
// Print miataRf, calling massBuild(), building 15,000
// It should print: "Building 15000 Red Grand Touring Miata-RF's."
// Write your code below:
Factory.massBuild(15000, {color: 'Red', trim: 'Grand Touring', model:'Miata-RF'} )
// Print miataRf, calling customerBuild(), building one black Miata-Rf with the following options, as an array: hid headlights, sports suspension, leather steering wheel, heated seats, adaptive cruise control.
// It should read: "Building one black Grand Touring Miata-RF with the following options: hid headlights, sports suspension, leather steering wheel, heated seats, adaptive cruise control"
// Write your code below:
Factory.customerBuild( "black", {model:'Miata-RF'}, ["hid headlights, sports suspension, leather steering wheel, heated seats, adaptive cruise control"]);
// TRAIL BLAZER MASS PRODUCTION
// The Trail Blazer should inherit from truck.
// The following properties must be specified: model (Trail Blazer), color (blue), trim (Sport), enginesize (8), hitch (true), bed (standard), navigation (true), doors (2)

// Write your 'trailBlazer' instance below:
// Write your code below:
let trailBlazer = new Truck({model: 'Trail Blazer', color: 'blue', trim: 'Sport', enginesize: 8, hitch: true, bed 'standard', navigation: true, doors: 2})
// Print trailBlazer. It should have all the above properties. Plus, the extended warranty.
// Write your code below:
console.log(trailBlazer);
// Print trailBlazer, calling massBuid(). It should build 35000 trucks.
// It should print: "Building 35000 blue Sport Trail Blazer's."
// Wrint your code below:
Factory.massBuild(3500, {color: 'blue', trim: 'sport', model:'Trail Blazer'} )

// Print trailBlazer, calling customerBuild(). It should build a red Trail Blazer with the following options, as an array: seat warmers, tinted windows, fog lamps.
// It should print: "Building one red Sport Trail Blazer with the following options: seat warmers, tinted windows, fog lamps"
// Write your code below:
Factory.customerBuild( "red", {model:'Sport Trail Blazer'}, ["seat warmers, tinted windows, fog lamps"]);
