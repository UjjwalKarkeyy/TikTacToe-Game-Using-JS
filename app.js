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
        console.log('Box was clicked!');

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
    })
});

