import axios from 'axios'

export const ADD_CHARACTER = "ADD_CHARACTER"
export const REMOVE_CHARACTER = "REMOVE_CHARACTER"
export const TO_ACCESS = "TO_ACCESS"
export const CHANGE_FAV = "CHANGE_FAV"
export const ARR_FAV = "ARR_FAV"

const API_PERSONAJE = "http://localhost:3001/rickandmorty/"

export const toAccess = (login) => {
    return async function (dispatch) {
        axios.get(`${API_PERSONAJE}/login?email=${login.email}&password=${login.password}`)
            .then(({ data }) => dispatch({
                type: TO_ACCESS,
                payload: data.access,
            }))
    }
}

export const addCharacter = (id) => {
    return async function (dispatch) {
        const { data } = await axios.get(`${API_PERSONAJE}character/${id}`)
        return dispatch({
            type: ADD_CHARACTER,
            payload: { favorite: false, ...data },
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

export const arrFav = (payload) => {
    return {
        type: ARR_FAV,
        payload: payload,
    }
}