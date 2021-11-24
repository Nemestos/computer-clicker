import {} from "./State.js";
export function addGold(evt) {
  let gameState = evt.currentTarget.gameState;
  let x = evt.currentTarget.x;
  gameState.golds += x;
}

export function displayGolds(gameState) {
  let display = document.querySelector("#gold p");

  display.innerHTML = `Golds : <span>${gameState.golds.toFixed(2)}</span>`;
}
export function displayGps(gameState) {
  let display = document.querySelector("#gps p");

  display.innerHTML = `Gps : <span>${gameState.gps.toFixed(2)}</span>`;
}
export function getGPS(gameState) {
  gameState.gps = 0;
  gameState.minions.forEach((item) => {
    gameState.gps += item.gps * item.owned;
  });
}
export function applyGpsGolds(gameState) {
  gameState.golds += gameState.gps;
}
