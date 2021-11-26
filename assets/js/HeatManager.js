var i = 0;

export function MinionHeatManager(gameState) {
  var x = 0;
  gameState.minions.forEach((minion) => {
    x += minion.owned * minion.temp;
  });
  gameState.heat = x;
}

export function ClickerHeatManager(gameState) {
  gameState.clicker.forEach((clicker) => {
    if (clicker.owned > 0) {
      var mid_temp = clicker.heat / 3;
      let button = document.getElementById(`clicker${clicker.id}`);
      button.addEventListener("click", function () {
        gameState.heat += clicker.heat;
      });
    }
  });
}

function waitCoolDown() {
  const await_timeout = new Promise((resolve) => {
    setTimeout(function () {
      resolve();
    }, 1000);
  });
}

async function decreaseHeat() {
  await_timeout.then(() => {
    gameState.heat -= mid_temp;
    console.log(gameState.heat);
  });
}
