let player;
//player class
function Player (name,hand) {
    this.name = name;
    this.hand = deck.deal();  
    this.cardPlayed =[];   
    this.plyId = name + Math.floor(Math.random()*Math.floor(6532));  
    this.playCard = function (){         
    cardPlayed.push( pot.push (this.hand.pop()) );     
                                            
                     }
    this.info = function (){
        let info = `<p class="firstP">Name: ${this.name}</p>
                </br><p>Player Id: ${this.plyId}</p></br></br>
                <p>Welcome ${ this.name}
                    click new game button to start a game!</p>`
        return info;
    }
    
}


