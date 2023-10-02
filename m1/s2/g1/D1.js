/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
  1. Number: sono i numeri che sappiamo  ad esempio 1,2,3,4 ecc.
 2. String: sono le parole o le frasi, ad esempio "ciao" o "mi chiamo vincenzo".
 3. Boolean: come un interruttore che può essere solo acceso (true) o spento (false).
 4. Null: come una stanza vuota, dentro non c'è nessuno.
 5. Undefined: come una stanza chiusa. non sappiamo chi  c'è dentro.
  6. Object: come una casa piena di stanze in cui possiamo trovare tutte le cose scritte sopra

*/


/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
let name= 'vincenzo'
console.log(name);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
let somma=12+20
console.log(somma);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
let x= 12
console.log(x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

name = "vincenzo";
console.log(name);

/* Riassegno un nuovo valore alla variabile "name"*/
name = "mario";
console.log(name); 
/*Creo una variabile const  e provo a riassegnarla
const  = "Valore fisso vincenzo";
console.log; questo mi darà errore perche il valore const non si puo cambiare mai perche è fisso

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let sottrazione = 4 - x;
console.log(sottrazione);
/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).//*
*/



let name1 = "john";
let name2 = "John";
let isEqual = name1 === name2; //* false
console.log(isEqual);
let isEqualLowercase = name1.toLowerCase() === name2.toLowerCase(); //* true
console.log(isEqualLowercase);
