'use strict';

const features = require('../blackjack/features');

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

   let cards = features.convertToCards(finnTest.deck1);
   let restOfCards = features.convertToCards(finnTest.rest);

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

function showHand(cards) {
    let hand="";
    for(let i=0 ; i < cards.length; i++) {
        let card = cards[i];
        hand = hand + " " + card.symbol + card.rank;
    }
    return hand;
}

/*
  Main method
 */
{
    // This is where the program starts.
    main();
}
