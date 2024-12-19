/* Open for extension but Closed for modification */
/* Let’s say we have a Shape class and want to calculate the area of different shapes. We can use inheritance and extension to achieve the OCP */
/* Here, we can easily add more shapes (e.g., Triangle) without modifying the existing Shape or Circle/Rectangle classes. */

abstract class Shape{
    public abstract calculateArea(): number;
}

class Circle extends Shape {
    private radius: number;
    constructor(radius:number) {
        super();
        this.radius = radius; 
    }

    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {
    private width: number;
    private height: number;
    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }

    calculateArea(): number {
        return this.width * this.height;
    }
}

let circle = new Circle(10);
let rectangle = new Rectangle(10,10);

console.log('Area of Circle: ' + circle.calculateArea());
console.log('Area of Rectangle: ' + rectangle.calculateArea());
