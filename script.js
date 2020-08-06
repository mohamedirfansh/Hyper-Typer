var words =[
    [ 
        "next",
        "short",
        "nice",
        "bottle",
        "full",
        "soda",
        "vast",
        "glue",
        "close",
        "hurry",
        "robin",
        "trace",
        "rock",
        "absent",
        "cover",
        "note",
        "burst",
        "relax",
        "group",
        "sad",
        "rob",
        "yell",
        "pop",
        "mix",
        "fix",
        "hot",
        "pin",
        "hill",
        "wiry",
        "dirt",
    ],
    [
        "paddle",
        "answer",
        "awesome",
        "distance",
        "fertile",
        "wakeful",
        "belief",
        "slippery",
        "bizarre",
        "learned",
        "vivacious",
        "grandmother",
        "illegal",
        "thirsty",
        "wholesale",
        "tenuous",
        "skillful",
        "deteriorate",
        "poised",
        "humorous",
        "scrape",
        "replace",
        "languid",
        "adjoining",
        "interesting",
        "stranger",
        "polite",
        "scissors",
        "brainy",
        "interrogation",  
    ],
    [
        "return;",
        "#include",
        "'helloworld'",
        "obj:1",
        "call()",
        "&lt;html&gt;",
        "not_easy",
        "more-dashes",
        "camelCase",
        "ASCII",
        "array[]",
        "printf('')",
        "&lt;/html&gt;",
        "^regex$",
        "System.out.println()",
    ],
    [

        
    ],
]

// Important variables for the app
var level = 0;
var pointer = 0;
var currentWord = words[level][pointer];
var input = document.querySelector("#inputField");
var box = document.querySelector("#scrollingWords");
var originalOffset = 133;
var offset = 133;
var nextOffset = 31;
var red = 0;
var green = 255;
var blue = 0;
var rotationOffset = -90;
var colorAddition = 25.5;
var rotationAddition = 9;
var originalCountdown = 4;
var countdown = originalCountdown;
var quaters = document.querySelectorAll(".quaters");
var score = 0;
var highscore = 0;

function displayWordOnPanel(final) {
    // To fill the scrolling words with the upcoming words
    document.getElementsByTagName("ul")[0].innerHTML = final;
    // Displaying the current word on the arrow in the scrolling word panel
    var currentScrollWord = document.getElementsByTagName("li")[pointer];
    currentScrollWord.style.fontSize = "19pt";
    currentScrollWord.style.fontWeight = "bold";
    currentScrollWord.style.color = "rgb(160, 57, 87)";
}

function addBouncyIntro() {
    document.getElementsByClassName("bouncy")[0].classList.add("bouncyIntro");
    document.getElementById("q1").classList.add("q1c");
    document.getElementById("q2").classList.add("q2c");
    document.getElementById("q3").classList.add("q3c");
    document.getElementById("q4").classList.add("q4c");
}

function removeBouncyIntro() {
    document.getElementsByClassName("bouncy")[0].classList.remove("bouncyIntro");
    document.getElementsByClassName("bouncy")[0].style.opacity = "1";
    document.getElementById("q1").classList.remove("q1c");
    document.getElementById("q2").classList.remove("q2c");
    document.getElementById("q3").classList.remove("q3c");
    document.getElementById("q4").classList.remove("q4c"); 
    document.getElementsByClassName("bouncy")[0].classList.remove("bounce");  
}

// When the apps is first started or upon refresh
window.onload = function() {
    var final = "";
    for(var i = 0; i < words[level].length; i++){
        final += `<li>${words[level][i]}</li>`;
    }
    addBouncyIntro();
    displayWordOnPanel(final);
    // Display the word to type
    document.querySelector("#word").innerHTML = currentWord;
}

input.onfocus = function() {
    input.placeholder = "Type the word above";
}

input.onblur = function() {
    input.placeholder = "Click to start typing";
}

// Function to move the color around the circle
function movers(index) {
    rotationOffset += rotationAddition;
    for (var i = index; i < 4; i++){
        document.getElementsByClassName("movers")[i].style.transform = `rotate(${rotationOffset.toString()}deg)`;
    }
}

// Function to fill circle with colors as game progresses
function setColors() {
    if (green === 255 && red < 255 && blue === 0){
        red += colorAddition
        movers(1);
    }
    else if (green > 0 && red === 255 && blue === 0){
        green -= colorAddition
        movers(2);
    }
    else if (green === 0 && red === 255 && blue < 255){
        blue += colorAddition
        movers(3);
    }
}

// Function to reset the circle color when changing level
function resetCirlce(){
    red = blue = 0;
    green = 255;
    rotationOffset = -90;
    quaters.forEach(quater => {
        var newColor = `rgb(${red.toString()}, ${green.toString()}, ${blue.toString()})`;
        quater.style.borderLeftColor = newColor;
        quater.style.borderTopColor = newColor;
        quater.style.transform = `rotate(${rotationOffset.toString()}deg)`;
    })
}

//TO CHANGE!
function changeLevel(newLevel) {
    input.value = "";
    this.addBouncyIntro();
    this.resetCirlce();
    // Set new level and change word list for use
    level = newLevel;
    pointer = 0;
    currentWord = words[level][pointer];
    var final = "";
    for(var i = 0; i < words[level].length; i++) {
        final += "<li>" + words[level][i] + "</li>";
    }
    document.getElementsByTagName("ul")[0].innerHTML = final;
    document.getElementById("word").innerHTML = currentWord;
    offset = originalOffset;
    var currentScroll = document.getElementsByTagName("li")[pointer];
    currentScroll.style.fontSize = "19pt";
    currentScroll.style.fontWeight = "bold";
    currentScroll.style.color = "rgb(160, 57, 87)";
    var setLevel = level===2?"Coding":level;
    document.getElementById("message").innerHTML = "Level-" + level.toString();
    box.style.marginTop = offset.toString() + "px";
}

function setScore() {
    score += countdown;
    document.querySelector("#score").innerHTML = score.toString();
}

function setHighScore() {
    if (score > highscore){
        highscore = score;
        document.querySelector("#high").innerHTML = highscore.toString();
    }
    // Reset current score
    score = 0;
    document.querySelector("#score").innerHTML = score.toString();
}

function decodeHtml(html) {
    var textArea = document.createElement("textarea");
    textArea.innerHTML = html;
	return textArea.value;
}

input.oninput = function() {
    if (level === 0 && pointer === 0 && input.value.length === 1){
        var timed = setInterval(clockHandler, 1000);
        function clockHandler() {
            if (countdown > 0){
                countdown--;
                if (countdown === 0){
                    document.querySelector("#message").innerHTML = "Game Over!";
                    document.querySelector("#message").style.color = "rgb(255, 0, 0)";
                    input.blur();
                    input.value = "";
                    setTimeout(() => {
                        clearInterval(timed);
                        changeLevel(0);
                        countdown = originalCountdown;
                        setHighScore();
                        document.querySelector("#seconds").innerHTML = originalCountdown;
                    }, 1000);
                }
            }
            document.querySelector("#seconds").innerHTML = countdown;
        }
    }
    removeBouncyIntro();
    // To check if current word is typed correctly
    if (input.value === decodeHtml(words[level][pointer])) {
        setColors();
        setScore();
        if (level === 0 && pointer >=19 && pointer != 29)
            countdown = 3;
        else
            countdown = 4;
        document.getElementById("seconds").innerHTML = countdown;
        if (blue === 255) {
            var n = level + 1;
            changeLevel(n);
        }
        else {
            pointer += 1;
            currentWord = words[level][pointer];
            document.getElementById("word").innerHTML = currentWord;
            var currentScroll = document.getElementsByTagName("li")[pointer-1];
            currentScroll.style.fontSize = "13pt";
            currentScroll.style.fontWeight = "";
            currentScroll.style.color = "rgb(208, 147, 129)";
            currentScroll = document.getElementsByTagName("li")[pointer];
            currentScroll.style.fontSize = "19pt";
            currentScroll.style.fontWeight = "bold";
            currentScroll.style.color = "rgb(160, 57, 87)";
            document.getElementsByClassName("bouncy")[0].classList.add("bounce");
            offset = offset - nextOffset;
            quaters.forEach(quater => {
                var c = "rgb(" + red.toString() + "," + green.toString() + "," + blue.toString() + ")";
                quater.style.borderLeftColor = c;
                quater.style.borderTopColor = c;
            })
            box.style.marginTop = offset.toString() + "px";
            input.value = "";
        }   
    }
}