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
var box = document.querySelector("#scrollingwords");
var originalOffset = 133;
var offset = 133;
var nextOffset = 31;
var red = 0;
var green = 255;
var blue = 0;
var rotationOffset = -90;
var colorAddition = 9;
var countdown = 4;
var quaters = document.querySelectorAll(".quaters");
var score = 0;
var highscore = 0;

// When the apps is first started or upon refresh
window.onload = function() {
    var final = "";
    for(var i = 0; i < words[level].length; i++){
        final += `<li>${words[level][i]}</li>`;
    }
    // document.getElementsByClassName("bouncy")[0].classList.add("bouncyIntro");
    document.querySelector("#q1").classList.add("q1c");
    document.querySelector("#q2").classList.add("q2c");
    document.querySelector("#q3").classList.add("q3c");
    document.querySelector("#q3").classList.add("q4c");
    // To fill the scrolling words with the upcoming words
    document.getElementsByTagName("ul")[0].innerHTML = final;
    // Display the word to type
    document.querySelector("#word").innerHTML = currentWord;
    // Displaying the current word on the arrow in the scrolling word panel
    var currentScrollWord = document.getElementsByTagName("li")[pointer];
    currentScrollWord.style.fontSize = "19pt";
    currentScrollWord.style.fontWeight = "bold";
    currentScrollWord.style.color = "rgb(160, 57, 87)";

}