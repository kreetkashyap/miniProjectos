let boxes = document.querySelectorAll('.box');
let newGame = document.querySelector('#new-game');
let reset = document.querySelector('#reset-game');
let msgContainer = document.querySelector('.msg-container')
let msg = document.querySelector('#msg');

let turnO = true;
let count = 0;
const winPattern = [
    [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6],
];
boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if(box.textContent != "") return;     // Disable the box once clicked!

        if (turnO) {
            box.textContent = "0";  // change the clicked box
            turnO = false;          // switch turn
        }
        else{
            box.textContent = "X";
            turnO = true;
        }
        // box.disabled = true;                  // Disable the box once clicked!
        count++;
        
       // Delay winner check so browser renders the last box first
       
        let winnerFound = checkWinner();
        if(count === 9 && !winnerFound){
            drawGame();
        }
    
    });
});
const disabledBox = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enabledBox = () => {
   for(let box of boxes)
    { box.disabled = false;
    box.textContent = "";
    box.classList.remove("winner");
}
}

const drawGame = () =>{
    msg.textContent = "It's a Draw!"
    msgContainer.classList.remove('hide');
    disabledBox();
}

const resetGame = () => {
    turnO = true;
    count = 0;
    enabledBox();
    msgContainer.classList.add("hide");
}

const showWinner = (winner, pattern) => {
    setTimeout(() => {
        msg.textContent = `🎉 Congratulations, The winner is ${winner}`;
         msgContainer.classList.remove('hide');
        boxes.forEach(box => box.disabled = true);
    }, 50); // 50ms delay ensures the last box renders first
}

const checkWinner = () =>{
    for(let pattern of winPattern){
        let pos1 = boxes[pattern[0]].textContent;
        let pos2 = boxes[pattern[1]].textContent;
        let pos3 = boxes[pattern[2]].textContent;

        if(pos1 != "" && pos2 != "" &&  pos3 != ""){
            if(pos1 == pos2 && pos2 == pos3){
                showWinner(pos1,  pattern);
                return true;
            }
        }        
   }
   return false;
}

reset.addEventListener('click', resetGame);
newGame.addEventListener('click', resetGame);


















