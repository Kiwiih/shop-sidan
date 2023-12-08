/* 
Ni väljer om ni använder produktdatan i js eller json och om ni vill lägga till 
fler properties som bilder etc.

Ni får också använda ett api som t.ex. https://fakestoreapi.com/ för att generara
ut fiktiva produkter därifrån istället för från en lokal js/json.
*/

const products = [
  { id: 1, name: 'T-shirt', category: 'Kläder', price: 100 },
  { id: 2, name: 'Hörlurar', category: 'Elektronik', price: 250 },
  { id: 3, name: 'Keps', category: 'Accessoarer', price: 50 },
  { id: 4, name: 'Mobiltelefon', category: 'Tillbehör', price: 500 }
];

let selectElement = document.getElementById("product");

// Hämta elementet där det valda värdet kommer att visas
let selectedValueElement = document.getElementById("selectedValue");

// Lägg till en händelsehanterare för ändring av värdet
selectElement.addEventListener("change", function() {
  // Hämta det valda alternativets värde
   let selectedValue = selectElement.value;
  // Uppdatera innehållet i DOM-elementet
  selectedValueElement.textContent = "Valt alternativ: " + selectedValue;
});

