class User {
    constructor(firstName, lastName, age, location) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }

    confrontaEta(otherUser) {
        if (this.age < otherUser.age) {
            return `${otherUser.firstName} è la persona più grande`;
        } else if (this.age > otherUser.age) {
            return `${this.firstName} è la persona più grande`;
        } else {
            return `${otherUser.firstName} e ${this.firstName} hanno la stessa età`;
        }
    }
}
const firstPerson = new User('Vincenzo', 'Rocca', 35, 'Lamezia');
const secondPerson = new User('Mario', 'Rossi', 54, 'Roma');

const risultato = firstPerson.confrontaEta(secondPerson);

console.log(risultato);

