const quotes = [
    {
        quotes: "Kneel mortals! So I may split your shoulders from your spine!",
        author: "AATROX"
    },

    {
        quotes: "March toward vengeance... Drown this world in blood!",
        author: "tryndamior"
    },
    {
        quotes: "Kneel mortals! So I may split your shoulders from your spine!",
        author: "AATROX"
    },

    {
        quotes: "March toward vengeance... Drown this world in blood!",
        author: "tryndamior"
    },
    {
        quotes: "Kneel mortals! So I may split your shoulders from your spine!",
        author: "AATROX"
    },

    {
        quotes: "March toward vengeance... Drown this world in blood!",
        author: "tryndamior"
    },
    {
        quotes: "Kneel mortals! So I may split your shoulders from your spine!",
        author: "AATROX"
    },

    {
        quotes: "March toward vengeance... Drown this world in blood!",
        author: "tryndamior"
    },

    {
        quotes: "Q W Q EQ!",
        author: "imonkfcwifi"
    }
    ,

    {
        quotes: "Q W Q EQ!",
        author: "imonkfcwifi"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const randomQuotes = quotes[Math.floor(Math.random()*quotes.length)];

author.innerText= randomQuotes.author;
quote.innerText = randomQuotes.quotes;
