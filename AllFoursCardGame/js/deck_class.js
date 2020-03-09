let deck;
const suits = ['Hearts','Spades','Clubs','Diamonds'];
const values = [2,3,4,5,6,7,8,9,10,'Jack', 'Queen', 'King', 'Ace'];
//card class
function Card (suits, values) {
    this.suits =suits;
    this.values = values;
}
//deck class
function Deck () {
    this.deck = [];
    this.createDeck = function(suits,values){
        for (let suit of suits){
            for ( let value of values) {                
                 this.deck.push(new Card(suit, value));               
            }
        }
          return this.deck; 
    }

    this.shuffleDeck = function() {
        let counter = this.deck.length, numHolder , i ;
        while (counter) {
            i = Math.floor(Math.random() * counter--);
            numHolder = this.deck[counter];
            this.deck[counter] = this.deck[i];
            this.deck[i] = numHolder;
        }
        return this.deck;
    }
    this.deal = function() {
        let hand =[];
         while (hand.length < 6) {
            hand.push(this.deck.pop());
        }
        return hand;
    }
    this.getCardsLeft = function() {
        return this.deck.length;
    }
    

}




