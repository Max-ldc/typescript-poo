"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Person_gender, _a;
// o Commençons par ajouter de l’accessibilité aux champs de la classe Person :
// § firstName sera publique
// § lastName sera protégé
// § age sera privé
// § gender sera toujours privé après compilation en JavaScript
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
// o Dans la classe Employee
// § Définissez le champ employeeId en privé
// § Renommez le champ employeeId en _employeeId
// § Créez un accesseur publique (getter en anglais) nommée employeeId afin de retourner le champ _employeeId
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
}
_a = Employee;
(() => {
    _a.counter = 0;
})();
// o Créez une classe Manager
// § Mettez en place un héritage à la classe Employee
// § Créez un constructeur qui définira directement les champs privés :
// · _sector de type chaine
// · employeeList de type tableau d’employés
// § Pensez aussi à adapter votre constructeur au besoin de la classe mère
// § Définissez un accesseur (getter) et un mutateur (setter) afin de manipuler le champ privé _sector de façon publique
class Manager extends Employee {
    constructor(_sector, employeeList, firstName, lastName, salary, age, gender) {
        super(firstName, lastName, salary, age, gender);
        this._sector = _sector;
    }
    get sector() {
        return this._sector;
    }
    set sector(sector) {
        this._sector = sector;
    }
}
// o Testez les nouvelles fonctionnalités et créez un objet de type Manager
let toto = new Employee("Toto", "Wolff", 150000, 52);
toto.doWork();
let moi = new Employee("Maxence", "Leduc", 30000, 26);
moi.doWork();
let boss = new Manager("F1", [toto, moi], "Big", "Boss", 1000000, 73);
boss.doWork();
console.log(`Le boss travaille dans : ${boss.sector}`);
boss.sector = "Drugs";
console.log(`Le boss travaille dans : ${boss.sector}`);
