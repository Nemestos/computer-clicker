const DEFAULT_HEADER_BACKGROUND = "#8aeb7a"

export function handleRgb(gameState) {
    let rgbs = document.querySelectorAll(".can-rgb")
    rgbs.forEach((rgb)=>{
        if(gameState.rgb){
            rgb.classList.add("rgb")
        }else{
            rgb.classList.remove("rgb")
        }
    })

}