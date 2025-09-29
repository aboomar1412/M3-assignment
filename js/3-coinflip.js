let coinFlip = Math.round(Math.random()); // 0 = heads, 1 = tails
let choice = prompt("Heads or Tails?").toLowerCase();

if (coinFlip === 0) { // heads
  if (choice === "heads") {
    alert("The flip was heads and you chose heads...you win!");
  } else {
    alert("The flip was heads but you chose tails...you lose!");
  }
} else { // tails
  if (choice === "tails") {
    alert("The flip was tails and you chose tails...you win!");
  } else {
    alert("The flip was tails but you chose heads...you lose!");
  }
}
