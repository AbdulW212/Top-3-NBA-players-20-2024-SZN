let body = document.querySelector(".topPlayersContainer");

export const postPlayer = (player) => {
    // Create a Parent container 
    let empContainer = document.createElement('div');
    empContainer.setAttribute('class', 'container');

    // Player's Name
    let nameHolder = document.createElement('div');
    nameHolder.setAttribute('class', "namer");
    nameHolder.innerHTML = player.playerName; 
    empContainer.appendChild(nameHolder);

    // Player's Points
    let pointsHolder = document.createElement('div');
    pointsHolder.setAttribute('class', "pointsAvg");
    pointsHolder.innerHTML = player.points; 
    empContainer.appendChild(pointsHolder);

    // Player's Assist
    let assistHolder = document.createElement('div');
    assistHolder.setAttribute('class', "assist");
    assistHolder.innerHTML = player.assist; 
    empContainer.appendChild(assistHolder);

    // Player's Games played
    let gamesPlayedHolder = document.createElement('div');
    gamesPlayedHolder.setAttribute('class', "gamesP");
    gamesPlayedHolder.innerHTML = player.gamesPlayed;
    empContainer.appendChild(gamesPlayedHolder);

    // Append container to HTML element
    document.querySelector('.topPlayersContainer').appendChild(empContainer);
}





export async function bestPlayers() {
    fetch("https://nba-stats-db.herokuapp.com/api/playerdata/name/Nikola Jokić")
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
           
            const playerName = data.results[0].player_name;
            console.log(playerName); 
            const playerPoints = data.results[0].PTS;
            console.log(playerPoints);   
            const playerAssist = data.results[0].AST;
            console.log(playerAssist);
            const playersGPlayed = data.results[0].games;
            console.log(playersGPlayed); 


          const getInfo = {
                playerName: playerName,
                points: playerPoints,
                assists: playerAssist,
                gamesPlayed: playersGPlayed
            }; 

           postPlayer(getInfo);
            console.log(getInfo);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

//bestPlayers();