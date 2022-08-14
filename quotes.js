const quotes = [
    {
        quotes: "나는 언제나 좋은 선수가 갖춰야 할 중요한 요소로 셋을 든다. 첫째로 강할 것, 둘째로 탄력적일 것, 마지막으로 빨라야 한다. 이 특징들을 모두 갖춘 이가 최고의 선수이며, 손흥민이 바로 그렇다.",
        author: "안토니오 콘테"
    },

    {
        quotes: "손흥민은 헌신적이기에 선발로 나서야 한다. 난 손흥민을 제외할 정도로 미치지 않았다.",
        author: "안토니오 콘테"
    },
    {
        quotes: "오, 대한민국의 왕. 무슨 일이시오. 질문이 있으시다고? 그럼 대답해 드려야지.",
        author: "조세 무리뉴"
    },

    {
        quotes: "최고의 프리미어리거 중 하나다. 무에서 유를 창조하는 마법과 같은 퍼포먼스를 보이는 선수다. 경기장 안에서도 훌륭한 선수지만 밖에서도 훌륭한 사람인 걸 알고 있다.",
        author: "프랭크 램파드"
    },
    {
        quotes: "지금 지도해보고 싶은 현역 선수들에 케인은 확실하고, 그리고 토트넘에 있는 그 소년 손흥민이 있다. 이 선수들은 매우 훌륭한 선수들이다.",
        author: "알렉스 퍼거슨 경"
    },

    {
        quotes: "단순히 프리미어리그에서 뛰는 선수가 아닌, 프리미어리그를 이끄는 선수이다.",
        author: "거스 히딩크"
    },
    {
        quotes: "손흥민을 주목하라. 마치 내 어린 시절을 닮은 대단한 재능을 갖고 있다.",
        author: "뤼틀 반니스텔루이"
    },

    {
        quotes: "손흥민은 굉장하다. 만약 내가 맨유로 데려와야 할 선수를 꼽는다면 첫번째 선수 중 한 명이다. 나의 톱3에 들어간다. 나는 손흥민의 플레이 스타일을 좋아한다. 매우 직선적이고, 상대를 파괴한다. 언제라도 득점할 수 있고, 양발을 다 쓸 줄 안다.",
        author: "리오 퍼디난드"
    },

    {
        quotes: "지칠 줄 모르고 이타적이면서도 골 결정력과 책임감을 가진, 현대 축구의 이상적인 공격수다.",
        author: "영국 BBC"
    }
    ,

    {
        quotes: "나는 아주 오래오래 전부터 손흥민의 큰 숭배자(big admirer)였다.",
        author: "프랑크 융베리"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];


quote.innerText = todaysQuote.quotes;
author.innerText= todaysQuote.author;