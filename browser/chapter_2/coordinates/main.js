"use strict";

const body = document.querySelector("body");
const target = document.createElement("div");
target.className = "target";
target.innerHTML = `<img class="target__img" src="./img/target.png" alt="target">`;

const borderColumn = document.createElement("div");
borderColumn.className = "line__column";
const borderRow = document.createElement("div");
borderRow.className = "line__row";

const posXY = document.createElement("div");
posXY.className = "pos__xy";

body.appendChild(target);
body.appendChild(borderColumn);
body.appendChild(borderRow);
body.appendChild(posXY);

body.addEventListener("mousemove", (e) => {
  target.style.left = e.clientX + "px";
  target.style.top = e.clientY + "px";
  borderColumn.style.left = e.clientX - 2 + "px";
  borderRow.style.top = e.clientY - 2 + "px";
  posXY.innerHTML = `${e.clientX}px, ${e.clientY}px`;
  posXY.style.left = e.clientX + "px";
  posXY.style.top = e.clientY + "px";
});
