var firstInput = document.getElementById("input1");
var firstButton = document.getElementById("button1");
var ul1 = document.querySelector(".list1");
var secondInput = document.getElementById("input2");
var secondButton = document.getElementById("button2");
var ul2 = document.querySelector(".list2");

function inputLength1() {
    return firstInput.value.length;
}

function inputLength2() {
    return secondInput.value.length;
}

function appendList1() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(firstInput.value))
    ul1.appendChild(li);
    firstInput.value = "";
}

function appendList2() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(secondInput.value))
    ul2.appendChild(li);
    secondInput.value = "";
}

function buttonEventFirst() {
    if (inputLength1() > 0) {
        appendList1();
    }
}

function buttonEventSecond() {
    if (inputLength2() > 0) {
        appendList2();
    }
}

firstButton.addEventListener("click", buttonEventFirst);

secondButton.addEventListener("click", buttonEventSecond);

firstInput.addEventListener("keypress", function(event) {
    if (inputLength1() > 0 && event.which === 13) {
        appendList1();
    }
})

secondInput.addEventListener("keypress", function(event) {
    if (inputLength2() > 0 && event.which === 13) {
        appendList2();
    }
})

var cssCode = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("#gradient");

function grading() {
    body.style.background =
        "linear-gradient(to right, " +
        color1.value +
        ", " +
        color2.value +
        ")";
}
color1.addEventListener("input", grading);

color2.addEventListener("input", grading);