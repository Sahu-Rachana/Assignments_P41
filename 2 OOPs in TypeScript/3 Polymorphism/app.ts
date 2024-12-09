/* Method Overriding */
/* Here we have an abstract class Shape that defines an abstract method calculateArea(). The Circle and Rectangle classes extend Shape and provide their implementations of the calculateArea() method. And we created instances of both Circle and Rectangle classes and calculated their respective areas. */

/* Parent Class or Base Class */
abstract class Shape {
    protected color: string;
    constructor(color: string) {
        this.color = color;
    }
    
    public abstract calculateArea(): number;

    public getColor(): string {
        return this.color;
    }
}

/* Child Class or Derived Class */
class Circle extends Shape {
    private radius: number;
    constructor(color: string, radius: number) {
        super(color);
        this.radius = radius;
    }
    public calculateArea(): number {
        return Math.PI * this.radius * this.radius; 
    }
}

/* Child Class or Derived Class */
class Rectangle extends Shape {
    private width: number;
    private height: number;
    constructor(color: string, width: number, height: number) {
        super(color);
        this.width = width;
        this.height =height;
    }
    public calculateArea(): number {
        return this.width * this.height;
    }
}

const myCircle = new Circle("Red", 7);
const myRectangle = new Rectangle("Blue", 4, 6);
console.log(`${myCircle.getColor()} Circle Area: ` + myCircle.calculateArea());
console.log(`${myRectangle.getColor()} Rectangle Area: ` + myRectangle.calculateArea());

/* Method Overloading */
/* In the below code snippet, we have a Calculator class that defines two add methods—one for adding numbers and another for concatenating strings. And we created an instance of the Calculator class and invoked both add methods. */

class Calculator {
    /*public add(a: string, b:string): string {
        return a + b;
    }
    public add(a: number, b:number): number {
        return a + b;
    }
    /*public add(a: number, b: number, c: number): number {
        return a + b + c;
    }*/

    public add(a: string, b: string): string;
    public add(a: number, b: number): number;
     
    public add(a: any, b: any): any {
           return a + b;
    }
}

const myCalculator = new Calculator();
const sum2 = myCalculator.add(10,20);
//const sum3 = myCalculator.add(10,20,30);
const concatenated = myCalculator.add("Hello, ", "TypeScript!");

console.log(`Sum of 2 = ` + sum2);
//console.log(`Sum of 3 = ` + sum3);
console.log(`Concatenated string = ` + concatenated);