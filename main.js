/* 
Ni väljer om ni använder produktdatan i js eller json och om ni vill lägga till 
fler properties som bilder etc.

Ni får också använda ett api som t.ex. https://fakestoreapi.com/ för att generara
ut fiktiva produkter därifrån istället för från en lokal js/json.
*/

const products = [
    { id: 1, name: 'T-shirt', category: 'kläder', price: 100 },
    { id: 2, name: 'Hörlurar', category: 'elektronik', price: 250 },
    { id: 3, name: 'Keps', category: 'kläder', price: 50 },
    { id: 4, name: 'Mobiltelefon', category: 'elektronik', price: 500 }
];

const cart = [];

let mapResult = products.map(product => {
    return `
    <h3> ${product.name} </h3>
    <p>  ${product.price.toLocaleString("sv-SE", {style: "currency", currency: "SEK", minimumFractionDigits: 0} )} </p>
    <button class="addToWares">Lägg till i varukorg</button>
    `
})

let dataDiv = document.getElementById("product-container").innerHTML = mapResult.join("");

var addToWares = document.querySelectorAll('.addToWares');

addToWares.forEach(function(item, index) {
    item.addEventListener('click', function() {
        cart.push(products[index]);
        console.log(cart);
    });
});

