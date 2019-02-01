const featuresToTest = require('../BJ/main');

const aceofclubs = {symbol: "C", rank: "A"};
const jackofspade = {symbol: "S", rank: "J"};
const fourofdiamond = {symbol: "D", rank: "4"};
const tenofheart = {symbol: "H", rank: "10"};
const ACE_OF_HEARTS = {symbol: "H", rank: "A"};

// check the value of the card

test(' check the values of the card',() => {

    expect(featuresToTest.getCardValue(aceofclubs)).toBe(11);
    expect(featuresToTest.getCardValue(jackofspade)).toBe(10);
    expect(featuresToTest.getCardValue(fourofdiamond)).toBe(4);
    expect(featuresToTest.getCardValue(tenofheart)).toBe(10);
});

test(' check the values of a hand',() => {
    expect(featuresToTest.getHandValue([aceofclubs, jackofspade])).toBe(21);
    expect(featuresToTest.getHandValue([aceofclubs, jackofspade, ACE_OF_HEARTS])).toBe(32);



});

//test2 to check who is the winner in first deck

test(' check who is the winner in first deck',() => {

    let p1 = {
        name:  'sam',
        cards:  [ aceofclubs,tenofheart],
    };

    let p2 = {
        name: 'dealer',
        cards:  [ ACE_OF_HEARTS,jackofspade],
    };

    let winner = featuresToTest.winnerOfDeck1(p1,p2);
    expect(winner.name).toBe('sam');
});