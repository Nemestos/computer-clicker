import {genElement} from "./HelperDom.js";
import {GameState} from "./State.js";
export const OVERHEAT =80;
export function MinionHeatManager(gameState) {
    let x = 0;
    gameState.minions.forEach((minion) => {
        x += minion.owned * minion.temp;
    });
    gameState.heatGPS = x;
}

export function CoolManager(gameState) {
    gameState.cooler.forEach((clicker) => {
        if (clicker.owned === 1) {

            gameState.cool = (clicker.upgrade * 0.65) * clicker.gain;
        }
    })
}

export function TempManager(gameState) {
    gameState.temp = (gameState.heat / gameState.cool)*100;
}

export function mergeHeat(gameState) {
    gameState.heat = gameState.heatGPS + gameState.heatClick
}

export function ClickerHeatManager(gameState) {

    gameState.clicker.forEach((clicker) => {
        if (clicker.owned > 0) {
            let mid_temp = clicker.heat / 3;
            let button = document.getElementById(`clicker${clicker.id}`);
            button.addEventListener("click", function () {
                var i = 0;
                gameState.heatClick += clicker.heat;
                let decreaseHeat = setInterval(function () {
                    gameState.heatClick -= mid_temp;
                    i++;
                    if (i === 3) {
                        clearInterval(decreaseHeat)
                    }
                }, 1000)
            });
        }
    });
}

export function createHeatSection(gameState) {
    let div = document.getElementById('heat-panel');
    div.innerHTML = '';
    gameState.cooler.forEach((cooler) => {
        if (cooler.owned === 1) {
            let title = genElement(div, "h3", `${cooler.name}<span id="tempUpdate"></span>`, "");
            title.setAttribute('id', "title-temp")

        }
    })
    let divcooler = genElement(div, "div", '', "cooler-list");
    gameState.cooler.forEach((cooler) => {
        if (cooler.owned === 1) {
            genElement(divcooler, "h4", 'Speed', "");
            genElement(divcooler, "p", `${cooler.upgrade}`, "");
            genElement(divcooler, "p", `${cooler.cost.toFixed(2)}$`, "");
            let button = genElement(divcooler, "button", 'Upgrade');
            button.setAttribute('id', "upgrade-cooler");
        }
    })
    upgradeCooler(gameState);
}

export function upgradeCooler(gameState) {
    let upgrade = document.getElementById("upgrade-cooler");
    upgrade.addEventListener('click', function() {
        gameState.cooler.forEach( cooler => {
            if (cooler.owned === 1) {
                if (gameState.golds >= cooler.cost) {
                    gameState.golds -= cooler.cost
                    cooler.cost *= 1.10;
                    cooler.upgrade += 1;
                    createHeatSection(gameState);
                }
            }
        })
    })
}

export function tempUpdate (gameState) {
   let update = document.getElementById('tempUpdate');
   update.innerHTML = `(${gameState.temp.toFixed(1)}°C)`
    if(gameState.temp>=OVERHEAT){
        update.innerHTML+=` (overheat !)`
    }

}
