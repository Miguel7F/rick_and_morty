const MyError = require('../utils/error')
// let { characters } = require("../utils/data")
// let { favorites } = require("../utils/data")

function deleteCharById(id,characters,favorites) {
    if (typeof id !== "number") throw new MyError(400, "Solo se aceptan números como ID")
    if (id < 1 || id > 826) throw new MyError(500, "No existe un personaje para este ID")
    if (!characters.some(char=>char.id===id)) throw new MyError(400, "No has agregado este id aún")
    characters = characters.filter(char => char.id !== id)
    favorites = characters.filter(char => char.favorite)
    return {characters,favorites}
}

module.exports = deleteCharById;