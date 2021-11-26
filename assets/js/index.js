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
import {displayCurrentSave, initListeners, updateExistingSaves,} from "./SaveManager.js";
import {addEvent, showClicker} from "./ClickerManager.js";
import {CoolManager, createHeatSection, mergeHeat, MinionHeatManager, TempManager, tempUpdate} from "./HeatManager.js";
import {createPowerSection, handlePowerDraw} from "./PowerManager.js";

window.onload = () => {
  sessionStorage.clear();
};

var btnAddGold = document.getElementById("main-click-btn");
var state = new GameState();
btnAddGold.addEventListener("click", () => {
  addGold(state, 2 ** state.click_pow);
});
updateExistingSaves();

initListeners(state);
updateShopView(state);
showClicker(state);
addEvent(state);
createHeatSection(state);
createPowerSection(state)

var handleGpsMinions = setInterval(handleMultMinions, 60, state);
var gpsMinions = setInterval(getGPS, 60, state);
var gpsHandler = setInterval(applyGpsGolds, 1000, state);
var updateHeat = setInterval(MinionHeatManager, 60, state);
var updateMergeHeat = setInterval(mergeHeat, 60, state);
var updateCool = setInterval(CoolManager, 60, state);
var updateTemp = setInterval(TempManager, 60, state);
var updateShowTemp = setInterval(tempUpdate, 60, state);
var updateSaveId = setInterval(displayCurrentSave, 60, state);
var updatePowerDraw = setInterval(handlePowerDraw,60,state)
var updateTotal = setInterval(displayTotal, 60, state);
var updateClickPow = setInterval(handleClickPow, 60, state);
var updateGold = setInterval(displayGolds, 60, state);
var updateGps = setInterval(displayGps, 60, state);
var updateClick = setInterval(displayClickValue, 60, state);

