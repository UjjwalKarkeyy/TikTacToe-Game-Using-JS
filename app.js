let boxes = document.querySelectorAll('.box');
let reset_btn = document.querySelector('#reset-btn');
let turn = true; // Player O = 1, Player X = o
let new_game_btn = document.querySelector('#new-btn');
let msg_container = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');
let counter = 0;

const win_patterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

reset_game = ()=>
{
    turn = true;
    enable_boxes();
    counter = 0;
    msg_container.classList.add('hide');
}

boxes.forEach((box)=> {

    box.addEventListener('click', ()=> {
        if(turn)
        {
            box.innerText = 'O';
            turn = false;
        }

        else
        {
            box.innerText = 'X';
            turn = true;
        }

        box.disabled = true;

        checkWinner();
        checkDraw();
    })
});

const disable_boxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enable_boxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner =(winner)=>
{
    msg.innerText = `Player ${winner} Wins!`;
    disable_boxes();
    msg_container.classList.remove('hide');
}

const checkWinner = ()=>{

    for(let pattern of win_patterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        console.log(pos3Val);
        

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){

            if(pos1Val === pos2Val && pos2Val === pos3Val){

                showWinner(pos1Val);
            }
        }
    }
    counter += 1;
};

const checkDraw = ()=>{

    if(counter === 9)
    {
        msg.innerText = "It's a Tie!";
        msg_container.classList.remove('hide');
    }
}

new_game_btn.addEventListener('click', reset_game);
reset_btn.addEventListener('click', reset_game);
