document.getElementById("start").addEventListener("click", function() {
    let word = document.getElementById("theword").value;
    let difficulty = document.getElementById("difficulty").value;
    if(word.length >= 3 && difficulty > 0 && word.match(/^[A-Za-z]+$/)) {
        sessionStorage.setItem("word", word);
        sessionStorage.setItem("difficulty", difficulty);
        window.open("HTML/game.html", "_self");
    }
    else {
        alert("Enter a word longer than 3 letters without spaces or numbers.");
    }
});