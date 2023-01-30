let shoppingList = [];

const list = document.getElementById('list');
const itemInput = document.getElementById('item');
const addBtn = document.getElementById('add-btn');

function addItem(e) {
  e.preventDefault();
  let item = itemInput.value;
  shoppingList.push(item);
  renderList();
  itemInput.value = "";
}

//Delete Items

function deleteItem(index) {
  shoppingList.splice(index, 1);
  renderList();
}

//Create List
function renderList() {
  list.innerHTML = "";
  shoppingList.forEach((item, index) => {
    let li = document.createElement('li');
    li.innerHTML = item + " <button onclick='deleteItem(' + index + ')'>Delete</button>";
    list.appendChild(li);
  });
}

addBtn.addEventListener("click", addItem);