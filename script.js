const catFacts = [
  "Cats sleep for around 13–16 hours a day.",
  "A group of cats is called a clowder.",
  "Cats can rotate their ears 180 degrees.",
  "A cat was the mayor of an Alaskan town for 20 years.",
  "Cats have over 20 muscles in each ear.",
  "A cat can jump up to 6 times its length.",
  "Whiskers help cats detect changes in air currents.",
  "Adult cats only meow at humans, not other cats.",
  "Ruby loved biting ears and my hair, that's a rare cat 'love language' 🐾"
];

function showCatFact() {
  const factBox = document.getElementById("cat-fact");
  const fact = catFacts[Math.floor(Math.random() * catFacts.length)];
  factBox.style.opacity = 0;
  setTimeout(() => {
    factBox.textContent = fact;
    factBox.style.opacity = 1;
  }, 200);
}

function toggleDarkMode() {
  const body = document.body;
  const btn = document.getElementById("theme-toggle");
  body.classList.toggle("dark-mode");
  btn.textContent = body.classList.contains("dark-mode") ? "☀️ Sunny Vibes" : "🌙 Midnight Meow";
}

function generateCatName() {
  const personality = document.getElementById("cat-personality").value.trim();
  const snack = document.getElementById("cat-snack").value.trim();
  const display = document.getElementById("name-display");

  if (!personality || !snack) {
    display.textContent = "Please fill in both boxes! 🐱";
    return;
  }

  const titles = ["Sir", "Lady", "Captain", "Professor", "The Honorable", "Duke", "Baroness"];
  const randomTitle = titles[Math.floor(Math.random() * titles.length)];
  
  const finalName = `✨ ${randomTitle} ${personality} ${snack}-Slayer ✨`;
  
  display.style.opacity = 0;
  setTimeout(() => {
    display.textContent = finalName;
    display.style.opacity = 1;
  }, 200);
}