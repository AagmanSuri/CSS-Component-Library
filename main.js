const hide = document.getElementById("hide");
const btn = document.getElementById("btn");

let isHide = false;
const hideFunction = () => {
  isHide = !isHide;
  isHide ? (hide.style.display = "none") : (hide.style.display = "block");
};

btn.addEventListener("click", hideFunction);
