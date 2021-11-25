export function showClicker(gameState) {
  var item = document.getElementById("clicker-panel");
  gameState.clicker.forEach((clicker) => {
    if (clicker.owned == 1) {
      let button = document.createElement("button");
      button.innerHTML = `${clicker.name}`;
      button.setAttribute("id", clicker.id);
      item.appendChild(button);
    }
  });
}

export function addEvent(gameState, event) {
  gameState.clicker.forEach((clicker) => {
    if (clicker.owned == 1) {
      let button = document.getElementById(clicker.id);
      button.gameState = gameState;
      button.x = clicker.gain;
      button.addEventListener("click", event);
    }
  });
}
