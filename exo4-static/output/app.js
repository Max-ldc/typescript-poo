"use strict";
var _a;
class Person {
    constructor(userOrFirstName, lastName, age, gender = "inconnu") {
        if (typeof userOrFirstName === "string") {
            this.firstName = userOrFirstName;
            this.lastName = lastName;
        }
        else {
            this.firstName = userOrFirstName.firstName;
            this.lastName = userOrFirstName.lastName;
        }
        (!age) ? this.age = 25 : this.age = age;
        this.gender = gender;
    }
    display() {
        console.log(`Hello i'm ${this.firstName} ${this.lastName}`);
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
// o Dans la classe Employee
// § Ajoutez un champ statique nommée counter de type nombre
// § Utilisez un bloc statique (ou parfois appelé constructeur statique) afin d’initialiser la valeur du compteur à 0
// § Définissez une méthode statique getCounter afin de retourner la valeur de champ statique counter
class Employee extends Person {
    static getCounter() {
        return this.counter;
    }
    // o Dans le constructeur de la classe Employee, faites en sorte qu’à chaque nouvelle création d’objet (donc de passage par le constructeur) le champ counter soit incrémenté
    // o Remplacer l’initialisation du champ employeeId en utilisant la valeur de counter une fois celle-ci incrémenté (on ne veut d’un id avec une valeur à 0, le premier employé aura donc un id 1)
    constructor(firstName, lastName, salary, age, gender) {
        super(firstName, lastName, age, gender);
        this.salary = salary;
        Employee.counter++;
        this.employeeId = Employee.counter;
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
let boss = new Employee("Big", "Boss", 150000, 52);
boss.doWork();
let moi = new Employee("Maxence", "Leduc", 30000, 26);
moi.doWork();
