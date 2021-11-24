import {} from "./State.js";
export function addGold(evt){
    let gameState = evt.currentTarget.gameState
    let x = evt.currentTarget.x;
    gameState.golds += x;
    displayGolds(gameState);
}
export function displayGolds(gameState){
    let display = document.querySelector("#gold label");
    display.innerText = gameState.golds;
}
