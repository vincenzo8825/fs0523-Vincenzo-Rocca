const endpoint = "https://striveschool-api.herokuapp.com/api/product/";

let addressBarContent = new URLSearchParams(window.location.search);
let productId = addressBarContent.get('productId');

const getProduct = function () {
    fetch(endpoint + productId, {
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMTQ4NTg4Zjc0MDAwMTQyODc1OTkiLCJpYXQiOjE2ODM4ODcyMzcsImV4cCI6MTY4NTA5NjgzN30.hgJHWP6lWcscbBf5TfsPRQmgqwE4aNrVJx-hNBKqROQ"
        }
    })
        .then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error("7) ERRORE NEL CARICARE IL DETAIL");
            }
        })
        .then((data) => {
            console.log(data);
            displayDetails(data);
        })
        .catch((err) => {
            console.log(err);
        });
};

const displayDetails = function (prodotto) {

    let target = document.getElementById("detailTarget");
    
  
    let imgElement = document.createElement("img");
    imgElement.src = prodotto.imageUrl;
    imgElement.classList.add("card-img");

    let titleElement = document.createElement("h5");
    titleElement.classList.add("card-title");
    titleElement.textContent = prodotto.name;

    let descriptionElement = document.createElement("p");
    descriptionElement.classList.add("card-text");
    descriptionElement.textContent = prodotto.description;

    let linkElement = document.createElement("a");
    linkElement.href = `../office/office.html?productId=${prodotto._id}`;
    linkElement.classList.add("btn", "btn-primary", "mt-5");
    linkElement.textContent = "MODIFICA";

    target.appendChild(imgElement);

    let detailsContainer = document.createElement("div");
    detailsContainer.classList.add("col-12", "col-lg-4", "d-flex", "flex-column", "justify-content-center");
    detailsContainer.appendChild(titleElement);
    detailsContainer.appendChild(descriptionElement);
    detailsContainer.appendChild(linkElement);

    target.appendChild(detailsContainer);
};

window.onload = () => {
    getProduct();
};
