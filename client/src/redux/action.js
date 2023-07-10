import axios from 'axios'

export const ADD_CHARACTER = "ADD_CHARACTER"
export const REMOVE_CHARACTER = "REMOVE_CHARACTER"
export const TO_ACCESS = "TO_ACCESS"
export const CHANGE_FAV = "CHANGE_FAV"
export const ARR_FAV = "ARR_FAV"

const API_PERSONAJE = "http://localhost:3001/rickandmorty/"

export const toAccess = (access) => {
    return {
        type: TO_ACCESS,
        payload: access,
    }
}

export const addCharacter = (characters) => {
    return {
        type: ADD_CHARACTER,
        payload: characters,
    }
}

export const removeCharacter = (characters) => {
    return {
        type: REMOVE_CHARACTER,
        payload: characters,
    }
}

export const changeFav = (characters) => {
    return {
        type: CHANGE_FAV,
        payload: characters,
    }
}

export const arrFav = (payload) => {
    return {
        type: ARR_FAV,
        payload: payload,
    }
}