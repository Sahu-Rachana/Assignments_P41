var Employee = /** @class */ (function () {
    function Employee(firstName, lastName, age, jobTitle) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.jobTitle = jobTitle;
    }
    Employee.prototype.details = function () {
        console.log("Employee Details: ".concat(this.firstName, " ").concat(this.lastName, " of ").concat(this.age, " age has ").concat(this.jobTitle, " job title."));
    };
    return Employee;
}());
//let Employee: Person = new Employee(...);
var employee = new Employee('John', 'Doe', 30, 'Software Engineer');
employee.details();
