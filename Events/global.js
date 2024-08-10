import { ROOT_DIV } from "../helper/constants.js";
import { globalState } from "../index.js";
function whitePawnClicked({piece}){
    if(piece.currentPosition[1]=="2"){
        console.log("init");
    }
    
    
}
function GlobalEvent(){
    ROOT_DIV.addEventListener("click",function(event){
        const clickId=event.target.parentNode.id;
        const flatArray=globalState.flat();
        const square=flatArray.find((el)=>el.id ==clickId);
        if(square.piece.piece_name =="WHITE_PAWN"){
            whitePawnClicked(square);
        };
    })
}
export {GlobalEvent};