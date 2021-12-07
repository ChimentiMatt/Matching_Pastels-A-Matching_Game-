
const board = document.getElementById('board')
cardImages = {
    0: '#85e3ff',
    1: '#ffb5e8',
    2: '#f67280',
    3: '#f4fffa',
    4: '#6b7b8e',
    5: '#836953',
    6: '#ffc37f',
    7: '#4D4DFF',
    8: '#E0E722',
    9: '#FFAD00',
    10: '#DB3EB1',
    11: '#44D62C',
    12: '#cccccc',
    13: '#C34A36',
    14: '#845EC2',
    15: 'gold',
    16: 'black',
    17: 'indigo',
    18: 'seagreen',
    19: 'pink',
    20: 'tomato',
    21: 'violet',
    22: 'darkblue',
    23: 'darkred',
    24: 'sandybrown',
    25: 'wheat',
    26: 'peru',
    27: 'hotpink',
    28: 'burlywood',
    29: 'springgreen',
    30: 'chocolate'



}

let attempts = 5
let score = 0
let matcherPerRound = 0

let card1 = ''
let card2 = ''
let clickCounter = 0

const tempList = ['a', 'b']

let dom1 = ''
let dom2 = ''

let card1Back = ''
let card2Back = ''


let tempArray = []
let tempString = ''

let matchCounter = 0
let counter = 0

let cardCount = 4
let seconds = 1000

function generateGame() {

    for (let i = 0; i < [...Array(cardCount).keys()].length; i++){
        if (matchCounter == 2){
            matchCounter = 0
            counter += 1
        }
        tempString = '<div class="cards" id="' + counter + '" onClick="showId()"></div>'
        tempArray.push(tempString)
        matchCounter += 1
        // board.innerHTML += '<div class="cards" id='+counter+'></div>'
    }

    let shuffledArray = tempArray.sort((a, b) => 0.5 - Math.random());
    // console.log(shuffledArray)

    for (let i = 0; i < [...Array(cardCount).keys()].length; i++){
        board.innerHTML += shuffledArray[i]
    }
    console.log(board)
}

//turns all visibility hidden dives to also display none. This way it isnt confusing in game was cards stay in place, but after there isnt weird gaps
function clearnUpHiddenDivs() {
    let cardsArray = document.querySelectorAll('.cards')

    cardsArray.forEach(item => {
        if (item.style.visibility == 'hidden'){
            item.style.display = 'none'
            }   
        })
    
}

function newItems() {
    // alert(1)
    counter += 1
    tempString = '<div class="cards" id="'+counter+'" onClick="showId()"></div>'
    tempArray.push(tempString)
    tempString = '<div class="cards" id="'+counter+'" onClick="showId()"></div>'
    tempArray.push(tempString)
}

async function addMoreItems() {

    await newItems()
    
    attempts += 2
    document.getElementById('attempts').innerHTML = attempts

    score += 10
    document.getElementById('score').innerHTML = score

    clearnUpHiddenDivs()

    if (cardCount > 30){
        document.getElementById('app').style.paddingTop = '2.5rem'
    }

    shuffledArray = tempArray.sort((a, b) => 0.5 - Math.random());
    for (let i = 0; i < [...Array(cardCount).keys()].length; i++){
        board.innerHTML += shuffledArray[i]
    }
    showColors()
    
}

function newItems() {
    // alert(1)
    counter += 1
    tempString = '<div class="cards" id="'+counter+'" onClick="showId()"></div>'
    tempArray.push(tempString)
    tempString = '<div class="cards" id="'+counter+'" onClick="showId()"></div>'
    tempArray.push(tempString)
}


function showId(){
    clickCounter += 1
    
    if (clickCounter == 1){
        card1 = window.event.target.id
        
        dom1 = window.event.target
        dom1.style.pointerEvents = 'none';
        
        dom1.style.backgroundColor = cardImages[card1]
        
        // console.log('card1:',card1)
    }
    else if (clickCounter == 2){
        card2 = window.event.target.id
        dom2 = window.event.target
        dom2.style.backgroundColor = cardImages[card2]
        // console.log('card2:', card2)
        
        matchTest()
        document.getElementById('pausedScreen').style.display = 'block'
        dom2.style.pointerEvents = 'none';
        dom1.style.pointerEvents = 'none';
        clickCounter = 0
    }
}

function matchTest() {
    
    matchCounter = 0
    // console.log('card1:', card1, 'card2:', card2)
    if (card1 == card2){
        score += 5
        document.getElementById('score').innerHTML = score
        document.getElementById('board').style.pointerEvents = 'none'
        setTimeout(showMatch, 1000)
        matcherPerRound +=2
        // console.log(matcherPerRound , 'a')
        // console.log([...Array(x).keys()].length, 'b')
        if (matcherPerRound == [...Array(cardCount).keys()].length ){
            dom1.style.display = 'none'
            dom2.style.display = 'none'
       
            cardCount += 2
            
            matcherPerRound = 0
    
            dom1.style.backgroundColor = 'palegoldenrod'
            dom2.style.backgroundColor = 'palegoldenrod'
            dom1.style.pointerEvents = 'auto';
            dom2.style.pointerEvents = 'auto';
            
            document.getElementById('attempts').innerHTML = attempts
            addMoreItems()
        }
    }
    else{
        document.getElementById('board').style.pointerEvents = 'none'
        setTimeout(notAMatch, 1000)
    }
}
function showMatch() {
    dom1.style.visibility  = 'hidden'
    dom2.style.visibility  = 'hidden'
    
    document.getElementById('board').style.pointerEvents = 'auto'
    document.getElementById('pausedScreen').style.display = 'none'
    
}

function notAMatch() {
    dom1.style.backgroundColor = 'palegoldenrod'
    dom2.style.backgroundColor = 'palegoldenrod'
    document.getElementById('board').style.pointerEvents = 'auto'
    dom1.style.pointerEvents = 'auto';
    dom2.style.pointerEvents = 'auto';
    document.getElementById('pausedScreen').style.display = 'none'
    
    attempts -= 1
    document.getElementById('attempts').innerHTML = attempts

    if (attempts == 0){
        let endingArray = document.querySelectorAll('.cards')

        endingArray.forEach(item => {
            item.style.pointerEvents = 'none'
            item.style.backgroundColor = cardImages[item.id]
        })
        setTimeout(gameOver, seconds)
    }
}


function showColors() {
    let currentArray = document.querySelectorAll('.cards')
    currentArray.forEach(item => {
        item.style.pointerEvents = 'none'
        item.style.backgroundColor = cardImages[item.id]
    })
    setTimeout(hideColors, seconds)
    seconds += 500
}

function hideColors() {
    let currentArray = document.querySelectorAll('.cards')
    currentArray.forEach(item => {
        item.style.pointerEvents = 'auto'
        item.style.backgroundColor = 'palegoldenrod'
    })

}

function gameOver () {
    document.getElementById('playAgainScreen').style.display = 'flex'
}

document.getElementById('attempts').innerHTML = attempts

document.getElementById('startBtn').addEventListener('click', () => {
    generateGame()
    document.getElementById('startBtn').style.display = 'none'
    showColors()
})

document.getElementById('playAgain').addEventListener('click', () => {
    location.reload();
    return false;
})