
const board = document.getElementById('board')


let card1 = ''
let card2 = ''
let clickCounter = 0
const tempList = ['a', 'b']

let dom1 = ''
let dom2 = ''

let card1Back = ''
let card2Back = ''

let rangeVar = [...Array(12).keys()]
let tempArray = []
let tempString = ''

let matchCounter = 0
let counter = 0

for (let i = 0; i < rangeVar.length; i++){
    if (matchCounter == 2){
        matchCounter = 0
        counter += 1
        // console.log('match made')
    }
    tempString = '<div class="cards" id="' + counter + '" onClick="showId()"></div>'
    tempArray.push(tempString)
    matchCounter += 1
    // board.innerHTML += '<div class="cards" id='+counter+'></div>'
}


let shuffledArray = tempArray.sort((a, b) => 0.5 - Math.random());
// console.log(shuffledArray)

for (let i = 0; i < rangeVar.length; i++){
    board.innerHTML += shuffledArray[i]
}

console.log(board)

// for (let i = 0; i <children.length; i++){
//     let child = children[i]
//     child.style.background = 'red'
//     if (child.id == 'card4'){
//         alert('check')
//     }
// }
// let x = '1'

// document.getElementById('card1').onclick = function() {
//     alert('cat');
//  };


cardImages = {
    1: 'red',
    2: 'blue',
    3: 'green',
    4: 'black',
    5: 'teal',
    0: 'orange'
}



function showId(){
    clickCounter += 1
    if (clickCounter == 1){
        card1 = window.event.target.id
 
        dom1 = window.event.target
        dom1.style.pointerEvents = 'none';

        dom1.style.backgroundColor = cardImages[card1]

        console.log('card1:',card1)
    }
    else if (clickCounter == 2){
        card2 = window.event.target.id
        dom2 = window.event.target
        dom2.style.backgroundColor = cardImages[card2]
        console.log('card2:', card2)
        matchTest()
        clickCounter = 0
        dom1.style.pointerEvents = 'auto';
    }

}

function matchTest() {
    console.log('card1:', card1, 'card2:', card2)
    if (card1 == card2){
        document.getElementById('board').style.pointerEvents = 'none'
        setTimeout(showMatch, 1000)
    }
    else{
        document.getElementById('board').style.pointerEvents = 'none'
        setTimeout(resetCard, 1000)
    }
}

function showMatch() {
    dom1.style.display = 'none'
    dom2.style.display = 'none'
    document.getElementById('board').style.pointerEvents = 'auto'
}

function resetCard() {
    dom1.style.backgroundColor = 'rebeccapurple'
    dom2.style.backgroundColor = 'rebeccapurple'
    document.getElementById('board').style.pointerEvents = 'auto'
}

