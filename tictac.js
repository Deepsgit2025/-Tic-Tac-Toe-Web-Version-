let boxes = document.querySelectorAll(".box");
let resetbtn = document.getElementById("resetbtn");
let newbtngam = document.querySelector("#newbtn");
let msgcontainer = document.querySelector(".msgcontainer");
let msg = document.querySelector("#msg"); 
let turno = true;

const winpatterns = [
    [0,1,2],[0,3,6],[0,4,8],
    [1,4,7],[2,5,8],[2,4,6],
    [3,4,5],[6,7,8]
];

const resetgame = () => {
    turno = true;
    enableboxes();
    msgcontainer.classList.add("hide");
};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{

        // prevent overwriting
        if(box.innerText !== "") return;

        if(turno){
            box.innerText = "O";
            turno = false;
        } else {
            box.innerText = "X";
            turno = true;
        }

        box.disabled = true;

        checkwinner();
    });
});

const disabledboxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableboxes = () => {
    for(let box of boxes){
        box.disabled = false;   
        box.innerText = "";
    }
};

const showwinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disabledboxes();
};

const checkwinner = () => {
    for(let pattern of winpatterns){
        let posval1 = boxes[pattern[0]].innerText;
        let posval2 = boxes[pattern[1]].innerText;
        let posval3 = boxes[pattern[2]].innerText;

        if(posval1 !== "" && posval2 !== "" && posval3 !== ""){
            if(posval1 === posval2 && posval2 === posval3){
                showwinner(posval1);
                return;  
            }
        }
    }
};

newbtngam.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);