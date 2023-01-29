let shoppingList = [];

function addItem(item) {
  shoppingList.push(item);
  console.log("Item added to the shopping list.");
}

function deleteItem(item) {
  let index = shoppingList.indexOf(item);
  if (index > -1) {
    shoppingList.splice(index, 1);
    console.log("Item removed from the shopping list.");
  } else {
    console.log("Item not found in the shopping list.");
  }
}

function showList() {
  console.log("Shopping List:");
  console.log(shoppingList.join(", "));
} 