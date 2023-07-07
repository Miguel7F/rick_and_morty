const { getCharById } = require("../controllers/getCharById")
const { login } = require("../controllers/login")
const { postFav, deleteFav } = require("../controllers/handleFavorites")
const { Router } = require("express")

const router = Router()

router.get("/login", login)
router.post("/fav",postFav)
router.delete("/fav/:id", deleteFav)

// ?dejo una función como ejemplo de cómo están trabando las demás funciones
router.get("/character/:id", (req, res) => {
    getCharById(req, res)
})


module.exports =  {router} ;