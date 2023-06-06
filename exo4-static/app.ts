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

interface Salaried {
    salary: number;

    giveSalary(): number;
}

// o Dans la classe Employee
// § Ajoutez un champ statique nommée counter de type nombre
// § Utilisez un bloc statique (ou parfois appelé constructeur statique) afin d’initialiser la valeur du compteur à 0
// § Définissez une méthode statique getCounter afin de retourner la valeur de champ statique counter

class Employee extends Person implements Salaried {
    readonly employeeId: number;
    salary: number;
    static counter: number;

    static {
        this.counter = 0;
    }

    static getCounter(): number {
        return this.counter;
    }

    // o Dans le constructeur de la classe Employee, faites en sorte qu’à chaque nouvelle création d’objet (donc de passage par le constructeur) le champ counter soit incrémenté
    // o Remplacer l’initialisation du champ employeeId en utilisant la valeur de counter une fois celle-ci incrémenté (on ne veut d’un id avec une valeur à 0, le premier employé aura donc un id 1)

    constructor(firstName: string, lastName: string, salary: number, age?: number, gender?: string) {
        super(firstName, lastName, age, gender);
        this.salary = salary;
        Employee.counter++;
        this.employeeId = Employee.counter;
    }

    giveSalary(): number {
        return this.salary;
    }
    
    doWork(): void {
        console.log(`employee n°${this.employeeId} : i do my work (earn ${this.giveSalary()})`)
    }
}

// o Testez maintenant en créant plusieurs des employées afin de vérifier la valeur du compteur et l’affichage de la méthode doWork avec l’identifiant

let boss = new Employee("Big", "Boss", 150000, 52);
boss.doWork();

let moi = new Employee("Maxence", "Leduc", 30000, 26);
moi.doWork();