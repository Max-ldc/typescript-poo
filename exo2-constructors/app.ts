// o Ajoutez un champ age (non optionnel) à votre classe Person
// o Modifiez le constructeur afin de fournir age
// § Le paramètre age sera optionnel dans le constructeur
// § Si celui n’est pas fourni alors il prendra « 25 » en valeur par défaut
// o Créez maintenant une interface nommée User avec les champs firstName et lastName
// o Ajoutez dans votre classe un autre constructeur afin de pouvoir fournir directement un objet correspond à l’interface User
// § Il y aura ainsi deux constructeurs disponibles pour la création d’objet
// o Créez des objets de type personne afin de tester le code en prenant compte des différents constructeurs et du fait que le champ age est optionnel (tldr il faudra 3 objets minimum)

interface User {
    firstName: string;
    lastName: string;
}

class Person {
    firstName: string;
    lastName: string;
    age: number;

    constructor(user: User);
    constructor(firstName: string, lastName: string, age?: number)
    constructor(userOrFirstName: User | string, lastName?: string, age?: number) {
        if (typeof userOrFirstName === "string") {
            this.firstName = userOrFirstName;
            this.lastName = lastName!;
        } else {
            this.firstName = userOrFirstName.firstName;
            this.lastName = userOrFirstName.lastName;
        }
        (!age) ? this.age = 25 : this.age = age;
    }

    display(): void {
        console.log(`Hello i'm ${this.firstName} ${this.lastName}`);
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

let toto = new Person("Toto", "Wolff");
let tata = new Person("Taty", "Josy", 81);
const user = {firstName: "Thierry", lastName: "Rolland"};
let titi = new Person(user);

toto.display();
console.log("His name is : " + toto.getFullName());
tata.display();
console.log("His name is : " + tata.getFullName());
titi.display();
console.log("His name is : " + titi.getFullName());