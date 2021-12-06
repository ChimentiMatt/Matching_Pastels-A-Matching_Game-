
const board = document.getElementById('board')
cardImages = {
    0: '#6b7b8e',
    1: '#85e3ff',
    2: '#aff8d8',
    3: '#ffb5e8',
    4: '#836953',
    5: '#f67280',
    6: '##ffc37f',
}

let card1 = ''
let card2 = ''
let clickCounter = 0

const tempList = ['a', 'b']

let dom1 = ''
let dom2 = ''

let card1Back = ''
let card2Back = ''

let rangeVar = [...Array(10).keys()]
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

cardImages = {
    1: '#85e3ff',
    2: '#aff8d8',
    3: '#ffb5e8',
    4: '#ffabab',
    5: '#f67280',
    0: '#6b7b8e'
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
            document.getElementById('pausedScreen').style.display = 'block'
            dom2.style.pointerEvents = 'none';
            dom1.style.pointerEvents = 'none';
            clickCounter = 0

        
    }
}

function matchTest() {
    console.log('card1:', card1, 'card2:', card2)
    if (card1 == card2){
        document.getElementById('board').style.pointerEvents = 'none'
        setTimeout(showMatch, 2000)
   
    }
    else{
        document.getElementById('board').style.pointerEvents = 'none'
        setTimeout(resetCard, 2000)
    
    }


}
function showMatch() {
    dom1.style.display = 'none'
    dom2.style.display = 'none'
    document.getElementById('board').style.pointerEvents = 'auto'
    document.getElementById('pausedScreen').style.display = 'none'

}

function resetCard() {
    dom1.style.backgroundColor = 'palegoldenrod'
    dom2.style.backgroundColor = 'palegoldenrod'
    document.getElementById('board').style.pointerEvents = 'auto'
    dom1.style.pointerEvents = 'auto';
    dom2.style.pointerEvents = 'auto';
    document.getElementById('pausedScreen').style.display = 'none'
}

