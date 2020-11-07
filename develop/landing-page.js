// buttons for navbar
var navButton = document.querySelectorAll("a")
var homeButton = navButton[0]
homeButton.setAttribute("href", "index.html")
var devButton = navButton[1]


// button for "Go"
var goButton = document.getElementById("get-started-button");
goButton.addEventListener("click", function () {
    window.location = "quote-search.html"
})
