let opt= document.querySelector(".opt");
let boxes= document.querySelectorAll(".box");
let newbtn= document.querySelector(".new");
let msgCon= document.querySelector(".msg-container");
let msg= document.querySelector(".msg");

let turnX=true;

const winPatterns= [[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]];

boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        if(turnX){
            box.innerText="X";
            turnX=false;
            box.style.color='red';
        }
        else{
            box.innerText="0";
            turnX=true;
            box.style.color='black';
        }
        box.disabled=true;
        checkWinner();
    });
});

const checkWinner=() =>{

    for(pattern of winPatterns)
    {
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1!=='' && pos1===pos2 && pos2===pos3)
        {
            console.log('Winner',pos1);
            showWinner(pos1);
        }
    }
};

const showWinner=(winner)=>
{
    msg.innerText=`Congrats ${winner} has won!!`;
    msgCon.classList.remove('hide');
    disableBut();
};

const disableBut=()=>
{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enableBut=()=>
    {
        for(let box of boxes){
            box.disabled=false;
            box.innerText='';
        }
        
    };



const reset=()=>
{
    turnX=true;
    enableBut();
    msgCon.classList.add("hide");
};

newbtn.addEventListener("click",reset);
opt.addEventListener("click",reset);



