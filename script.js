let heading = document.getElementById("title");
let outputParagraph = document.getElementById("outputText");
let executeButton = document.getElementById("executeButton");
let inputElement = document.getElementById("myInput");
let Pictures = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg"];

executeButton.addEventListener("click", function () {
    generateRandomPicture();
});

function generateRandomPicture() {
    let outputImage = document.getElementById("outputImage");
    let randomIndex = Math.floor(Math.random() * Pictures.length);
    let randomPicture = Pictures[randomIndex];
    let imagePath = randomPicture; 
    let currentInputText = inputElement.value;
    outputParagraph.innerHTML = currentInputText + ", I hope today you";
    outputImage.src = imagePath;
}