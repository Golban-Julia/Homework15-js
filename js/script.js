"use strict";

// Ваша HTML страничка будет иметь следующую структуру:

// <ul id="albums"></ul>


// Необходимо сделать следующие действия:

// 1. Отправить запрос в АПИ и получить результат - https://jsonplaceholder.typicode.com/albums

// 2. Как только пришел ответ необходимо сформировать список (тег li) всех заголовков (поле title). Все элементы должны находится внутри списка с ID="albums"

// 3. Добавить класс "album_title" каждому новому элементу <li>



// Ожидаемой результат в HTML:

// <ul id="albums">
//   <li class="album_title">quidem molestiae enim</li>
//   <li class="album_title">sunt qui excepturi placeat culpa</li>
//   <li class="album_title">omnis laborum odio</li>
//   ...
// </ul>


// P.S. Можете стилизовать (используя CSS) ваш список по вашему желанию и фантазии

const url = "https://jsonplaceholder.typicode.com/albums";
const ul = document.getElementById("albums");

fetch(url)
    .then((response) => response.json())
    .then((result) => {
        let albums = result;
        albums.map(function (album) {
            let li = document.createElement('li');
            ul.appendChild(li);
            li.innerHTML = album.title;
            li.classList.add("album_title");
        })
    })
    
    .catch((error) => console.log(error))
