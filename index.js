
let scoreEl = document.getElementById("score-el")

let BotscoreEl = document.getElementById("bot-score-el")

let resultEl = document.getElementById("result-el")

let humanScore = 0
let botScore = 0

let cards = ["Rock", "Paper", "Scissor"]
scoreEl.textContent = humanScore
BotscoreEl.textContent = botScore

function rock(){
    let HumanSl = cards[0]
    if(HumanSl == getRandom()){
        resultEl.textContent = "😏 You tied"
        scoreEl.textContent = humanScore
        BotscoreEl.textContent = botScore
    }
    else if(getRandom() == "Paper"){
        resultEl.textContent = "😝 You Sucks"
        botScore += 1
        scoreEl.textContent = humanScore
        BotscoreEl.textContent = botScore
    }
    else{
        resultEl.textContent = "😉 You Win"
        humanScore += 1
        scoreEl.textContent = humanScore
        BotscoreEl.textContent = botScore
    }

}
function paper(){
    if(getRandom() == "Paper"){
        resultEl.textContent = "😏 You tied" 
        scoreEl.textContent = humanScore
        BotscoreEl.textContent = botScore
    }
    else if(getRandom() == "Scissor"){
        resultEl.textContent = "😝 You Sucks"
        botScore += 1
        scoreEl.textContent = humanScore
        BotscoreEl.textContent = botScore
    }
    else{
        resultEl.textContent = "😉 You Win"
        humanScore += 1
        scoreEl.textContent = humanScore
        BotscoreEl.textContent = botScore
    }
}
function scissor(){
    if(getRandom() == "Scissor"){
        resultEl.textContent = "😏 You tied" 
        scoreEl.textContent = humanScore
        BotscoreEl.textContent = botScore
    }
    else if(getRandom() == "Rock"){
        resultEl.textContent = "😝 You Sucks"
        botScore += 1
        scoreEl.textContent = humanScore
        BotscoreEl.textContent = botScore
    }
    else{
        resultEl.textContent = "😉 You Win"
        humanScore += 1
        scoreEl.textContent = humanScore
        BotscoreEl.textContent = botScore
    }
}

function End(){
    if(humanScore > botScore){
        resultEl.innerHTML = "😉 You're a Winner" + ":" + "<br>"+"<br>"+ humanScore + "-" + botScore
    }
    else{
        resultEl.innerHTML = "😝 You're a joker" + ": " + "<br>" +"<br>"+humanScore + "- " + botScore
    }

    scoreEl.textContent = 0
    BotscoreEl.textContent = 0

    humanScore = 0
    botScore = 0

}


function getRandom(){
    let num = Math.floor(Math.random()*3);

    return cards[num]
}

