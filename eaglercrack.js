ModAPI.require("player");
ModAPI.require("settings");
var client = "eaglercrack";
let playerFound = false;
let open = false;
let background; 

var settings = {

}

var modules = {

}

function checkForGame() {
    if (typeof ModAPI.player !== 'undefined') {
        playerFound = true;
    } else {
        console.log('Player doesn\'t exist yet, please join a server or singleplayer world...');
    }
}

checkForGame();

const intervalId = setInterval(() => {
    if (playerFound) {
        clearInterval(intervalId); 
        ModAPI.displayToChat({msg: "§5Press Right Shift to open menu"})

        window.addEventListener("keydown", (event) => {
            if (event.key.toLowerCase() === "shift" && open == false) {
                open = true;
                loadgui();

            } else if (event.key.toLocaleLowerCase() === "shift" && open == true) {
                open = false;
                killgui();
            }
        });
    
    } else {
        checkForGame();
    }
}, 1000);

const guicheck = setInterval(() => {
    if (open == false || document.getElementById("background") != null) {
        document.body.removeChild(background);
    } 
}, 100)

function loadgui() {
    document.exitPointerLock();
    ModAPI.displayToChat({msg: "§5opened"});

    background = document.createElement("div");
    document.body.appendChild(background);
    background.id = "background";
    background.style.position = "fixed";
    background.style.width = "660px";
    background.style.height = "460px";
    background.style.top = "50%";
    background.style.left = "50%";
    background.style.transform = "translate(-50%, -50%)";
    background.style.zIndex = "1000";
    background.style.borderRadius = "20px";
    background.style.background = "rgba(0, 0, 0, 0.5)";
}

function killgui() {
    ModAPI.displayToChat({ msg: "§5closed" });

    if (background) {
        document.body.removeChild(background);
    }
}
