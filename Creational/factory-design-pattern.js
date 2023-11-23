// Creational Design Pattern

function Developer(name) {
  this.name = name;
  this.type = "Developer";
}

function Tester(name) {
  this.name = name;
  this.type = "Tester";
}

function EmployeeFactory() {
  this.create = (name, type) => {
    switch (type) {
      case 1:
        return new Developer(name);
      case 2:
        return new Tester(name);
    }
  };
}

const employeeFactory = new EmployeeFactory();
const employeeDB = [];

function sayHi() {
  console.log("hello my name is " + this.name + " and I am a " + this.type);
}

// type -> 1 -> Developer
// type -> 2 -> Tester

employeeDB.push(
  employeeFactory.create("Sandesh", 1),
  employeeFactory.create("Jay", 2)
);

employeeDB.forEach((emp) => sayHi.call(emp));
