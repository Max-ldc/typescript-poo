// o Commencez par ajouter un nouveau champ nommé « gender » dans la classe, de type chaine de caractère, non modifiable après son initialisation dans le constructeur
// o Modifiez le constructeur afin de prendre en compte ce nouveau champ
// § Le paramètre permettant d’initialiser gender aura comme valeur par défaut « inconnu » directement dans la signature du constructeur

interface User {
    firstName: string;
    lastName: string;
}

class Person {
    firstName: string;
    lastName: string;
    age: number;
    readonly gender: string;

    constructor(user: User);
    constructor(firstName: string, lastName: string, age?: number, gender?: string)
    constructor(userOrFirstName: User | string, lastName?: string, age?: number, gender: string = "inconnu") {
        if (typeof userOrFirstName === "string") {
            this.firstName = userOrFirstName;
            this.lastName = lastName!;
        } else {
            this.firstName = userOrFirstName.firstName;
            this.lastName = userOrFirstName.lastName;
        }
        (!age) ? this.age = 25 : this.age = age;
        this.gender = gender;
    }

    display(): void {
        console.log(`Hello i'm ${this.firstName} ${this.lastName}`);
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

// o Créez une interface Salaried qui contiendra :
// § Un champ salary de type number
// § Une signature pour une méthode nommée giveSalary qui retournera le salaire (soit un nombre)

interface Salaried {
    salary: number;

    giveSalary(): number;
}

// o Créer maintenant une nouvelle classe nommée Employee qui :
// § Etendra de la classe Person
// § Implementera l’interface Salaried
// § Contiendra un champ employeeId, en lecture seule, qui sera un nombre initialisé à 0 dans le corps du constructeur (ce comportement sera modifié dans l’exercice suivant)
// § Définira une méthode nommée doWork, Sans paramètre, Sans type de retour, Affichera dans la console la chaine « employee n° employeeid : 'i do my work (earn salary)' ”
// · N’oubliez pas de mettre en place tous les éléments nécessaires dans le constructeur de la classe enfant (Conseil : Utilisez le constructeur firstName, lastName, age et gender)

class Employee extends Person implements Salaried {
    readonly employeeId: number;
    salary: number;

    constructor(firstName: string, lastName: string, employeeId = 0, salary: number, age?: number, gender?: string) {
        super(firstName, lastName, age, gender);
        this.employeeId = employeeId;
        this.salary = salary;
    }

    giveSalary(): number {
        return this.salary;
    }
    
    doWork(): void {
        console.log(`employee n°${this.employeeId} : i do my work (earn ${this.giveSalary()})`)
    }
}

// o Créez un objet de type Employee afin de tester la classe et ses méthodes (celles du parent et de l’enfant)

let boss = new Employee("Big", "Boss", 1, 150000, 52);
boss.doWork();