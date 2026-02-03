// Flip cards: Otros intereses
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".interest-card");

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.toggle("is-flipped");
    });
  });
});
