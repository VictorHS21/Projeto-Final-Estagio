var winners = new Array();
var player1Selections;
var player2Selections;
var timer;
var numberOfPlayers = 2;
var currentPlayer;
var move = 0;
var points1;    // player 1 points
var points2;    // player 2 points
var size = 3;
var primerio;

async function iniciar(){
    player1Selections = new Array();
    player2Selections = new Array();
    currentPlayer = 0;
    points1 = 0;
    points2 = 0;
    primerio = 0;

    await apiService.addJogo()
            .then((resp) => resp)
            .catch((error) => console.log(error));

    drawBoard();
}

async function mudar()
{
    await apiService.clearJogo();

    if (primerio == 0){
        primerio = 1;
        currentPlayer = 1;
    }
    else{
        primerio = 0;
        currentPlayer = 0;
    }
        
    points1 = 0;
    points2 = 0;
    player1Selections = new Array();
    player2Selections = new Array();

    await apiService.addJogo()
            .then((resp) => resp)
            .catch((error) => console.log(error));

    drawBoard();
}

async function drawBoard() {
    var Parent = document.getElementById("game");
    var counter = 1;
    
    while (Parent.hasChildNodes()) {
        Parent.removeChild(Parent.firstChild);
    }

    for (s = 0; s < 3; s++) {
        var row = document.createElement("tr");
        
        for (r = 0; r < 3; r++) {
            var col = document.createElement("td");
            col.id = counter;

            var handler = async function() {
                if (currentPlayer == 0) {
                    if (primerio == 0){
                        this.innerHTML = "X";
                        player1Selections.push(parseInt(this.id));
                        d('player1').classList.add('selected');
                        d('player2').classList.remove('selected');
                    }else{
                        this.innerHTML = "O";
                        player1Selections.push(parseInt(this.id));
                        d('player1').classList.remove('selected');
                        d('player2').classList.add('selected');
                    }
                }
                else {
                    var bot = await apiService.botJogo()
                        .then((resp) => resp.json())
                        .catch((error) => console.log(error));
                    console.log(bot);
                    if (primerio == 0){
                        this.innerHTML = "O";
                        player2Selections.push(bot[bot.length -1]);
                        d('player1').classList.remove('selected');
                        d('player2').classList.add('selected');
                    }else{
                        this.innerHTML = "X";
                        player2Selections.push(parseInt(this.id));
                        // player2Selections = valorbot.SelectionsBot;
                        d('player1').classList.add('selected');
                        d('player2').classList.remove('selected');
                    }
                }

                await apiService.updateJogo()
                    .then((resp) => resp)
                    .catch((error) => console.log(error));

                // verificar vitoria
                    
                var teste = await apiService.getJogo()
                .then((resp) => resp.json())
                .catch((error) => console.log(error));

                var teste2 = teste[0]
                console.log(teste2);

                if (checkWinner())
                {
                    if(currentPlayer == 0) {
                        if (primerio == 0) { 
                            points1++;
                        }else{
                            points2++;
                        }
                    } 
                    else { 
                        if (primerio == 0) { 
                            points2++;
                        }else{
                            points1++;
                        }
                    }  

                    document.getElementById("player1").innerHTML = points1;
                    document.getElementById("player2").innerHTML = points2;

                    reset();
                    drawBoard();
                }

                else if (player2Selections.length + player1Selections.length == 9)
                {
                    reset();
                    drawBoard();
                }
                else
                {
                    if (currentPlayer == 0)
                        currentPlayer = 1;
                    else
                        currentPlayer = 0;
                    this.removeEventListener('click', arguments.callee);
                }
            };

            col.addEventListener('click', handler);

            row.appendChild(col);
            counter++;
        }

        Parent.appendChild(row);
    }

    loadAnswers();
}

async function pegar(){
   return await apiService.getJogo()
                    .then((resp) => resp.json())
                    .catch((error) => console.log(error));
}

function d(id)
{
    var el = document.getElementById(id);
    return el;
}
async function reset()
{
    await apiService.reseteJogo();
    currentPlayer = primerio;
    player1Selections = new Array();
    player2Selections = new Array();
    d('player1').classList.add('selected');
    d('player2').classList.remove('selected');
}

function loadAnswers()
{
    winners.push([1, 2, 3]);
    winners.push([4, 5, 6]);
    winners.push([7, 8, 9]);
    winners.push([1, 4, 7]);
    winners.push([2, 5, 8]);
    winners.push([3, 6, 9]);
    winners.push([1, 5, 9]);
    winners.push([3, 5, 7]);
}

function checkWinner() {
    // check if current player has a winning hand
    // only stsrt checking when player x has size number of selections
    var win = false;
    var playerSelections = new Array();

    if(currentPlayer == 0) {
        if (primerio == 0) { 
            playerSelections = player1Selections;
        }else{
            playerSelections = player2Selections;
        }
    } 
    else { 
        if (primerio == 0) { 
            playerSelections = player2Selections;
        }else{
            playerSelections = player1Selections;
        }
    }  
    
    if (playerSelections.length >= size) {
        // check if any 'winners' are also in your selections
        
        for (i = 0; i < winners.length; i++) {
            var sets = winners[i];  // winning hand
            var setFound = true;
            
            for (r = 0; r < sets.length; r++) {
                // check if number is in current players hand
                // if not, break, not winner
                var found = false;
                
                // players hand
                for (s = 0; s < playerSelections.length; s++) {
                    if (sets[r] == playerSelections[s]) {
                        found = true;
                        break;
                    }
                }

                // value not found in players hand
                // not a valid set, move on
                if (found == false) {
                    setFound = false;
                    break;
                }
            }

            if (setFound == true) {
                win = true;
                break;
            }
        }
    }

    return win;
} 

var click = document.getElementById("nome");
click.addEventListener("click", mudar);
window.addEventListener('load', iniciar);