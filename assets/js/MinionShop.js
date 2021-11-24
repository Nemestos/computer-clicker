export function updateShopView(gameState){
    let minions_list = document.getElementById("minion-list");
    minions_list.innerHTML="";
    console.log(gameState.minions);
    gameState.minions.forEach((item)=>{
        let [elt,info] = createEmptyMinionItem(minions_list);
        updateMinionInfo(info,item);
        updateMinionCapacities(elt,item.capacities);
    });
}
function createEmptyMinionItem(parent){
    let item = genElement(parent,"div","","minion-item");
    let infos = genElement(item,"div","","minion-info");
    return [item,infos];
}
function updateMinionInfo(infosParent,minion){
    let title = genElement(infosParent,"h3",minion.name);
    let mem = genElement(infosParent,"p","50Mb");
}
function updateMinionCapacities(capParent,capacities){
   capacities.forEach((cap)=>{
       let capItem=genElement(capParent,"div","","minion-capacity");
       let name = genElement(capItem,"p",cap.name);
       let value = genElement(capItem,"p",cap.value);
       let price = genElement(capItem,"p",`${cap.price}$`);
       let button = genElement(capItem,"button","Upgrade");

   })
}
function genElement(parent,type,inner,classe=""){
    let item = document.createElement(type);
    if(classe!=""){

        item.classList.add(classe);
    }
    item.innerHTML=inner;
    parent.appendChild(item);
    return item
}
