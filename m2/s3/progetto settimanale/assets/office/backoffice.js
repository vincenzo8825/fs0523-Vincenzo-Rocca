const endpoint = "https://striveschool-api.herokuapp.com/api/product/"

let addressBarContent = new URLSearchParams(window.location.search)
let productId = addressBarContent.get('productId')

if (productId){
    document.getElementById("officeTitle").innerText = "Backoffice page - Nuovo Prodotto"
    document.getElementById("save-button").innerText = "MODIFICA PRODOTTO"

    let deleteButton = document.getElementById("delete-button")
    deleteButton.classList.remove("d-none")
    deleteButton.addEventListener("click", function(){
        fetch(endpoint + productId, {
            method: "DELETE",
            headers:{Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRlNjc5ODJiY2QzYjAwMTk1MTc5OGYiLCJpYXQiOjE2OTk2MzcxNDQsImV4cCI6MTcwMDg0Njc0NH0.gr9zzZDOo9uGZ2WKkqZHOWoOy0TOEBJtiFYJhgFOnK4" }
        })
        .then((res)=>{
            if(res.ok){
                alert("PRODOTTO ELIMINATO CON SUCCESSO")
                location.assign("../../index.html")
            }else{
                throw new Error("6) ERRORE NELL'ELIMINAZIONE DEL PRODOTTO")
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    })
}



const eventForm = document.getElementById('event-form')
eventForm.addEventListener('submit', function (e) {
    e.preventDefault()

    let productName = document.getElementById("name")
    let productDescription = document.getElementById("description")
    let productBrand = document.getElementById("brand")
    let productImage = document.getElementById("image")
    let productPrice = document.getElementById("price")

    let newProduct = {
        name: productName.value,
        description: productDescription.value,
        brand: productBrand.value,
        imageUrl: productImage.value,
        price: productPrice.value,
    }
    console.log("PRODOTTO INSERITO", newProduct)

    fetch(productId ? endpoint + productId : endpoint, {
        method: productId ? "PUT" : "POST",
        body: JSON.stringify(newProduct),
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRlNjc5ODJiY2QzYjAwMTk1MTc5OGYiLCJpYXQiOjE2OTk2MzcxNDQsImV4cCI6MTcwMDg0Njc0NH0.gr9zzZDOo9uGZ2WKkqZHOWoOy0TOEBJtiFYJhgFOnK4",
            "Content-Type": "application/json",
        },
    })
    .then((res)=> {
        if(res.ok){
            alert(productId ? "MODIFICA COMPLETATA CON SUCCESSO" : "SALVATAGGIO COMPLETATO CON SUCCESSO")
            console.log(res)
            location.assign('../../index.html')
        }else{
            alert("ERRORE NEL SALVATAGGIO")
            throw new Error("2) ERRORE NEL SALVATAGGIO")
        }
    })
    .catch((err)=> {
        console.log(err)
    })
})
      
fetch(endpoint + productId, 
    {headers: {"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRlNjc5ODJiY2QzYjAwMTk1MTc5OGYiLCJpYXQiOjE2OTk2MzcxNDQsImV4cCI6MTcwMDg0Njc0NH0.gr9zzZDOo9uGZ2WKkqZHOWoOy0TOEBJtiFYJhgFOnK4"}})
.then((res) =>{
    if (res.ok){
        return res.json()
    }else{
        throw new Error("5) ERRORE NEL CONTATTARE IL SERVER")
    }
})
.then((data) =>{
    console.log(data)
    document.getElementById("name").value = data.name
    document.getElementById("description").value = data.description
    document.getElementById("brand").value = data.brand
    document.getElementById("image").value = data.imageUrl
    document.getElementById("price").value = data.price
})
.catch((err) =>{
    console.log(err)
})

let resetForm = document.getElementById("reset-form")
resetForm.addEventListener("click", function(e){
    e.preventDefault()
    eventForm.reset()
})