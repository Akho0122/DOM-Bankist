'use strict';

const Person = function (firstName, birhYear) {
  this.firstName = firstName;
  this.birhYear = birhYear;
};
const jonas = new Person('John', 1991);
const matilda = new Person('Matilda', 2002);
Person.prototype.calcAge = function () {
  console.log(2022 - this.birhYear);
};
console.log(Person.prototype);
jonas.calcAge();
matilda.calcAge();
console.log(matilda);

console.log(jonas.__proto__);

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};
