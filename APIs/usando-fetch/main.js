const url = "http://localhost:5500/api";

function getUsers() {
    fetch(url)
    .then(response => response.json())
    .then(data => renderApiResult.textContent = JSON.stringify(data))
    .catch(error => console.error(error))
};

function getUser(id) {
    fetch(`${url}/${id}`)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name;
        userCity.textContent = data.city;
        userAvatar.src = data.avatar;
    })
    .catch(error => console.error(error))
}

function addUser(newUser) {
    fetch(url, {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(error))
}

function updateUser(id, updateUser) {
    fetch(`${url}/${id}`, {
        method: "PUT",
        body: JSON.stringify(updateUser),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(reponse => reponse.json())
    .then(data => alertApi.textContent = data)
    .catch( error => console.error(error))
}

function deleteUser(id) {
    fetch(`${url}/${id}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(error))
}

const updatedUser = {
    name: "Marcelão",
    avatar: "http://picsum.photos/200/300",
    city: "Recife"
}

const newUser = {
    name: "Rian",
    avatar: "http://picsum.photos/200/300",
    city: "Minas gerais"
}


getUser("1");
//updateUser(1,updatedUser);
//addUser(newUser);
//deleteUser("1")
getUsers();

