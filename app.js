let boxes = document.querySelectorAll('.box');
let reset_btn = document.querySelector('#reset-btn');

let turn = true; // Player O = 1, Player X = o

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
    })
});

const checkWinner = ()=>{

    for(let pattern of win_patterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        console.log(pos3Val);
        

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log('Winner is ', pos1Val);
            }
        }
    }
};
