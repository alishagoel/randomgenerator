let heading = document.getElementById("title");
let outputParagraph = document.getElementById("outputText");
let executeButton = document.getElementById("executeButton");
let inputElement = document.getElementById("myInput");
let Pictures = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg"];

executeButton.addEventListener("click", function () {
    generateRandomPicture();
    restyle();
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

function restyle(){
	let textAlign = ["left", "center", "right"];
	let colors = 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')';
    let size = ["1.2rem", "1.5rem", "1.8rem"];

    let randomSize = size[Math.floor(Math.random() * size.length)];
    let randomTextAlign = textAlign[Math.floor(Math.random() * textAlign.length)];

    outputText.style.color = colors;
    outputText.style.fontSize = randomSize;
    outputText.style.textAlign = randomTextAlign;
}