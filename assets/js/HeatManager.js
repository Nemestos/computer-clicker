export function MinionHeatManager(gameState) {
    let x = 0;
    gameState.minions.forEach((minion) => {
        x += minion.owned * minion.temp;
    });
    gameState.heat = x;
}

export function ClickerHeatManager(gameState) {
    gameState.clicker.forEach((clicker) => {
        if (clicker.owned > 0) {
            let mid_temp = clicker.heat / 3;
            let i = 0;
            let button = document.getElementById(`clicker${clicker.id}`);
            button.addEventListener("click", function () {
                gameState.heat += clicker.heat;
                let decreaseHeat = setInterval(function () {
                    gameState.heat -= mid_temp;
                    i++;
                    if (i === 3) {
                        clearInterval(decreaseHeat)
                    }
                }, 1000)
            });
        }
    });
}


