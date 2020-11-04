console.log(document);

// declaring variables in global memory to store locations of search button and input field
var searchButton = document.getElementById("search-button") //changed querySelector to getElementById to match HTML search button
var inputField = document.querySelector("input")

// eventlistner on the search button to call fetch function
searchButton.addEventListener("click", function (event) {
    event.preventDefault()
    // declares variable in local memory to store value from input field
    var userQuery = inputField.value
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
            // creates div underneath search bar and appends to document
            var quoteDiv = document.createElement("div");
            document.body.children[1].append(quoteDiv);

            // for loop to create list items for first 12 quotes
            for (var i = 0; i < 12; i++) {
                // creates li, adds quote and author as text content and appends to quoteDiv
                var liEl = document.createElement("li")
                liEl.textContent = '"' + data.quotes[i].body + '" ' + '- ' + data.quotes[i].author
                quoteDiv.append(liEl)

                // creates select button, adds id, and appends to liEl
                quoteButton = document.createElement("button")
                quoteButton.textContent = "Select"
                quoteButton.setAttribute("id", data.quotes[i].author)
                liEl.append(quoteButton)

                // adds event handler to quoteButton
                quoteButton.addEventListener("click", function (event) {
                    // for loop to match button id with author and sets key as author and value as quote in local storage
                    for (var i = 0; i < 12; i++) {
                        if (event.target.id === data.quotes[i].author) {
                            console.log(data.quotes[i].body)
                            localStorage.setItem(event.target.id, data.quotes[i].body)
                        }
                    }
                })
                // console.log(data.quotes[0].tags);

                // // declaring variable in Global Memory to use in unSplash API query parameter
                // tags = JSON.stringify(data.quote.tags)

                // var randomQuoteDiv = document.createElement("div");
                // document.body.append(randomQuoteDiv);
                // var randomQuote = document.createElement("h2");
                // randomQuote.textContent = data.quote.body
                // randomQuoteDiv.append(randomQuote);
                // var unsplashAPI = "https://api.unsplash.com/search/photos?query=" + tags + "&client_id=nTDcb20SlPlnOUb5B3Z5i9q1D8woTYppcHS-nLzA2Ho"

                // fetch(unsplashAPI)

                //     .then(function (response) {

                //         return response.json();
                //     })

                //     .then(function (data) {

                //         console.log(data);

                //         var randomPicDiv = document.createElement("div");
                //         document.body.append(randomPicDiv);
                //         var randomPicImg = document.createElement("img");
                //         randomPicImg.setAttribute("src", data.results[0].urls.small);
                //         randomPicDiv.append(randomPicImg);

                //         console.log(data.results[0].urls.small)
                //     })


            }
        })
})