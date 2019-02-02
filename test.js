const featuresToTest = require('../BJ/main');

const ACE_OF_CLUB = {symbol: "C", rank: "A"};
const JACK_OF_SPADE = {symbol: "S", rank: "J"};
const FOUR_OF_CLUB = {symbol: "D", rank: "4"};
const TEN_OF_HEART = {symbol: "H", rank: "10"};
const ACE_OF_HEART = {symbol: "H", rank: "A"};
const TWO_OF_HEART = {symbol: "H", rank: "2"};
const THREE_OF_DIAMOND = {symbol: "H", rank: "3"};
// check the value of the card

test(' check the values of the card',() => {

    expect(featuresToTest.getCardValue(ACE_OF_CLUB)).toBe(11);
    expect(featuresToTest.getCardValue(JACK_OF_SPADE)).toBe(10);
    expect(featuresToTest.getCardValue(FOUR_OF_CLUB)).toBe(4);
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

// to distribute card
test(' to distribute the card in order',() => {

    let cards = [ACE_OF_CLUB,ACE_OF_HEART,TEN_OF_HEART,FOUR_OF_CLUB];
    let player = {
        name:  'Sam',
        cards:  [ ],
    };

    let dealer = {
        name: 'Dealer',
        cards:  [ ],
    };

    featuresToTest.distributeFirstDeckCards(cards,player,dealer);

    expect(cards.length).toBe(0);
    expect(player.cards[1]).toBe(TEN_OF_HEART);
});


// to continue game
test('continueGame test1',() => {

    let cards = [JACK_OF_SPADE];
    let player = {
        name:  'Sam',
        cards:  [ACE_OF_CLUB, TEN_OF_HEART],
    };

    let dealer = {
        name: 'Dealer',
        cards:  [ACE_OF_HEART, FOUR_OF_CLUB],
    };

    let winner = featuresToTest.continueGame(cards,player,dealer);

    expect(winner.name).toBe('NOBODY');
});

// test to draw card from deck
test('test to draw card from deck',() => {

    let deck = [THREE_OF_DIAMOND, FOUR_OF_CLUB,TEN_OF_HEART, JACK_OF_SPADE];
    let player = {
        name:  'Sam',
        cards:  [ACE_OF_CLUB, TWO_OF_HEART],
    };

    let dealer = {
        name: 'Dealer',
        cards:  [ACE_OF_HEART, FOUR_OF_CLUB],
    };

    let winner = featuresToTest.draw(deck,player,dealer);

    expect(winner.name).toBe('Sam');
});
