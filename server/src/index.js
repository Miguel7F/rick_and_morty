var http=require("http");
var data=require("./utils/data");
const PORT= 3001;


module.export=
http.createServer((req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    const urlIni=req.url.split("/")
    const urlconcat=`/${urlIni[1]}/${urlIni[2]}`
    const id=Number(urlIni[3])

    if(urlconcat==="/rickandmorty/character"){
        const personaje=data.filter(char=>char.id===id)
        res.writeHead(200, { "Content-Type": "application/json" })
        res.end(JSON.stringify(personaje))
    }
}).listen(PORT, "localhost");