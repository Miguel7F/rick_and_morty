const loginRouter = require('./loginRouter')
const characterRouter = require('./characterRouter')
const favRouter = require('./favRouter')
const router = require("express").Router();

router.use('/login', loginRouter)
router.use('/character', characterRouter)
router.use('/favorites',favRouter)
// router.post("/fav",postFav)
// router.delete("/fav/:id", deleteFav)
//router.get("/character/:id", (req, res) => { getCharById(req, res)})


module.exports = router;