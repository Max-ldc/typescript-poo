import Employee from "./model/employee";
import Manager from "./model/manager";
import { List } from "./utils";


let toto = new Employee("Toto", "Wolff", 150000, 52);

let moi = new Employee("Maxence", "Leduc", 30000, 26);

let boss = new Manager("F1", [toto, moi], "Big", "Boss", 1000000, 73);

let list2 = new List([toto, moi, boss]);
console.log(list2.list);
list2.remove(moi);
list2.add(moi);
console.log(list2.list);

let list3 = new List([1, 2, 3, 4, 5, 6]);
console.log(list3.list);
list3.remove(3);
list3.add(7);
console.log(list3.list);