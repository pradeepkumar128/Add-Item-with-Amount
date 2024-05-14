let itemName = document.querySelector("#itemName");
let itemAmnt = document.querySelector("#itemAmnt");
let ItemNames = document.querySelector("#ItemNames");
let ItemAmmount = document.querySelector("#ItemAmmount");

let sumValue= 0;
let totalAmnt = 0;
let itemsArray;
console.log(itemsArray);
function AddItembtn() {
  let newItem = {
    name: itemName.value,
    amount: itemAmnt.value,
  };

  itemsArray.push(newItem);
  localStorage.setItem("Items", JSON.stringify(itemsArray));
}
itemsArray = JSON.parse(localStorage.getItem("Items")) || [];

itemsArray.forEach(function (item) {
   
  $("#ItemNames").append(`<h2>${item.name}</h2>`);
  $("#ItemNames").append(`<h3>${item.amount}</h3>`);
  sumValue = parseInt(item.amount);
  totalAmnt = sumValue + totalAmnt;
  console.log(totalAmnt)
});



function ClearItem() {
  // Clear function
}
