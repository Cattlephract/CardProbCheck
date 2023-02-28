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
    console.log(`the probability of getting a full house is ${countFullHouse()}%`)
    console.log(`the probability of getting a straight is ${countStraight()}%`)
    console.log(`the probability of getting a Flush is ${countFlush()}%`)
    console.log(`the probability of getting a StraightFlush is ${countStraightFlush()}%`)
}
