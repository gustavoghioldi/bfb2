class User {
    constructor(userId) {
        this._userId = userId;
    }
    getAllUsers() {
        return fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                return response.json()
            })
            .then(function(json) {
                return json;
            });
    }

    async getUsers() {	
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const json = await response.json();
        return json;
    }

    get me() {
        return fetch(`https://jsonplaceholder.typicode.com/users/${this._userId}`)
            .then(response => {
                return response.json()
            })
            .then(function(json) {
                console.log(json.name);
            });
    }
}


const user = new User(1);

user.getAllUsers().then(users => {
    console.log(users);
});

user.me

class MangerView {
    constructor() {
        this._user = new User();
    }

    async render() {
        const users = await this._user.getUsers();
        users.forEach(user => {
            document.write(`<p>${user.name}</p>`);
        });
    }
}

managerView = new MangerView();
managerView.render();
