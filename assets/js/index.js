import { GameState } from "./State.js";
import {
  addGold,
  applyGpsGolds,
  displayGolds,
  displayGps,
  getGPS,
} from "./GoldsManager.js";
import { addEvent, showClicker } from "./ClickerManager.js";
import { updateShopView } from "./MinionShop.js";
var state = new GameState();

updateShopView(state);
showClicker(state);
addEvent(state, addGold);
var gpsMinions = setInterval(getGPS, 1000, state);
var gpsHandler = setInterval(applyGpsGolds, 1000, state);
var updateGold = setInterval(displayGolds, 60, state);
var updateGps = setInterval(displayGps, 60, state);
