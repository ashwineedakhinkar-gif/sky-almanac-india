const facts = [
  "Light from the Sun takes about 8 minutes and 20 seconds to reach Earth.",
  "A day on Venus is longer than its year — it rotates that slowly.",
  "The March 2026 total lunar eclipse turned blood-red over Delhi, Mumbai, and Bengaluru — but August's total solar eclipse wasn't visible from India at all.",
  "Saturn is the only planet in the solar system less dense than water — it would float."
];

document.getElementById("factBtn").addEventListener("click", function() {
  const random = Math.floor(Math.random() * facts.length);
  document.getElementById("factText").textContent = facts[random];
});