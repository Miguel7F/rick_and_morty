const login = require("../controllers/login")
const loginRouter = require("express").Router();

loginRouter.post("/", (req,res)=>{
    const {email, password } = req.body
    try {
        res.status(200).json(login(email,password))
    } catch (error) {
        res.status(400).json(error.message)
    }
})

module.exports =  loginRouter ;