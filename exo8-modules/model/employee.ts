import Person from "./person";
import Salaried from "./salaried";

export default class Employee extends Person implements Salaried {
    private readonly _employeeId: number;
    salary: number;
    static counter: number;

    static {
        this.counter = 0;
    }

    static getCounter(): number {
        return this.counter;
    }

    constructor(firstName: string, lastName: string, salary: number, age?: number, gender?: string) {
        super(firstName, lastName, age, gender);
        this.salary = salary;
        Employee.counter++;
        this._employeeId = Employee.counter;
    }

    get employeeId() {
        return this._employeeId;
    }

    giveSalary(): number {
        return this.salary;
    }

    doWork(): void {
        console.log(`employee n°${this.employeeId} : i do my work (earn ${this.giveSalary()})`)
    }

    override display(): void {
        super.display();
        console.log(`, my employee id is ${this._employeeId} and i earn ${this.salary}  `);
    }

    amIolderThanYou(yourAge: number): boolean {
        return this.age < yourAge;
    }
}