'use strict';



module.exports = {
    getCardValue,
    winnerOfDeck1,
    getHandValue,
    distributeFirstDeckCards,
    drawCardsUntilWeHaveAWinner,
    convertToCards
};

const TEST_1 = {
    deck1: ["CA", "HA", "H10", "D4"],
    rest: ["SJ"]
};

// Dealer wins at deck1
const TEST_2 = {
    deck1: ["CA", "HA", "DA", "SA"],
    rest: ["SJ"]
};

// Dealer wins
const TEST_3 = {
    deck1: ["CA", "DA", "HA", "S7"],
    rest: ["C7"]
};

// Dealer wins
const finnTest = {
    deck1: ["CA", "D5", "H9", "HQ"],
    rest: ["S8"]
};

function main(){

    let cards = module.exports.convertToCards(finnTest.deck1);
    let restOfCards = module.exports.convertToCards(finnTest.rest);

    let player = {
        name:  'Sam',
        cards:  [ ],
    };

    let dealer = {
        name: 'Dealer',
        cards:  [ ],
    };

    console.log("Hello welcome to BlackJack world");
    module.exports.distributeFirstDeckCards(cards,player,dealer);
    let winnerOfDeck1  = module.exports.winnerOfDeck1(player,dealer);
    if(winnerOfDeck1.name !== "NOBODY") {
        console.log(winnerOfDeck1.name);
    } else {
        let winnerOfGame = module.exports.drawCardsUntilWeHaveAWinner(restOfCards, player, dealer);
        console.log(winnerOfGame.name);
    }
    console.log("------");
    console.log(player.name +":" + showHand(player.cards)
        + " --> " +  module.exports.getHandValue(player.cards) );
    console.log(dealer.name +":" + showHand(dealer.cards)
        + " --> " +  module.exports.getHandValue(dealer.cards));
}

//function to check who is the winner in round1
function winnerOfDeck1(player,dealer){

    let valueOfHandPlayer = module.exports.getHandValue(player.cards);
    let valueOfHandDealer = module.exports.getHandValue(dealer.cards);

    if( (valueOfHandPlayer === 21) && (valueOfHandDealer === 21) ) {
        return player;
    }

    if((valueOfHandPlayer === 22) && (valueOfHandDealer === 22)){
        return dealer;
    }

    return {name : "NOBODY", cards: [] };
}

// function to drawCardsUntilWeHaveAWinner cards from deck
function drawCardsUntilWeHaveAWinner(deck, player, dealer) {

    while( module.exports.getHandValue(player.cards) < 17 ){
        player.cards.push(deck.shift());
    }

    let playerHandValue = module.exports.getHandValue(player.cards);

    if( playerHandValue > 21) {
         return dealer;
    }

    while( (module.exports.getHandValue(dealer.cards)
        <= module.exports.getHandValue(player.cards)) ) {
        dealer.cards.push(deck.shift());
    }

    if (module.exports.getHandValue(player.cards) > 21) {
        return player;
    }

    return getWinner(player,dealer);
}

//function to check who has highest score
function getWinner(player,dealer){

    if( Math.max(getHandValue(player.cards), getHandValue(dealer.cards))){
        return player;
    }

    return dealer;
}

// function to distribute the cards in order
function distributeFirstDeckCards(cards, player, dealer){

    let nbOfCards = cards.length;

    for (let i=0; i < nbOfCards; i++) {

        let index = i;
        let distributedCard = cards.splice(0, 1)[0];

        if ((index % 2) !== 1) {
            //even
            player.cards.push(distributedCard);
        } else {
            //odd
            dealer.cards.push(distributedCard);
        }
    }
}

function showHand(cards) {
    let hand="";
    for(let i=0 ; i < cards.length; i++) {
        let card = cards[i];
        hand = hand + " " + card.symbol + card.rank;
    }
    return hand;
}

//function for assigning card values
function getCardValue(card) {

    let rank = card.rank;

    switch(rank) {
        case 'A':
            return 11;

        case '2':
            return 2;

        case '3':
            return 3;

        case '4':
            return 4;

        case '5':
            return 5;

        case '6':
            return 6;

        case '7':
            return 7;

        case '8':
            return 8;

        case '9':
            return 9;

        case '10':
            return 10;

        case 'J':
            return 10;

        case 'Q':
            return 10;

        case 'K':
            return 10;
    }

    return rank;
}

//function to check the values in hand
function getHandValue(cards){
    let value = 0;

    for(let i = 0; i < cards.length; i++) {
        let card = cards[i];
        value = value + getCardValue(card);
    }
    return value;
}

//to convert card
function convertToCards(listOfCards) {

    let cards = [];

    for (let i=0; i < listOfCards.length ; i++) {
        let card = listOfCards[i];
        let symbol = card.slice(0, 1);
        let rank = card.slice(1, card.length);

        let cardObject = {
            symbol: symbol,
            rank: rank
        };

        cards.push(cardObject);
    }
    return cards;
}

/*
  Main method
 */
{
    // This is where the program starts.
    main();
}
