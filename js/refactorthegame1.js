
//my first interactive game

let playGame = confirm("Shall we play rock, paper, or scissors?");
if(playGame){
    //play
    while(playGame){
    const playerChoice = prompt("Please enter rock, paper, or scissors.");
    if(playerChoice || playerChoice == ""){
        const playerOne = playerChoice.trim().toLowerCase();
        if(playerOne == "rock" || playerOne == "paper" || playerOne == "scissors"){
            const computerChoice = Math.floor(Math.random()*3);
            const rpsArray = ["rock","paper","scissors"];
            const computer = rpsArray[computerChoice];

            const result = playerOne == computer ? "Tie game" :
            
             playerOne == "rock" && computer == "paper" ? `playerOne: {playerOne} \n computer:${computer} \n computer wins!`:

             playerOne == "paper" && computer == "scissors" ? `playerOne: ${playerOne} \n computer:${computer} \n computer wins!`:

             playerOne == "scissors" && computer == "rock" ? `playerOne: ${playerOne} \n computer:${computer} \n computer wins!`:

             `playerOne: ${playerOne} \n computer:${computer} \n playerOne wins!`;

            alert(result);

            playGame = confirm("Play again?")
            if(!playGame) alert("Ok, thanks for playing");
            continue;
        }
        else{
            alert("You didn't enter rock,paper or scissors");
            continue;
        }
    }
    else{
        alert("I guess you change your mind, maybe next time.");
    }
}
}
else{
    alert("Ok, maybe next time.");
}