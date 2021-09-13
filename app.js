let cells = document.querySelectorAll('.row > div');
let turnCounter = 0;

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked);
}

function cellClicked() {
    if(turnCounter % 2 == 0) {
        event.target.textContent= 'X';
    } else {
        event.target.textContent= 'O';
    } 

    turnCounter++
}




function checkWin() {
    if (cells[0].textContent == cells[1].textContent && cells[1].textContent == cells[2].textContent && cells[0].textContent !== "") {
        alert("Winner is in the HOUSE");
    } else if (cells[3].textContent == cells[4].textContent && cells[4].textContent == cells[5].textContent && cells[0].textContent !== "") {
        alert("Winner is in the HOUSE");
    }  else if (cells[6].textContent == cells[7].textContent && cells[7].textContent == cells[8].textContent && cells[0].textContent !== "") {
        alert("Winner is in the HOUSE");
    }  else if (cells[0].textContent == cells[3].textContent && cells[3].textContent == cells[6].textContent && cells[0].textContent !== "") {
        alert("Winner is in the HOUSE");
    } else if (cells[1].textContent == cells[4].textContent && cells[4].textContent == cells[7].textContent && cells[0].textContent !== "") {
        alert("Winner is in the HOUSE");
    } else if (cells[2].textContent == cells[5].textContent && cells[5].textContent == cells[8].textContent && cells[0].textContent !== "") {
        alert("Winner is in the HOUSE");
    } else if (cells[0].textContent == cells[4].textContent && cells[4].textContent == cells[8].textContent && cells[0].textContent !== "") {
        alert("Winner is in the HOUSE");
    } else if (cells[2].textContent == cells[4].textContent && cells[4].textContent == cells[6].textContent && cells[0].textContent !== "") {
        alert("Winner is in the HOUSE");
    } else if(
        alert("Its a Tie!" + " We'll get em Next Time Boys"));
}

