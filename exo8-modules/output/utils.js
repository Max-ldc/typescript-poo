"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.List = exports.ListOfEmployees = void 0;
class ListOfEmployees {
    constructor(array = []) {
        this.array = array;
    }
    add(emp) {
        this.array.push(emp);
    }
    remove(emp) {
        this.array = this.array.filter(employee => employee !== emp);
    }
    get list() {
        return this.array;
    }
}
exports.ListOfEmployees = ListOfEmployees;
class List {
    constructor(array = []) {
        this.array = array;
    }
    add(element) {
        this.array.push(element);
    }
    remove(element) {
        this.array = this.array.filter(elmt => elmt !== element);
    }
    get list() {
        return this.array;
    }
}
exports.List = List;
