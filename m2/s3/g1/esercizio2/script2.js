//Crea un form per la creazione di oggetti “Pet” (animali domestici). La classe Pet dovrà essere dotata delle seguenti proprietà:- petName- ownerName- species // (cane, gatto, coniglio etc.)- breed // (labrador, soriano, nano etc.) Nella classe che utilizzerai per creare questi oggetti aggiungi anche un metodo che restituisca true se due animali condividono lo stesso padrone. Crea, raccogliendo i dati dal form, diverse istanze della classe Pet e mostrane i dati in una lista sottostante.



class Pet {
    constructor(petName, ownerName, species, breed) {
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
        this.proprietariopet = [];
        this.HTMLinit();
    }
}
const pet = ("Cane", "Gatto" ,"Coniglio" ,"Labrador");
const proprietariopet = ( "Mario", "Riccardo", "Gianni" );

const cane = new Pet(pet[0], proprietariopet[0], pet[1], pet[2]);

proprietariopet.addowner(Riccardo);
if (cane.hasSameOwner(Riccardo)) {
    console.log("I due animali condividono lo stesso proprietario.");
} else {
    console.log("I due animali hanno proprietari diversi.");
}
HTMLinit()
{

    this.petName = document.createElement("input");
    this.ownerName = document.createElement("input");
    this.species = document.createElement("input");
    this.breed = document.createElement("input");
    this.createButtonElement();
    this.target = document.createElement("div");
    this.targetDone = document.createElement('div');
    this.listArea.append(this.petName, this.ownerName, this.species, this.breed, this.bottoneSalva, this.target, this.targetDone);
}
createButtonElement()
{
    this.bottoneSalva = document.createElement("button");
    this.bottoneSalva.innerText = 'Aggiungi';
    this.bottoneSalva.addEventListener("click", () => {
        this.createNewListElement();
    })
}

createNewListElement()
{ 
    let li = document.createElement("li");
    li.classList.add('list-item');
    li.innerText = this.petName.value;
}



