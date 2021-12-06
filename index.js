document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board')

    
    let card1
    let card2
    const tempList = ['a', 'b']
    
    let rangeVar = [...Array(4).keys()]
    let tempArray = []
    let tempString = ''

    let matchCounter = 0
    let counter = 0

    for (let i = 0; i < rangeVar.length; i++){
        if (matchCounter == 2){
            matchCounter == 0
            counter += 1
        }
        tempString = '<div class="cards" id="' + counter + '"></div>'
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

















})
