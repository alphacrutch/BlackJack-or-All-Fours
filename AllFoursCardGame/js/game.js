let teams = [];
let GameManager = {
    playerSetupSingle:function () {
        this.setPlayerSingle();
        this.setTeamsSingle();
        
    },
    playerSetupFour:function () {
        this.setPlayerFour();
        this.setTeamsFour();
        
    },
    /*
    Setting up Player object rules for single and four player all fours game.
    Created options for single player where if user selects either single player or teams button.
    */
    setPlayerSingle: function () {
        if(playerList.length <1){
            if (playerNameInput === "" || playerNameInput.length <= 4 ){
                let nameErr = "Name Must be at least 5 Letters!"            
                errBox.innerHTML = nameErr;
                 
            } else {
                player = new Player (playerNameInput);
                errBox.innerHTML = player.info();
                playerList.push(player); 
                           
                    }
        }

         
        },
        setPlayerFour: function () {
            if(playerList.length <=3){
                if (playerNameInput === "" || playerNameInput.length <= 4 ){
                    let nameErr = "Name Must be at least 5 Letters!"            
                    errBox.innerHTML = nameErr;
                     
                } else {
                    player = new Player (playerNameInput);
                    playerList.push(player); 
                    errBox.innerHTML = player.info();
                    }
                }
     },
/*
Sets the Teams for the game. If the player list only has 1 or 3 players then no team is created.
*/ 

    setTeamsSingle: function () {
        
            if ( playerList.length == 0 ){
                let team1 =[];
                let team2 = [];
                team1.push(playerList[1]);
                team2.push(playerList[0]);
                teams = [team1,team2];
                errBox.innerHTML = `<p class="firstP">Name: ${teams[0][0].name}</p>
                </br><p>Player Id: ${teams[0][0].plyId}</p></br></br><p> Team 1: ${teams[0][0].name}</p></br><p> 
                Team 2: ${teams[1][0].name}</p></br>
                <p>Welcome ${teams[0][0].name} click new game button to start a game!</p>`
                btn_newGame.style.visibility = "visible";
                 return teams;
        }else {
            btn_newGame.style.visibility = "hidden";
        }
    },        

        setTeamsFour:function() {
            if (playerList.length == 4){
                let team1 = [];
                let team2 =[];
                team1.push(playerList[3]);
                team2.push(playerList[2]);
                team1.push(playerList[1]);                
                team2.push(playerList[0]);
                teams = [team1,team2];
                errBox.innerHTML = `<p class="firstP">Name: ${teams[0][0].name}</p>
            </br><p>Player Id: ${teams[0][0].plyId}</p></br></br><p> Team 1: ${teams[0][0].name} </br> ${teams[0][1].name}</p></br></br>
            <p>Team 2: ${teams[1][0].name}  </br>  ${teams[1][1].name} </p></br></br>
            <p>Welcome click new game button to start a game!</p>`
                btn_newGame.style.visibility = "visible";
                return teams;

        } else {
            btn_newGame.style.visibility = "hidden";
        }
    }


}

