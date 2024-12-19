/* Abstraction */
/* The Shape class is declared as abstract, and it defines an abstract method called a draw. The Circle class extends Shape and provides an implementation for the draw method. And we created an instance of the Circle class and invoked the draw method. */
abstract class Shape {
    protected color: string;
     
    constructor(color: string) {
       this.color = color;
    }
     
    public abstract draw(): void;
 }
 
 class Circle extends Shape {
    private radius: number;
     
    constructor(color: string, radius: number) {
       super(color);
       this.radius = radius;
    }
     
    public draw() {
       console.log(`Drawing a ${this.color} circle with radius ${this.radius}`);
    }
 }
 
 const myCircle = new Circle("red", 5);
 myCircle.draw();