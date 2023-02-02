const loginForm = document.getElementById("login-form"); 
//              = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
//               = document.querySelector("#login-form input");
const loginButton = loginForm.querySelector("button");
//                = document.querySelector("#login-form button"); 

const link = document.querySelector("a");

/*
function loginButtonClick() {
  const username = loginInput.value;
    if (username === "")           alert("이름은 필수 입력 사항입니다"); -> html-input-required
    else if (username.length < 2)  alert("이름이 너무 짧습니다"); -> html-input-minlength
    else if (username.length > 15) alert("이름이 너무 깁니다");  -> html-input-maxlength

    alert("Hello, " + loginInput.value);
}
loginButton.addEventListener("click", loginButtonClick);

*/
// object.addEventListener("EVENT", function);
// object.onEVENT = function;  => 옛방식



// button의 click이 아닌 form의 submit여부가 중요하기 때문에 submit이벤트를 사용
// submit 이벤트는 submit타입을 클릭하거나 엔터를 누르면 발생
function onLoginSubmit(e) {
  const username = loginInput.value;
  e.preventDefault(); // 기본으로 정의된 이벤트의 작동을 막아주는 메서드
  // submit할 때 자동으로 새로고침 방지
  console.log(e);

  alert("Hello, " + username);
  console.log(username);
}

loginForm.addEventListener("submit", onLoginSubmit);
// addEventListener method의 두번째 argument 함수에 첫번째 매개변수를 넣으면
// 해당 함수에 해당하는 Event의 정보가 담긴다. 이를 console.log하면 볼 수 있다

function onLinkClick(e) {
  e.preventDefault(); // anchor를 클릭했을 때 다른 링크로 넘어가는 이벤트 작동 방지
  console.log(e);
  alert("Link Clicked!");
}

link.addEventListener("click", onLinkClick);