'use strict';
module.exports = {getCardValue,winnerOfDeck1,getHandValue,distributeFirstDeckCards: toDistributeFirstDeckCards};/*specify the function which you are creating*/

const ACE_OF_CLUB = {symbol: "C", rank: "A"};
const JACK_OF_SPADE = {symbol: "S", rank: "J"};
const FOUR_OF_DIAMOND = {symbol: "D", rank: "4"};
const TEN_OF_HEART = {symbol: "H", rank: "10"};
const ACE_OF_HEART = {symbol: "H", rank: "A"};


function main(){

    let cards = [ACE_OF_CLUB,ACE_OF_HEART,TEN_OF_HEART,FOUR_OF_DIAMOND];

    let player = {
        name:  'Sam',
        cards:  [ ],
    };

    let dealer = {
        name: 'Dealer',
        cards:  [ ],
    };

    //distributeFirstDeckCards(cards,player,dealer);
    //winnerOfDeck1(player,dealer);
    console.log("Hello welcome to Black Jack world");

}

/*const SYMBOLS = {
    clubs: colorInBlack('C'),
    spades: colorInBlack('S'),
    hearts: colorInRed('H'),
    diamonds: colorInRed('D')
}
module.exports.SYMBOLS = SYMBOLS;*/

//function for setting card values
function getCardValue(card) {

    let symbol = card.symbol;
    let rank = card.rank;

    console.log("[DEBUG] card in hand is " + rank+ " of " + symbol);

    switch(rank)
    {
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

    for(let i=0;i<cards.length;i++) {
        let card = cards[i];
        value = value + getCardValue(card);
    }

    return value;
}

//function to check who is the winner in round1

function winnerOfDeck1(p1,p2){

    let valueOfHandP1 = getHandValue(p1.cards);
    let valueOfHandP2 = getHandValue(p2.cards);

    if((valueOfHandP1 == 21) && (valueOfHandP2 == 21) ){

        console.log("p1 wins");
        return p1;

    }
    else{
        console.log("p2 wins");
        return p2;
    }
}

// function to distrubute the cards in order
function toDistributeFirstDeckCards(cards, player, dealer){

    let nbOfCards = cards.length;

    for (let i=0; i < nbOfCards; i++) {
        console.log("1 --> i is: " + i);
        let index = i;
        let distributedCard = cards.splice(0, 1)[0];
        console.log("we took this card: "+ distributedCard.symbol+distributedCard.rank);

        if ((index % 2) != 1) {
            console.log("2 ---> i is: " + i);
            //even
            player.cards.push(distributedCard);
            console.log("pushed to player");
        } else {
            console.log("3 ---> i is: " + i);
            //odd
            dealer.cards.push(distributedCard);
            console.log("pushed to dealer");
        }
        console.log("cards.length: " + cards.length);
        console.log(" 4 ---> i is: " + i);
    }
}
// function to pick random cards

/*
  Main method
 */

{
    // This is where the program starts.
    main();
}