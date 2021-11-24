import { addGold } from "./GoldsManager.js";

export function buyMinion(evt) {
  let gameState = evt.currentTarget.gameState;
  let id = evt.currentTarget.id_minion;
  gameState.minions.forEach((element) => {
    if (element.id == id) {
      if (gameState.golds >= element.cost) {
        gameState.golds -= element.cost;
        element.owned += 1;
      }
    }
  });
  console.log(gameState);
}
export function updateShopView(gameState) {
  let minions_list = document.getElementById("minion-list");
  minions_list.innerHTML = "";
  gameState.minions.forEach((item) => {
    let [elt, info] = createEmptyMinionItem(minions_list);
    updateMinionInfo(info, item, gameState);
    updateMinionCapacities(elt, item.capacities, item);
  });
}
function createEmptyMinionItem(parent) {
  let item = genElement(parent, "div", "", "minion-item");
  let infos = genElement(item, "div", "", "minion-info");
  return [item, infos];
}
function updateMinionInfo(infosParent, minion, gameState) {
  let title = genElement(infosParent, "h3", minion.name);
  if (minion.owned == 0) {
    let buy = genElement(infosParent, "button", "Buy");
    buy.addEventListener("click", buyMinion);
    buy.gameState = gameState;
    buy.id_minion = minion.id;
  }

  let mem = genElement(infosParent, "p", "50Mb");
}

function updateMinionCapacities(capParent, capacities, minion) {
  capacities.forEach((cap) => {
    let capItem = genElement(capParent, "div", "", "minion-capacity");
    let structure = cap["structure"];
    if (structure[0] == "$") {
      cap["value"] = minion[cap["structure"].slice(1)];
    }

    let name = genElement(capItem, "p", cap.name);
    let value = genElement(capItem, "p", cap.value);
    let price = genElement(capItem, "p", `${cap.price}$`);
    let button = genElement(capItem, "button", "Upgrade");
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
