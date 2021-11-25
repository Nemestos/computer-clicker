export function getExistingsSaves() {
    let saves = localStorage.getItem("saves");
    return saves == null ? [] : saves;
}