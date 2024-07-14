let boxes = document.querySelectorAll(".box");
let rebtn = document.querySelector("#reset");
let info = document.querySelector(".info");

let turnX = true; //player0
const Wpatt = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

boxes.forEach(element => {
    element.addEventListener("click",() => { 
        
        if(element.innerText == ""){
        if(turnX){
            element.innerText = "X";
            info.innerText = `Your turn O`;
            turnX = false;
            
        } else{
            element.innerText = "O";
            info.innerText = `Other's turn X`;
            turnX = true;
            
        }
        checkwin();
        gover();
    }
});
});

const checkwin = () => {
    for (i of Wpatt){
       let a = boxes[i[0]].innerText;
       let b = boxes[i[1]].innerText;
       let c = boxes[i[2]].innerText;
       if(a==b && b==c && a!=""){
        info.innerText = `Player ${a} WON!`;
        
        for (let k of boxes){
            if (k.innerText == ""){
                k.innerText = "-";
                
            }
        }
        return true;
       }
    }
    return false;
}

document.querySelector("#reset").addEventListener("click", ()=>{
    for(i of boxes){
        i.innerText = "";
        info.innerText = "Other's turn X";
        turnX = true;
        

    }
})
const gover = ()=>{
    if(!checkwin()){
    let c = 0;
    
    for (let box of boxes){
        if(box.innerText != ""){
            c++;
        }
        if(c==9){
            info.innerText = "Game Draw";
        }
    }
    }


}


