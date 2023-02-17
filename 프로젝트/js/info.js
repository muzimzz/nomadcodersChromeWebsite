const info = [
  { 
    number: "1", 
    content: "나가노 작가님 트위터: <a href='https://twitter.com/ngntrtr' target='blank'>링크</a>",
  },
  { 
    number: "2", 
    content: "농담곰에게는 성별이 정해져있지 않지만, 작가인 나가노상은 여자랍니다.",
  },
  { 
    number: "3", 
    content: "농담곰의 만화는 크게 2종류로 나눌 수 있다.<br>오너캐 속성을 기반으로 한 작가의 일상 만화 부류와, 가상의 세계관을 베이스로 하는 만화 부류이다.",
  },
  { 
    number: "4", 
    content: "작가의 일상 만화 부류는 주로 식생활과 키우는 고양이에 관련되어 있다.<br>식생활의 경우 작가가 자취를 하는지 여러 가지 수제 괴식과 편의점 음식들이 다뤄진다.<br>배가 고픈데 집에 먹을 게 없어 교자 껍질에 버터를 발라 토스트 해먹었다든가...<br>인기 있는 편의점 도시락을 사기 위해서 새벽 6시에 편의점을 방문했다든가...",
  },
  { 
    number: "5", 
    content: "키우는 고양이는 두 마리인데 한 마리는 얼룩 고양이(茶白)이며 다른 한 마리는 아메리칸 컬 종류이다.",
  },
  { 
    number: "6", 
    content: "가상의 세계관 베이스 같은 경우는 일상 만화랑 비슷한 면이 있으나 실존 인물을 베이스로 하지 않은 캐릭터나 종족(두더지 고로케 등)이 등장한다.",
  },
  { 
    number: "7", 
    content: "일본의 락 밴드인 참수옥문동호회와 콜라보를 자주 한다.<br>참수옥문동호회의 앨범 커버를 제작하기도 했고, 농담곰 만화에 등장하는 노래 가사에 참수옥문동호회가 곡을 붙이기도 한다.",
  },
  { 
    number: "8", 
    content: "먹는 것을 굉장히 좋아한다.<br>B급 감성의 서민 음식을 좋아해서 농담곰 만화를 먹으면서 치유하는 만화로 볼 수 있을 정도.",
  },
  { 
    number: "9", 
    content: "매운맛의 음식을 좋아한다. 매운맛 카레를 8배까지 먹은 바 있다",
  },
  { 
    number: "10", 
    content: "농담곰의 일본명은 自分ツッコミくま(지분 츳코미 쿠마)로 자신에게 딴지거는 곰이라는 뜻이에요.",
  },
];

const infoNumber = document.querySelector("#div_info span:first-child");
const infoContent = document.querySelector("#div_info span:last-child"); // span:nth-child(2)

function printRandomInfo() {
  const randomInfo = info[Math.floor(Math.random() * info.length)];

  infoNumber.innerHTML = "#" + randomInfo.number;
  infoContent.innerHTML = randomInfo.content;
}

// printRandomQuote();
printRandomInfo();
setInterval(printRandomInfo, 5000);
