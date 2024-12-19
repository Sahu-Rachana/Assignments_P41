/* Declaring a Car class that contains make, model and year attributes and their corresponding getter and setter methods. */
class Car{
    private make: string;
    private model: string;
    private year: number;

    /* Defining a constructor with three parameters, namely: make, model, and year. */
    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    public getMake(): string {
        return this.make;
    }
    public setMake(make: string): void {
        this.make = make;
    }
    public getModel(): string {
        return this.model;
    }
    public setModel(model: string): void {
        this.model = model;
    }
    public getYear(): number {
        return this.year;
    }
    public setYear(year: number): void {
        this.year = year;
    }
}

/*This creates an object named myCar with make: Toyota, model: Camry, and year: 2022 */
let myCar = new Car('Toyota', 'Camry', 2024);

console.log(myCar.getMake(), myCar.getModel(), myCar.getYear());