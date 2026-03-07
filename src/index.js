import "./styles.css";
import audioFile from "./audio/name.mp3";

console.log("Webpack dev setup successful!")

// Theme styling
const themeBtn = document.querySelector("#theme-toggle");
themeBtn.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
})

// Full Name Audio
const playBtn = document.querySelector("#pronounce-name");
playBtn.addEventListener("click", async () => {
    const audio = new Audio(audioFile);
    audio.play();
})