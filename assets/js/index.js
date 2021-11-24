import {GameState} from "./State.js";
import {addGold, applyGpsGolds, displayGolds} from "./GoldsManager.js";
var btnAddGold = document.getElementById("clickBtn");
var state = new GameState();

btnAddGold.addEventListener("click",addGold);
btnAddGold.gameState = state;
btnAddGold.x = 1;

var gpsHandler = setInterval(applyGpsGolds,1000,state);
var updateDisplay = setInterval(displayGolds,60,state);