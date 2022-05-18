let word = sessionStorage.getItem("word").toUpperCase();
var array = word.split("");
var hiddenWord;
const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let difficulty = sessionStorage.getItem("difficulty")
var guessCount = difficulty;
var gameover = false;

function wordCreate(x) {
    if(x == undefined) {
        for(var i=0;i<word.length;i++) {
            array.splice(i, 1, "_");
        }
        hiddenWord = array.join("");
        array = word.split("");
    }
    else {
        hiddenWord = hiddenWord.split("");
        for(var i=0;i<word.length;i++) {
            if(array[i].includes(x)) {
                hiddenWord.splice(i, 1, x);
            }
        }
        hiddenWord = hiddenWord.join("");
    }
    document.getElementById("theWord").innerText = hiddenWord;
}

function loseCheck() {
    if(guessCount <= 0) {
        alert("You lose!");
        document.getElementById("theWord").innerText = word;
        gameover = true;
    }
}

function winCheck() {
    if(!hiddenWord.includes("_")) {
        alert("You Win!");
        gameover = true;
    }
}

function changeImg() {
    if(guessCount == difficulty) {
        document.getElementById("image").src=`../Images/img${1}.svg`;
    }
    else {
        switch(Number(difficulty)) {
            case 3:
                if(guessCount == 2) {
                    document.getElementById("image").src=`../Images/img${3}.svg`
                }
                else if(guessCount == 1) {
                    document.getElementById("image").src=`../Images/img${4}.svg`
                }
                else {
                    document.getElementById("image").src=`../Images/img${8}.svg`
                }
                break;
            case 4:
                if(guessCount == 3) {
                    document.getElementById("image").src=`../Images/img${2}.svg`
                }
                else if(guessCount == 2) {
                    document.getElementById("image").src=`../Images/img${3}.svg`
                }
                else if(guessCount == 1){
                    document.getElementById("image").src=`../Images/img${4}.svg`
                }
                else {
                    document.getElementById("image").src=`../Images/img${8}.svg`
                }
                break;
            case 5:
                if(guessCount == 4) {
                    document.getElementById("image").src=`../Images/img${2}.svg`
                }
                else if(guessCount == 3) {
                    document.getElementById("image").src=`../Images/img${3}.svg`
                }
                else if(guessCount == 2) {
                    document.getElementById("image").src=`../Images/img${4}.svg`
                }
                else if(guessCount == 1){
                    document.getElementById("image").src=`../Images/img${6}.svg`
                }
                else {
                    document.getElementById("image").src=`../Images/img${8}.svg`
                }
                break;
            case 7:
                if(guessCount == 6) {
                    document.getElementById("image").src=`../Images/img${2}.svg`
                }
                else if(guessCount == 5) {
                    document.getElementById("image").src=`../Images/img${3}.svg`
                }
                else if(guessCount == 4) {
                    document.getElementById("image").src=`../Images/img${4}.svg`
                }
                else if(guessCount == 3){
                    document.getElementById("image").src=`../Images/img${5}.svg`
                }
                else if(guessCount == 2) {
                    document.getElementById("image").src=`../Images/img${6}.svg`
                }
                else if(guessCount == 1){
                    document.getElementById("image").src=`../Images/img${7}.svg`
                }
                else {
                    document.getElementById("image").src=`../Images/img${8}.svg`
                }
                break;
        }
    }
}

function guess(x, elem) {
    if(!gameover) {
        var test = x.slice(1);
        if(elem.className == "letter gray") {
            if(word.includes(alphabet[test])) {
                elem.className = "letter green";
                wordCreate(alphabet[test]);
                winCheck();
            }
            else {
                elem.className = "letter red";
                guessCount--;
                changeImg();
                loseCheck();
            }
        }
    }
}

window.addEventListener("load", function() {
    let letter = document.querySelectorAll(".letter");
    letter.forEach(function(elem, index, arr) {
        elem.addEventListener("click", function() {
            guess(arr[index].id, elem);
        });
    });
    wordCreate();
});