"use strict";

const list = document.getElementById("todo-list");
const inputBox = document.getElementById("inputBox");
const toggleAllButton = document.querySelector(".toggle-all");
const deleteAllButton = document.querySelector(".remove-all-tasks");

function newElement() {
  if (inputBox.value === "") {
    showSnackBar();
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    list.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.append(span);
  }
  inputBox.value = "";
}
inputBox.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    newElement();
  }
});

list.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
    }
  },
  false
);

function showSnackBar() {
  // Get the snackbar DIV
  let x = document.getElementById("snackbar");

  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
}

const listItems = list.children;
function toggleAll() {
  let checked = 0;
  let unchecked = 0;
  let listItem;
  for (let i = 0; i < listItems.length; i++) {
    listItem = listItems[i];
    if (listItem.classList.contains("checked")) {
      checked++;
    } else unchecked++;
  }

  if (checked > unchecked) {
    for (let i = 0; i < listItems.length; i++) {
      listItem = listItems[i];
      listItem.classList.remove("checked");
    }
  } else {
    for (let i = 0; i < listItems.length; i++) {
      listItem = listItems[i];
      if (!listItem.classList.contains("checked")) {
        listItem.classList.add("checked");
      }
    }
  }
}

function removeAll() {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
}

toggleAllButton.addEventListener("click", toggleAll);
deleteAllButton.addEventListener("click", removeAll);
