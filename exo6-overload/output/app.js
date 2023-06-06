"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Person_gender, _a;
class Person {
    constructor(userOrFirstName, lastName, age, gender = "inconnu") {
        _Person_gender.set(this, void 0);
        if (typeof userOrFirstName === "string") {
            this.firstName = userOrFirstName;
            this.lastName = lastName;
        }
        else {
            this.firstName = userOrFirstName.firstName;
            this.lastName = userOrFirstName.lastName;
        }
        (!age) ? this.age = 25 : this.age = age;
        __classPrivateFieldSet(this, _Person_gender, gender, "f");
    }
    display() {
        console.log(`Hello i'm ${this.firstName} ${this.lastName}`);
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
_Person_gender = new WeakMap();
// o Surchargez la méthode display dans la classe Employee :
class Employee extends Person {
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
}
_a = Employee;
(() => {
    _a.counter = 0;
})();
// o Surchargez la méthode display dans la classe Manager :
// o Surchargez maintenant la méthode doWork dans la classe Manager
class Manager extends Employee {
    constructor(_sector, employeeList, firstName, lastName, salary, age, gender) {
        super(firstName, lastName, salary, age, gender);
        this._sector = _sector;
        this.employeeList = employeeList;
        this._sector = _sector;
        this.employeeList = employeeList;
    }
    get sector() {
        return this._sector;
    }
    set sector(sector) {
        this._sector = sector;
    }
    display() {
        super.display();
        console.log(`i'm also the manager of ${this._sector}`);
        if (this.employeeList.length > 0) {
            if (this.employeeList.length > 1) {
                // afficher tous les employés
                console.log(`My employees are :`);
                for (let emp of this.employeeList) {
                    console.log(emp.getFullName());
                }
            }
            else {
                // afficher le seul employé
                console.log(`${this.employeeList[0].getFullName()} is my employee`);
            }
            // si pas d'employé, pas de liste affichée
        }
    }
    doWork() {
        console.log("i do same job as an employee, but my salary is better");
    }
}
let toto = new Employee("Toto", "Wolff", 150000, 52);
let moi = new Employee("Maxence", "Leduc", 30000, 26);
let boss = new Manager("F1", [toto, moi], "Big", "Boss", 1000000, 73);
boss.display();
boss.doWork();
