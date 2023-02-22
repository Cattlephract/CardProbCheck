// function drawFiveCards() {
// let suits = ["H", "S", "D", "C"]
// let values = ["A","K", "Q","J", "10", "9", "8", "7", "6", "5", "4", "3", "2"]
// let deck = []
// let hand = []

// for (let i=0; i<suits.length; i++){
//     for (let j=0; j<values.length;j++) {
//         deck.push(values[j] + suits[i])
//     }
// }

// for(let i=0; i<5; i++){
//     let index = Math.floor(Math.random() * deck.length)
//     let card = deck[index]
//     hand.push(card)
//     deck.splice(index, 1)
// }
//     return hand
// }

// const hand = drawFiveCards()
// console.log(hand.join(' '));

//Make deck
//draw hand
function drawFiveCards(){
    let hand= [];
    for (let i = 0; i < 5; i++){ //loop 5 times
        let card = drawOneCard();
        while (hand.includes(card)){ //check if hand includes card if is does
            card = drawOneCard();
        }
        hand.push(card); //then push card
    }
    return hand;
}

function drawOneCard(){
    const suits = "SHDC";
    const numbers ="23456789TJQKA"; 

    let suit= suits[Math.floor(Math.random() *suits.length)]; //random suit
    let number= numbers[Math.floor(Math.random() *numbers.length)]; //random number
    return suit + number; //puts the suits and numbers together
}



//console.log(drawOneCard());

const hand = drawFiveCards()
console.log(hand.join(' '));

//3 of a kind ( same number different suit)
//4 of a kind (same number different suit )
//full house (same 3 numbers and 2 same numbers with different suits)
//straigh (5 cards in numerical order)
// flush (5 cards same suit)
// straight flush (5 cards numerical order with same suit)

// problems
// Ace, jack, queen and king have no numerical value in the code


// Free zoom meeting ended...


// if hand = string of cards
// add to some kind of tally