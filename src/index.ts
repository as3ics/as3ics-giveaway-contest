/** @format */

type Contestant = {
  name: String;
  entries: Number;
  enum: Number;
};

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

var seed = Math.random();
function random() {
  var x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
}

function rand(min, max) {
  // min and max included
  return Math.floor(random() * (max - min + 1) + min);
}

const print = (str) => {
  console.log(str);
};

print("");
print("Welcome to the AS3ICS Giveaway Determination");
print("");
print(
  "all data and processes will be explained and logged throughout this script."
);
print("");
print("importing contestants...");

import contestants from "./assets/2023-05-01-entries.json";

print("import successful");
print("");

print("printing contestants");
print("");
print(contestants);

print("");
print("creating entry bucket...");

const bucket = [];

print("bucket successfully created");
print("");

print("print bucket initial state");
print(bucket);
print("");

print("filling bucket with entries...");

for (let i = 0; i < contestants.length; i++) {
  for (let j = 0; j < contestants[i].entries; j++) {
    bucket.push(contestants[i].enum);
  }
}

print("bucket filled.");
print("");

print("print bucket state");
print(bucket);
print("");

let averageEntries = bucket.length / contestants.length;

print(`number contestants: ${contestants.length}`);
print(`number entries: ${bucket.length}`);
print(`average entries per contestant: ${averageEntries}`);
print(`average odds of winning: ${(100.0 * averageEntries) / bucket.length}`);

print("");
print("contestant individual winning odds...");
print("");
let oddsIntegral = 0;
for (let i = 0; i < contestants.length; i++) {
  let odds = contestants[i].entries / bucket.length;
  oddsIntegral += odds;
  print(`contestant: ${contestants[i].name} odds: ${100.0 * odds}`);
}
print("");
print(`total odds calculated: ${100.0 * oddsIntegral}`);
print("");

if (oddsIntegral > 1.01 || oddsIntegral < 0.99) {
  print("error: odds parity check failure");
} else {
  print("odds parity check success!");
}

print("");
print("Introducing entropy to bucket...");

for (let i = 0; i < 16; i++) {
  print("shuffling bucket...");
  shuffle(bucket);
}

print("");

print("print new bucket:");
print("");

print(bucket);

print("");
print(
  "proceeding to determine contest winner. May the odds be ever in your favor, and best of luck to all of the contestants."
);
print("");

print("pulling random index...");
print("");

const winningIndex = rand(0, bucket.length - 1);
const winningEnum = bucket[winningIndex];

print(`winning index: ${winningIndex}`);
print(`winning enum: ${winningEnum}`);

print("");
print(`And we have a winner! Contestant ${winningEnum}`);
print("");

print("lets find the identity of the winner...");
print("");

let winner: Contestant;

for (let i = 0; i < contestants.length; i++) {
  if (contestants[i].enum == winningEnum) {
    winner = contestants[i];
    break;
  }
}

print(
  "Congratulations to the winner of this contest. The odds were with you this day."
);
print("");

print(winner);
