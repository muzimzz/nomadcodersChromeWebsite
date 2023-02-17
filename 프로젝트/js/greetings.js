const loginForm = document.querySelector("#login-form"); 
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting");
const link = document.querySelector("a");


const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const savedUsername = localStorage.getItem(USERNAME_KEY);

function paintGreetings(username) {
  //함수에 매개변수를 없애고 const username = localStorage.getItem(USERNAME_KEY);를 추가 할 수도 있다.
  greeting.innerText = `Hello ${username}!`; // `(~)기호 안에 ${변수}를 넣으면 string
  // greeting.innerText = "Hello " + username;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

function onLoginSubmit(e) {
  e.preventDefault();

  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem("username", username);
  paintGreetings(username);
}

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
} else {
  paintGreetings(savedUsername);
}

// 로그인버튼의 클릭이 아닌 submit여부가 중요하기 때문에 submit이벤트를 사용
// submit 이벤트는 submit(type=button)을 클릭하거나 엔터를 누르면 발생
loginForm.addEventListener("submit", onLoginSubmit);
// function onLoginSubmit(event) { }를 하면 해당 submit이벤트의 정보가 담긴다.
// event.preventDefault 또는 console.log(event) 등이 가능하다.

function onLinkClick(e) {
  e.preventDefault(); // anchor를 클릭했을 때 다른 링크로 넘어가는 이벤트 작동 방지
  console.log(e);
  alert("Link Clicked! But preventDefault()");
}

link.addEventListener("click", onLinkClick);

