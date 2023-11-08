//Crea un semplice form di registrazione con un input field in cui l’utente possa inserire il proprio nome. A fianco di questo input field crea due pulsanti: uno salverà il valore in localStorage, uno rimuoverà il valore precedentemente salvato (se presente). Mostra sopra l’input field il valore precedentemente salvato, se presente. 

const nameInput = document.getElementById('nameInput');
const saveButton = document.getElementById('saveButton');
const clearButton = document.getElementById('clearButton');
const savedNamesList = document.getElementById('savedNamesList');

let nomiSalvati = localStorage.getItem('nomiUtenti') ? localStorage.getItem('nomiUtenti').split(',') : [];


function updateSavedNamesList() {
    savedNamesList.innerHTML = '';
    nomiSalvati.forEach(function (nome) {
        const listItem = document.createElement('li');
        listItem.textContent = nome;
        savedNamesList.appendChild(listItem);
    });
}
saveButton.addEventListener('click', function () {
    const nomeInputValue = nameInput.value;
    if (nomeInputValue) {
        nomiSalvati.push(nomeInputValue);
        localStorage.setItem('nomiUtenti', nomiSalvati);
        updateSavedNamesList();
        nameInput.value = ''; 
    }
});


clearButton.addEventListener('click', function () {
    if (nomiSalvati.length > 0) {
        nomiSalvati.pop(); 
        localStorage.setItem('nomiUtenti', nomiSalvati);
        updateSavedNamesList();
    }
});


updateSavedNamesList()

//ora fai in modo che crei un altro form dove inserire il nome degli animali e assicurati che il form sia rosso,crealo perche sull html non ce

const animalForm = document.getElementById('animalForm');
const animalNameInput = document.getElementById('animalNameInput');
const saveAnimalButton = document.getElementById('saveAnimalButton');
const clearAnimalButton = document.getElementById('clearAnimalButton');
const savedAnimalsList = document.getElementById('savedAnimalsList');

let animaliSalvati = localStorage.getItem('animaliUtenti')? localStorage.getItem('animaliUtenti').split(',') : [];
  
function updateSavedAnimalsList() {
    savedAnimalsList.innerHTML = '';
    animaliSalvati.forEach(function (nome) {
        const listItem = document.createElement('li');
        listItem.textContent = nome;
        savedAnimalsList.appendChild(listItem);
    });

}

saveAnimalButton.addEventListener('click', function () {
    const animalNameInputValue = animalNameInput.value;
    if (animalNameInputValue) {
        animaliSalvati.push(animalNameInputValue);
        localStorage.setItem('animaliUtenti', animaliSalvati);
        updateSavedAnimalsList();
        animalNameInput.value = '';
    }
});
     innerHTML  = '';   //  remove  the element         
     updateSavedAnimalsList();