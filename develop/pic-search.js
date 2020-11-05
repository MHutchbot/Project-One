// buttons for navbar
var navButton = document.querySelectorAll("a")
var homeButton = navButton[0]
homeButton.setAttribute("href", "../index.html")
var devButton = navButton[1]

// declaring variables in global memory to store values from Local Storage
var userKeyword = localStorage.getItem("query")
var quotePick = localStorage.getItem("quotePick")
console.log(quoteKeyword)

// console.log(data.quotes[0].tags);

// // declaring variable in Global Memory to use in unSplash API query parameter
// tags = JSON.stringify(data.quote.tags)

// var randomQuoteDiv = document.createElement("div");
// document.body.append(randomQuoteDiv);
// var randomQuote = document.createElement("h2");
// randomQuote.textContent = data.quote.body
// randomQuoteDiv.append(randomQuote);
var unsplashAPI = "https://api.unsplash.com/search/photos?query=" + userKeyword + "&client_id=nTDcb20SlPlnOUb5B3Z5i9q1D8woTYppcHS-nLzA2Ho"

fetch(unsplashAPI)

    .then(function (response) {

        return response.json();
    })

    .then(function (data) {

        console.log(data);

        var randomPicDiv = document.createElement("div");
        document.body.append(randomPicDiv);
        var randomPicImg = document.createElement("img");
        randomPicImg.setAttribute("src", data.results[0].urls.small);
        randomPicDiv.append(randomPicImg);

        console.log(data.results[0].urls.small)
    })

