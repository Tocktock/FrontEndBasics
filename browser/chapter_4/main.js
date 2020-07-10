"use strict";

const head = document.querySelector(".head");
const body = document.querySelector(".body");
const input = document.querySelector(".input");
const create = document.querySelector(".create");

// head
const head__text = document.createElement("span");
head__text.innerText = "Shopping List";
head.append(head__text);

// input
const input__input = document.createElement("input");
input.append(input__input);

// create
const create__icon = document.createElement("i");
create__icon.classList.add("fas", "fa-plus-circle");
create.append(create__icon);

// body
body.addEventListener("click", (e) => {
  if (e.target.classList.contains("body__content__delete")) {
    e.target.parentElement.remove();
  }
});

const addShoppingItem = () => {
  const myInput = document.querySelector("input");
  if (myInput.value === "") return;
  const item = createItem(myInput.value);

  body.append(item);
  item.scrollIntoView({ block: "center" });
  myInput.value = "";
  myInput.focus();
};

const createItem = (text) => {
  const body__text = document.createElement("span");
  body__text.innerText = text;
  const body__content = document.createElement("div");
  body__content.className = "body__content";
  body__content.append(body__text);
  const body__delete = document.createElement("i");
  body__delete.classList.add("fas", "fa-trash-alt", "body__content__delete");
  body__content.append(body__delete);
  return body__content;
};

create__icon.addEventListener("click", addShoppingItem);
create__icon.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addShoppingItem();
  }
});
