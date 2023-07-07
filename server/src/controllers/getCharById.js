const axios = require("axios")
const URL = "https://rickandmortyapi.com/api/character/"


function getCharById(req, res) {
    const { id } = req.params
    axios.get(URL + id)
        .then(response => { return res.status(200).json(response.data) })
        .catch(error => {
            if (error.response.status === 404) {
                res.status(error.response.status).send("No existe un personaje para este ID")
            }else{
                res.status(error.response.status).send("Solo se aceptan números como ID")
            }
        })
}
module.exports = { getCharById };