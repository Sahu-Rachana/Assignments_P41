/* Declaring a Car class that contains make, model and year attributes and their corresponding getter and setter methods. */
/*Parent class*/
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

/*Here the child class: ElectricCar, inherits the properties and methods from the parent class: Car. Additionally, it has its own property range and its getter and setter methods which are not present in the parent class. */
class ElectricCar extends Car {
    private range: number;
    constructor(make: string, model: string, year:number, range: number) {
        super(make, model, year);
        this.range = range;
    }
    public getRange(): number {
        return this.range;
    }
    public setRange(range: number): void {
        this.range = range;
    } 
}

const tesla = new ElectricCar("Tesla", "Model S", 2020, 300);

console.log(tesla.getMake() +`, `+ tesla.getModel() +`, `+ tesla.getYear() +`, `+ tesla.getRange());