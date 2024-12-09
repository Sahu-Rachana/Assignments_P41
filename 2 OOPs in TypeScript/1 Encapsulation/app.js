/* Declaring a Car class that contains make, model and year attributes and their corresponding getter and setter methods. */
var Car = /** @class */ (function () {
    /* Defining a constructor with three parameters, namely: make, model, and year. */
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.getMake = function () {
        return this.make;
    };
    Car.prototype.setMake = function (make) {
        this.make = make;
    };
    Car.prototype.getModel = function () {
        return this.model;
    };
    Car.prototype.setModel = function (model) {
        this.model = model;
    };
    Car.prototype.getYear = function () {
        return this.year;
    };
    Car.prototype.setYear = function (year) {
        this.year = year;
    };
    return Car;
}());
/*This creates an object named myCar with make: Toyota, model: Camry, and year: 2022 */
var myCar = new Car('Toyota', 'Camry', 2024);
console.log(myCar.getMake(), myCar.getModel(), myCar.getYear());
