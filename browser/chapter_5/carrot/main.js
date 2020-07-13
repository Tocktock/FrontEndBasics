"use strict";

const boardStop = document.querySelector(".board__stop");
const boardTime = document.querySelector(".board__time");
const boardCount = document.querySelector(".board__count");
const ground = document.querySelector(".ground");
const modal = document.querySelector(".modal");

// audio
const aalert = new Audio("./sound/alert.wav");
const bg = new Audio("./sound/bg.mp3");
const bug_pull = new Audio("./sound/bug_pull.mp3");
const carrot_pull = new Audio("./sound/carrot_pull.mp3");
const game_win = new Audio("./sound/game_win.mp3");

bg.loop = true;
bg.play();

let timeCount = 10;

const timeSetter = () => {
  return setInterval(() => {
    boardTime.innerHTML = timeCount;
    timeCount--;
    if (timeCount < 0) {
      EndEvent("Lose");
    } else if (carrotCount === 0) {
      EndEvent("Win");
    }
  }, 1000);
};
let timeSetId = timeSetter();
let isPause = false;
boardStop.addEventListener("click", () => {
  // stop time
  if (!isPause) {
    clearInterval(timeSetId);
  } else {
    timeSetId = timeSetter();
  }
  isPause = !isPause;
});
// make carrot and bug

const createItem = (type) => {
  const div = document.createElement("div");
  div.innerHTML = `<img class=${type} src="./img/${type}.png" alt="carrot">`;
  div.className = `ground__${type}`;
  const groundTop = ground.getBoundingClientRect().top;
  const left = Math.floor(Math.random() * 1500);
  const top = groundTop + Math.floor(Math.random() * 330) + 40;
  div.style.left = left;
  div.style.top = top;
  return div;
};

let carrotCount = 10;
const createGround = () => {
  for (let index = 0; index < carrotCount; index++) {
    const carrot = createItem("carrot");
    ground.append(carrot);
  }
  for (let index = 0; index < carrotCount; index++) {
    const bug = createItem("bug");
    ground.append(bug);
  }
};
createGround();

const RemoveGround = () => {
  const carrots = document.querySelectorAll(".carrot");
  carrots.forEach((element) => {
    element.parentElement.remove();
  });

  const bugs = document.querySelectorAll(".bug");
  bugs.forEach((element) => {
    element.parentElement.remove();
  });
};

ground.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target.classList.contains("carrot")) {
    carrot_pull.play();
    boardCount.innerHTML = `${--carrotCount}`;
    e.target.parentElement.remove();
  } else if (e.target.classList.contains("bug")) {
    bug_pull.play();
    EndEvent("Lose");
  } else {
    aalert.play();
  }
});

// modal
const modalResult = document.querySelector(".modal__result");
const modalRestart = document.querySelector(".modal__restart");

const reset = () => {
  timeCount = 10;
  boardTime.innerText = timeCount;
  RemoveGround();
  modal.style.display = "none";
  carrotCount = 10;
  boardCount.innerHTML = carrotCount;
};

modalRestart.addEventListener("click", () => {
  reset();
  createGround();
  timeSetId = timeSetter();
});

const EndEvent = (result) => {
  modal.style.display = "block";
  modalResult.innerText = `You ${result}`;
  clearInterval(timeSetId);
  if (result === "Win") {
    game_win.play();
  }
};
