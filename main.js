'use strict';

const features = require('../blackjack/features');

// Dealer wins at deck1
const TEST_Case1 = {
    deck1: ["CA", "HA", "DA", "SA"],
    rest: ["SJ"]
};

// sam wins in first deck
const TEST_Case2 = {
    deck1: ["CA", "HA", "HJ", "DJ"],
    rest: ["SJ"]
};

// sam wins
const TEST_Case3 = {
    deck1: ["CA", "HA", "H10", "D4"],
    rest: ["SJ"]
};

// Dealer wins
const TEST_4 = {
    deck1: ["CA", "DA", "HA", "S7"],
    rest: ["C7"]
};

// Dealer wins
const finn_TestCase = {
    deck1: ["CA", "D5", "H9", "HQ"],
    rest: ["S8"]
};

function main(){

   let cards = features.convertToCards(finn_TestCase.deck1);
   let restOfCards = features.convertToCards(finn_TestCase.rest);

    let player = {
        name:  'Sam',
        cards:  [ ],
    };

    let dealer = {
        name: 'Dealer',
        cards:  [ ],
    };

    console.log("Hello welcome to BlackJack world");
    features.distributeFirstDeckCards(cards,player,dealer);
    let winnerOfDeck1  = features.winnerOfDeck1(player,dealer);
    if(winnerOfDeck1.name !== "NOBODY") {
        console.log();
        console.log(winnerOfDeck1.name);
    } else {
        let winnerOfGame = features.drawCardsUntilWeHaveAWinner(restOfCards, player, dealer);
        console.log();
        console.log(winnerOfGame.name);
    }
    console.log("------");
    console.log(player.name +":" + showHand(player.cards)
        + " --> " +  features.getHandValue(player.cards) );
    console.log(dealer.name +":" + showHand(dealer.cards)
        + " --> " +  features.getHandValue(dealer.cards));
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
