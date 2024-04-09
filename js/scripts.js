// function to change bg color from user input and add student id
function changeCustomColor() {
    var userInput = parseInt(document.getElementById("customNumber").value);
    var studentId = "my student Id"; 
    document.getElementById("myStudentId").innerText = studentId;

    var body = document.body;

    if (userInput < 0 || userInput > 100) {
        body.style.backgroundColor = "red";
    } else if (userInput >= 0 && userInput < 20) {
        body.style.backgroundColor = "green";
    } else if (userInput >= 20 && userInput < 40) {
        body.style.backgroundColor = "blue";
    } else if (userInput >= 40 && userInput < 60) {
        body.style.backgroundColor = "orange";
    } else if (userInput >= 60 && userInput < 80) {
        body.style.backgroundColor = "purple";
    } else {
        body.style.backgroundColor = "yellow";
    }
}

// function to change bg color from random no.
function changeRandomColor() {
    var randomNumber = Math.floor(Math.random() * 100) + 1;
    var studentId = "My student Id";
    document.getElementById("myStudentId").innerText = studentId;

    var body = document.body;

    if (randomNumber < 0 || randomNumber > 100) {
        body.style.backgroundColor = "red";
    } else if (randomNumber >= 0 && randomNumber < 20) {
        body.style.backgroundColor = "green";
    } else if (randomNumber >= 20 && randomNumber < 40) {
        body.style.backgroundColor = "blue";
    } else if (randomNumber >= 40 && randomNumber < 60) {
        body.style.backgroundColor = "orange";
    } else if (randomNumber >= 60 && randomNumber < 80) {
        body.style.backgroundColor = "purple";
    } else {
        body.style.backgroundColor = "yellow";
    }
}

// function to generate options for select list
function addList() {
    var images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];
    var select = document.getElementById("imageSelect");

    // Clear existing options
    select.innerHTML = "";

    // Add default option 
    var defaultOption = document.createElement("option");
    defaultOption.text = "Please choose...";
    select.add(defaultOption);

    // Add options for each image
    images.forEach(function(image) {
        var option = document.createElement("option");
        option.text = image;
        select.add(option);
    });
}

// function to change image
function changeImage() {
    var select = document.getElementById("imageSelect");
    var selectedImage = select.options[select.selectedIndex].text;
    var imagePath = "img/" + selectedImage;
    var image = document.getElementById("images");
    image.src = imagePath;
}

document.addEventListener("DOMContentLoaded", function() {
    // Event listener for change custom color button
    document.querySelector(".custColor").addEventListener("click", changeCustomColor);

    // Event listener for change random color button
    document.querySelector(".randColor").addEventListener("click", changeRandomColor);

    // Event listener for select list change
    document.getElementById("imageSelect").addEventListener("change", changeImage);

    // Call addList function to populate select options
    addList();
});