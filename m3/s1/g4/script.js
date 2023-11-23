"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Prodotto {
    constructor(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
        this.mostraPrezzo();
    }
    mostraPrezzo() {
        console.log(' PRODOTTO');
        console.log("NOME: " + this.capo);
        console.log("Prezzo con IVA: " + this.prezzoivainclusa + "$");
        let prezzoScontato = this.prezzoivainclusa;
        for (let i = 0; i < this.saldo; i++) {
            prezzoScontato -= this.prezzoivainclusa / 100;
        }
        console.log("SCONTO: " + this.saldo + "%");
        console.log("Prezzo scontato: " + prezzoScontato + "$");
    }
}
let prodottiArray = [];
function fetchData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const res = yield fetch("starter/Abbigliamento.json");
            if (!res.ok) {
                throw new Error("ERRORE NEL CARICAMENTO DELLA FETCH");
            }
            const prodotti = yield res.json();
            prodotti.forEach((element) => {
                const newProdotto = new Prodotto(element.id, element.codprod, element.collezione, element.capo, element.modello, element.quantita, element.colore, element.prezzoivaesclusa, element.prezzoivainclusa, element.disponibile, element.saldo);
                prodottiArray.push(newProdotto);
            });
            console.log(prodottiArray);
        }
        catch (err) {
            console.error(err);
        }
    });
}
fetchData();
