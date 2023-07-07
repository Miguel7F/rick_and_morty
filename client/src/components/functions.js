import axios from "axios"

const API_PERSONAJE = "http://localhost:3001/rickandmorty/"

//Esta función recibe un objeto que debe contar con email o password (solo recibe uno)
//Su función es validar, con REGEX, si los datos enviados cumplen con el mínimo de requisitos.
function validation({email,password}){
    const validaCorreo = /^(([^<>()\[\]\\.,;:\s@”]{7,35}(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]{1,35}\.)+[a-zA-Z]{2,}))$/
    const validaPassword=/^(?=.*\d)\S.{6,10}$/
    const devolver={}

    if(email!==undefined){
        if(email===""){
            devolver.email="Debe ingresar un email"
        }else if(validaCorreo.test(email)){
            devolver.email="Correcto"
        }else{
            devolver.email="El email debe cumplir con el formato requerido"
        }
    }

    if(password!==undefined){
        if(password===""){
            devolver.password="Debe ingresar un password"
        }else if(validaPassword.test(password)){
            devolver.password="Correcto"
        }else{
            devolver.password="El password debe cumplir con el formato requerido"
        }
    }
    return devolver
}

//Esta función recibirá un arreglo y dos strings que indicará como ordenarlo y filtrarlo
function toFilterSort(array,gender,direction) {
    const filtered = gender === "sinFiltros" ? array: array.filter(fav => fav.gender === gender) 

    const sortedFavorites = direction === "A" ?
      filtered.sort((a, b) => a.id - b.id) :
      filtered.sort((a, b) => b.id - a.id);
    return sortedFavorites
}

export {validation,toFilterSort};