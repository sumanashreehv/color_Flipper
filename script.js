const newColBtnElem = document.getElementById("new-color-button");
const curCol = document.getElementById("current-color");
let hexValueString = 6

// 0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F

const hexValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

function findHexRandomValue() {
    const randomIndexPosition = Math.floor(Math.random() * hexValues.length);
    console.log(randomIndexPosition);
    const randomValueHex = hexValues[randomIndexPosition]
    console.log(randomValueHex);
    return randomValueHex
}

function getHexRandomNumber() {
    let hexString = "";
    for (let index = 0; index < hexValueString; index++) {
        hexString += findHexRandomValue();
    }
    return hexString;
}

newColBtnElem.addEventListener("click", function () {
    const randomHexString = "#" + getHexRandomNumber();

    document.body.style.backgroundColor = randomHexString
    curCol.textContent = randomHexString;
    console.log(randomHexString);
})