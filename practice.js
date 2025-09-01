const readline = require('readline-sync');
let name = readline.question("Hello! What is your name? ");
console.log("Nice to meet you, " + name + ".");
let mood = readline.question("How are you today? ");
console.log("That's " + mood + " to hear.");
console.log("...");
let question = readline.question("How many states in the United States are there? ");
if (question == "50") {
    console.log("That's correct!");
    } else {
    console.log("Not quite.");
} if (question == "69") { // dumb little easter egg, feel free to ignore
    console.log("Nice. But no.");
}
console.log("...");
console.log("This next question requires you to roll a die. :)");
console.log("A bandit just stole your sweetroll! He has 4HP."); // minor spelling error
let decision = readline.question("Do you attack? (y/n) ");
if (decision == "y") {
    let damage = readline.question("How much damage do you do? (roll) ");
    let banditHP = 4 - Number(damage);
    if (banditHP <= 0) {
        console.log("You defeated the bandit!");
    } else {
        console.log("The bandit ran away with " + banditHP + "HP left."); // I am so excited to keep developing this scenario
    }
} else {
    console.log("The bandit ran away.");
}
console.log("...");
console.log("Thanks for playing, " + name + "!");