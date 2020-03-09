deck = new Deck();
let pot = [];
let playerList = [];

let setPot = function () {
    let pile = document.querySelector(".pot");
}

//set card Images 
function getCardImage(){
    for ( let card of deck){
        
            console.log(card);
        }
    
}

function setPlayerList () {
    //playerList.push (name);
    return playerList;
    
}


/*function dealPlayerCards () {
    for (let i=0; i<playerList.length;i++){
        if (playerList[i].){

        }
    }
}*/

function newGame(){
    console.log(deck.createDeck(suits, values));
    deck.shuffleDeck();
    console.log(setPlayerList());             
        for(let player of playerList){    
                player = new Player(player, deck.deal());
                console.log(player);
              player.playCard();
              console.log(pot);
                //let text = pot[0];
                //pile.innerText = pot[0].suit + " " +pot[0].value;
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
              
               
            }
        }
        
  