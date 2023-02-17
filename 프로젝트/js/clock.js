const today = document.querySelector("h3#date");
const clock = document.querySelector("h2#clock");
const checkbox_ms = document.querySelector("#checkbox_milliseconds");

function printTodayDate() {
  const date = new Date(); 
  const currentYear = date.getFullYear();
  const currentMonth = String(date.getMonth() + 1).padStart(2, "0"); 
  const currentDate = String(date.getDate()).padStart(2, "0"); 
  const currentDay = date.getDay();

  switch(currentDay) {
  case 0: 
    today.innerHTML = `${currentYear}년 ${currentMonth}월 ${currentDate}일 일요일`
                      break;
  case 1: 
    today.innerHTML = `${currentYear}년 ${currentMonth}월 ${currentDate}일 월요일`
                      break;
  case 2: 
    today.innerHTML = `${currentYear}년 ${currentMonth}월 ${currentDate}일 화요일`
                      break;
  case 3:
    today.innerHTML = `${currentYear}년 ${currentMonth}월 ${currentDate}일 수요일`
                      break;
  case 4: 
    today.innerHTML = `${currentYear}년 ${currentMonth}월 ${currentDate}일 목요일`
                      break;
  case 5: 
    today.innerHTML = `${currentYear}년 ${currentMonth}월 ${currentDate}일 금요일`
                      break;
  case 6: 
    today.innerHTML = `${currentYear}년 ${currentMonth}월 ${currentDate}일 토요일`
                      break;
  }
}

function printTime() {
  const date = new Date();
  const currentHours = String(date.getHours()).padStart(2, "0");
  const currentMinutes = String(date.getMinutes()).padStart(2, "0");
  const currentSeconds = String(date.getSeconds()).padStart(2, "0");
  const currentMilliseconds = String(date.getMilliseconds()).padStart(3,"0");
  clock.innerHTML = `${currentHours}:${currentMinutes}:${currentSeconds}`; 
}

// checkbox_ms가 활성화되면 1ms, 비활성화시 1000ms 만들어보기
// :${currentMilliseconds}
// clearInterval()

printTodayDate();
printTime();
setInterval(printTime, 1000);  // 1000ms마다 한 번씩