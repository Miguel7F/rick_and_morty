const MyError = require('../utils/error')
// let { characters } = require("../utils/data")
// let { favorites } = require("../utils/data")

function changeFavorites(id,characters,favorites) {
    if (typeof id !== "number") throw new MyError(400, "Solo se aceptan números como ID")
    if (id < 1 || id > 826) throw new MyError(500, "No existe un personaje para este ID")
    
    const changeFavorite=characters.find(char=>char.id===id)
    changeFavorite.favorite=!changeFavorite.favorite
    favorites = characters.filter(char=>char.favorite)
    return {characters,favorites}
}
module.exports = changeFavorites;