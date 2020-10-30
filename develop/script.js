var unsplashAPI = "https://api.unsplash.com/photos/random/?client_id=nTDcb20SlPlnOUb5B3Z5i9q1D8woTYppcHS-nLzA2Ho"

fetch(unsplashAPI)

    .then(function (response) {

        return response.json();
    })

    .then(function (data) {

        console.log(data);

        var randomPicDiv = document.createElement("div");
        document.body.append(randomPicDiv);
        var randomPicImg = document.createElement("img");
        randomPicImg.setAttribute("src", data.links.html);
        console.log(data.links.download)
        randomPicDiv.append(randomPicImg);

    })

