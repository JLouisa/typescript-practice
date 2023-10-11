//! Primitives
const num1: number = 5;
const num2: number = 6;
const theString: string = "John Doe";
const theBool: boolean = true;
let anything: any = true;

anything as string;
("Hello World!");
console.log(anything);

type TheTest = number;
const num3: TheTest = 7;

console.log(num3);

//!Function
function add(x: number, y: number): number {
  return x + y;
}

console.log(add(5, 6));

const sub = (x: number, y: number): number => {
  return x - y;
};

function display(message: string): void {
  console.log(`The Message ${message}`);
}

display("is working!");

//! Array
const theArr: string[] = ["Adam", "Eve"];

//! Object
interface LeObject {
  id: number;
  name: string;
  isActive: boolean;
}

const theObj: LeObject = {
  id: 1,
  name: "John Doe",
  isActive: true,
};

console.log(theObj);

//! Classes
interface thePokemon {
  id: number;
  name: string;
  type: string;
}

class Pokemon implements thePokemon {
  id: number;
  name: string;
  type: string;

  constructor(id: number, name: string, type: string) {
    this.id = id;
    this.name = name;
    this.type = type;
  }
}

const pikachu = new Pokemon(1, "Pikachu", "Electric");
console.log(pikachu);

class Evolved extends Pokemon {
  pastForm: string;

  constructor(id: number, name: string, type: string, pastForm: string) {
    super(id, name, type);
    this.pastForm = pastForm;
  }
  greeting() {
    return `Hello, my name is ${this.name}`;
  }
}

const raichu = new Evolved(1, "Raichu", "electric", "Pikachu");

console.log(raichu);
console.log(raichu.greeting());
