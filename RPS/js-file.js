
function getComputerChoice() {
    let choice = 'Rock';
    let compChoice = Math.floor(Math.random() * 10) %3;
    switch(compChoice) {
        case 1:
          choice = 'Paper';
          break;
        case 2:
          choice = 'Scissors'
          break;
        default:
          'do nothing'
      }
    console.log(choice)

    return choice;
}

function playRound(player, Comp) {
    let playResult = {
        RockRock: "Draw",
        RockPaper: "Lose",
        RockScissors: "Win",
        PaperRock: "Win",
        PaperPaper: "Draw",
        PaperScissors: "Lose",
        ScissorsRock: "Lose",
        ScissorsPaper: "Win",
        ScissorsScissors: "Draw",
    }
    // playerselection + compselection
    play = player + Comp;

    return playResult[play];
}



let count = 0;
let winCount = 0;
let loseCount = 0;

while (count < 5 && winCount < 3 && loseCount < 3 ){
    let playerSelection = prompt("Do you choose rock, paper or scissors?");
    let CompSelection = getComputerChoice();

    result = playRound(playerSelection,CompSelection)
    if (result === "Win") {
        winCount += 1;
        count++;
    } else if (result === "Lose") {
        loseCount += 1;
        count++;
    } else {
        count++;
    }

    console.log(result);
    console.log(winCount);
    console.log(loseCount);
}