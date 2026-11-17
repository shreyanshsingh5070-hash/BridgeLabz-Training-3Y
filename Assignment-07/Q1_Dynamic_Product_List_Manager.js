const productInput = document.getElementById("productInput");
const addButton = document.getElementById("addButton");
const productList = document.getElementById("productList");

function addProduct() {
  const productName = productInput.value.trim();
  if (!productName) return;

  const listItem = document.createElement("li");
  const nameSpan = document.createElement("span");
  nameSpan.className = "product-name";
  nameSpan.textContent = productName;

  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.dataset.action = "edit";

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.dataset.action = "delete";

  listItem.append(nameSpan, editButton, deleteButton);
  productList.appendChild(listItem);
  productInput.value = "";
}

function saveEditedProduct(listItem) {
  const editInput = listItem.querySelector(".edit-input");
  if (!editInput) return;

  const updatedName = editInput.value.trim();
  const nameSpan = document.createElement("span");
  nameSpan.className = "product-name";
  nameSpan.textContent = updatedName || "Unnamed product";
  editInput.replaceWith(nameSpan);
}

addButton.addEventListener("click", addProduct);
productInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") addProduct();
});

// Event delegation: all Edit and Delete clicks are handled by the parent UL.
productList.addEventListener("click", (event) => {
  const actionButton = event.target.closest("button[data-action]");
  if (!actionButton) return;

  const listItem = actionButton.closest("li");
  if (actionButton.dataset.action === "delete") {
    listItem.remove();
  } else if (actionButton.dataset.action === "edit") {
    const nameSpan = listItem.querySelector(".product-name");
    if (!nameSpan) return;

    const editInput = document.createElement("input");
    editInput.className = "edit-input";
    editInput.value = nameSpan.textContent;
    nameSpan.replaceWith(editInput);
    editInput.focus();
    editInput.select();
  }
});

// Clicking outside the currently edited list item automatically saves it.
document.addEventListener("click", (event) => {
  const editingItem = productList.querySelector("li:has(.edit-input)");
  if (editingItem && !editingItem.contains(event.target)) {
    saveEditedProduct(editingItem);
  }
});

// Pressing Enter saves; Escape restores the previous text.
productList.addEventListener("keydown", (event) => {
  if (!event.target.classList.contains("edit-input")) return;
  const listItem = event.target.closest("li");

  if (event.key === "Enter") saveEditedProduct(listItem);
  if (event.key === "Escape") {
    const originalName = event.target.defaultValue;
    const nameSpan = document.createElement("span");
    nameSpan.className = "product-name";
    nameSpan.textContent = originalName;
    event.target.replaceWith(nameSpan);
  }
});