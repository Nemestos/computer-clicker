export function showClicker(gameState) {
  var item = document.getElementById("clicker-panel");
  gameState.clicker.forEach((clicker) => {
    if (clicker.owned == 1) {
      let button = document.createElement("button");
      button.innerHTML = `${clicker.name}`;
      button.setAttribute("id", `clicker${clicker.id}`);
      item.appendChild(button);
    }
  });
}

export function addEvent(gameState, event) {
  gameState.clicker.forEach((clicker) => {
    if (clicker.owned == 1) {
      let button = document.getElementById(`clicker${clicker.id}`);
      button.gameState = gameState;
      button.x = clicker.gain;
      button.addEventListener("click", (event) => {
        let x = clicker.gain;
        gameState.golds += x * 2 ** gameState.click_pow;
      });
    }
  });
}
