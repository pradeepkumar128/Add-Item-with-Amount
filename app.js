let itemName = document.querySelector("#itemName");
let itemAmnt = document.querySelector("#itemAmnt");
let ItemNames = document.querySelector("#ItemNames");
let ItemAmmount = document.querySelector("#ItemAmmount");

let itemsArray = JSON.parse(localStorage.getItem("Items")) || [];

function updateDisplay() {
  // Clear existing items
  ItemNames.innerHTML = "";

  // Initialize total amount
  let totalAmnt = 0;

  // Loop through each item in the array
  itemsArray.forEach(function (item) {
    // Append item name and amount to the display
    $("#ItemNames").append(`<div class="item"><h2>${item.name}</h2><h3>${item.amount}</h3></div>`);

    // Update total amount
    totalAmnt += parseInt(item.amount);
  });

  // Display total amount
  ItemAmmount.textContent = `Total Amount: ${totalAmnt}`;
}

updateDisplay();

function AddItembtn() {
  let newItem = {
    name: itemName.value,
    amount: itemAmnt.value,
  };

  itemsArray.push(newItem);
  localStorage.setItem("Items", JSON.stringify(itemsArray));

  // Update display with the newly added item
  updateDisplay();

  // Clear input fields
  itemName.value = "";
  itemAmnt.value = "";
}

function ClearItem() {
  // Clear items from local storage and array
  localStorage.removeItem("Items");
  itemsArray = [];
  // Update display to clear items
  updateDisplay();
}
