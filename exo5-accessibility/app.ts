interface User {
    firstName: string;
    lastName: string;
}

// o Commençons par ajouter de l’accessibilité aux champs de la classe Person :
// § firstName sera publique
// § lastName sera protégé
// § age sera privé
// § gender sera toujours privé après compilation en JavaScript

class Person {
    public firstName: string;
    protected lastName: string;
    private age: number;
    readonly #gender: string;

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
        this.#gender = gender;
    }

    display(): void {
        console.log(`Hello i'm ${this.firstName} ${this.lastName}`);
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

interface Salaried {
    salary: number;

    giveSalary(): number;
}

// o Dans la classe Employee
// § Définissez le champ employeeId en privé
// § Renommez le champ employeeId en _employeeId
// § Créez un accesseur publique (getter en anglais) nommée employeeId afin de retourner le champ _employeeId

class Employee extends Person implements Salaried {
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
}

// o Créez une classe Manager
// § Mettez en place un héritage à la classe Employee
// § Créez un constructeur qui définira directement les champs privés :
// · _sector de type chaine
// · employeeList de type tableau d’employés
// § Pensez aussi à adapter votre constructeur au besoin de la classe mère
// § Définissez un accesseur (getter) et un mutateur (setter) afin de manipuler le champ privé _sector de façon publique

class Manager extends Employee {
    constructor (
        private _sector: string,
        employeeList: Employee[],
        firstName: string, 
        lastName: string, 
        salary: number, 
        age?: number, 
        gender?: string
    ){
        super(firstName, lastName, salary, age, gender);
    }

    get sector() {
        return this._sector;
    }

    set sector(sector: string) {
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
console.log(`Le secteur du boss : ${boss.sector}`);
boss.sector = "Drugs";
console.log(`Le secteur du boss : ${boss.sector}`);
