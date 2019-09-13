/* // Number
let myAge: number;
myAge = 31;

// String
let myName: string;
myName = "Romain";

// Boolean
let hasHobbies: boolean;
hasHobbies = true;

// Any
let myAny: any;
myAny: {
}

// Arrays
let hobbies: string[] = ["Cooking", "Sports"];
let money: number[] = [1, 2, 3];
let dump: any[] = ["hamster", 666];

// Tuples
let address: [string, number] = ["Superstreet", 99];

// Functions
function returnMyName(): string {
  return myName;
}

console.log(returnMyName());

// void
function sayHello(): void {
  console.log("Void to say: There is nothing to be returned");
}

sayHello();

// argument types
function multiply(value1: any, value2: any): number {
  return value1 * value2;
}

console.log(multiply(2, "Romain")); // It will return NaN

// function types
let myMultiply: (val1: number, val2: number) => number;
myMultiply = multiply;
myMultiply(5, 2);

// objects
let userData: { name: string; age: number } = {
  name: "Romain",
  age: 31
};

// type alias
type Complex = { data: number[]; output: (all: boolean) => number[] };

let complex: Complex = {
  data: [1, 2, 3],
  output: function(all: boolean): number[] {
    return this.data;
  }
};

// union types
let myRealAge: number | string = 27;
myRealAge = "27";

// check types
let finalValue = 30;
if (typeof finalValue == "number") {
  console.log("Final Value is a number");
}
 */

class Person {
  name: string; // public
  private type: string = "Robin";
  protected age: number = 31;

  constructor(name: string, public username: string) {
    this.name = name;
  }

  printAge() {
    // public, private, protected
    console.log(this.age);
    this.setType("Catman");
  }

  private setType(type: string) {
    this.type = type;
    console.log(this.type);
  }
}

const person = new Person("Romain", "R");
console.log(person.name, person.username);
person.printAge();
/* person.setType("Cool guy"); */

// Inheritance
class Roger extends Person {
  /* name = "Romain";  */ // overwrite name property in Person
  printAge = () => {
    console.log("It is mysterious...");
  };

  constructor(username: string) {
    super("Roger", username);
    this.age = 37;
  }
}

const roger = new Roger("Fede"); // Still prints Romain
console.log(roger);
roger.printAge();

// Getters & Setters
class Plant {
  private _species: string = "Default";

  get species() {
    return this._species;
  }

  set species(value: string) {
    if (value.length > 3) {
      this._species = value;
    } else {
      this._species = "Default";
    }
  }
}

let plant = new Plant();
console.log(plant.species);
plant.species = "Green Plant";
console.log(plant.species);

// Static Properties & Methods
class Helpers {
  static PI: number = 3.14; // you to make it static to make it available outside
  static calcCircumference(diameter: number): number {
    return this.PI * diameter;
  }
}

console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(8));

// Abstract Classes
abstract class Project {
  // Cannot be extended, has to be inherited
  projectName: string = "Default";
  budget: number = 0;

  abstract changeName(name: string): void;

  calcBudget() {
    return this.budget * 2;
  }
}

class ITProject extends Project {
  changeName(name: string): void {
    this.projectName = name;
  }
}

/* let newProject = new Project();// Does not work  */
let newProject = new ITProject();
console.log(newProject);
newProject.changeName("Lets go to Mars");
console.log(newProject);
