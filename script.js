// Typing animation
const text = `
As this year comes to an end,
I just want you to know how grateful I am for you 💕

I am so glad we met that day (although i wasn't your first date lmao),
like I have told you, you were the highlight of my year.
Thanks for making my year beautiful and fun Bhavika 🐱✨

Let's have more fun together in 2026 and uske badh bhii hehe ❤️
`;

let index = 0;
const speed = 40;
const typedText = document.getElementById("typed-text");

function typeEffect() {
  if (index < text.length) {
    typedText.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, speed);
  }
}

typeEffect();

// Surprise button
function showSurprise() {
  document.getElementById("surprise").style.display = "block";
}

// Falling hearts
const heartsContainer = document.querySelector(".hearts");

function createHeart() {
  const heart = document.createElement("span");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (3 + Math.random() * 4) + "s";
  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}

setInterval(createHeart, 300);
