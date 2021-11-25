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
import {displayCurrentSave, getExistingsSaves, initListeners, updateExistingSaves} from "./SaveManager.js";
window.onload=()=>{
  sessionStorage.clear();
}

var saves = getExistingsSaves();
console.log(saves);
console.lo
var btnAddGold = document.getElementById("clickBtn");
var state = new GameState();
btnAddGold.addEventListener("click", ()=>{
  addGold(state,  2 ** state.click_pow)
});

updateExistingSaves();

initListeners(state);
updateShopView(state);

var handleGpsMinions = setInterval(handleMultMinions, 60, state)
var gpsMinions = setInterval(getGPS, 1000, state);
var gpsHandler = setInterval(applyGpsGolds, 1000, state);

var updateSaveId = setInterval(displayCurrentSave,60,state);

var updateTotal = setInterval(displayTotal, 60, state)
var updateClickPow = setInterval(handleClickPow, 60, state)
var updateGold = setInterval(displayGolds, 60, state);
var updateGps = setInterval(displayGps, 60, state);
var updateClick = setInterval(displayClickValue, 60, state);

