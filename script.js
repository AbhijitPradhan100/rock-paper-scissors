let userScore = 0
let compScore = 0

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg")
const userScoreCount  = document.querySelector("#user-score")
const compScoreCount  = document.querySelector("#comp-score")

const genCompChoice = () =>{
    const options = ["rock", "paper", "scissors"]
    const randomIndex = Math.floor(Math.random() * 3)
    return options[randomIndex]
}

const drawGame = () =>{
    console.log("game was draw!!")
    msg.innerText = "It's a draw!! 🤝 Play Again 😁"
    msg.style.backgroundColor = "lightblue"
}

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        userScore++
        userScoreCount.innerText = userScore

        console.log("you win")
        
        msg.innerText = `you win 🥳. your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "#FFCA00"
    }else{
        compScore++
        compScoreCount.innerText = compScore

        console.log("you lose")
        
        msg.innerText = `you lose 🥲. ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor = "#FF3D3D"
    }
}

const playGame = (userChoice) =>{
    console.log("user choice : ", userChoice)

    //generate comp choice
    const compChoice =genCompChoice()
    console.log("comp choice : ", compChoice)

    if(userChoice === compChoice){
        //draw game
        drawGame()
    }else{
        let userWin = true 
        if(userChoice === "rock"){
        //scissors, paper
            userWin = compChoice === "paper" ? false : true
        }else if(userChoice === "paper"){
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true
        }else {
            //rock, paper
            userWin = compChoice === "rock" ? false : true
        }

        showWinner(userWin, userChoice, compChoice)
    }
}

choices.forEach((choice) =>{
    console.log(choice)
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id")
        console.log("choice was clicked",userChoice)
        playGame(userChoice)
    })
})

document.getElementById("reset").addEventListener("click", () =>{
    location.reload()
} )