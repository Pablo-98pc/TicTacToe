let TicTacToeBoard = document.getElementsByTagName("button");
let btnArray = Array.from(TicTacToeBoard);


/*Win conditions */
function winCondition() {
    if (btnArray[0].innerHTML == "X"  && btnArray[1].innerHTML == "X"  &&  btnArray[2].innerHTML == "X")  {
        player = "jugador X";
        return true;
    }
    else if (btnArray[0].innerHTML == "O"  && btnArray[1].innerHTML == "O"  &&  btnArray[2].innerHTML == "O") {
        player = "jugador O";
        return true
    }
    else if (btnArray[0].innerHTML == "X"  && btnArray[4].innerHTML == "X"  &&  btnArray[8].innerHTML == "X"){
        player = "jugador X";
        return true 
    } else if(btnArray[0].innerHTML == "O"  && btnArray[4].innerHTML == "O"  &&  btnArray[8].innerHTML == "O" ) {
        player = "jugador O"
        return true;
    }
    else if (btnArray[0].innerHTML == "X"  && btnArray[3].innerHTML == "X"  &&  btnArray[6].innerHTML == "X") {
        player = "jugador X";
        return true;
    } else if (btnArray[0].innerHTML == "O"  && btnArray[3].innerHTML == "O"  &&  btnArray[6].innerHTML == "O") {
        player = "jugador O";
        return true;
    }
    else if (btnArray[3].innerHTML == "X"  && btnArray[4].innerHTML == "X"  &&  btnArray[5].innerHTML == "X") {
        player = "jugador X";
        return true;
    } else if(btnArray[3].innerHTML == "O"  && btnArray[4].innerHTML == "O"  &&  btnArray[5].innerHTML == "O"  ) {
        player = "jugador O"
        return true;
    }
    else if (btnArray[6].innerHTML == "X"  && btnArray[7].innerHTML == "X"  &&  btnArray[8].innerHTML == "X") {
        player = " jugador X";
        return true;
    } else if (btnArray[6].innerHTML == "O"  && btnArray[7].innerHTML == "O"  &&  btnArray[8].innerHTML == "O" ) {
        player = "jugador O";
        return true;
    }
    else if (btnArray[1].innerHTML == "X"  && btnArray[4].innerHTML == "X"  &&  btnArray[7].innerHTML == "X") {
        player = "jugador X";
        return true;
    } else if (btnArray[1].innerHTML == "O"  && btnArray[4].innerHTML == "O"  &&  btnArray[7].innerHTML == "O" ) {
        player = "jugador O";
        return true;
    }
    else if (btnArray[2].innerHTML == "X"  && btnArray[5].innerHTML == "X"  &&  btnArray[8].innerHTML == "X") {
        player = "jugador X";
        return true;
    } else if (btnArray[2].innerHTML == "O"  && btnArray[5].innerHTML == "O"  &&  btnArray[8].innerHTML == "O" ) {
        player = "jugador O"
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
            if (round < 6) {
                btn.innerHTML = "X";
                ia();  
            } else {
                btn.innerHTML = "X";
            }
            
        }
        
        else {
            return false;
        }
    }
    if (winCondition()) {
        document.querySelectorAll('button').forEach((button) =>  button.disabled = true)
        let announcementWinner = document.createElement("h2");
        announcementWinner.innerHTML = `Enhorabuena ${player}, has ganado!` ;
        let title = document.getElementById('winner-title');
        title.appendChild(announcementWinner);

    }
   if (!winCondition() && round == 6) {
       alert('habeis empatado')
   }
}
function ia () {
    function aleatory (min,max) {
        return Math.floor(Math.random()* (max - min +1)) + min;
    } 
    let number = aleatory(0, btnArray.length -1 );
    if (!winCondition()) {
        while(btnArray[number].innerHTML != "") {
            number= aleatory(0, btnArray.length -1 );
        }
    position = number;
    btnArray[position].innerHTML = "O";
    }
    return position;
}
document.querySelectorAll('button').forEach((button) =>  button.addEventListener('click', event => btnPressed(event))); 
