console.log(document);

var searchButton = document.getElementById("search-button") //changed querySelector to getElementById to match HTML search button

var inputField = document.querySelector("input")

searchButton.addEventListener("click", function (event) {
    event.preventDefault()
    var userQuery = inputField.value
    console.log(userQuery)
    var quotesAPI = "https://favqs.com/api/quotes/?filter=" + userQuery


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


        })

})