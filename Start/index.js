"use strict";
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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, username) {
        this.username = username;
        this.type = "Robin";
        this.age = 31;
        this.name = name;
    }
    Person.prototype.printAge = function () {
        // public, private, protected
        console.log(this.age);
        this.setType("Catman");
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
var person = new Person("Romain", "R");
console.log(person.name, person.username);
person.printAge();
/* person.setType("Cool guy"); */
// Inheritance
var Roger = /** @class */ (function (_super) {
    __extends(Roger, _super);
    function Roger(username) {
        var _this = _super.call(this, "Roger", username) || this;
        /* name = "Romain";  */ // overwrite name property in Person
        _this.printAge = function () {
            console.log("It is mysterious...");
        };
        _this.age = 37;
        return _this;
    }
    return Roger;
}(Person));
var roger = new Roger("Fede"); // Still prints Romain
console.log(roger);
roger.printAge();
// Getters & Setters
var Plant = /** @class */ (function () {
    function Plant() {
        this._species = "Default";
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = "Default";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant.species);
plant.species = "Green Plant";
console.log(plant.species);
// Static Properties & Methods
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calcCircumference = function (diameter) {
        return this.PI * diameter;
    };
    Helpers.PI = 3.14; // you to make it static to make it available outside
    return Helpers;
}());
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(8));
// Abstract Classes
var Project = /** @class */ (function () {
    function Project() {
        // Cannot be extended, has to be inherited
        this.projectName = "Default";
        this.budget = 0;
    }
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var ITProject = /** @class */ (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITProject;
}(Project));
/* let newProject = new Project();// Does not work  */
var newProject = new ITProject();
console.log(newProject);
newProject.changeName("Lets go to Mars");
console.log(newProject);
