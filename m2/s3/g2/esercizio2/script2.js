
//Crea un contatore che tenga conto del tempo che passa, utilizzando sessionStorage. Aggiornando la pagina il valore prosegue, chiudendo la pagina - ovviamente - ricomincia. Il valore del contatore deve aggiornarsi ad ogni secondo



let seconds = sessionStorage.getItem("timer") || 0;

const timerElement = document.getElementById("timer2");

function displayTimer() {
  seconds++;
  timerElement.textContent = seconds;
  sessionStorage.setItem("timer", seconds);
}

const timer = setInterval(displayTimer, 1000);
l