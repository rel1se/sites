
//Задание 1 

const textCapture = document.querySelector(".text");

const checkButton = document.querySelector(".check_btn");
const disabledButton = document.querySelector(".disabled_btn");
const answer = document.querySelector(".capture_text");

var flag = true;

//Случайное число от min до max

function getRandomInt(min,max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function click(){
    flag = false;
    console.log(flag);
    if(answer.value == textCapture.innerHTML){
        disabledButton.disabled = false;
    }
    else{
        capture();
    }
}
function capture(){
    if(flag){
        const randomchar ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        while (textCapture.innerHTML.length < 5) {
            textCapture.innerHTML += randomchar[Math.floor(Math.random() * randomchar.length)];
        }
        checkButton.addEventListener("click", click);
    }
    else{
        let num1 = getRandomInt(1,10);
        let num2 = getRandomInt(1,10);
        textCapture.innerHTML = num1 + " + " + num2;
        checkButton.removeEventListener("click", click);
        checkButton.addEventListener("click", event => {
            if(Number(answer.value) === num1 + num2){
                disabledButton.disabled = false;
            }
            else{
                capture();
            }
        });
    }

}
capture();

//Задание 3

const descriptions = document.querySelectorAll(".article");
for(let el of descriptions){
    el.innerHTML = truncate(el.innerHTML, 200);
}
function truncate(str, maxlength) {
    return (str.length > maxlength) ? str.slice(0, maxlength - 3) + "..." : str;
}

//Задание 2
function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function() {
      this.value += +prompt('Сколько нужно добавить?', 0);
    };
}
let accumulator = new Accumulator(0);
accumulator.read();
alert(accumulator.value);

