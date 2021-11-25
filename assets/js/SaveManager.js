import {genElement} from "./HelperDom.js";

export function getExistingsSaves() {
    let saves = localStorage.getItem("saves");
    return saves == null ? [] : saves;
}
export function updateExistingSaves(){
    let saves = getExistingsSaves();
    let select = document.getElementById("existing-saves");
    select.innerHTML=""
    saves.forEach((item)=>{
        let option = genElement(select,"option","","save-item");
    });
}