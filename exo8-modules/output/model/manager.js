"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const employee_1 = __importDefault(require("./employee"));
class Manager extends employee_1.default {
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
exports.default = Manager;
