import {getMinionPower} from "./MinionShop.js";
import {genElement} from "./HelperDom.js";
import {createHeatSection, upgradeCooler} from "./HeatManager.js";
import {PRICE_MULT} from "./State.js";

export function handlePowerDraw(gameState) {
    let power = document.getElementById("powerUpdate");
    power.innerText="";
    gameState.power = 0;
    gameState.minions.forEach((minion) => {
        gameState.power += getMinionPower(minion);
    });
    power.innerText=`(${gameState.power}W)`
}

export function upgradeAlimentation(gameState, alim) {
    if (gameState.golds >= alim.cost) {
        gameState.golds -= alim.cost
        alim.cost *= PRICE_MULT;
        alim.powering += alim.incr;
        alim.owned+=1;
        gameState.maxPower = alim.powering;
        createPowerSection(gameState)

    }

}

export function createPowerSection(gameState) {
    let div = document.getElementById('power-panel');
    div.innerHTML = '';
    let list = genElement(div, "div", "", "data-list")
    let info = genElement(list, "div", "", "data-info")
    let title = genElement(info, "h3", `Alimentation`)
    gameState.powers.forEach((power) => {
        let item = genElement(list, "div", "", "data-item")
        let name = genElement(item, "h4", `${power.name}(${power.powering}W)`)
        let quantity = genElement(item, "p", power.owned)
        let price = genElement(item, "p", `${power.cost.toFixed(2)}$`)
        let up = genElement(item, "button", "Upgrade")
        up.addEventListener("click",()=>{
            upgradeAlimentation(gameState,power)
        })
    });

}