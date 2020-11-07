// buttons for navbar
var navButton = document.querySelectorAll("a")
var homeButton = navButton[0]
homeButton.setAttribute("href", "../index.html")
var devButton = navButton[1]

var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');

function previewImg(input) {
    var reader = new FileReader();
    reader.onload = function (e) {


        // var image = document.querySelector("canvas");

        // image.setAttribute("src", e.target.result);
        // console.log(image)
        var x = document.getElementById("x").value;
        var y = document.getElementById("y").value;
        var width = document.getElementById("width").value;
        var height = document.getElementById("height").value;

        var bkGround = new Image();
        bkGround.onload = function () {
            context.drawImage(bkGround, 0, 0);
        };
        bkGround.src = e.target.result

        context.drawImage(image, x, y, width, height);
        // canvas.setAttribute("src", e.target.result);
    };
    reader.readAsDataURL(input.files[0]);
}

// function setImg() {
//     var x = document.getElementById("x").value;
//     var y = document.getElementById("y").value;
//     var width = document.getElementById("width").value;
//     var height = document.getElementById("height").value;

//     var image = document.getElementById("preview");
//     context.drawImage(image, x, y, width, height);
// }
// IMAGE ====================================================================================
// var userQuote = localStorage.getItem("quotePick")
// var canvas = document.getElementById("canvas");
// var userImage = localStorage.getItem("imagePick")


// var ctx = canvas.getContext("2d");
// var bkGround = new Image();
// bkGround.onload = function () {
//     ctx.drawImage(bkGround, 0, 0);
// };
// bkGround.src = userImage;
// console.log(ctx)

// QUOTE =====================================================================================
// var ftx = canvas.getContext("2d");
// ftx.font = "20px Arial sans-serif";
// ftx.fillStyle = "color";
// ftx.fillText(userQuote, 100, 700)
// ftx.textAlign = "center";
// ftx.lineWidth = 1
// ftx.strokeStyle = "#000000"

// ftx.strokeText(userQuote, 210, 700); // not in use

// download button ============================================================================
// var btnDownlaod = document.createElement("button")
// btnDownlaod.setAttribute("class", "download uk-button");
// btnDownlaod.textContent = "download"
// document.body.children[2].append(btnDownlaod)

// ============================================================================================
// btnDownlaod.addEventListener("click", () => {

//     let imgPath = userImage
//     console.log(imgPath)
//     // console.log(data.results[i].urls.small)
//     // for (var i = 0; i < data.results.length; i++)
//     // if (imgPath === data.results[i].urls.small) {
//     let fileName = userQuote
//     console.log(fileName)

//     saveAs(imgPath, fileName)
//     // }
// });
