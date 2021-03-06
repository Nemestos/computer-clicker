import { addGold } from "./GoldsManager.js";
import { ClickerHeatManager } from "./HeatManager.js";
import { genElement } from "./HelperDom.js";

export function showClicker(gameState) {
  var item = document.getElementById("list-clicker");
  var i = 0;
  item.innerHTML = "";
  gameState.clicker.forEach((clicker) => {
    if (clicker.owned == 1) {
      i += 1;
      let a = genElement(item, "a", "", "button-clicker");
      // button.innerHTML = `${clicker.name}`;
      // button.classList.add("button-clicker");
      a.setAttribute("id", `clicker${clicker.id}`);
      let img = genElement(a, "img", "");
      img.setAttribute("src", clicker.image);
      img.classList.add("clickImage");
      img.classList.add("app-item");
    }
  });
  if (i < Object.keys(gameState.clicker).length) {
    showUpdateClicker(gameState, i);
  }
}

export function addEvent(gameState) {
  gameState.clicker.forEach((clicker) => {
    if (clicker.owned == 1) {
      let button = document.getElementById(`clicker${clicker.id}`);
      button.gameState = gameState;
      button.x = clicker.gain;
      button.addEventListener("click", (event) => {
        let x = clicker.gain * 2 ** gameState.click_pow;
        addGold(gameState, x);
      });
    }
  });
}

function showUpdateClicker(gameState, identifier) {
  let item = document.getElementById("list-clicker");
  let button = document.createElement("button");
  button.classList.add("button-clicker");
  button.innerHTML = "CLICKER UPGRADE";
  button.setAttribute("id", "clicker-update");
  item.appendChild(button);
  button.addEventListener("click", (event) => {

    gameState.clicker.forEach((clicker) => {
      if (clicker.id == identifier + 1) {
        if (gameState.golds >= clicker.cost) {
          clicker.owned = 1;
          gameState.golds -= clicker.cost;
          showClicker(gameState);
          addEvent(gameState);
          ClickerHeatManager(gameState);
        }
      }
    });
  });
}
