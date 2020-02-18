/*
https://randomuser.me/api/?results=8
 */

let url = 'https://randomuser.me/api/?results=8';
const info = document.querySelector();

function fetchData(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.responseType = 'json';
    xhr.onreadystatechange = function () {
        if (xhr.status === 200 && xhr.readyState === 4)
            callback(xhr.response);
    };
    xhr.send();
}

function showCharacter(response) {
    for (let i = 0; i < response.results.length; i++) {
        info.remove();
        console.log(contador);
        list.innerHTML += ``;
    }
}