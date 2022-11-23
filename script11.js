'use strict'


// Задание 1
let array = [];

const containerArray = document.querySelector(".array_container");
const addButton = document.querySelector(".add_button");
const deleteButton = document.querySelector(".delete_button");
const replaceButton = document.querySelector(".replace_button");

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

addButton.addEventListener("click", event => {
    let block = document.createElement("div");
    block.classList.add("card");
    let title = document.createElement("h2");
    title.classList.add("title", "title_h2");
    title.innerHTML = getRandomInt(1,10);
    array.push(title.innerHTML);
    block.append(title);
    containerArray.append(block);
});

deleteButton.addEventListener("click", event => {
    while(containerArray.lastElementChild){
        containerArray.removeChild(containerArray.lastElementChild);
    }
    array.shift();
    for (let arr of array){
        let block = document.createElement("div");
        block.classList.add("card");
        let title = document.createElement("h2");
        title.classList.add("title", "title_h2");
        title.innerHTML = arr;
        block.append(title);
        containerArray.append(block);
    }
});

replaceButton.addEventListener("click", event => {
    while(containerArray.lastElementChild){
        containerArray.removeChild(containerArray.lastElementChild);
    }
    let index = Math.floor(Math.random() * array.length);
    let el = Math.floor(Math.random() * array.length);
    let tmp = array[index];
    array[index] = array[el];
    array[el] = tmp;
    for (let arr of array){
        let block = document.createElement("div");
        block.classList.add("card");
        let title = document.createElement("h2");
        title.classList.add("title", "title_h2");
        title.innerHTML = arr;
        block.append(title);
        containerArray.append(block);
    }
});

// Задание 2
let array1 = [1,2,3,4,5,6,7,8,9,10];
console.log(array1);
let newArray = array1.filter(item => (item >= 3 && item <= 6));
console.log(newArray);

//Задание 3
const sortButton = document.querySelector(".sort_button");
let list = document.querySelectorAll(".array");
let array2 = new Array();
for(let el of list){
    array2.push(Number(el.innerHTML));
}
function compare(a, b){
    return Number(a) - Number(b);
}
sortButton.addEventListener("click", event => {
    array2.sort(compare);
    for(let i = 0; i < array2.length; i++){
        list[i].innerHTML = array2[i];
    }
});

// Задание 4-5
const notification = document.querySelector(".notification_img");
const listNotification = document.querySelector(".notification_text");
let counter = document.querySelector(".counter");

function counterN(){
    counter.style.opacity = 1;
    counter.innerHTML++;
    let el = document.createElement("li");
    el.innerHTML = "";
    listNotification.append(el);
}

let timerId = setTimeout(
    function tick(){
        counterN();
        timerId = setTimeout(tick, 3000);
    }, 3000);

notification.addEventListener("click", event => {
    if(listNotification.classList.contains("active")){
        clearTimeout(timerId);
        listNotification.classList.remove("active");
        while(listNotification.lastElementChild){
            listNotification.removeChild(listNotification.lastElementChild);
        }
        counter.innerHTML = 0;
        counter.style.opacity = 0;
        timerId = setTimeout(
            function tick(){
                counterN();
                timerId = setTimeout(tick, 3000);
            }, 10000);
    }
    else{
        listNotification.classList.add("active");
    }
});