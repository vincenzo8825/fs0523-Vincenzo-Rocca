
const smartphoneData = {
    name: 'Smartphone X',
    description: 'Un ottimo smartphone con specifiche avanzate.',
    price: 799.99,
    brand: 'iphone13',
    model: 'X1000',
    storage: '128GB',
    camera: '20MP',
    operatingSystem: 'ios'
};

async function createNewSmartphone(productData) {
    try {
        const response = await fetch("https://striveschool-api.herokuapp.com/api/product/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRlMGJjNzMyNWM5NzAwMTg3ZjlmODciLCJpYXQiOjE2OTk2MTM2MzksImV4cCI6MTcwMDgyMzIzOX0.AUL3Koco3rzVeNXufJYRvGugnGDvSySwPDirZ4ZRdFk'
            },
            body: JSON.stringify({
                name: productData.name,
                description: productData.description,
                price: productData.price,
                brand: productData.brand,
                model: productData.model,
                operatingSystem: productData.operatingSystem
            })
        });

        if (!response.ok) {
            throw new Error(`Errore HTTP: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);

        addProductToPage(productData);
        loadProductDetails(productData);
    } catch (error) {
        console.error('Si è verificato un errore nella richiesta:', error);
    }
}


createNewSmartphone(smartphoneData);

