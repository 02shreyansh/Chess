import * as piece from "../Data/piece.js";
import { ROOT_DIV } from "../helper/constants.js";
import { globalState } from "../index.js";
function moveElement(piece,id){
    const flatData=globalState.flat();
    flatData.forEach(el => {
        if(el.id== piece.currentPosition){
            delete el.piece;
        }
        if(el.id==id){
            el.piece=piece;
        }
        
    });
    clearHighlight();
    const previousPiece=document.getElementById(piece.currentPosition);
    previousPiece.style.background="";
    const currentPiece=document.getElementById(id);
    currentPiece.innerHTML=previousPiece.innerHTML;
    previousPiece.innerHTML="";
    piece.currentPosition=id;
    

}
function clearPervious(piece){
    if(piece){
        const el=document.getElementById(piece.currentPosition);
        el.style.background="";
    }
    
}
function selfHighlight(piece){
    const el=document.getElementById(piece);
    el.style.background="#f7f769";
}
function pieceRender(data){
    data.forEach(row => {
        row.forEach(square => {
            if(square.piece){
                const squareEl=document.getElementById(square.id);
                const piece=document.createElement("img");
                piece.src=square.piece.img;
                piece.classList.add("piece");
                squareEl.appendChild(piece);
            }
        });
    });
}
function initGameRender(data){
    data.forEach(element => {
        const rowEl=document.createElement("div");
        element.forEach(square => {
            const squareDiv=document.createElement("div");
            squareDiv.id=square.id;
            squareDiv.classList.add(square.color,"square");
            // for black
            if(square.id[1]==7){
                square.piece=piece.blackPawn(square.id);
            }
            if(square.id=="a8" || square.id=="h8"){
                square.piece=piece.blackRook(square.id);
            }
            if(square.id=="b8" || square.id=="g8"){
                square.piece=piece.blackKnight(square.id);
            }
            if(square.id=="c8" || square.id=="f8"){
                square.piece=piece.blackBishop(square.id);
            }
            if(square.id=="d8"){
                square.piece=piece.blackQueen(square.id);
            }
            if(square.id=="e8"){
                square.piece=piece.blackKing(square.id);
            }
            // for white
            if(square.id[1]==2){
                square.piece=piece.whitePawn(square.id);
            }
            if(square.id=="a1" || square.id=="h1"){
                square.piece=piece.whiteRook(square.id);
            }
            if(square.id=="b1" || square.id=="g1"){
                square.piece=piece.whiteKnight(square.id);
            }
            if(square.id=="c1" || square.id=="f1"){
                square.piece=piece.whiteBishop(square.id);
            }
            if(square.id=="d1"){
                square.piece=piece.whiteQueen(square.id);
            }
            if(square.id=="e1"){
                square.piece=piece.whiteKing(square.id);
            }

            rowEl.appendChild(squareDiv)
        });
        rowEl.classList.add("squareRow");
        ROOT_DIV.appendChild(rowEl);
        
    });
    pieceRender(data);
}


function renderHighlight(squareid){
    const highlghtspan =document.createElement("span");
    highlghtspan.classList.add("highlight");
    document.getElementById(squareid).appendChild(highlghtspan);
    
}
function clearHighlight(){
    const flatData=globalState.flat();
    flatData.forEach(el => {
        if(el.highlighted){
            document.getElementById(el.id).innerHTML="";
            el.highlighted=false;
        }
        
    });

}
export {initGameRender,renderHighlight,clearHighlight,selfHighlight,clearPervious,moveElement};