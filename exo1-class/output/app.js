"use strict";
// o Créez une classe nommée Person qui contiendra :
// § Les champs firstName et lastName
// § Un constructeur permettant d’initialiser les deux champs
// § Une méthode display permettant d’afficher la chaine « Hello i’m firstName lastName »
// § Une méthode getFullName renvoyant la chaine « firstName lastName »
class Person {
    /**
     *
     */
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    display() {
        console.log(`Hello i'm ${this.firstName} ${this.lastName}`);
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
// o Créez un objet de type personne afin de tester les méthodes
let toto = new Person("Toto", "Wolff");
toto.display();
console.log("Son nom est : " + toto.getFullName());
