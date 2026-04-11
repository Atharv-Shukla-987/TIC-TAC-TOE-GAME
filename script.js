console.log("Welcome to TIC TAC TOE GAME");
let music = new Audio("music.mp3");
let audioturn = new Audio("ting.mp3");
let gameover = new Audio("tunak-tunak-tun.mp3");
let gom = document.getElementById('gom')
let bgs = document.getElementById('bgs')
let turn = "X";
let isgameover = false;

if(!isgameover){
    bgs.play()
}
// chnaging the turn 
changeTurn = () => {
    return turn === "X" ? "0" : "X";
}
//checking for a winner 
const checkWin = () => {
let boxtexts = document.getElementsByClassName("boxtext ")
let wins=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]
wins.forEach(e =>{
    if(boxtexts[e[0]].innerText === boxtexts[e[1]].innerText && boxtexts[e[2]].innerText === boxtexts[e[1]].innerText && boxtexts[e[0]].innerText !== ''){
        document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " WON";
        isgameover=true;
         document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
    if(isgameover){
        bgs.pause()
        gom.play()
    }
         }
})
}

// logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    bgs.play()
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', (e) => {
        bgs.play()
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
             turn=changeTurn();
             audioturn.play();
             checkWin();
             if (!isgameover) {
            document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
        }} 
    }) 
    

}); 

//adding on click listener to reset buttun
reset.addEventListener('click',()=>{
    bgs.play()
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText = "";
    }); 
     turn = "X";
     document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
}) 


