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
  const restBtns = [...btns].filter(b => b !== btn);
  if (btn.classList.contains("is-toggled")) {
    switchOff(btn);
    btn.classList.remove("is-toggled");
    restBtns.forEach(b => {
      switchOn(b);
      b.classList.add("is-toggled");
    });
  } else {
    switchOn(btn);
    btn.classList.add("is-toggled");
    restBtns.forEach(b => {
      switchOff(b);
      b.classList.remove("is-toggled");
    });
  }
}

btns.forEach(btn => {
  btn.addEventListener("click", toggle);
});