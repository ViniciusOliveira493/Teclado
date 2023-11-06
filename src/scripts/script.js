document.getElementById("keyContainer").addEventListener("click",function (e) {
    if(e.target.id != "keyContainer"){
        playNote(e.target.id);
    }
});

document.addEventListener("keydown",function (key) {
    console.log(key.key);
    switch (key.key) {
        case "a":
            pressKey("c4");
            break;
        case "s":
            pressKey("d4");
            break;
        case "d":
            pressKey("e4");
            break;
        case "f":
            pressKey("f4");
            break;
        case "g":
            pressKey("g4");
            break;
        case "h":
            pressKey("a4");
            break;
        case "j":
            pressKey("b4");
            break;
        case "k":
            pressKey("c5");
            break;
        case "l":
            pressKey("d5");
            break;
        case ";":
            pressKey("e5");
            break;
        case "w":
            pressKey("cs4");
            break;
        case "e":
            pressKey("ds4");
            break;
        case "t":
            pressKey("fs4");
            break;
        case "y":
            pressKey("gs4");
            break;
        case "u":
            pressKey("as4");
            break;
        case "o":
            pressKey("cs5");
            break;
        case "p":
            pressKey("ds5");
            break;
        default:
            break;
    }
});

function pressKey(note) {
    document.getElementById(note).classList.add("active");
    setTimeout(() => {
        document.getElementById(note).classList.remove("active");
    },200);
    playNote(note);
}

function playNote(note) {
    let audio = new Audio("./src/tunes/"+note+".wav");
    audio.play();
}