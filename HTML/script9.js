"use strict"

const like = document.querySelector("._button");
const smile = document.querySelector("._button2");
const heart = document.querySelector(".fa-heart");
const counter = document.querySelector(".count");
const ghost = document.querySelector(".fa-ghost");


let reg = prompt("Желаете пройти регистрацию на сайте?").toLowerCase();
while(true) {
     if (reg === "да") {
         alert("Круто!");
         break;
     } else {
         alert("Попробуй ещё раз!");
     }
     reg = prompt("Желаете пройти регистрацию на сайте?").toLowerCase();
 }
let login = prompt("Введите логин:");
if(login === "Админ") {
    let pass = prompt("Хорошо. Введите пароль:");
    if(pass === "Я главный") alert("Здравствуйте!");
    else if(pass === null || pass === '') alert("Отменено!");
    else alert("Неверный пароль.");
} 
else if (login === null || login === '') 
    alert("Отменено.");   
else alert("Я вас не знаю");

like.addEventListener('click', event => {
    if(heart.style.color == "red") {
        like.style.backgroundColor = "darkgrey";
        heart.style.color = "azure";
        heart.style.marginRight = "0px";
        counter.innerHTML = null;
    } 
    else {
        like.style.backgroundColor = "pink";
        heart.style.color = "red";
        heart.style.marginRight = "15%";
        counter.classList.add("count");
        counter.innerHTML = "1";
    }
}
);

let containerCreate = document.querySelector(".container__create");
let main = document.main;

let create = document.querySelector(".create__buttons");
create.addEventListener("click", event => {
    if(create.classList.contains("active")){
        create.classList.remove("active");
    }
    else{
        create.classList.add("active");
    }
});
let x = 0;
let y = 0;

document.body.addEventListener('mousemove', (e) => {

    let newButton = document.createElement("i");
    newButton.classList.add("fa-solid");
    newButton.classList.add("fa-ghost");
    let localY = e.pageY;
    let localX = e.pageX;

    if(create.classList.contains("active") && Math.abs(x - localX) > 5 && Math.abs(y - localY) > 5){
        newButton.classList.add("create__buttons");
        newButton.classList.add("created__button");
        newButton.style.top = `${localY}px`;
        newButton.style.left = `${localX}px`;
        document.body.append(newButton);
        x = localX;
        y = localY;
    }
  });