let tabellone = document.getElementById('tabellone');
let estraiNumeroButton = document.getElementById('estraiNumero');
let numeriEstratti = new Set();

function estraiNumeroCasuale() {
    if (numeriEstratti.size < 76) {
        let numeroCasuale;
        do {
            numeroCasuale = Math.floor(Math.random() * 76) + 1;
        } while (numeriEstratti.has(numeroCasuale));
        numeriEstratti.add(numeroCasuale);
        return numeroCasuale;
    } else {
        alert("Tombola!");
        return null;
    }
}

function toggleEvidenzia(cella) {
    let numero = cella.innerText;
    if (numeriEstratti.has(Number(numero))) {
        cella.classList.toggle('evidenziata');
    }
}

for (let i = 1; i <= 76; i++) {
    let cella = document.createElement('div');
    cella.className = 'cella';
    cella.innerText = i;
    tabellone.appendChild(cella);
}

estraiNumeroButton.addEventListener('click', () => {
    let numeroEstratto = estraiNumeroCasuale();
    if (numeroEstratto !== null) {
        let celle = Array.from(tabellone.children);
        let cellaCorrispondente = celle.find(c => c.innerText === numeroEstratto.toString());
        if (cellaCorrispondente) {
            toggleEvidenzia(cellaCorrispondente);
        }
    }
});

