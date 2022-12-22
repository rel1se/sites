// Задание 1
let links = document.querySelectorAll('a');
for (let link of links) {
  let href = link.getAttribute('href');
  if (!href) continue; 

  if (!href.includes('://')) continue;

  // if (href.startsWith('http://internal.com')) continue;

  link.style.color = 'red';
}


// Задание 2

let ul = document.createElement('ul');
document.body.append(ul);
while (true) {
    let data = prompt("Введите текст для элемента списка", "");
    if (!data) {
        break;
    }
    let li = document.createElement('li');
    li.textContent = data;
    ul.append(li);
}


// Задание 3

function showNotification({className, html}) {

    let notification = document.createElement('div');
    notification.className = "notification";
    if (className) {
      notification.classList.add(className);
    }
    notification.innerHTML = html;
    document.body.append(notification);

    setTimeout(() => notification.remove(), 1500);
  }

let i = 1;
setInterval(() => {
    showNotification({
        html: 'Уведомление ' + i++,className: "welcome"
});
}, 2000);

// Задание 4

const border = document.querySelector(".border");
const img = document.querySelector(".img");
img.style.width = 100 + "%";
border.style.width = 400 + "px";
border.style.margin = '0 auto';
const coordinate = document.querySelector(".coortdinate");
img.addEventListener("click", event => {
    coordinate.textContent = "X=" + event.pageX + "\nY=" + event.pageY;
});

// Задание 5

container.onclick = function(event) {
    if (event.target.className != 'remove-button') return;
    let pane = event.target.closest('.pane');
    pane.remove();
};