import {MINIONS_TYPES_MULT, PRICE_MULT} from "./State.js";

export function getObjectById(array, id) {
    let x = null;
    array.forEach((element) => {
        if (element.id == id) {
            x = element;
        }
    });
    return x;
}
export function handleMultMinions(gameState){
    gameState.minions.forEach((minion)=>{
        let inc = 0;
        MINIONS_TYPES_MULT.forEach((i)=>{
            inc+=minion.owned>=i-1;
        })
        minion.gps=minion.default_gps*2**inc;
    });

}
export function buyMinion(evt) {
    let gameState = evt.currentTarget.gameState;
    let id = evt.currentTarget.id_minion;
    let minion = getObjectById(gameState.minions, id);

    if (minion != null && gameState.golds >= minion.cost) {
        gameState.golds -= minion.cost;
        minion.owned += 1;
        updateShopView(gameState);
    }
}

export function upgradeCapacity(evt) {
    let gameState = evt.currentTarget.gameState;
    let minion = evt.currentTarget.minion;
    let id = evt.currentTarget.id;

    let cap = getObjectById(minion.capacities, id)

    if (cap != null && gameState.golds >= cap.price) {
        gameState.golds -= cap.price;
        minion[cap.structure.slice(1)]+=cap.incr;
        cap.price *= PRICE_MULT;
    }

    updateShopView(gameState);
}

export function updateShopView(gameState) {
    let minions_list = document.getElementById("minion-list");
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
        var infos = genElement(item, "div", "", "minion-info");
    } else {
        var infos = genElement(item, "div", "", "minion-info-buy");
    }
    return [item, infos];
}

function updateMinionInfo(infosParent, minion, gameState) {
    let title = genElement(infosParent, "h3", `${minion.name}(${minion.gps})`);
    if (minion.owned == 0) {
        let buy = genElement(infosParent, "button", "Buy");
        let price = genElement(infosParent, "h4", `Cost : ${minion.cost}`);

        buy.addEventListener("click", buyMinion);
        buy.gameState = gameState;
        buy.id_minion = minion.id;
    } else {
        if (minion.hasPercent) {
            let mem = genElement(infosParent, "p", `${minion.maxMemory*minion.owned}${minion.type}`);
        }

    }
}

function updateMinionCapacities(capParent, capacities, minion, gameState) {
    capacities.forEach((cap) => {
        let capItem = genElement(capParent, "div", "", "minion-capacity");
        let structure = cap["structure"];
        if (structure[0] == "$") {
            cap["value"] = minion[cap["structure"].slice(1)];
        }

        let name = genElement(capItem, "p", cap.name);
        let value = genElement(capItem, "p", cap.value);
        let price = genElement(capItem, "p", `${cap.price.toFixed(2)}$`);
        let upgrade = genElement(capItem, "button", "Upgrade");
        upgrade.addEventListener("click", upgradeCapacity);
        upgrade.gameState = gameState;
        upgrade.minion = minion;
        upgrade.id = cap.id

    });
}

function genElement(parent, type, inner, classe = "") {
    let item = document.createElement(type);
    if (classe != "") {
        item.classList.add(classe);
    }
    item.innerHTML = inner;
    parent.appendChild(item);
    return item;
}
