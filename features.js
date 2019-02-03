'use strict';

let features = require('../blackjack/main');

module.exports = {

    winnerOfDeck1

};


function winnerOfDeck1(player,dealer){

    let valueOfHandPlayer = features.getHandValue(player.cards);
    let valueOfHandDealer = features.getHandValue(dealer.cards);

    if( (valueOfHandPlayer === 21) && (valueOfHandDealer === 21) ) {
        return player;
    }

    if((valueOfHandPlayer === 22) && (valueOfHandDealer === 22)){
        return dealer;
    }

    return {name : "NOBODY", cards: [] };
}



