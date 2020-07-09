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

const rect = target.getBoundingClientRect();
const adjustSize = rect.width / 2;

body.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;
  target.style.transform = `translate(${x - adjustSize}px, ${
    y - adjustSize
  }px)`;
  borderColumn.style.transform = `translateX(${x}px)`;
  borderRow.style.transform = `translateY(${y}px)`;
  posXY.innerText = `${e.clientX}px, ${e.clientY}px`;
  posXY.style.transform = `translate(${x}px, ${y}px)`;
});
