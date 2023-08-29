const list = document.getElementById("todo-list");
const inputBox = document.getElementById("inputBox");

function newElement() {
  if (inputBox.value === "") {
    alert("Invalid input.");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    list.appendChild(li);
    inputBox.value = "";
  }
}
