// buttons for navbar
var navButton = document.querySelectorAll("a")
var homeButton = navButton[0]
homeButton.setAttribute("href", "index.html")
var devButton = navButton[1]

// declaring variables in global memory to store values from Local Storage
var userKeyword = localStorage.getItem("query")
var quotePick = localStorage.getItem("quotePick")

document.onload = getUnSplash()

function getUnSplash() {
    var unsplashAPI = "https://api.unsplash.com/search/photos?query=" + userKeyword + "&per_page=15&orientation=portrait&client_id=nTDcb20SlPlnOUb5B3Z5i9q1D8woTYppcHS-nLzA2Ho"

    fetch(unsplashAPI)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            // creates images from the URLs returned in data and appends them with the quote user selected (retrieved from Local Storage)
            for (var i = 0; i < 12; i++) {
                var liEl = document.querySelectorAll("li")
                var figureEl = document.createElement("div")
                figureEl.setAttribute("class", "uk-overlay downloadContent")
                figureEl.setAttribute("id", "download-content")
                liEl[i + 2].append(figureEl)

                var imgEl = document.createElement("img")
                imgEl.setAttribute("src", data.results[i].urls.small)
                imgEl.setAttribute("style", "z-index: -1")
                figureEl.append(imgEl)

                var btnDownlaod = document.createElement("button");
                btnDownlaod.setAttribute("class", "uk-button uk-position-top btnDownload");
                btnDownlaod.setAttribute("src", data.results[i].urls.small)
                btnDownlaod.setAttribute("id", data.results[i].urls.small)
                btnDownlaod.textContent = "Select"
                figureEl.append(btnDownlaod)

                var figCaptionEl = document.createElement("figcaption")
                figCaptionEl.setAttribute("class", "uk-position-bottom custom-overlay")
                figCaptionEl.setAttribute("style", "z-index: 1")
                figureEl.append(figCaptionEl)
                figCaptionEl.textContent = localStorage.getItem("quotePick")

                //button to download user selection
                btnDownlaod.addEventListener("click", (event) => {

                    let imgPath = event.target.getAttribute("src");

                    for (var i = 0; i < data.results.length; i++)
                        if (imgPath === data.results[i].urls.small) {
                            let fileName = data.results[i].user.username + "-" + data.results[i].user.id
                            console.log(fileName)
                            saveAs(imgPath, fileName)
                        }
                });

            }

        })
}
