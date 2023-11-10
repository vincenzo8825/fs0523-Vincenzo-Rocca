
const API_URL = 'https://striveschool-api.herokuapp.com/api/product/';


const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRlMGJjNzMyNWM5NzAwMTg3ZjlmODciLCJpYXQiOjE2OTk2MTM2MzksImV4cCI6MTcwMDgyMzIzOX0.AUL3Koco3rzVeNXufJYRvGugnGDvSySwPDirZ4ZRdFk';


async function getProductDetails(id) {
    try {
        const response = await fetch(`${API_URL}${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${TOKEN}`
            }
        });
        if (!response.ok) {
            throw new Error(`Errore HTTP: ${response.status}`);
        }
        const product = await response.json();
        console.log(product);
    } catch (error) {
        console.error('Si è verificato un errore:', error);
    }
}

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
            throw new Error(`Errore HTTP: ${response.status}`);
        }
        const products = await response.json();
        console.log(products);
    } catch (error) {
        console.error('Si è verificato un errore:', error);
    }
}

async function additionalFetch() {
    try {
        const response = await fetch("https://striveschool-api.herokuapp.com/api/put-your-endpoint-here/", {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRlMGJjNzMyNWM5NzAwMTg3ZjlmODciLCJpYXQiOjE2OTk2MTM2MzksImV4cCI6MTcwMDgyMzIzOX0.AUL3Koco3rzVeNXufJYRvGugnGDvSySwPDirZ4ZRdFk'
            }
        });

        if (!response.ok) {
            throw new Error(`Errore HTTP: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Si è verificato un errore nella seconda richiesta:', error);
    }
}

getProducts();
additionalFetch();


getProductDetails('specific_product_id');
