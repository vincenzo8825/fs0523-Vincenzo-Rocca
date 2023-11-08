//Devi realizzare una pagina per una “libreria” contenenente libri derivanti da una chiamata HTTP di tipo GET. Endpoint: https://striveschool-api.herokuapp.com/books Requisiti della pagina: ●Utilizza Bootstrap 5 per creare una pagina responsive con una sezione centrale a 3 o 4 colonne per riga ●Ogni colonna avrà al suo interno un elemento Card di Bootstrap, creata a partire da un singolo libro:nella “card image” inserisci la copertina del libro, nel “card body” il suo titolo e il suo prezzo. ●Sempre nel “card body” inserisci un pulsante “Scarta”. Se premuto, dovrà far scomparire la card dalla pagina. ●EXTRA: crea una lista che rappresenti il carrello del negozio e inseriscila dove vuoi nella pagina. Aggiungi un altro pulsante “Compra ora” vicino a “Scarta” nelle card per aggiungere il libro al carrello. Il carrello dovrà persistere nello storage del browser. 
//_________________________________________________________________________________________________________________________________________________///

let cartItems = [];

fetch("https://striveschool-api.herokuapp.com/books")
    .then(response => response.json())
    .then(books => {
        let bookList = document.getElementById("book-list");
        books.forEach(book => {
             let card = bookList.children[0].cloneNode(true);
            card.querySelector(".card-img-top").src = book.img;
            card.querySelector(".card-title").textContent = book.title;
            card.querySelector(".card-text").textContent = "$" + book.price;
            bookList.appendChild(card);
        });

        bookList.children[0].remove();

        let addToCartButtons = document.querySelectorAll(".addToCart");
        addToCartButtons.forEach(button => {
            button.addEventListener("click", function() {
                let card = this.closest(".card");
                 let title = card.querySelector(".card-title").textContent;
                 let price = parseFloat(card.querySelector(".card-text").textContent.replace("$", ""));
                cartItems.push({ title, price });
                updateCart();
            });
        });

        let removeButtons = document.querySelectorAll(".removeBook");
          removeButtons.forEach(button => {
             button.addEventListener("click", function() {
                 let card = this.closest(".card");
                card.remove();
            });
        });
    });

function updateCart() {
     let cartList = document.getElementById("cart");
      cartList.innerHTML = "";
       cartItems.forEach(item => {
         let cartItem = document.createElement("li");
          cartItem.className = "list-group-item";
        cartItem.textContent = item.title + " - $" + item.price;
         let removeButton = document.createElement("button");
         removeButton.textContent = "Rimuovi";
     removeButton.className = "btn btn-danger removeFromCart";
        removeButton.addEventListener("click", function() {
            cartItems = cartItems.filter(i => i.title !== item.title && i.price !== item.price);
            cartItem.remove();
        });
        cartItem.appendChild(removeButton);
        cartList.appendChild(cartItem);
    });
}
