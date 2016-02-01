setTimeout(function(){
    var windowHeight = window.innerHeight;
    $('#intro-page-wrapper').css('height', windowHeight + 'px');
    var contentHeight = $('#intro-page').height();
    var paddingAdjust = parseInt((windowHeight - contentHeight-25)/2);
    $('#logo').css('padding-top', paddingAdjust + 'px');
},10);

function viewProject(){
    document.getElementById("intro-page-wrapper").style.display="none";
}

var turn = 0

winningCombo = [[1,2,3],[4,5,6],[7,8,9],[1,5,9],[1,4,7],[2,5,8],[3,6,9],[3,5,7]]

// function boxClicked(number){
//         placeInBox(number);

// }

function boxClicked(number) {
    var currId = "box" + number;
    var theboxWeWantToPlace = document.getElementById(currId);
    console.log(theboxWeWantToPlace);
    theboxWeWantToPlace.classList.remove("empty");

    if (turn == 0){
    theboxWeWantToPlace.innerHTML = "X"
    turn = 1
    }
    else{
       theboxWeWantToPlace.innerHTML= "O" 
       turn = 0
    }
    checkWin("X")
    checkWin("O")
}

function restart(){
    document.location.href="";
}

function checkWin(symbol){
    var rowCount = 0
    for (i=0; i < winningCombo.length; i++) {
        for(x=0; x < winningCombo[i].length; x++){
            var currId = ("box" + winningCombo[i][x])
            box = document.getElementById(currId) 
                if (box.innerHTML == symbol) {
                    rowCount++;
                    if (rowCount === 3){
                    document.getElementById('message').innerHTML = (symbol + "Wins!")
                    }
                }   
                if (box.innerHTML != symbol) {
                    rowCount = 0;
                break;
                }   
        }
    }
    checkDraw()
}

function checkDraw(){
    var rowTotal = 0
    var boxes = document.getElementsByClassName("box")
    for(i=0; i < boxes.length; i++){
        if (boxes[i].innerHTML != "-"){
            rowTotal++
        }
    }
    if (rowTotal === 9) {
        document.getElementById('message').innerHTML = ("Draw!")
    }

}

