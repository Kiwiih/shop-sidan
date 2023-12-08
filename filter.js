const products = [
  { id: 1, name: 'T-shirt', category: 'kläder', price: 100 },
  { id: 2, name: 'Hörlurar', category: 'elektronik', price: 250 },
  { id: 3, name: 'Keps', category: 'kläder', price: 50 },
  { id: 4, name: 'Mobiltelefon', category: 'elektronik', price: 500 }
];

let  selectElement = document.getElementById("product");

// Hämta elementet där det valda värdet kommer att visas
let  selectedValueElement = document.getElementById("selectedValue");

// Lägg till en händelsehanterare för ändring av värdet
selectElement.addEventListener("change", function() {
  // Hämta det valda alternativets värde
   let selectedValue = selectElement.value;

  // Uppdatera innehållet i DOM-elementet
  selectedValueElement.textContent = "Valt alternativ: " + selectedValue;
});