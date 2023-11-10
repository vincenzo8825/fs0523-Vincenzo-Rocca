//////
//Pexels Album
//Partendo da questo layout, Starting-template implementa le seguenti funzionalità:
//PER PRIMA COSA: 
//1. Registrati per ottenere la tua API key: https://www.pexels.com/api/new/
//2. La key, quando ottenuta, dovrà essere usata negli header della tua HTTP request con la proprietà:
//{Authorization: "[LA TUA API KEY]"}
//questo dovrebbe essere abbastanza per fare la richiesta GET con successo.
//ESERCIZIO:  
//1) Premere sul bottone "Load Images" caricherà il contenuto delle API nella pagina: 
//https://api.pexels.com/v1/search?query=[your-query]
//2) Premere sul bottone "Load Secondary Images" invece dovrà usare una diversa query:https://api.pexels.com/v1/search?query=[your-secondary-query]
//3) Il tasto "Edit" andrà sostituito con un tasto "Hide".
//4) Quando si preme "Hide", l'intera card dovrebbe scomparire.
//5) Sostituisci il testo "9 mins" del template delle card con l'id dell'immagine corrispondente.
//6) Nella sezione principale aggiungi un campo di ricerca. Usa il valore di questo campo per cercare nuove immagini rimpiazzando quelle esistenti.
//7) Cliccare l'immagine o il suo nome farà cambiare pagina verso una di dettaglio dell'immagine. Qui dovrai visualizzare immagine, nome artista e linkare la sua pagina personale. Dai la possibilità all'utente di tornare indietro.
//Documentazione URLSearchParams: https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/URLSearchParams
//[EXTRA]
//8) Il background della pagina di dettaglio dovrà essere la media dei colori presenti in quella foto.
//9) Quando l'utente clicca su bottone "VIEW" della Card, apri l'immagine corrispondente in un modale.
//API Docs:
//Documentazione : https://www.pexels.com/it-it/api/documentation/
//Documentazione dell'endpoint per la ricerca foto: https://www.pexels.com/it-it/api/documentation/#photos-search    sweetalert    MPnGzHs8j3OZqWMy6a7lVpFaRVHuqroOeJXtpIUvRRddeBzjbfYK9RKY



  



async function getImages(query) {

  let apiUrl = 'https://api.pexels.com/v1/search?query=';
  const api_key = 'MPnGzHs8j3OZqWMy6a7lVpFaRVHuqroOeJXtpIUvRRddeBzjbfYK9RKY';
  
  
  const response = await fetch(apiUrl + query, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': api_key,
    },
  });
}
    
  /////        });

   /////       let data = await response.json();
    /////      let imageContainer = document.querySelector('.album .container .row');
   /////       imageContainer.innerHTML = '';
/////
         // data.photos.forEach(photo => {
   /////         let cardTemplate = document.getElementById('cardTemplate');
           // let card = cardTemplate.content.cloneNode(true);
/////
    /////        card.querySelector('.col-md-4').style.display = 'block';
  /////          card.querySelector('.card-img-top').src = photo.src.medium;
    /////        card.querySelector('.card-img-top').alt = photo.photographer;
    /////        card.querySelector('.card-title').textContent = photo.photographer;
    /////        card.querySelector('.card-text').textContent = photo.url;
    /////        card.querySelector('.btn').addEventListener('click', () => hideCard(card));
    /////        card.querySelector('.text-muted').textContent = photo.id;
/////
    /////        imageContainer.appendChild(card);
        //  });
    ///// /////   } catch (error) {
         // console.error('Errore nella richiesta:', error);
        //}
    // }
/////
    /////  function hideCard(card) {
       // card.style.display = 'none';
   /////   }
/////