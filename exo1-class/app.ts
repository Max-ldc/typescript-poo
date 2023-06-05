// o Créez une classe nommée Person qui contiendra :
// § Les champs firstName et lastName
// § Un constructeur permettant d’initialiser les deux champs
// § Une méthode display permettant d’afficher la chaine « Hello i’m firstName lastName »
// § Une méthode getFullName renvoyant la chaine « firstName lastName »

class Person {
    firstName: string;
    lastName: string;

    /**
     *
     */
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    display(): void {
        console.log(`Hello i'm ${this.firstName} ${this.lastName}`);
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

// o Créez un objet de type personne afin de tester les méthodes

let toto = new Person("Toto", "Wolff");

toto.display();
console.log("His name is : " + toto.getFullName());