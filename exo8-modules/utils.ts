import Employee from "./model/employee";

export class ListOfEmployees {
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

export class List<T> {
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