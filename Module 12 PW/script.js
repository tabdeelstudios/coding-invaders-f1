let allButtons = document.getElementsByTagName("button");
allButtons[0].setAttribute("class", "active");
let allContent = document.getElementsByClassName("content-wrapper");
allContent[0].classList.add("active");
allContent[0].style.display = "block";
let allActive = document.getElementsByClassName("active");

console.log(allButtons);
console.log(allContent);

for (let i = 0; i < allButtons.length; i++) {
  allButtons[i].addEventListener("click", () => {
    hideAll();
    resetActive();
    allContent[i].style.display = "block";
    allButtons[i].setAttribute("class", "active");
    allContent[i].classList.add("active");
  });
}

function resetActive() {
  for (let i = 0; i < allActive.length; i++) {
    allActive[i].classList.remove("active");
  }
}

function hideAll() {
  for (let i = 0; i < allContent.length; i++) {
    allContent[i].style.display = "none";
  }
}
