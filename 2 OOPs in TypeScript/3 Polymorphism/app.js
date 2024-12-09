/* Method Overriding */
/* Method overriding allows a subclass to override a method defined in its superclass. */
/* Here we have an abstract class Shape that defines an abstract method calculateArea(). The Circle and Rectangle classes extend Shape and provide their implementations of the calculateArea() method. And we created instances of both Circle and Rectangle classes and calculated their respective areas. */
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
/* Parent Class or Base Class */
var Shape = /** @class */ (function () {
    function Shape(color) {
        this.color = color;
    }
    Shape.prototype.getColor = function () {
        return this.color;
    };
    return Shape;
}());
/* Child Class or Derived Class */
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(color, radius) {
        var _this = _super.call(this, color) || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.calculateArea = function () {
        return Math.PI * this.radius * this.radius;
    };
    return Circle;
}(Shape));
/* Child Class or Derived Class */
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(color, width, height) {
        var _this = _super.call(this, color) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Rectangle.prototype.calculateArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}(Shape));
var myCircle = new Circle("Red", 7);
var myRectangle = new Rectangle("Blue", 4, 6);
console.log("".concat(myCircle.getColor(), " Circle Area: ") + myCircle.calculateArea());
console.log("".concat(myRectangle.getColor(), " Rectangle Area: ") + myRectangle.calculateArea());
/* Method Overloading */
/* Method overloading,  enables us to define multiple methods with the same name but different parameters. TypeScript determines the appropriate method to invoke based on the number or types of arguments passed. */
/* In the below code snippet, we have a Calculator class that defines two add methods—one for adding numbers and another for concatenating strings. And we created an instance of the Calculator class and invoked both add methods. */
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (a, b) {
        return a + b;
    };
    Calculator.prototype.add = function (a, b) {
        return a + b;
    };
    return Calculator;
}());
var myCalculator = new Calculator();
var sum2 = myCalculator.add(10, 20);
//const sum3 = myCalculator.add(10,20,30);
var concatenated = myCalculator.add("Hello, ", "TypeScript!");
console.log("Sum of 2 = " + sum2);
//console.log(`Sum of 3 = ` + sum3);
console.log("Concatenated string = " + concatenated);
