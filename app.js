// Your existing JavaScript code

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

function removeItem(index) {
  itemsArray.splice(index, 1);
  localStorage.setItem("Items", JSON.stringify(itemsArray));
  updateDisplay();
}

function updateDisplay() {
  // Clear existing items
  ItemNames.innerHTML = "";

  // Initialize total amount
  let totalAmnt = 0;

  // Loop through each item in the array
  itemsArray.forEach(function (item, index) {
    // Append item name, amount, and remove button to the display
    $("#ItemNames").append(
      `<div class="item"><span>${item.name} - ${item.amount}</span><button class="remove-button" onclick="removeItem(${index})">Remove</button></div>`
    );

    // Update total amount
    totalAmnt += parseInt(item.amount);
  });

  // Display total amount
  ItemAmmount.textContent = `Total Amount: ${totalAmnt}`;
}

let itemsArray = JSON.parse(localStorage.getItem("Items")) || [];
updateDisplay();
