var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
/*Here the child class: ElectricCar, inherits the properties and methods from the parent class: Car. Additionally, it has its own property range and its getter and setter methods which are not present in the parent class. */
var ElectricCar = /** @class */ (function (_super) {
    __extends(ElectricCar, _super);
    function ElectricCar(make, model, year, range) {
        var _this = _super.call(this, make, model, year) || this;
        _this.range = range;
        return _this;
    }
    ElectricCar.prototype.getRange = function () {
        return this.range;
    };
    ElectricCar.prototype.setRange = function (range) {
        this.range = range;
    };
    return ElectricCar;
}(Car));
var tesla = new ElectricCar("Tesla", "Model S", 2020, 300);
console.log(tesla.getMake() + ", " + tesla.getModel() + ", " + tesla.getYear() + ", " + tesla.getRange());
