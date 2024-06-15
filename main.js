let theButtons = document.querySelectorAll("button"),
  theS = document.querySelector(".screen"),
  rem = document.querySelector(".rem"),
  ac = document.querySelector(".orange"),
  mark = document.querySelector(".change"),
  equal = document.querySelector(".equal");

theButtons.forEach(function (button) {
  button.onclick = function () {
    theS.textContent += button.textContent;
  };
});

rem.onclick = function () {
  if (theS.textContent != "") {
    let result = theS.textContent.split("");
    result.length -= 1;
    theS.textContent = result.join("");
  }
};

ac.onclick = function () {
  theS.innerHTML = "";
};

mark.onclick = function () {
  if (theS.textContent.startsWith("-") === true) {
    theS.textContent = theS.textContent.replace("-", "+");
  } else if (theS.textContent.startsWith("+") === true) {
    theS.textContent = theS.textContent.replace("+", "-");
  } else if (theS.textContent.startsWith("-") === false) {
    theS.textContent = "-" + theS.textContent;
  }
};

equal.onclick = function () {
  theS.textContent = eval(theS.textContent);
};
