// quotes array
const quotes = [
    {
        quote: "The road to success and the road to failure are almost exactly the same.",
        author: "Colin R. Davis",
    },
    {
        quote: "Success is walking from failure to failure with no loss of enthusiasm.",
        author: "Winston Churchill",
    },
    {
        quote: "Age is no guarantee of maturity.",
        author: "Lawana Blackwell",
    },
    {
        quote: "True life is lived when tiny changes occur.",
        author: "Lev Tolstoy",
    },
    {
        quote: "Life is a long lesson in humility.",
        author: "James M. Barrie",
    },
    {
        quote: "All of our dreams can come true, if we have the courage to pursue them.",
        author: "Walt Disney",
    },
    {
        quote: "Only I can change my life. No one can do it for me.",
        author: "Carol Burnett",
    },
    {
        quote: "In order to succeed, we must first believe that we can.",
        author: "Nikos Kazantzakis",
    },
    {
        quote: "Without passion there is no genius.",
        author: "Theodor Mommsen",
    },
    {
        quote: "Never express yourself more clearly than you are able to think.",
        author: "Niels Henrik David Bohr",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// random quote: random 함수의 경우 float 형식으로 값이 발생하므로, floor를 통해 내림처리 한다. (1.15674313 --floor--> 1)
// quotes의 array 길이안에서 random 함수의 숫자 범위가 지정되도록 quotes.length를 사용
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todayQuote.quote;
author.innerText = `- ${todayQuote.author} -`;