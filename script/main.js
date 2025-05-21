document.addEventListener("DOMContentLoaded", () => {
  const numHearts = 30;

  for (let i = 0; i < numHearts; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${5 + Math.random() * 5}s`;
    heart.style.width = heart.style.height = `${10 + Math.random() * 20}px`;
    document.getElementById("corazones").appendChild(heart);
  }
});
