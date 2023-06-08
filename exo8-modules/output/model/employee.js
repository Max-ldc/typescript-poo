"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const person_1 = __importDefault(require("./person"));
class Employee extends person_1.default {
    static getCounter() {
        return this.counter;
    }
    constructor(firstName, lastName, salary, age, gender) {
        super(firstName, lastName, age, gender);
        this.salary = salary;
        Employee.counter++;
        this._employeeId = Employee.counter;
    }
    get employeeId() {
        return this._employeeId;
    }
    giveSalary() {
        return this.salary;
    }
    doWork() {
        console.log(`employee n°${this.employeeId} : i do my work (earn ${this.giveSalary()})`);
    }
    display() {
        super.display();
        console.log(`, my employee id is ${this._employeeId} and i earn ${this.salary}  `);
    }
    amIolderThanYou(yourAge) {
        return this.age < yourAge;
    }
}
exports.default = Employee;
_a = Employee;
(() => {
    _a.counter = 0;
})();
