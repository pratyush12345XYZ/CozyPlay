// Homepage card click handling
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("click", () => {
    const game = card.innerText;

    if (game.includes("Clicker")) {
      window.location.href = "games/clicker.html";
    } else if (game.includes("Tic")) {
      window.location.href = "games/tic.html";
    } else if (game.includes("Memory")) {
      window.location.href = "games/memory.html";
    } else if (game.includes("Snake")) {
      window.location.href = "games/snake.html";
    }
  });
});


// Clicker Game Logic
let score = 0;

function increase() {
  score++;
  document.getElementById("score").innerText = score;
}
