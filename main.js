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
let addToWares = document.querySelectorAll('.addToWares');
let cartContainer = document.getElementById('cart');

addToWares.forEach(function(item, index) {
    item.addEventListener('click', function() {
        // Check if the product is already in the cart
        const existingProductIndex = cart.findIndex(cartItem => cartItem.id === products[index].id);

        if (existingProductIndex !== -1) {
            // If the product is already in the cart, increase its quantity
            cart[existingProductIndex].quantity += 1;
        } else {
            // If the product is not in the cart, add it with quantity 1
            cart.push({ ...products[index], quantity: 1 });
        }

        // Update cart rendering
        renderCart();
    });
});

function renderCart() {
    let cartRender = cart.map(product => {
        return `
        <div>
            <h3>${product.name}</h3>
            <p>${product.price.toLocaleString("sv-SE", {style: "currency", currency: "SEK", minimumFractionDigits: 0})} styck</p>
            <p>Antal: ${product.quantity}</p>
            <button class="decreaseQuantity" data-index="${product.id}">-</button>
            <button class="increaseQuantity" data-index="${product.id}">+</button>
            
        </div> `;
    });

    cartContainer.innerHTML = cartRender.join('');

    let totalPrice = cart.reduce((total, currentProduct) => {
        return total + currentProduct.price * currentProduct.quantity;
    }, 0);
    cartContainer.innerHTML += `<p>Total: ${totalPrice.toLocaleString("sv-SE", {style: "currency", currency: "SEK", minimumFractionDigits: 0})}</p>`;
    let increaseButtons = document.querySelectorAll('.increaseQuantity');
    let decreaseButtons = document.querySelectorAll('.decreaseQuantity');

    increaseButtons.forEach(function(item) {
        item.addEventListener('click', function() {
            adjustQuantity(item.dataset.index, 1);
        });
    });

    decreaseButtons.forEach(function(item) {
        item.addEventListener('click', function() {
            adjustQuantity(item.dataset.index, -1);
        });
    });
}

function adjustQuantity(productId, change) {
    const productIndex = cart.findIndex(cartItem => cartItem.id == productId);

    if (productIndex !== -1) {
        cart[productIndex].quantity += change;

    if(cart[productIndex].quantity === 0) {
            cart.splice(productIndex, 1);
    }
    renderCart();
    }
}

