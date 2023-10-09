const button = document.querySelector(".toggle-btn");
const nav = document.querySelector(".list-container");
const play = document.querySelector(".play");

// button.addEventListener("click", () => {
//   if (nav.classList.contains("display")) {
//     nav.classList.remove("display");
//   } else {
//     nav.classList.add("display");
//   }
// });


// audio player


play.addEventListener("click", () => {
  const audio = new Audio("/music/good_enough.mp3");
  audio.play()
})