const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
const hello = document.querySelector("h2");
const superEventHandler = {
  handleMouseOver: function () {
    hello.innerText = "The Mouse is here!";
    hello.style.color = colors[0];
  },
  handleMouseLeave: function () {
    hello.innerText = "The Mouse is gone!";
    hello.style.color = colors[1];
  },
  handleWindowResize: function () {
    hello.innerText = "You just resized!";
    hello.style.color = colors[2];
  },
  handleOnContextMenu: function () {
    hello.innerText = "That was a right click!";
    hello.style.color = colors[4];
  },
};
hello.addEventListener("mouseover", superEventHandler.handleMouseOver);
hello.addEventListener("mouseleave", superEventHandler.handleMouseLeave);
window.addEventListener("resize", superEventHandler.handleWindowResize);
window.addEventListener("contextmenu", superEventHandler.handleOnContextMenu);
