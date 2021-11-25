import { GameState } from "./State.js";
import {
  //addGold,
  applyGpsGolds,
  displayClickValue,
  displayGolds,
  displayGps,
  displayTotal,
  getGPS,
  handleClickPow,
} from "./GoldsManager.js";
import { addEvent, showClicker } from "./ClickerManager.js";
import { handleMultMinions, updateShopView } from "./MinionShop.js";
import { getExistingsSaves } from "./SaveManager.js";

var saves = getExistingsSaves();
var state = new GameState();

updateShopView(state);

showClicker(state);
addEvent(state);

var handleGpsMinions = setInterval(handleMultMinions, 60, state);
var gpsMinions = setInterval(getGPS, 1000, state);
var gpsHandler = setInterval(applyGpsGolds, 1000, state);

var updateTotal = setInterval(displayTotal, 60, state);
var updateClickPow = setInterval(handleClickPow, 60, state);
var updateGold = setInterval(displayGolds, 60, state);
var updateGps = setInterval(displayGps, 60, state);
var updateClick = setInterval(displayClickValue, 60, state);
