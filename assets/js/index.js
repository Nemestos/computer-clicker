import { GameState } from "./State.js";
import {
  addGold,
  applyGpsGolds,
  displayGolds,
  displayGps,
  getGPS,
} from "./GoldsManager.js";
import { updateShopView } from "./MinionShop.js";
var btnAddGold = document.getElementById("clickBtn");
var state = new GameState();

btnAddGold.addEventListener("click", addGold);
btnAddGold.gameState = state;
btnAddGold.x = 1;
var gpsMinions = setInterval(getGPS, 1000, state);
var gpsHandler = setInterval(applyGpsGolds, 1000, state);
var updateGold = setInterval(displayGolds, 60, state);
var updateGps = setInterval(displayGps, 60, state);
var updateShop = setInterval(updateShopView, 1000, state);
// updateShopView(state);
