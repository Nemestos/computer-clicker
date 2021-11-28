const DEFAULT_HEADER_BACKGROUND = "#8aeb7a"

export function handleAnimation(gameState,animation) {
    let elts = document.querySelectorAll(`.can-${animation}`)
    elts.forEach((x)=>{
        if(gameState[animation]){
            x.classList.add(animation)
        }else{
            x.classList.remove(animation)
        }
    })

}