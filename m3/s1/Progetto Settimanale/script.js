"use strict";
class Smartphone {
    constructor() {
        this.carica = 0;
        this.numeroChiamate = 0;
        this.costoMinuto = 0.20;
        this.registroChiamate = [];
    }
    ricarica(euro) {
        this.carica += euro;
    }
    numero404() {
        return `Credito residuo: ${this.carica.toFixed(2)} euro`;
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
    chiamata(min) {
        const costoChiamata = min * this.costoMinuto;
        if (this.carica >= costoChiamata) {
            this.carica -= costoChiamata;
            this.numeroChiamate++;
            const nuovaChiamata = {
                id: this.numeroChiamate,
                durata: min,
                dataOra: new Date(),
            };
            this.registroChiamate.push(nuovaChiamata);
        }
        else {
            console.log("Credito insufficiente per effettuare la chiamata.");
        }
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
    mostraRegistroChiamate() {
        console.log("Registro delle chiamate:");
        this.registroChiamate.forEach(chiamata => {
            console.log(` Durata: ${chiamata.durata} minuti, Data e Ora: ${chiamata.dataOra}`);
        });
    }
    filtraChiamatePerDataOra(dataOra) {
        const chiamateFiltrate = this.registroChiamate.filter(chiamata => chiamata.dataOra.getTime() === dataOra.getTime());
        console.log(`Chiamate effettuate in data e ora ${dataOra}:`);
        chiamateFiltrate.forEach(chiamata => {
            console.log(`Durata: ${chiamata.durata} minuti, Data e Ora: ${chiamata.dataOra}`);
        });
    }
}
const smartphone1 = new Smartphone();
const smartphone2 = new Smartphone();
const smartphone3 = new Smartphone();
smartphone1.ricarica(20);
console.log(smartphone1.numero404());
smartphone1.chiamata(5);
smartphone1.chiamata(8);
console.log("Dopo le chiamate di smartphone1:");
console.log(smartphone1.numero404());
console.log("Numero di chiamate effettuate:", smartphone1.getNumeroChiamate());
smartphone1.mostraRegistroChiamate();
smartphone1.filtraChiamatePerDataOra(new Date());
smartphone2.ricarica(15);
console.log(smartphone2.numero404());
smartphone2.chiamata(3);
console.log("Dopo le chiamate di smartphone2:");
console.log(smartphone2.numero404());
console.log("Numero di chiamate effettuate:", smartphone2.getNumeroChiamate());
smartphone2.mostraRegistroChiamate();
smartphone2.filtraChiamatePerDataOra(new Date());
smartphone3.ricarica(30);
console.log(smartphone3.numero404());
smartphone3.chiamata(8);
console.log("Dopo le chiamate di smartphone3:");
console.log(smartphone3.numero404());
console.log("Numero di chiamate effettuate:", smartphone3.getNumeroChiamate());
smartphone3.mostraRegistroChiamate();
smartphone3.filtraChiamatePerDataOra(new Date());
