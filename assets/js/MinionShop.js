import {} from "./State.js";

export function buyMinion(gameState, id_minion) {
  gameState.minions.forEach((element) => {
    if (element.id == id_minion) {
      if (gameState.golds >= element.cost) {
        gameState.golds -= element.cost;
        element.owned += 1;
      }
    }
  });
}
