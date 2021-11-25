export function showClicker(gameState) {
  var item = document.getElementById("list-clicker");
  var i = 0;
  item.innerHTML = "";
  gameState.clicker.forEach((clicker) => {
    if (clicker.owned == 1) {
      i += 1;
      let button = document.createElement("button");
      button.innerHTML = `${clicker.name}`;
      button.setAttribute("id", `clicker${clicker.id}`);
      item.appendChild(button);
    }
  });
  if (i < 5) {
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
        let x = clicker.gain;
        gameState.golds += x * 2 ** gameState.click_pow;
      });
    }
  });
}

function showUpdateClicker(gameState, identifier) {
  let item = document.getElementById("list-clicker");
  let button = document.createElement("button");
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
        }
      }
    });
  });
}
