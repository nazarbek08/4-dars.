const menuEl = document.querySelector(".bi-list");
const nazarEl = document.querySelector(".nazar");
const close = document.querySelector(".bi-x-lg");
const mazgiEl = document.querySelector(".maraz");

const noneEl = document.querySelector(".mamama");
const haahEl = document.querySelector(".rfv");
const nanEl = document.querySelector(".ftro");
const nasEl = document.querySelector(".bi-x")


haahEl.addEventListener("click", () => {
    noneEl.style.display = "block"
    nanEl.style.display = "block"
    nasEl.style.display = "block"


});

noneEl.addEventListener("click", () => {
  noneEl.style.display = "none"
  nanEl.style.display = "none"
  nasEl.style.display = "none"
  mazgiEl.style.display = "none";



});

nasEl.addEventListener("click", () => {
  nasEl.style.display = "none"
  noneEl.style.display = "none"
  nanEl.style.display = "none"



});


menuEl.addEventListener("click", () => {
  nazarEl.style.marginLeft = "0";
  mazgiEl.style.display = "blok";
  noneEl.style.display = "block"


});

close.addEventListener("click", () => {
  nazarEl.style.marginLeft = "-70%";
  mazgiEl.style.display = "none";
  noneEl.style.display = "none"

});
mazgiEl.addEventListener("click", () => {
  nazarEl.style.marginLeft = "-50%";
  noneEl.style.display = "block"

});