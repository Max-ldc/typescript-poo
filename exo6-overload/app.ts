interface User {
    firstName: string;
    lastName: string;
}

// o Faites en sorte que la classe Person ne soit plus instanciable (qu’on ne plus créer d’objet de la classe Person) et commentez votre code qui instanciait des objets de type Person

// § Modifiez le champs age de privé à protégé (ainsi le champ sera accessible depuis Employee et Manager)
// § Ajoutez une nouvelle méthode
// · Elle sera nommée « amIOlderThanYou »
// · Prendra comme paramètre un nombre nommé yourAge
// · Retournera un booléen
// · Sera abstraite

abstract class Person {
    firstName: string;
    protected lastName: string;
    protected age: number;
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

    abstract amIolderThanYou(yourAge: number): boolean;
}

interface Salaried {
    salary: number;

    giveSalary(): number;
}

// o Surchargez la méthode display dans la classe Employee :

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

    override display(): void {
        super.display();
        console.log(`, my employee id is ${this._employeeId} and i earn ${this.salary}  `);
    }

    amIolderThanYou(yourAge: number): boolean {
        return this.age < yourAge;
    }
}

// o Surchargez la méthode display dans la classe Manager :
// o Surchargez maintenant la méthode doWork dans la classe Manager

class Manager extends Employee {
    constructor (
        private _sector: string,
        public employeeList: Employee[],
        firstName: string, 
        lastName: string, 
        salary: number, 
        age?: number, 
        gender?: string
    ){
        super(firstName, lastName, salary, age, gender);
        this._sector = _sector;
        this.employeeList = employeeList;
    }

    get sector() {
        return this._sector;
    }

    set sector(sector: string) {
        this._sector = sector;
    }

    override display(): void {
        super.display();
        console.log(`i'm also the manager of ${this._sector}`);
        if (this.employeeList.length > 0 ) {
            if (this.employeeList.length > 1) {
                // afficher tous les employés
                console.log(`My employees are :`)
                for (let emp of this.employeeList) {
                    console.log(emp.getFullName());
                }
            } else {
                // afficher le seul employé
                console.log(`${this.employeeList[0].getFullName()} is my employee`)
            }
            // si pas d'employé, pas de liste affichée
        }
    }

    override doWork(): void {
        console.log("i do same job as an employee, but my salary is better");
    }
}

let toto = new Employee("Toto", "Wolff", 150000, 52);

let moi = new Employee("Maxence", "Leduc", 30000, 26);

let boss = new Manager("F1", [toto, moi], "Big", "Boss", 1000000, 73);

boss.display();
boss.doWork();
