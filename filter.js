const products = [
  { id: 1, name: 'T-shirt', category: 'Kläder', price: 100 },
  { id: 2, name: 'Hörlurar', category: 'Elektronik', price: 250 },
  { id: 3, name: 'Keps', category: 'Accessoarer', price: 50 },
  { id: 4, name: 'Mobiltelefon', category: 'Tillbehör', price: 500 }
];

const cart = [];

// Hämta select-elementet med hjälp av id
let selectElement = document.getElementById("product");

// Hämta elementet där produktinformationen kommer att visas
let productInfoElement = document.getElementById("productInfo");
let productNameElement = document.getElementById("productName");
let productCategoryElement = document.getElementById("productCategory");
let productPriceElement = document.getElementById("productPrice");

// Hämta elementet där det valda värdet kommer att visas
let  selectedValueElement = document.getElementById("selectedValue");
// Hämta elementet där produkterna kommer att visas
let productContainer = document.getElementById("product-container");

// Lägg till en händelsehanterare för ändring av värdet
selectElement.addEventListener("change", function() {
  // Hämta det valda alternativets värde
  let selectedValue = selectElement.value;

  // Uppdatera produktinformationen i DOM
  updateProductInformation(selectedValue);

  // Filtrera och visa produkter baserat på den valda kategorin
  displayFilteredProducts(selectedValue);
});

// Event listener for the "Gå till kassan" (Checkout) button
let checkoutButton = document.getElementById("checkout");
checkoutButton.addEventListener("click", function() {
  // Visa produkterna i productContainer när "Gå till kassan" klickas
  displayAllProducts();
});

// Funktion för att uppdatera produktinformation i DOM
function updateProductInformation(category) {
  // Hitta matchande produkt i arrayen baserat på den valda kategorin
  let selectedProduct = products.find(product => product.category === category);

  // Uppdatera produktinformationen i DOM
  if (selectedProduct) {
    productNameElement.textContent = "Namn: " + selectedProduct.name;
    productCategoryElement.textContent = "Kategori: " + selectedProduct.category;
    productPriceElement.textContent = "Pris: " + selectedProduct.price + " kr";
    productInfoElement.style.display = "block"; // Visa produktinformationen
  } else {
    // Om ingen matchande produkt hittades
    productInfoElement.style.display = "none"; // Dölj produktinformationen
  }
}

// Funktion för att filtrera och visa produkter baserat på kategori
function displayFilteredProducts(category) {
  // Filtrera produkter baserat på den valda kategorin
  let filteredProducts = products.filter(product => product.category === category);

  // Visa produkterna i productContainer
  displayProducts(filteredProducts);
}

// Funktion för att visa alla produkter i productContainer
function displayAllProducts() {
  // Visa alla produkter i productContainer
  displayProducts(products);
}

// Funktion för att visa produkter i productContainer
function displayProducts(productsToShow) {
  // Rensa innehållet i productContainer
  productContainer.innerHTML = "";

  // Uppdatera innehållet i DOM-elementet
  selectedValueElement.textContent = "Valt alternativ: " + selectedValue;
});
  // Loopa genom produkterna och skapa element för varje produkt
  productsToShow.forEach(product => {
    let productElement = document.createElement("div");
    productElement.innerHTML = `
      <h3>${product.name}</h3>
      <p>Kategori: ${product.category}</p>
      <p>Pris: ${product.price} kr</p>
    `;
    productContainer.appendChild(productElement);
  });
}
