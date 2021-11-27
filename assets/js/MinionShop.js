import {MINIONS_TYPES_MULT, PRICE_MULT} from "./State.js";
import {genElement} from "./HelperDom.js";

export function getMinionPower(minion) {
    return minion.default_power * minion.owned;
}

export function getObjectById(array, id) {
    let x = null;
    array.forEach((element) => {
        if (element.id == id) {
            x = element;
        }
    });
    return x;
}

export function handleMultMinions(gameState) {
    gameState.minions.forEach((minion) => {
        let inc = 0;
        MINIONS_TYPES_MULT.forEach((i) => {
            inc += minion.owned >= i - 1;
        })
        minion.gps = minion.default_gps * 2 ** inc;
    });

}

export function buyMinion(gameState, id) {

    let minion = getObjectById(gameState.minions, id);
    if (minion != null && gameState.golds >= minion.cost && gameState.power + minion.default_power <= gameState.maxPower) {
        gameState.golds -= minion.cost;
        minion.owned += 1;
        updateShopView(gameState);
    }
}

function handleCapacityStructureUpdate(cap, minion) {
    let struct = cap.structure.split(".")
    let source = struct[0] == "$parent" ? minion : cap;
    if (cap.value_type == "one") {
        source[struct[1]] += cap.incr;
    } else {
        cap.current_value = Math.min(source[struct[1]].length - 1, cap.current_value + 1);
    }
}

export function upgradeCapacity(gameState, minion, id) {

    let cap = getObjectById(minion.capacities, id)
    if (cap != null && gameState.golds >= cap.price && gameState.power + minion.default_power <= gameState.maxPower) {
        gameState.golds -= cap.price;

        handleCapacityStructureUpdate(cap, minion)

        cap.price *= PRICE_MULT;
    }

    updateShopView(gameState);
}

export function updateShopView(gameState) {
    let minions_list = document.querySelector(".data-list");
    minions_list.innerHTML = "";
    gameState.minions.forEach((item) => {
        let [elt, info] = createEmptyMinionItem(minions_list, item);
        updateMinionInfo(info, item, gameState);
        if (item.owned > 0) {
            updateMinionCapacities(elt, item.capacities, item, gameState);

        }
    });
}

function createEmptyMinionItem(parent, items) {
    let item = genElement(parent, "div", "", "minion-item");
    if (items.owned == 0) {
        var infos = genElement(item, "div", "", "data-info");
    } else {
        var infos = genElement(item, "div", "", "data-info-buy");
    }
    return [item, infos];
}

function updateMinionInfo(infosParent, minion, gameState) {
    let title = genElement(infosParent, "h3", `${minion.name}(${(minion.gps * minion.owned).toFixed(2)}/s)(${getMinionPower(minion).toFixed(2)}W)(${minion.temp}C)`);
    if (minion.owned == 0) {
        let buy = genElement(infosParent, "button", "Buy");
        let price = genElement(infosParent, "h4", `Cost : ${minion.cost}`);

        buy.addEventListener("click", (evt) => {
            buyMinion(gameState, minion.id)
        });

    } else {
        if (minion.hasPercent) {
            let mem = genElement(infosParent, "p", `${minion.maxMemory * minion.owned}${minion.type}`);
        }

    }
}

function getNextValue(source, cap) {
    let structure = cap.structure.split(".")
    if (cap.value_type == "one") {
        return Number.parseInt(source[structure[1]]) + cap.incr;
    } else {
        let values = source[structure[1]]
        return cap.current_value == values.length - 1 ? "x" : values[cap.current_value + 1]
    }
}


function updateMinionCapacities(capParent, capacities, minion, gameState) {
    capacities.forEach((cap) => {
        let capItem = genElement(capParent, "div", "", "data-item");
        let structure = cap.structure.split(".");
        let source = structure[0] == "$parent" ? minion : cap
        let finalValue = cap.value_type == "one" ? source[structure[1]] : source[structure[1]][cap.current_value];
        let next = getNextValue(source, cap)
        cap["value"] = finalValue;
        let name = genElement(capItem, "p", cap.name);
        let value = genElement(capItem, "p", cap.value);
        let price = genElement(capItem, "p", `${cap.price.toFixed(2)}$`);
        if (next != "x") {
            let upgrade = genElement(capItem, "button", "Upgrade");

            upgrade.addEventListener("click", () => {
                upgradeCapacity(gameState, minion, cap.id)
            });
            upgrade.addEventListener("mouseover", () => {
                genElement(value, "label", `->${next}`);
            })
            upgrade.addEventListener("mouseleave", () => {
                value.children[0].remove()
            })


        }


    });
}

