// Behavioral Design Pattern

// various strategies
function Fedex() {
  this.calculate = (package) => {
    console.log(package);
    //
    // Some complex logic/strategies/algo to find shipping rate
    //
    return 1.23;
  };
}

function UPS() {
  this.calculate = (package) => {
    console.log(package);
    //
    // Some complex logic/strategies/algo to find shipping rate
    //
    return 2.23;
  };
}

function POST() {
  this.calculate = (package) => {
    console.log(package);
    //
    // Some complex logic/strategies/algo to find shipping rate
    //
    return 3.23;
  };
}

const fedex = new Fedex();
const ups = new UPS();
const post = new POST();
const package = {
  from: "Ahmedabad",
  to: "Mumbai",
  weight: 12,
};

// This could be one possible way but we are going to encapsulate this and make strategy pattern
// console.log(fedex.calculate(package));
// console.log(ups.calculate(package));
// console.log(post.calculate(package));

function Shipping() {
  this.company;
  this.setStrategy = (company) => {
    this.company = company;
  };
  this.calculate = (package) => {
    return this.company.calculate(package);
  };
}

const shipping = new Shipping();

// For Fedex
shipping.setStrategy(fedex);
console.log(shipping.calculate(package));
// For UPS
shipping.setStrategy(ups);
console.log(shipping.calculate(package));
// For POST
shipping.setStrategy(post);
console.log(shipping.calculate(package));
