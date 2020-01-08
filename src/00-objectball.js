function gameObject() {
    return {
        "home": {
            "teamName": "Brooklyn Nets",
            "colors": ["Black", "White"],
            "players": {
                "Alan Anderson": {
                    "number": 0,
                    "shoe": 16,
                    "points": 22,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 3,
                    "blocks": 1,
                    "slamDunks": 1,
                },
                "Reggie Evans": {
                    "number": 30,
                    "shoe": 14,
                    "points": 12,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 12,
                    "blocks": 12,
                    "slamDunks": 7,
                },
                "Brook Lopez": {
                    "number": 11,
                    "shoe": 17,
                    "points": 17,
                    "rebounds": 19,
                    "assists": 10,
                    "steals": 3,
                    "blocks": 1,
                    "slamDunks": 15,
                },
                "Mason Plumlee": {
                    "number": 1,
                    "shoe": 19,
                    "points": 26,
                    "rebounds": 12,
                    "assists": 6,
                    "steals": 3,
                    "blocks": 8,
                    "slamDunks": 5,
                },
                "Jason Terry": {
                    "number": 31,
                    "shoe": 15,
                    "points": 19,
                    "rebounds": 2,
                    "assists": 2,
                    "steals": 4,
                    "blocks": 11,
                    "slamDunks": 1,
                }  
            }
        },
        "away": {
            "teamName": "Charlotte Hornets",
            "colors": ["Turquoise", "Purple"],
            "players": {
                "Jeff Adrien": {
                    "number": 4,
                    "shoe": 18,
                    "points": 10,
                    "rebounds": 1,
                    "assists": 1,
                    "steals": 2,
                    "blocks": 7,
                    "slamDunks": 2,
                },
                "Bismak Biyombo": {
                    "number": 0,
                    "shoe": 16,
                    "points": 12,
                    "rebounds": 4,
                    "assists": 7,
                    "steals": 7,
                    "blocks": 15,
                    "slamDunks": 10,
                },
                "DeSagna Diop": {
                    "number": 2,
                    "shoe": 14,
                    "points": 24,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 4,
                    "blocks": 5,
                    "slamDunks": 5,
                },
                "Ben Gordon": {
                    "number": 8,
                    "shoe": 15,
                    "points": 33,
                    "rebounds": 3,
                    "assists": 2,
                    "steals": 1,
                    "blocks": 1,
                    "slamDunks": 0,
                },
                "Brendan Haywood": {
                    "number": 33,
                    "shoe": 15,
                    "points": 6,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 22,
                    "blocks": 5,
                    "slamDunks": 12,
                }
            }
        }
    }
} 

// console.log(gameObject())

// function homeTeamName(){
//   let object = gameObject()
// return object['home']['teamName']
// }


// console.log(homeTeamName())

// function homeTeamName(){
//   return gameObject()['home']['teamName']
// }

// console.log(homeTeamName())

function allPlayers(){
    const playerList = {}
    const game = gameObject() 

    for (const location in game){
        const players = game[location]["players"]
        
        for(const player in players){
            playerList[player] = players[player]
        }
    }
    return playerList
}

console.log(allPlayers())

function numPointsScored(name){
    const players = allPlayers()
    console.log(players)
    return players[name]["points"]
} 

// console.log(
//     numPointsScored("Brendan Haywood")
//     ) 

function shoeSize(name){
    const players = allPlayers()
    return players[name]["shoe"]
} 

// console.log(
//     shoeSize("Brendan Haywood")
//     ) 

function findTeamByName(teamName){
    const game = gameObject()
    for (const location in game){
        if (game[location]["teamName"]=== teamName){
        return game[location] 
        }
    }
}
function teamColors(teamName){
    const team = findTeamByName(teamName)
        return team["colors"]
 }

console.log(teamColors("Brooklyn Nets"))

function teamNames(){
    game = gameObject()
    nameArray = []
    for(const location in game){
   const value = game[location]["teamName"]
   nameArray.push(value)
    }
    return nameArray
}

console.log(teamNames())

function playerNumbers(teamName){
    const team = findTeamByName(teamName)
    players = team["players"]
    numberArray = []
    for (const numbers in players){
    const value = players[numbers]["number"]
        numberArray.push(value)
    }
    return numberArray
}

console.log(playerNumbers("Brooklyn Nets"))


function playerStats(name){
    const players = allPlayers()
    return players[name]
}

console.log(playerStats("Alan Anderson")) 

function findBigShoe(){
const players = allPlayers()
let biggestShoe = 0 
for (const stat in players){
    size = players[stat]["shoe"]
    if (size > biggestShoe){
        biggestShoe = size
    } 
}
return biggestShoe
}
console.log(findBigShoe())

function bigShoeRebounds(){
    const players = allPlayers() 
    const bigShoe = findBigShoe()
 for (const stat in players){
     if (players[stat]["shoe"] === bigShoe){
        return players[stat]["rebounds"]
     }
 }
}

 console.log(bigShoeRebounds()) 

 function mostPointsScored(){
     const players = allPlayers()
     let mostPoints = 0
     for (const stat in players){
         points = players[stat]["points"]
         if (points > mostPoints){
             mostPoints = points
         }
     }
     return mostPoints
 } 

 console.log(mostPointsScored()) 

 function playerMostPoints (){
     const players = allPlayers()
     const mostPoints = mostPointsScored()
     const game = gameObject()
     for (const stat in players){
         if (players[stat]["points"] === mostPoints){
             return stat
         }
     }
     
 }


 console.log(playerMostPoints())
