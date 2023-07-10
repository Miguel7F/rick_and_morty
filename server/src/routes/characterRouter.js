const postCharById = require("../controllers/postCharById")
const deleteCharById = require("../controllers/deleteCharById")
const changeFavorites = require("../controllers/changeFavorites")
const getChars = require("../controllers/getChars");
const sortFilFavorites=require("../controllers/sortFilFavorites")
let { characters, favorites } = require("../utils/data");
const characterRouter = require("express").Router();

characterRouter.get("/", (req, res) => {
    res.status(200).json(getChars())
})

characterRouter.post("/", (req, res) => {
    const { id } = req.body
    try {
        characters=postCharById(id,characters)
        res.status(200).json(characters)
    } catch (error) {
        res.status(error.status).json(error.message)
    }
})

characterRouter.delete("/:id", (req, res) => {
    const id = Number(req.params.id)
    try {
        const response=deleteCharById(id,characters,favorites)
        characters=response.characters
        favorites=response.favorites
        res.status(200).json(response)
    } catch (error) {
        res.status(error.status).json(error.message)
    }
})

characterRouter.put("/:id", (req, res) => {
    const id = Number(req.params.id)
    try {
        const response=changeFavorites(id,characters,favorites)
        characters=response.characters
        favorites=response.favorites
        res.status(200).json(response)
    } catch (error) {
        res.status(error.status).json(error.message)
    }
})

characterRouter.post("/favorites", (req, res) => {
    const {gender,direction}= req.body
    try {
        res.status(200).json(sortFilFavorites(gender,direction,favorites))
    } catch (error) {
        res.status(error.status).json(error.message)
    }
})

module.exports = characterRouter;
