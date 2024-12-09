/* Interface */
interface Person {
    firstName: string;
    lastName: string;
    age: number; 

    details(): void;
}

class Employee implements Person {
    constructor(public firstName: string, public lastName: string, public age: number, public jobTitle: string){}
    public details(): void {
        console.log(`Employee Details: ${this.firstName} ${this.lastName} of ${this.age} age has ${this.jobTitle} job title.`)
    }
}
//let Employee: Person = new Employee(...);
let employee = new Employee('John', 'Doe', 30, 'Software Engineer');
employee.details();


