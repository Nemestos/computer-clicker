import {GameState} from "./State.js";
import {
  addGold,
  applyGpsGolds,
  displayClickValue,
  displayGolds,
  displayGps,
  displayTotal,
  getGPS,
  handleClickPow,
} from "./GoldsManager.js";
import {handleMultMinions, updateShopView} from "./MinionShop.js";
import {getExistingsSaves, initListeners, updateExistingSaves} from "./SaveManager.js";


var saves = getExistingsSaves();
console.log(saves);
console.lo
var btnAddGold = document.getElementById("clickBtn");
var state = new GameState();
btnAddGold.addEventListener("click", addGold);
btnAddGold.gameState = state;
btnAddGold.x = 1;

updateExistingSaves();

initListeners(state);
updateShopView(state);

var handleGpsMinions = setInterval(handleMultMinions, 60, state)
var gpsMinions = setInterval(getGPS, 1000, state);
var gpsHandler = setInterval(applyGpsGolds, 1000, state);


var updateTotal = setInterval(displayTotal, 60, state)
var updateClickPow = setInterval(handleClickPow, 60, state)
var updateGold = setInterval(displayGolds, 60, state);
var updateGps = setInterval(displayGps, 60, state);
var updateClick = setInterval(displayClickValue, 60, state);

