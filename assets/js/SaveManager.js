import {genElement} from "./HelperDom.js";
import {updateShopView} from "./MinionShop.js";

const SAVES_KEY = "existing_saves";
const CURRENT_SAVE_KEY = "current_save";

export function initListeners(gameState) {

    let loadButton = document.getElementById("load-current");
    let saveButton = document.getElementById("save-current");
    let clearButton = document.getElementById("clear-all");
    loadButton.addEventListener("click", (evt) => {
        let selectedId = document.getElementById("existing-saves").value
        loadSave(selectedId, gameState);
    });
    saveButton.addEventListener("click", (evt) => {
        save(gameState);
        updateExistingSaves();

    })
    clearButton.addEventListener("click", (evt) => {
        resetAllSaves();
        updateExistingSaves();

    })
}

export function getExistingsSaves() {
    let saves = localStorage.getItem(SAVES_KEY);

    return saves == null ? [] : JSON.parse(saves);
}

export function updateExistingSaves() {
    let saves = getExistingsSaves();
    let select = document.getElementById("existing-saves");
    select.innerHTML = ""
    saves.forEach((item, i) => {
        let option = genElement(select, "option", i, "save-item");
        option.setAttribute("value", i)
    });
}

export function displayCurrentSave() {
    let ids_span = document.getElementById("current-save-id")
    let id = getCurrentSaveSession();
    ids_span.innerText = id == null || id == "" ? "No save loaded" : id;

}

export function save(gameState) {
    let existings = getExistingsSaves();
    let json = gameState.toJson();
    let id = getCurrentSaveSession();

    if (id != null && id != "") {
        existings[id] = json;
        localStorage.setItem(SAVES_KEY, JSON.stringify(existings));
    } else {
        id = newSave(gameState);
    }
    setCurrentSaveSession(id);
}

export function loadSave(idSave, gameState) {
    let existing = getExistingsSaves();
    setCurrentSaveSession(idSave)
    applySave(gameState, existing[idSave]);
}

export function applySave(gameState, loading) {
    gameState.apply(loading);
    updateShopView(gameState);
}

export function newSave(gameState) {
    let existings = getExistingsSaves();
    existings.push(gameState.toJson());
    localStorage.setItem(SAVES_KEY, JSON.stringify(existings));
    return existings.length - 1
}

export function resetAllSaves() {
    localStorage.setItem(SAVES_KEY, "[]");
    setCurrentSaveSession("")
}


export function setCurrentSaveSession(idSave) {
    sessionStorage.setItem(CURRENT_SAVE_KEY, idSave);

}

export function getCurrentSaveSession() {
    return sessionStorage.getItem(CURRENT_SAVE_KEY);
}

