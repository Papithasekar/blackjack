module.exports = {getCardValue,winnerOfDeck1,getHandValue};/*specify the function which you are creating*/

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

    for(var i=0;i<cards.length;i++) {
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

// function to pick random cards