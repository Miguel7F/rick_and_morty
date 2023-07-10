const DB = require("../utils/dataBase")
const MyError = require('../utils/error')
// let { characters } = require("../utils/data")

function postCharById(id,characters) {
    if (typeof id !== "number") throw new MyError(400, "Solo se aceptan números como ID")
    if (id < 1 || id > 826) throw new MyError(500, "No existe un personaje para este ID")
    if (characters.some(char=>char.id===id)) throw new MyError(400, "Ya existe un personaje con este id")
    characters.unshift({ favorite: false, ...DB[id - 1] })
    return characters
}

module.exports = postCharById;