import Employee from "./employee";

export default class Manager extends Employee {
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