export function genElement(parent, type, inner, classe = "") {
    let item = document.createElement(type);
    if (classe != "") {
        item.classList.add(classe);
    }
    item.innerHTML = inner;
    parent.appendChild(item);
    return item;
}