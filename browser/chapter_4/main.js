"use strict";

const head = document.querySelector(".head");
const body = document.querySelector(".body");
const input = document.querySelector(".input");
const create = document.querySelector(".create");

// head
const head__text = document.createElement("span");
head__text.innerText = "Shopping List";
head.append(head__text);

// body

// input
const input__input = document.createElement("input");
input.append(input__input);

// create
const create__icon = document.createElement("i");
create__icon.classList.add("fas", "fa-plus-circle");
create.append(create__icon);

const addShoppingList = () => {
  const myInput = document.querySelector("input");
  const body__content = document.createElement("div");
  body__content.className = "body__content";
  const body__text = document.createElement("span");
  body__text.innerText = myInput.value;
  myInput.value = "";
  body__content.append(body__text);
  const body__delete = document.createElement("i");
  body__delete.classList.add("fas", "fa-trash-alt", "body__content__delete");
  body__delete.addEventListener("click", () => {
    body__delete.parentElement.remove();
  });
  body__content.append(body__delete);
  body.append(body__content);
};

create__icon.addEventListener("click", addShoppingList);
