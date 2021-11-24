import {GameState} from "./State.js";
import {addGold} from "./GoldsManager.js";
var btnAddGold = document.getElementById("clickBtn");
var state = new GameState();

btnAddGold.addEventListener("click",addGold);
btnAddGold.gameState = state;
btnAddGold.x = 1;
