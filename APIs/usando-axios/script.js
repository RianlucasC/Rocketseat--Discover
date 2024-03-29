const url = "http://localhost:5500/api";

function getUsers() {
    axios.get(url)
    .then(response => {
        apiResult.textContent = JSON.stringify(response.data);
    })
    .catch(error => console.error(error))
}

function addNewUser(newUser) {
    axios.post(url, newUser)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}

function getUser(id) {
    axios.get(`${url}/${id}`)
    .then(response => {
        const data = response.data;
        userName.textContent = data.name;
        userCity.textContent = data.city;
        userId.textContent = data.id;
        userAvatar.src = data.avatar;
    })
    .catch(error => console.error(error))
}

function updateUser(id,userUpdated) {
    axios.put(`${url}/${id}`, userUpdated)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}

const userUpdated = {
    name: "Marcelaum",
    avatar: "https://picsum.photos/200/300",
    city: "Minas Gerais"
}

const newUser = {
    name: "Rian",
    avatar: "https://picsum.photos/200/300",
    city: "são paulo"
};

//addNewUser(newUser);
//updateUser("1",userUpdated);
getUsers();
getUser("1");