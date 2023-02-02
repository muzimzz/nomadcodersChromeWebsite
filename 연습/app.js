const title = document.querySelector(".title");
const alphabets = document.querySelectorAll(".alphabet");
const text = document.querySelector("input[type=text]");
const dontOver = document.querySelector(".dont_over");
title.innerText = "Click me!";
let title_checked = false;

console.dir(title);
console.dir(alphabets);

/* (위: 내가 짠 코드, 아래: 모범 코드)
function handleTitleClick() {
  if (title_checked == false) {
    title.style.color = "blue";
    title_checked = true;
  }
  else {
    title.style.color = "red";
    title_checked = false;
  }
}
*/

/* (JavaScript에서 CSS를 변경하는 것은 성능 이슈가 발생할 수 있다. css파일에서 수정하자)
function handleTitleClick() {
  const currentColor = title.style.color;
  let newColor;

  if (currentColor === "blue") 
    newColor = "red";
  else 
    newColor = "blue";

  title.style.color = newColor;
}
*/

/* (  css에서 active클래스를 지정해놓고 html의 className을 바꾸려 했으나
      className으로 하면 title class가 사라지므로 classList를 사용하자.  )
function handleTitleClick() {
  if (title.className === "active") 
    title.className = "";
  else
    title.className = "active";
}
*/

/*
// 개발자 도구 - 요소(element) 참고
function handleTitleClick() {
  if (title.classList.contains("active"))
    title.classList.remove("active");
  else
    title.classList.add("active");
}
*/

// 위의 active class가 없으면 add, 있으면 remove하는 기능 = toggle
function handleTitleClick() {
  title.classList.toggle("active");
}

function handleAlpahbetClick() {
  alert("Alphabet Clicked");
}

function handleCopy() {
  alert("복사 완료");
}

function handlePaste() {
  alert("붙여넣기 완료");
}

function handelMouseEnter() {
  alert("Don't over Me!");
}

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

title.addEventListener("click", handleTitleClick);
// title.onclick = handleTitleClick; 과 같다.
for (const alphabet of alphabets) {
  alphabet.addEventListener("click", handleAlpahbetClick);
}
window.addEventListener("copy", handleCopy);
text.addEventListener("paste", handlePaste);
dontOver.addEventListener("mouseenter", handelMouseEnter);

window.addEventListener("resize", handleWindowResize);