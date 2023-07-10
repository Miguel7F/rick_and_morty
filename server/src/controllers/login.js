const users = require("../utils/users")

function login(email, password) {
    if (users.some(user => user.email === email && user.password === password)) return { access: true }
    else throw Error("Usuario y/o contraseña no válidos")
}

module.exports = login;