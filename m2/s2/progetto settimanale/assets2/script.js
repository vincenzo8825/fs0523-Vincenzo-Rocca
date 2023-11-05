

//reindirizzi dall'html animazioneintro in homepage.html dopo 4 secondi
function reindirizzaDopoAnimazione() {
    sessionStorage.setItem("animazioneVisualizzata", "true");
    
    window.location.href = 'homepage.html';
}


if (!sessionStorage.getItem("animazioneVisualizzata")) {
    
    setTimeout(reindirizzaDopoAnimazione, 4000); 
}