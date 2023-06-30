var http=require("http");
var data=require("./utils/data");
const PORT= 3001;
var getCharById=require("./controllers/getCharById")


http.createServer((req,res)=>{

    // const urlIni=req.url.split("/")
    // const urlconcat=`/${urlIni[1]}/${urlIni[2]}`
    // const id=Number(urlIni[3])

    // if(urlconcat==="/rickandmorty/character"){
        //     const personaje=data.filter(char=>char.id===id)
    //     res.writeHead(200, { "Content-Type": "application/json" })
    //     res.end(JSON.stringify(personaje[0]))
    // }
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    if(req.url.includes( "/rickandmorty/character") ){
        const id = req.url.split("/").at(-1);
        getCharById(res, +id)}
}).listen(PORT);

