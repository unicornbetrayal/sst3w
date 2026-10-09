const btn = document.getElementById("sst3w-btn");
const audio = new Audio("./public/sst3w.mp3");

btn.addEventListener("click", () => {
  audio.currentTime = 0;
  audio.play();
});