// buttons for navbar
var navButton = document.querySelectorAll("a")
var homeButton = navButton[0]
homeButton.setAttribute("href", "../index.html")
var devButton = navButton[1]

// declaring variables in global memory to store values from Local Storage
var userKeyword = localStorage.getItem("query")
var quotePick = localStorage.getItem("quotePick")


// console.log(data.quotes[0].tags);

// // declaring variable in Global Memory to use in unSplash API query parameter
// tags = JSON.stringify(data.quote.tags)

// var randomQuoteDiv = document.createElement("div");
// document.body.append(randomQuoteDiv);
// var randomQuote = document.createElement("h2");
// randomQuote.textContent = data.quote.body
// randomQuoteDiv.append(randomQuote);
document.onload = getUnSplash()


function getUnSplash() {
    var unsplashAPI = "https://api.unsplash.com/search/photos?query=" + userKeyword + "&per_page=15&orientation=portrait&client_id=nTDcb20SlPlnOUb5B3Z5i9q1D8woTYppcHS-nLzA2Ho"

    fetch(unsplashAPI)

        .then(function (response) {

            return response.json();
        })

        .then(function (data) {

            console.log(data);
            for (var i = 0; i < 12; i++) {
                var liEl = document.querySelectorAll("li")
                figureEl = document.createElement("figure")
                figureEl.setAttribute("class", "uk-overlay")
                liEl[i + 2].append(figureEl)

                var imgEl = document.createElement("img")
                imgEl.setAttribute("src", data.results[i].urls.small)
                imgEl.setAttribute("style", "z-index: -1")
                figureEl.append(imgEl)

                var figCaptionEl = document.createElement("figcaption")
                figCaptionEl.setAttribute("class", "uk-overlay-panel uk-flex uk-flex-center uk-flex-middle uk-text-center quote-text")
                figCaptionEl.setAttribute("style", "z-index: 1")
                figureEl.append(figCaptionEl)
                figCaptionEl.textContent = localStorage.getItem("quotePick")
            }

        })
}
