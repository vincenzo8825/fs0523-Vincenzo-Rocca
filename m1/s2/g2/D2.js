/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
function trovaMaggiore(a,b) {
  if (a > b) {
      return a;
  } else {
      return b;
  }
}
console.log(trovaMaggiore)



/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
function verificaCinque(n) {

  if (n !== 5) {
  }
  
}
  console.log("not equal");





/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
function verificaDivisibilita(numero) {
  if (n % 5 === 0) {
    
  }
}
console.log("divisibile per 5");



/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
function verificaOtto(a, b) {
  if (a === 8 || b === 8 || a + b === 8 || Math.abs(a - b) === 8) {
  }
}
console.log("Uno dei numeri è 8 o la loro somma/sottrazione è 8");





/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

  function calcolaTotale(totalShoppingCart) {
  let totale;
  if (totalShoppingCart > 50) {
      totale = totalShoppingCart;
  } else {
      totale = totalShoppingCart + 10;
  }
  console.log( + totale);
//mi sono perso in questo esercizio
}


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/






/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
let num1 = 10;
let num2 = 20;
let num3 = 30;

if (num1 > num2 && num1 > num3) {
    if (num2 > num3) {
        console.log(num1, num2, num3);
    } else {
        console.log(num1, num3, num2);
    }
} 
  else if (num2 > num1 && num2 > num3) {
    if (num1 > num3) {
        console.log(num2, num1, num3);
    } else {
        console.log(num2, num3, num1);
    }
} 
  else {
    if (num1 > num2) {
        console.log(num3, num1, num2);
    } else {
        console.log(num3, num2, num1);
       }
}





/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
function verificaNumero(valore) {
  if (typeof valore === "numero") {
  } else {
  }
}
console.log("Il valore fornito è un numero");
console.log("Il valore fornito non è un numero");



/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
function verificaPariDispari() {
  if (15 % 2 === 0) {
  } else {
  }
}
verificaPariDispari(15)*// non sono sicuro sia corretto,in console mi dice pari e dispari ma non mi fa esempio con il numero 15
console.log("Il numero è dispari");
console.log("Il numero è pari");



/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

let val = 7;
if (val < 5) {
} else if (val < 10) {
} else {
}
console.log("Meno di 10");
console.log("Meno di 5");
console.log("Uguale a 10 o maggiore");






/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
miacity = 'Toronto'
console.log(miacity)


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

const my = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
miacity = 'Toronto'
console.log(miacity)
//rimuovo last name ma ho cambiato const me in const my perchè mi dava errore
delete my.lastName

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
const mio = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
miacity = 'Toronto'
console.log(miacity)
delete mio.lastName
//rimuovo elemento css in skills
//if (indextoremove !==-1)  //non sono sicuro sia giusto//
//console.log(mio)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/



let array = [];
for (let i = 1; i <= 10; i++) {
    array.push(i);
}
console.log(array);



/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

array[array.length - 1] = 100;
console.log(array);



