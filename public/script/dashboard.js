const aboutTab = document.querySelector(".tab");
const servicebtn = document.querySelector(".servicebtn");
const home = document.querySelector(".home");
const about = document.querySelector(".about");
const services = document.querySelector(".services");
const profileBtn = document.querySelector(".profile-music-btn");
const profileMusic = document.querySelector(".profile-music");

aboutTab.addEventListener("click", () => {
  if (!about.classList.contains("show-about")) {
    //sab
    services.classList.remove("show-services");
    home.classList.add("home-hide");
    about.classList.add("show-about");
      profileMusic.classList.remove("show-profile-music");

  }
});
servicebtn.addEventListener("click", () => {
  if (!services.classList.contains("show-services")) {
    services.classList.add("show-services");
    home.classList.add("home-hide");
    about.classList.remove("show-about");
      profileMusic.classList.remove("show-profile-music");

  }
});
profileBtn.addEventListener("click", ()=>{
    if (!profileMusic.classList.contains("show-profile-music")) {
      services.classList.remove("show-services");
      home.classList.add("home-hide");
      about.classList.remove("show-about");
      profileMusic.classList.add("show-profile-music");
    }
})