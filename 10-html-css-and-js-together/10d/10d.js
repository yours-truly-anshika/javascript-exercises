let btns = document.querySelectorAll("button");

function switchOn(btn) {
  btn.style.backgroundColor = "black";
  btn.style.color = "white";
};

function switchOff(btn) {
  btn.style.backgroundColor = "white";
  btn.style.color = "black";
};


function toggle(e) {
  const btn = e.target;
  if (btn.classList.contains("is-toggled")) {
    switchOff(btn);
    btn.classList.remove("is-toggled");
  } else {
    switchOn(btn);
    btn.classList.add("is-toggled");
  }
}

btns.forEach(btn => {
  btn.addEventListener("click", toggle);
});