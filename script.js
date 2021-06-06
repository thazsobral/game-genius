let gameOrder = [];
let userOrder = [];
let level = document.getElementById("level");

/**
 * Values referents to color for sequence
 * 0 - green
 * 1 - red
 * 2 - yellow
 * 3 - blue
 */

const blue = document.getElementById("blue");
const yellow = document.getElementById("yellow");
const green = document.getElementById("green");
const red = document.getElementById("red");

let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    gameOrder[gameOrder.length] = colorOrder;
    userOrder = [];

    for(let value in gameOrder) {
        let elementColor = createColorElement(gameOrder[value]);
        lightColor(elementColor, Number(value) + 1);
    }
}

let lightColor = (element, number) => {
    number *= 500;
    
    setTimeout(() => {
        element.classList.remove("unselected");
    }, number - 250);

    setTimeout(() => {
        element.classList.add("unselected");
    }, number);
}

let checkOrder = () => {
    for(let value in userOrder) {
        if(userOrder[value] != gameOrder[value]) {
            gameOver();
            break;
        }
    }

    if(userOrder.length == gameOrder.length) {
        alert(`Você acertou! Iniciando próximo nível`);
        nextLevel();
    }
}

let userClick = (color) => {
    userOrder[userOrder.length] = color;
    createColorElement(color).classList.remove("unselected");

    setTimeout(() => {
        createColorElement(color).classList.add("unselected");
        checkOrder();
    }, 250);
}

let createColorElement = (color) => {
    if(color == 0) return green;
    else if (color == 1) return red;
    else if (color == 2) return yellow;
    else if (color == 3) return blue;
}

let nextLevel = () => {
    level.innerText = Number(level.innerText) + 1;
    shuffleOrder();
}

let gameOver = () => {
    alert(`Você alcançou o nível ${level.innerHTML}.\nClique em OK para remoçar.`)
    gameOrder = [];
    userOrder = [];

    playGame();
}

let playGame = () => {
    alert(`Bem vindo ao genius!`);
    level.innerText = Number(0);

    nextLevel();
}

green.onclick = () => userClick(0);
red.onclick = () => userClick(1);
yellow.onclick = () => userClick(2);
blue.onclick = () => userClick(3);

playGame();
