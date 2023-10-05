/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/
function area(l1, l2) {
    let area = l1 * l2;
    return area;
}
console.log("L'area del rettangolo è: " + area);



/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(a, b) {
    if (a == b) {
        return 3 * (a + b);
    } else {
        return a + b;
    }
}

let risultato = crazySum(5, 5);
console.log('Il risultato è: ' + risultato);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
let a = 22;

function crazyDiff(a) {
    if (a > 19) {
        return Math.abs((a - 19) * 3);
    } else {
        return Math.abs(a - 19);
    }
}

console.log(crazyDiff(a));



/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n) {
    if ((n >= 20 && n <= 100) || n === 400) {
        return true;
    } else {
        return false;
    }
}

let n = 101; //tra 20e100 true e da  101 a 400 false
let isInBoundary = boundary(n);
console.log(`Il numero ${n} è nel limite? ${isInBoundary}`);




/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(str) {
    if (str.indexOf("EPICODE") === 0) {
        return str;
    } else {
        return "EPICODE " + str;
    }
}

console.log(epify(""));





/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/


function check3and7(n) {
    if (n % 3 === 0) {
        console.log(n + " è  multiplo di 3");
        return true;
    } else if (n % 7 === 0) {
        console.log(n + " è  multiplo di 7");
        return true;
    } else {
        console.log(n + " non è  multiplo né di 3 né di 7");
        return false;
    }
}

console.log(check3and7(9));
console.log(check3and7(14));
console.log(check3and7(10));



/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
function reverseString(stringa) {
    return stringa.split('').reverse().join('');
}

console.log(reverseString("EPICODE"));


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
function cutString(str) {
    return str.slice(1, -1);
}

console.log(cutString("Vincenzo"));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
function giveMeRandom(n) {
    let array = [];
    for (let i = 0; i < n; i++) {
        array.push(Math.floor(Math.random() * 11));
    }
    return array;
}

console.log(giveMeRandom(5));

/* SCRIVI QUI LA TUA RISPOSTA */
