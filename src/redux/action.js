import axios from 'axios'

export const ADD_CHARACTER = "ADD_CHARACTER"
export const REMOVE_CHARACTER = "REMOVE_CHARACTER"
export const TO_ACCESS = "TO_ACCESS"
export const CHANGE_FAV = "CHANGE_FAV"
export const ARR_FAV="ARR_FAV"

const API_PERSONAJE = "https://rickandmortyapi.com/api/character/"
export const EMAIL = "ejemplo@soyejemplo.com"
export const PASSWORD = "Ejemplo1"

export const toAccess = (toAccess) => {
    return {
        type: TO_ACCESS,
        payload: toAccess,
    }
}

export const addCharacter = (id) => {
    return async function (dispatch) {
        const response = await axios.get(`${API_PERSONAJE}${id}`)
        return dispatch({
            type: ADD_CHARACTER,
            payload: { favorite: false, ...response.data },
        })
    }
}

export const removeCharacter = (id) => {
    return {
        type: REMOVE_CHARACTER,
        payload: id,
    }
}

export const changeFav = (id) => {
    return {
        type: CHANGE_FAV,
        payload: id,
    }
}

export const arrFav=(payload)=>{
    return {
        type: ARR_FAV,
        payload: payload,
    }
}