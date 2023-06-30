const axios = require("axios")


function getCharById (res,id) {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response=>{
       return res.writeHead(200, { "Content-Type": "application/json" })
            .end(JSON.stringify(response.data))
    })
    .catch((error)=>{
        return res.writeHead(500, { "Content-Type": "text/plain" })
        .end(error.message)
    })
    
}


module.exports=
getCharById