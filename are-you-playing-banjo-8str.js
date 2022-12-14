// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo"
// name + " does not play banjo"
// Names given are always valid strings.

//PREP
//Parameter -
//Return -
//Example -
//Pseudocode -
//Methods!

//Examples
//Rogerido => "Roderigo plays banjo"
//Patrick -> "Patrick does not play banjo"

function areYouPlayingBanjo(name) {
  return name.startsWith("R") || name.startsWith("r")
    ? `${name} plays banjo`
    : `${name} does not play banjo`;
}

console.log(areYouPlayingBanjo("rogerido"));
console.log(areYouPlayingBanjo("Rogerido"));
console.log(areYouPlayingBanjo("Patrick"));
