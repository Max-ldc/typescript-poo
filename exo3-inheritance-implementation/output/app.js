"use strict";
// o Commencez par ajouter un nouveau champ nommé « gender » dans la classe, de type chaine de caractère, non modifiable après son initialisation dans le constructeur
// o Modifiez le constructeur afin de prendre en compte ce nouveau champ
// § Le paramètre permettant d’initialiser gender aura comme valeur par défaut « inconnu » directement dans la signature du constructeur
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
// o Créer maintenant une nouvelle classe nommée Employee qui :
// § Etendra de la classe Person
// § Implementera l’interface Salaried
// § Contiendra un champ employeeId, en lecture seule, qui sera un nombre initialisé à 0 dans le corps du constructeur (ce comportement sera modifié dans l’exercice suivant)
// § Définira une méthode nommée doWork, Sans paramètre, Sans type de retour, Affichera dans la console la chaine « employee n° employeeid : 'i do my work (earn salary)' ”
// · N’oubliez pas de mettre en place tous les éléments nécessaires dans le constructeur de la classe enfant (Conseil : Utilisez le constructeur firstName, lastName, age et gender)
class Employee extends Person {
    constructor(firstName, lastName, employeeId = 0, salary, age, gender) {
        super(firstName, lastName, age, gender);
        this.employeeId = employeeId;
        this.salary = salary;
    }
    giveSalary() {
        return this.salary;
    }
    doWork() {
        console.log(`employee n°${this.employeeId} : i do my work (earn ${this.giveSalary()})`);
    }
}
// o Créez un objet de type Employee afin de tester la classe et ses méthodes (celles du parent et de l’enfant)
let boss = new Employee("Big", "Boss", 1, 150000, 52);
boss.doWork();
