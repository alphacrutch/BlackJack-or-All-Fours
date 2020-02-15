//Global Variables
const suits = ['Hearts','Spades','Clubs','Diamonds'];
const values = [2,3,4,5,6,7,8,9,10,'Jack', 'Queen', 'King', 'Ace'];
const points = [
    {10:10},
    {"Jack":1},
    {"Queen":2},
    {"King":3},
    {"Ace":4}
];
let playerList =[];
let pot =[];

//Card class for creating card objects
class Card {
    constructor (suit,value,point) {
        this.suit = suit;
        this.value = value;
        this.point = point; //need to define points for cards
    }
}

//Dealer class for creating Deck objects
class Dealer {
    constructor () {
        this.deck = [];
    }

    createDeck(suits,values){
        for (let suit of suits){
            for ( let value of values) {                
                 this.deck.push(new Card(suit, value));               
            }
        }
          return this.deck; 
    }

    shuffleDeck() {
        let counter = this.deck.length, numHolder , i ;

        while (counter) {
            i = Math.floor(Math.random() * counter--);
            numHolder = this.deck[counter];
            this.deck[counter] = this.deck[i];
            this.deck[i] = numHolder;
        }
        return this.deck;
    }

    deal() {
        let hand =[];
         while (hand.length < 6) {
            hand.push(this.deck.pop());
        }
        return hand;
    }
    getCardsLeft(){
        return this.deck.length;
    }
} 
let deck = new Dealer; 
class Player {
    constructor (name) {
        this.name = name;
        this.hand = deck.deal();
    }

    displayHand(){    

        let crd1 = document.getElementById('card1');
        let crd2 = document.getElementById('card2');
        let crd3 = document.getElementById('card3');
        let crd4 = document.getElementById('card4');
        let crd5 = document.getElementById('card5');
        let crd6 = document.getElementById('card6');
        const handCards =[crd1,crd2,crd3,crd4,crd5,crd6]; 
        for(let c of handCards){
            for(let h of this.hand){
            c.innerHtml = h;

            }
        }       
        /*crd1.innerHtml = this.hand[0];
        crd2.innerHtml = this.hand[1];
        crd3.innerHtml = this.hand[2];
        crd4.innerHtml = this.hand[3];
        crd5.innerHtml = this.hand[4];
        crd6.innerHtml = this.hand[5];*/
        

    }

    playCard(){         
          pot.push(this.hand.pop());     
    }
    
}    
    function getName(){
        //DOM manipulation for Html
       /*
        let name = document.getElementById('name').value;
        let nameLabel = document.getElementById('nameLabel');
        //nameLabel.innerHtml = name;   
        /*if (playerList.length < 5) {
            playerList.push(name);
        }
        else {
            alert('Waiting for More Players');
        }
        */
       
        let name = 'Kevon';
        playerList.push(name); 
        
    }
    

    //ToDo:
    // Game class to hold function newGame to start the deal 
    /*
    class Game {
        constructor (deck, players){
            this.deck = new Dealer();
            this.players = new Player(player,deck.dela());
        }               
    }
    */
    
    //ToDo:
    //Application start need to place in function
       /*
       let deck = new Dealer();        
        getName()
        deck.createDeck(suits, values);
        deck.shuffleDeck();       
            for(let player of playerList){    
                    players = new Player(player, deck.deal());
                    console.log(players.name);
                    players.playCard();
                    pot_div.innerHTML=players.playCard();

                    console.log(pot);
                    console.log(points);
                        
                    console.log(deck.deal());
                    console.log(deck.getCardsLeft());
                    player.displayHand();        
                
            }
            */    
/* 
function createP(text){
    let p = document.createElement("p");
        let node = document.createTextNode(text);
        p.appendChild(node);
        p.style.position="absolute";
        p.style.color="blue"
        let parent =document.getElementsById('pot');
        parent.appendChild(p);
                 
             }
             */
function newGame(){
    let pile = document.getElementById("pot1");


    getName()
    deck.createDeck(suits, values);
    deck.shuffleDeck();       
        for(let player of playerList){    
                player = new Player(player, deck.deal());
                player.playCard();
                //let text = pot[0];
                pile.innerText = pot[0].suit + " " +pot[0].value;
               /*
               for ( let i=0; i <pot.length; i++){
                   if ( pot == null ){
                       alert('pot is empty');
                   } else {
                    pile.innerText = pot[i].suit + " " +pot[i].value;
                    //pile.innerHTML = card;
                   }
                
               }
               */
             
                //createP(text);
                console.log(pot);
               
            }
        } 
        
       const btn = document.getElementById("newgame-btn");
       btn.addEventListener('click', newGame);