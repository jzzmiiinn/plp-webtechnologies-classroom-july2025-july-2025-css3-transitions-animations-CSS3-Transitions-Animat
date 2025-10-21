// ===== GLOBAL VARIABLE =====
let animationActive = false;

// ===== FUNCTION 1: Toggle animation (uses parameters & return value) =====
function toggleAnimation(cardElement, activate) {
  if (activate) {
    cardElement.classList.add("animate");
    return "Animation started";
  } else {
    cardElement.classList.remove("animate");
    return "Animation stopped";
  }
}

// ===== FUNCTION 2: Initialize event listeners =====
function initCardAnimations() {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("click", function () {
      animationActive = !animationActive;
      const message = toggleAnimation(card, animationActive);
      console.log(message); // Demonstrates return value
    });
  });
}

// ===== FUNCTION 3: Show scope behavior =====
function scopeDemo() {
  let localVar = "I'm local!";
  console.log(localVar);
}
scopeDemo();

// ===== CALL INITIALIZATION =====
window.onload = function () {
  initCardAnimations();
};
