const info = document.querySelector('body');

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

function showProfile(response) {
    for (let i = 0; i < response.results.length; i++) {
        let day = response.results[i].dob.date.substr(8, 2);
        let month = response.results[i].dob.date.substr(5, 2);
        let year = response.results[i].dob.date.substr(0, 4);
        info.innerHTML += `
        <div class="container">
            <div class="row boxInfo">
                <div class="col-xl-6 col-12 d-flex flex-column">
                    <img src="${response.results[i].picture.large}" alt="">
                    <span class="name">${response.results[i].name.title}  ${response.results[i].name.first}  ${response.results[i].name.last}</span>
                    <span><i class="fas fa-phone-alt"></i> ${response.results[i].phone}</span>
                    <span><i class="far fa-user"></i> ${response.results[i].login.username}</span>
                    <span><i class="far fa-envelope"></i> ${response.results[i].email}</span>
                    <span><i class="fas fa-birthday-cake"></i> ${day}-${month}-${year}</span>
                    <span><i class="fas fa-map"></i> ${response.results[i].location.street.number}, ${response.results[i].location.street.name}, ${response.results[i].location.city}, ${response.results[i].location.state}</span>
                </div>
                <div class="col-sm-6 col-12">
                    <h1></h1>
                </div>
            </div>
        </div>
        `;

    }
}

fetchData('https://randomuser.me/api/?results=8', showProfile);