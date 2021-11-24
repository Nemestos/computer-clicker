import {} from "./State.js";
export function addGold(evt){
    let gameState = evt.currentTarget.gameState
    let x = evt.currentTarget.x;
    gameState.golds += x;
}

export function displayGolds(gameState){
    let display = document.querySelector("#gold p");

    display.innerHTML = `Golds : <span>${gameState.golds}</span>`;
}
export function displayGps(gameState){
    let display = document.querySelector("#gps p");

    display.innerHTML = `Gps : <span>${gameState.gps}</span>`;
}
export function applyGpsGolds(gameState){
    gameState.golds+=gameState.gps;
}