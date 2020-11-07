// buttons for navbar
var navButton = document.querySelectorAll("a")
var homeButton = navButton[0]
homeButton.setAttribute("href", "index.html")
var devButton = navButton[1]

// declaring variables in global memory to store locations of search button and input field
var searchButton = document.getElementById("search-button") //changed querySelector to getElementById to match HTML search button
var inputField = document.querySelector("input")
var slideSet = document.getElementById("slideset")

var fieldSet = document.querySelector("fieldset")
var clearButton = document.createElement("button")
clearButton.setAttribute("class", "uk-button")
clearButton.textContent = "Restart"

clearButton.addEventListener("click", function () {
    location.reload()
})
var waitToAppear = function () {
    document.body.children[1].children[0].append(clearButton)
}

// eventlistener on the search button to call fetch function
searchButton.addEventListener("click", function (event) {
    event.preventDefault()
    fieldSet.setAttribute("style", "display:none")
    setTimeout(waitToAppear, 500)

    // declares variable in local memory to store value from input field
    var userQuery = inputField.value
    localStorage.setItem("query", userQuery)
    // declares variable in local memory to store URL for FavQs API with the query parameter from user input
    var quotesAPI = "https://favqs.com/api/quotes/?filter=" + userQuery

    // fetch with authorization token in header to request data
    fetch(quotesAPI, {
        headers: {
            Authorization: 'Token token=4d5c8c37865f2070ffb40397f22c5dad'
        }
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            // declares variable in local memory to store location of <li> elements

            var liEl = document.querySelectorAll("li")
            // for loop to create list items for first 12 quotes
            if (data.quotes[0].body === "No quotes found") {
                document.querySelector("h1").textContent = "No results found. Please enter a valid search term."
                return
            }
            for (var i = 0; i < 12; i++) {
                // declares figure, img, and figcaption elements and the assigns classes/attributes and appends
                document.querySelector("h1").textContent = "Please select a quote"
                figureEl = document.createElement("figure")
                figureEl.setAttribute("class", "uk-overlay")
                liEl[i + 2].append(figureEl)

                var imgEl = document.createElement("img")
                imgEl.setAttribute("src", "assets/flat-background.png")
                imgEl.setAttribute("style", "z-index: -1; height: 300px") //Mychal added 'height' property
                figureEl.append(imgEl)

                var figCaptionEl = document.createElement("figcaption")
                figCaptionEl.setAttribute("class", "uk-overlay-panel uk-flex uk-flex-center uk-flex-middle uk-text-center quote-text")
                figCaptionEl.setAttribute("style", "z-index: 1")
                figureEl.append(figCaptionEl)
                figCaptionEl.textContent = '"' + data.quotes[i].body + '" ' + '- ' + data.quotes[i].author

                // creates select button, adds id, and appends to liEl
                quoteButton = document.createElement("button")
                quoteButton.textContent = "Select"
                quoteButton.setAttribute("class", "uk-button select-quote")
                quoteButton.setAttribute("id", data.quotes[i].author)
                figCaptionEl.append(quoteButton)

                // adds event handler to quoteButton
                quoteButton.addEventListener("click", function (event) {
                    // for loop to match button id with author and sets key as author and value as quote in local storage
                    console.log('clicked')
                    console.log(event.target.id)

                    for (var i = 0; i < data.quotes.length; i++) {

                        if (event.target.id === data.quotes[i].author) {

                            var quotePicked = '"' + data.quotes[i].body + '" ' + '- ' + data.quotes[i].author
                            localStorage.setItem("quotePick", quotePicked)
                        }

                    }
                    window.location = "pic-search.html"
                })
            }
        })
})



