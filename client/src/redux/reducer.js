import { TO_ACCESS, ADD_CHARACTER, REMOVE_CHARACTER, CHANGE_FAV, ARR_FAV } from './action'

const initialState = {
    characters: [],
    favorites: [],
    sortFilFavorites:[],
}
const rootReducer = (state = initialState, { type, payload }) => {
    //devuelve un nuevo array con los elementos favorite en true
    //function fav(arrToFilter) { return arrToFilter?.filter(char => char.favorite) }
    //devuelve un nuevo array retirando el elemento que se envió como payload (id)
    //function removeChars(arrToRemove, payload) { return arrToRemove?.filter(char => char.id !== payload) }
    //Cambia el estado de la propiedad favorite del ID enviado por payload (true-> false o viceversa)
    /*function characterFav(arrToChange, payload) {
        arrToChange.forEach(char => { if (char.id === payload) char.favorite = !char.favorite })
        return arrToChange
    }*/

    switch (type) {
        case TO_ACCESS:
            return { ...state, access: payload }

        case ADD_CHARACTER:
            return { ...state, characters: payload }

        case REMOVE_CHARACTER:
            return {
                ...state,
                characters: payload.characters,
                favorites: payload.favorites
            }

        case CHANGE_FAV:
            return {
                ...state,
                characters: payload.characters,
                favorites: payload.favorites
            }

        case ARR_FAV:
            return { ...state, sortFilFavorites: payload }

        default:
            return { ...state }
    }
}
export default rootReducer;