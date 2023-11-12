const endpoint = "https://striveschool-api.herokuapp.com/api/product/";

const getProducts = function () {
  fetch(endpoint, {
      headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRlNjc5ODJiY2QzYjAwMTk1MTc5OGYiLCJpYXQiOjE2OTk2MzcxNDQsImV4cCI6MTcwMDg0Njc0NH0.gr9zzZDOo9uGZ2WKkqZHOWoOy0TOEBJtiFYJhgFOnK4"
      }
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("3) ERRORE NEL CARICAMENTO IMMAGINI");
      }
    })
    .then((data) => {
      console.log(data);
      renderImages(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

const renderImages = function (images) {
  let rowReference = document.getElementById("trending");

  images.forEach((image) => {
    let newCardProduct = createProductCard(image);
    rowReference.appendChild(newCardProduct);
  });
};

const createProductCard = function (image) {
  let cardTemplate = document.getElementById("product-card-template");
  let newCardProduct = cardTemplate.content.cloneNode(true);

  newCardProduct.querySelector(".card-img-top").src = image.imageUrl;
  newCardProduct.querySelector(".card-title").textContent = image.name;
  newCardProduct.querySelector(".card-text").textContent = image.description;
  newCardProduct.querySelector(".btn-outline-danger").textContent = `BUY - ${image.price}$`;
  newCardProduct.querySelector(".btn-outline-warning").href = `assets/details/details.html?productId=${image._id}`;
  newCardProduct.querySelector(".btn-outline-primary").href = `assets/office/office.html?productId=${image._id}`;

  let buyButton = newCardProduct.querySelector(".btn-outline-danger");
  buyButton.addEventListener("click", function () {
    
  });

  return newCardProduct;
};

window.onload = () => {
  getProducts();
};
