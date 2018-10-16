//Begin the Game
const startGame = () => {
    let play = prompt("Would you like to battle in a game for glory?");
    if (play === "yes") {   //allows the user to set a username if they want to play
        let userName = prompt("Enter your username");  
        startCombat(play, userName);
    } else {               //exits the game
        console.log("Come back later.");
        return;
    }
}
//The User starts the game
const startCombat = (play, userName) => {
    //Declare the Variables
    let grantHealth = 10;
    let userHealth = 40;
    let userWins = 0;
    //As long as play is true they can attack their opponent or quit the game
    while (play) {
        let ans = prompt("Would you like to attack or quit?");
        if (ans === "attack") {     //if the player wants to attack
            grantHealth -= getDamage(); //this calls the getDamage function and decrements their health
            userHealth -= getDamage();
            console.log(`${userName} was attacked. ${userName} has ${userHealth} health left.`);
            console.log(`Grant was attacked. Grant has ${grantHealth} health left`);
            // grant's health counter
            if (grantHealth <= 0) {
                userWins++;
                grantHealth = 10;
                console.log(`${userName} has beaten Grant. ${userName} must win ${3 - userWins} more time(s).`);
            }
            //user's health counter
            if (userHealth <= 0) {
                console.log("You have died and brought shame upon your ancestors!!!");
                break;
            }
            //win counter
            if (userWins === 3) {
                console.log(`${userName} has overcome Grant the Almighty in a glorious battle!!`);
                break;
            }
        } 
        else if (ans === "quit") {  //if the player does not want to attack it will break the loop
            console.log("You're such a quitter.");
            break;
        }
    }
    return;
}
//Declaring the getDamage function
const getDamage = () => {
    return Math.floor(Math.random() * 5) + 1;    //randomly picks a number between 1 & 5
}
//Calls the startGame function
startGame(); 