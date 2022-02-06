const hide = document.getElementById("hide");
const btn = document.getElementById("btn");

const img = document.getElementById("ham-icon-id");

// let isHide = true;
// const hideFunction = () => {
//   isHide = !isHide;
//   isHide ? (hide.style.display = "flex") : (hide.style.display = "none");
// };
hide.style.display = "none";
const hideFunction = () => {
  if (hide.style.display === "flex") {
    hide.style.display = "none";
    img.src = "https://api.iconify.design/cil:hamburger-menu.svg";
  } else {
    hide.style.display = "flex";
    img.src = "https://api.iconify.design/maki:cross-11.svg";
  }
};

btn.addEventListener("click", hideFunction);
