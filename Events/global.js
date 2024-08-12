import { ROOT_DIV } from "../helper/constants.js";
import { globalState } from "../index.js";
import { clearHighlight,selfHighlight,clearPervious} from "../Render/main.js";

let highlght_state=false;
let selfHighlight_state=null;

function whitePawnClicked({piece}){
    
    const current_pos=piece.currentPosition;
    selfHighlight(current_pos);
    clearPervious(selfHighlight_state);
    selfHighlight_state=piece;
    const flatArray=globalState.flat();
    if(current_pos[1]=="2"){
        let highlightSquare=[
            `${current_pos[0]}${Number(current_pos[1]) +1}`,
            `${current_pos[0]}${Number(current_pos[1]) + 2}`
        ];
        clearHighlight();
        highlightSquare.forEach(highlght => {
            globalState.forEach(row => {
                row.forEach(element => {
                    if(element.id==highlght){
                        element.highlightRoundSquare(true);
                    }
                });
            });
        });
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