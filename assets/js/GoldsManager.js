import { CLICK_MOD } from "./State.js";

export function addGold(gameState, x) {
  gameState.golds += x;
}

export function displayGolds(gameState) {
  let display = document.querySelector("#gold p span");

  display.innerHTML = `${gameState.golds.toFixed(2)}`;
}

export function displayGps(gameState) {
  let display = document.querySelector("#gps p span");

  display.innerHTML = `${gameState.gps.toFixed(2)}`;
}

export function handleClickPow(gameState) {
  gameState.click_pow = Math.floor(gameState.getTotalMinion() / CLICK_MOD);
}

export function displayClickValue(gameState) {
  let display = document.querySelector("#click p span");

  display.innerHTML = `${2 ** gameState.click_pow.toFixed(2)}(X${
    gameState.click_pow + 1
  })`;
}

export function displayTotal(gameState) {
  let display = document.querySelector("#total-minion p span");

  display.innerHTML = `${gameState.getTotalMinion()}`;
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
