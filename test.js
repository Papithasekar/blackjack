const featuresToTest = require('../papitha/BJ/main.js');


//test1 to check the value of the card

test(' check the values of the card',() => {

    let card = {symbol: "C", rank: "A"};
    let value = featuresToTest.getCardValue(card);
    expect(value).toBe(10);
});

//test2 to check who is the winner in first deck

test(' check who is the winner in first deck',() => {

    let firstdeck = {
        name: 'dealer',
        Cards:  ["CA","D10"],
    };
    let winner = featuresToTest.winnerOfDeck1(p1,p2);
    expect(winner).toBe('sam');
});