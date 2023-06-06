interface User {
    firstName: string;
    lastName: string;
}

abstract class Person {
    public firstName: string;
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

class Manager extends Employee {
    constructor(
        private _sector: string,
        public employeeList: Employee[],
        firstName: string,
        lastName: string,
        salary: number,
        age?: number,
        gender?: string
    ) {
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
        if (this.employeeList.length > 0) {
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

// o Déclarez une nouvelle classe nommée ListOfEmployees
// o Ajoutez un constructeur qui créera le champ privé array qui sera un tableau d’employés
// § Par défaut le tableau sera vide
// o Ajoutez les méthodes suivantes à la classe :
// § add pour ajouter au tableau un employé fournis en paramètre
// § remove pour supprimer du tableau un employé fournis en paramètre
// o Ajoutez un accesseur (getter) nommé list afin d’obtenir la liste des employés

class ListOfEmployees {
    constructor(
        private array: Employee[] = [],
    ) { }

    add(emp: Employee): void {
        this.array.push(emp);
    }

    remove(emp: Employee): void {
        this.array = this.array.filter(employee => employee !== emp);
    }

    get list() {
        return this.array;
    }
}

// o Déclarez une nouvelle classe nommée List qui utilisera un type générique nommé T
// o Ajoutez un constructeur qui créera le champ privé array qui sera un tableau de T
// § Par défaut le tableau sera vide
// o Ajoutez les méthodes suivantes à la classe :
// § add pour ajouter au tableau un élément de T fournis en paramètre
// § remove pour supprimer du tableau un élément de T fournis en paramètre
// o Ajoutez un accesseur (getter) nommé list afin d’obtenir la liste des éléments de T

class List<T> {
    constructor(private array: Array<T> = []) { }

    add(element: T) {
        this.array.push(element);
    }

    remove(element: T) {
        this.array = this.array.filter(elmt => elmt !== element);
    }

    get list() {
        return this.array;
    }
}

// o Créez un objet de type ListOfEmployees et testez les méthodes d’ajout d’un employé, de suppression d’un employé et de récupération de la liste

let toto = new Employee("Toto", "Wolff", 150000, 52);

let moi = new Employee("Maxence", "Leduc", 30000, 26);

let boss = new Manager("F1", [toto, moi], "Big", "Boss", 1000000, 73);

let list = new ListOfEmployees([toto, moi, boss]);
console.log(list.list);
list.remove(moi);
list.add(moi);
console.log(list.list);

// o Créez un objet de type List en utilisant le type Employee et testez les méthodes d’ajout, de suppression et de récupération de la liste

let list2 = new List([toto, moi, boss]);
console.log(list2.list);
list2.remove(moi);
list2.add(moi);
console.log(list2.list);

// o Si la classe List est correctement conçue, elle est censée être totalement générique, dans ce cas, créez un objet de type List en utilisant le type number et testez les méthodes d’ajout, de suppression et de récupération de la liste

let list3 = new List([1, 2, 3, 4, 5, 6]);
console.log(list3.list);
list3.remove(3);
list3.add(7);
console.log(list3.list);