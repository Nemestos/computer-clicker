import {} from "./State.js";
export function addGold(evt){
    let gameState = evt.currentTarget.gameState
    let x = evt.currentTarget.x;
    gameState.golds += x;
}
export function displayGolds(gameState){
    let display = document.querySelector("#gold label");
    display.innerText = gameState.golds;
}
export function applyGpsGolds(gameState){
    gameState.golds+=gameState.gps;
}