const inputBox = document.getElementById("inputBox");
const listContainer = document.getElementById("todo-list");
function createListItem(text, checked) {
  const li = document.createElement("li");
  const icon = document.createElement("img");
  icon.className = "icon";
  icon.src = checked ? "images/checked.png" : "images/unchecked.png";
  li.appendChild(icon);
  li.appendChild(document.createTextNode(text));
  if (checked) {
    li.className = "checked";
  }
  listContainer.appendChild(li);
}

function newElement() {
  if (inputBox.value === "") {
    alert("Invalid input.");
  } else {
    createListItem(inputBox.value, false);
    inputBox.value = "";
  }
}
inputBox.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    newElement();
  }
});
