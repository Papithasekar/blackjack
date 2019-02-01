module.exports = {getCardValue,suit};/*specify the function which you are creating*/

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

    console.log("card in hand is " + card.rank + "of" + card.symbol);

   switch(rank)
   {
       case 'A':

           return 11;

       case '1':

           return 1;
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

    return name;
   console.log(name);
}

function suit(){

    let suitname ='';

    switch(suit) {

        case clubs :

            return C;

        case spades:

            return S;

        case hearts:

            return H;

        case diamonds:

            return D;

    }

}

// function to pick random cards

