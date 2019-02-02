'use strict';
module.exports = {continueGame, getCardValue,winnerOfDeck1,getHandValue,distributeFirstDeckCards: toDistributeFirstDeckCards,
                   draw};/*specify the function which you are creating*/

const ACE_OF_CLUB = {symbol: "C", rank: "A"};
const JACK_OF_SPADE = {symbol: "S", rank: "J"};
const FOUR_OF_DIAMOND = {symbol: "D", rank: "4"};
const TEN_OF_HEART = {symbol: "H", rank: "10"};
const ACE_OF_HEART = {symbol: "H", rank: "A"};


function main(){

    let cards = [ACE_OF_CLUB,ACE_OF_HEART,TEN_OF_HEART,FOUR_OF_DIAMOND];
    let restOfCards = [JACK_OF_SPADE];

    let player = {
        name:  'Sam',
        cards:  [ ],
    };

    let dealer = {
        name: 'Dealer',
        cards:  [ ],
    };

    console.log("Hello welcome to Black Jack world");
    module.exports.distributeFirstDeckCards(cards,player,dealer);
    let winnerOfDeck1  = module.exports.winnerOfDeck1(player,dealer);

    if(winnerOfDeck1.name !== "nobody") {
        console.log(winnerOfDeck1.name);
    } else {
        console.log("[DEBUG] Work in progress ...");
        let winnerOfGame = module.exports.continueGame(restOfCards, player, dealer);
        console.log(winnerOfGame.name);
    }

    console.log("------");
    console.log(player.name +":" + showHand(player.cards));
    console.log(dealer.name +":" + showHand(dealer.cards));
}

function continueGame(cards, player, dealer) {
    let foundAWinner = false;
    console.log("-----> cards.length= " + cards.length);
    let winner = {name : "NOBODY", cards: [] };

    while ((foundAWinner === false) && (cards.length !== 0)) {
        console.log("Entering the while condition");

        let distributedCard = cards.splice(0, 1)[0];
        console.log("took the card: " + distributedCard.symbol + distributedCard.rank);

        // draw card from 'cards'
        // determine WHO (player or dealer) will get the card
        // add this card to player or dealer
        // check if there is a winner, and if found a winner:
        // winner = ....
        // foundAWinner = true;

    }

    return winner;
}

function showHand(cards) {
    let hand="";
    for(let i=0 ; i < cards.length; i++) {
        let card = cards[i];
        hand = hand + " " + card.symbol + card.rank;
    }
    //console.log(player.name + "cards : " + hand);
    //console.log(dealer.name + "cards : " + hand);
    return hand;
}

//function for setting card values

function getCardValue(card) {

    //let symbol = card.symbol;
    let rank = card.rank;

    //console.log("[DEBUG] card in hand is " + rank+ " of " + symbol);

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

    for(let i = 0; i < cards.length; i++) {
        let card = cards[i];
        value = value + getCardValue(card);
    }
    return value;
}

//function to check who is the winner in round1

function winnerOfDeck1(player,dealer){

    let valueOfHandPlayer = getHandValue(player.cards);
    let valueOfHandDealer = getHandValue(dealer.cards);

    if((valueOfHandPlayer === 21) && (valueOfHandDealer === 21)){

        //console.log("p1 wins");
        return player;

    }

    if((valueOfHandPlayer === 22) && (valueOfHandDealer === 22)){
        //console.log("p2 wins");
        return dealer;
    }


   // return player.name = 'Nobody';
    //call draw function

}


// function to draw cards from deck

function draw(deck,player,dealer){


    while( (player.name === 'Nobody') && (getHandValue(player.cards) < 17) ){

        player.cards.push(deck.shift());

    }
    while(getHandValue(dealer.cards) <= getHandValue(player.cards) ){

        dealer.cards.push(deck.shift());
    }
    /*console.log("Checking draw");
    console.log(deck);
    console.log(player);
    console.log(dealer);*/
    return getWinner(player,dealer);

}

//function to check who has highest score

function getWinner(player,dealer){

    if( Math.max(getHandValue(player.cards), getHandValue(dealer.cards))){

        return player;
    }
    else
    {
        return dealer;
    }

}
// function to distribute the cards in order

function toDistributeFirstDeckCards(cards, player, dealer){

    let nbOfCards = cards.length;

    for (let i=0; i < nbOfCards; i++) {

        let index = i;
        let distributedCard = cards.splice(0, 1)[0];
       // console.log("we took this card: "+ distributedCard.symbol+distributedCard.rank);

        if ((index % 2) !== 1) {
            //even
            player.cards.push(distributedCard);

        } else {
                  //odd
                 dealer.cards.push(distributedCard);
               }
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