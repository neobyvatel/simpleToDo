const inputBox = document.getElementById("inputBox");
const listContainer = document.getElementById("todo-list");

function newElement() {
  if (inputBox.value === "") {
    alert("Invalid input.");
  } else {
    const li = document.createElement("li");
    const icon = document.createElement("img");

    icon.className = "icon";
    icon.src = "images/unchecked.png";

    li.append(icon);
    li.append(inputBox.value);

    listContainer.append(li);
    inputBox.value = "";
  }
}
inputBox.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    newElement();
  }
});
