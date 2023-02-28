const NUM_TRIALS = 1000000; // main NUM_TRIALS variable for deciding the number of trials

let twoHits = 0;        //Used to count two-of-a-kind hands for testing
let threeHits = 0;      //Used to count three-of-a-kind hands
let fourHits = 0;       //Used to count four-of-a-kind hands
let flushHits = 0;      //Used to count flush hands
let straightHits = 0;   //Used to count straight hands

function drawOneCard() {        //Basic function for drawing one card
    const suits = "SHDC";       //Card suits: S = spades, H = hearts, D = diamonds, C = clubs
    const cardValues = "23456789TJQKA";        //Card values: T = ten, J = jack, Q = Queen, k = King, A = ace
  
    let suit = suits[Math.floor(Math.random() * suits.length)];         //draws random suit
    let value = cardValues[Math.floor(Math.random() * cardValues.length)];      //draws random card value
    return suit + value;        //puts the suits and values together
  }

//*******************************************************************************************************************************/

function drawHand() {   //function that draws a hand of cards
  let hand = [];    //declares empty variable
  for (let i = 0; i < 5; i++) { //loop 5 times
    let card = drawOneCard();   //calls the draw one card function to draw one card
    while (hand.includes(card)) {   //check if hand includes card already
      card = drawOneCard(); //if the card is a duplicate, it's discarded and drawn again
    }
    hand.push(card); //then push card
  }
  return hand.sort();   //sorts and returns the hand
}

function drawSuitHand() {   //function that draws a hand of cards and then gets rid of the values, so suits only. Identical to drawHand() except where noted
  let hand = [];        
  for (let i = 0; i < 5; i++) {
    let card = drawOneCard();
    while (hand.includes(card)) {
      card = drawOneCard();
    }
    suitCard = card.substring(0, 1);    //includes only the first letter of the card
    hand.push(suitCard);
  }
  return hand.sort();
}

function drawValueHand() {
  let hand = [];
  for (let i = 0; i < 5; i++) {
    let card = drawOneCard();
    while (hand.includes(card)) {
      card = drawOnecard();
    }
    valueCard = card.substring(1, 2).toString().replace(/T/,"10").replace(/J/,"11").replace(/Q/,"12").replace(/K/,"13").replace(/A/,"14");
    hand.push(valueCard); // ^^^includes only the second letter of the card, and replaces the alphabetic values with numeric ones^^^
  }
  return hand.sort();
}

//****************************************************************************************************************************/

function drawFlush() {
    let catches = 0;
    for (let a = 1; a <= NUM_TRIALS; a++) { //loop NUM_TRIALS times
        let hand = drawSuitHand()
        let isFlush = true;
        for (let x = 0; x < 5; x ++ ) {
            if (hand[x] !== hand[0]) {
                isFlush = false;
                break;
            }
        }
        if (isFlush) {
            catches ++;
        }
    }
    flushHits = catches
    console.log (flushHits)
}

//3 of a kind ( same number different suit)
//4 of a kind (same number different suit )
//full house (same 3 numbers and 2 same numbers)
//straigh (5 cards in numerical order)
// flush (5 cards same suit)
// straight flush (5 cards numerical order with same suit)

// problems
// Ace, jack, queen and king have no numerical value in the code


// if hand = string of cards
// add to some kind of tally


//draw certain number of cards and count to NUM_TRIALS
    //Only count successful draws towards NUM_TRIALS
//check if hit
    // complicated part
//log number of hits
    // add to variables or something
// Get percentage from number of hits and number of draws?
    // log to console

function countThreeOfAKind () {
    threeProp = ((threeHits / NUM_TRIALS) * 100)
    return threeProp
}

function countFourOfAKind () {
    fourProp = ((fourHits / NUM_TRIALS) * 100)
    return fourProp
}

function countFullHouse () {
    fullProp = ((fullHits / NUM_TRIALS) * 100)
    return fullProp
}

function countStraight () {
    straightProp = ((straightHits / NUM_TRIALS) * 100)
    return straightProp
}

function countFlush () {
    flushProp = ((flushHits / NUM_TRIALS) * 100)
    return flushProp
}

function countStraightFlush () {
    straightFlushProp = ((straightFlushHits / NUM_TRIALS) * 100)
    return straightFlushProp
}

function runSimulation () {
    console.log(`the results of our simulation are as follows:`)
    console.log(`the probability of getting three of a kind is ${countThreeOfAKind()}%`)
    console.log(`the probability of getting four of a kind is ${countFourOfAKind()}%`)
//    console.log(`the probability of getting a full house is ${countFullHouse()}%`)
    console.log(`the probability of getting a straight is ${countStraight()}%`)
    console.log(`the probability of getting a Flush is ${countFlush()}%`)
//    console.log(`the probability of getting a StraightFlush is ${countStraightFlush()}%`)
}

//testpush
drawFlush()
runSimulation()

