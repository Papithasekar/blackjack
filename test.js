const featuresToTest = require('../BJ/main');

const ACE_OF_CLUB = {symbol: "C", rank: "A"};
const JACK_OF_SPADE = {symbol: "S", rank: "J"};
const FOUR_OF_DIAMOND = {symbol: "D", rank: "4"};
const TEN_OF_HEART = {symbol: "H", rank: "10"};
const ACE_OF_HEART = {symbol: "H", rank: "A"};

// check the value of the card

test(' check the values of the card',() => {

    expect(featuresToTest.getCardValue(ACE_OF_CLUB)).toBe(11);
    expect(featuresToTest.getCardValue(JACK_OF_SPADE)).toBe(10);
    expect(featuresToTest.getCardValue(FOUR_OF_DIAMOND)).toBe(4);
    expect(featuresToTest.getCardValue(TEN_OF_HEART)).toBe(10);
});

//test2 to check values in hand
test(' check the values of a hand',() => {
    expect(featuresToTest.getHandValue([ACE_OF_CLUB, JACK_OF_SPADE])).toBe(21);
    expect(featuresToTest.getHandValue([ACE_OF_CLUB, JACK_OF_SPADE, ACE_OF_HEART])).toBe(32);



});

//test3  to check who is the winner in first deck

test(' check who is the winner in first deck',() => {

    let p1 = {
        name:  'sam',
        cards:  [ ACE_OF_CLUB,TEN_OF_HEART],
    };

    let p2 = {
        name: 'dealer',
        cards:  [ ACE_OF_HEART,JACK_OF_SPADE],
    };

    let winner = featuresToTest.winnerOfDeck1(p1,p2);
    expect(winner.name).toBe('sam');
});