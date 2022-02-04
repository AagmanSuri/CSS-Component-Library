const hide = document.getElementById("hide");
const btn = document.getElementById("btn");

// let isHide = true;
// const hideFunction = () => {
//   isHide = !isHide;
//   isHide ? (hide.style.display = "flex") : (hide.style.display = "none");
// };
hide.style.display = "none";
const hideFunction = () => {
  if (hide.style.display === "flex") {
    hide.style.display = "none";
  } else {
    hide.style.display = "flex";
  }
};

btn.addEventListener("click", hideFunction);
