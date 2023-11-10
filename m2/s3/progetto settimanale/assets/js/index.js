
//fetch("https://striveschool-api.herokuapp.com/api/put-your-endpoint-here/", {
//headers: {
//"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRlMGJjNzMyNWM5NzAwMTg3ZjlmODciLCJpYXQiOjE2OTk2MTM2MzksImV4cCI6MTcwMDgyMzIzOX0.AUL3Koco3rzVeNXufJYRvGugnGDvSySwPDirZ4ZRdFk"
//}
//})






const API_URL = 'https://striveschool-api.herokuapp.com/api/product/';
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRlMGJjNzMyNWM5NzAwMTg3ZjlmODciLCJpYXQiOjE2OTk2MTM2MzksImV4cCI6MTcwMDgyMzIzOX0.AUL3Koco3rzVeNXufJYRvGugnGDvSySwPDirZ4ZRdFk';

async function getProducts() {
    try {
        const response = await fetch(API_URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${TOKEN}`
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const products = await response.json();
        displayProducts(products);
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

function displayProducts(products) {
    const productSection = document.getElementById('product-section');

    products.forEach(product => {
        const productCard = createProductCard(product);
        productSection.appendChild(productCard);
    });
}

function createProductCard(product) {
    const originalCard = document.querySelector('.cardsmart .col-md-4 .card.mb-4');
    const cardDiv = originalCard.cloneNode(true);

    cardDiv.querySelector('.card-img-top').src = product.imageUrl;
    cardDiv.querySelector('.card-img-top').alt = product.name;
    cardDiv.querySelector('.card-title').textContent = product.name;
    cardDiv.querySelector('.card-text').textContent = product.description;
    cardDiv.querySelector('.card-text.price').textContent = `Prezzo: ${product.price} Euro`;

    return cardDiv;
}
function addProductToPage(product) {
    const productSection = document.getElementById('product-section');
    const productCard = createProductCard(product);
    productSection.appendChild(productCard);
}

function loadProductDetails(product) {
    localStorage.setItem('selectedProduct', JSON.stringify(product));
    window.location.href = 'details.html'; // Redirect alla pagina dei dettagli
}

// Aggiungi il resto del tuo codice

// Esegui la funzione getProducts() al caricamento della pagina
document.addEventListener('DOMContentLoaded', () => {
    getProducts();
});
getProducts();