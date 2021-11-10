let TicTacToeBoard = document.getElementsByTagName("button");
let btnArray = Array.from(TicTacToeBoard);
console.log(btnArray)

/*Win conditions */
function winCondition() {
    if (btnArray[0].innerHTML == "X"  && btnArray[1].innerHTML == "X"  &&  btnArray[2].innerHTML == "X" || btnArray[0].innerHTML == "O"  && btnArray[1].innerHTML == "O"  &&  btnArray[2].innerHTML == "O") {
        return true;
    }
    else if (btnArray[0].innerHTML == "X"  && btnArray[4].innerHTML == "X"  &&  btnArray[8].innerHTML == "X" || btnArray[0].innerHTML == "O"  && btnArray[4].innerHTML == "O"  &&  btnArray[8].innerHTML == "O" ) {
        return true;
    }
    else if (btnArray[0].innerHTML == "X"  && btnArray[3].innerHTML == "X"  &&  btnArray[6].innerHTML == "X" || btnArray[0].innerHTML == "O"  && btnArray[3].innerHTML == "O"  &&  btnArray[6].innerHTML == "O"  ) {
        return true;
    }
    else if (btnArray[3].innerHTML == "X"  && btnArray[4].innerHTML == "X"  &&  btnArray[5].innerHTML == "X" || btnArray[3].innerHTML == "O"  && btnArray[4].innerHTML == "O"  &&  btnArray[5].innerHTML == "O"  ) {
        return true;
    }
    else if (btnArray[6].innerHTML == "X"  && btnArray[7].innerHTML == "X"  &&  btnArray[8].innerHTML == "X" || btnArray[6].innerHTML == "O"  && btnArray[7].innerHTML == "O"  &&  btnArray[8].innerHTML == "O" ) {
        return true;
    }
    else if (btnArray[1].innerHTML == "X"  && btnArray[4].innerHTML == "X"  &&  btnArray[7].innerHTML == "X" || btnArray[1].innerHTML == "O"  && btnArray[4].innerHTML == "O"  &&  btnArray[7].innerHTML == "O" ) {
        return true;
    }
    else if (btnArray[2].innerHTML == "X"  && btnArray[5].innerHTML == "X"  &&  btnArray[8].innerHTML == "X" || btnArray[2].innerHTML == "O"  && btnArray[5].innerHTML == "O"  &&  btnArray[8].innerHTML == "O"  ) {
        return true;
    } 
    
} 


/*Rounds and players*/
let round = 1;
let player = "";
function btnPressed(e) {
    let btn = e.target;
    if (!winCondition()) {
        if (btn.innerHTML == ""){   
            round ++;
            if (round % 2 == 0) {
                player = "jugador X";
                btn.innerHTML = "X";
            } else {
                player = "jugador O";
                btn.innerHTML = "O";
            }
        }
         else {
            return false;
        }
    }
    if (winCondition()) {
    let announcementWinner = document.createElement("h2");
    announcementWinner.innerHTML = `Enhorabuena ${player}, has ganado!`;
    let title = document.getElementById("winner-title");
    title.appendChild(announcementWinner);
    }
    
}
document.querySelectorAll('button').forEach((button) =>  button.addEventListener('click', event => btnPressed(event)));

/*function resetGame() {
    document.querySelectorAll('button').forEach((button) =>  button.innerHTML = "");
}
let resetButton = document.getElementsByClassName('reset-btn');
/*resetButton.addEventListener('click',resetGame());*/
/*var deleteLink = document.querySelector('.delete');

deleteLink.addEventListener('click', function(event) {
    event.preventDefault();*/