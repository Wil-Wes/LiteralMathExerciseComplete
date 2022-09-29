// 1a
let warmHugs = "Hi, I'm Olaf and I like warm hugs.";
console.log(warmHugs);
// 1b
console.log(warmHugs.toUpperCase());

// 1c
// warmHugs = warmHugs.replace("like", "love"); Replaces in both log and functionally

console.log(warmHugs.replace("like", "love"));

// 2a
let beenImpaled = "Oh, look at that. I've been impaled.";

// 2b
// console.log(beenImpaled.slice(18, 36));

console.log(beenImpaled.slice(18));

// console.log(beenImpaled.slice(-18));

// 3a
let dotDotDot = "...";

// 3b
let skullBones = `I don't have a skull${dotDotDot} or bones.`;
console.log(skullBones);

// 4
console.log(Math.PI);

// 5
// let randomNumber = Math.Random(); //0 through .99~
// randomNumber *= 3;
// randomNumber = Math.floor(randomNumber);
// randomNumber ++;
// console.log(randomNumber);

let randomNumber = Math.floor(Math.random()*3 +1);
console.log(randomNumber);

// let randomNumber = Math.ceil(Math.random()*3);
// console.log(randomNumber);

// BONUS
// 6
// let go = " Let it go!";
// console.log(go.toUpperCase().repeat(2));

console.log(" Let It Go!".repeat(2).toUpperCase().trim());

// 7a
let reindeers = "Reindeers are better than people."

// 7b
console.log(reindeers.replaceAll(" ", "_"));

// console.log(reindeers.replace(/ /g, "_"));

// console.log(reindeers.replace("Reindeers are better than people.", "Reindeers_are_better_than_people."));

// 8
console.log(Math.sqrt(2*2));

// 9
// Use comments to show math if you shorthand math considerably
let newRandomNumber = Math.floor(Math.random()*(17)+7); 

console.log(newRandomNumber);
