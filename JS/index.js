const logIn = document.querySelector(".log-in"),
      regIn = document.querySelector(".reg-in"),
      wrapper = document.querySelector("body"),
      closeModals = document.querySelectorAll(".close-modal");
let lg,rg;

closeModals.forEach(item => {
  item.addEventListener("click", () => {
    document.querySelector(".logIn-form").style.display = "none";
    document.querySelector(".regIn-form").style.display = "none";
  })
})

logIn.addEventListener("click", () => {
  document.querySelector(".logIn-form").style.display = "block";
  // lg = document.querySelector("#logIn");
  // lg.addEventListener("click", () => {
  //   document.querySelector(".logIn-form").style.display = "none";
  // })
})

regIn.addEventListener("click", () => {
  document.querySelector(".regIn-form").style.display = "block";
  rg = document.querySelector("#regBtn");
  rg.addEventListener("click", () => {
    document.querySelector(".regIn-form").style.display = "none";
  })
})

