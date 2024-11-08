let boxe = document.querySelectorAll(".box")
let windiv = document.querySelector(".dispwinner")
let winmsg = document.getElementById("#msg-div")
let newgame = document.querySelector(".newgame")
let restgame = document.querySelector(".restgame")
//store win patters
const winpattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [6, 4, 2],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
]
//check turn
let turn1 = true

//can't apply event listner directly becauese .boxe is an array 
boxe.forEach(element => {
    element.addEventListener("click", () => {
        if (turn1) {
            element.innerText = "o"
            turn1 = false
        } else {
            element.innerText = "x"
            turn1 = true
        }
        //don't allow to change the value
        element.disabled = true

        //checking winner
        checkWinner()
    })

});
//restgame
const resetGame = () =>{
    turn1 = true;
    enableboxes()
    windiv.classList.add("hide")
}
//enable buttons while reset
const enableboxes = () =>{
    for (const box of boxe) {
        box.disabled = false
        box.innerText = ""
    }
}
//don't allow after winner
const disableboxes = () =>{
    for (const box of boxe) {
        box.disabled = true
    }
}
//show hide msg div
const showwinner = (winner) => {
    winmsg = `Conguratulations player ${winner} won`
    windiv.classList.remove("hide")
    windiv.innerText = winmsg
    disableboxes()
    // windiv.style.display = 'block'
}
const showwiner = () => {
    winmsg = `Match Draw`
    windiv.classList.remove("hide")
    windiv.innerText = winmsg
    disableboxes()
    // windiv.style.display = 'block'
}
//check winner
const checkWinner = () => {
    for (const iterator of winpattern) {
        let position1 = boxe[iterator[0]].innerText;
        let position2 = boxe[iterator[1]].innerText;
        let position3 = boxe[iterator[2]].innerText;

        if (position1 != "" && position2 != "" && position3 != "") {
            if (position1 === position2 && position2 === position3) {
                showwinner(position1)
            } else if (position1 === position2 && position2 === position3){
                showwiner()
            }
        }
    }
};

newgame.addEventListener("click", resetGame)
restgame.addEventListener("click", resetGame)