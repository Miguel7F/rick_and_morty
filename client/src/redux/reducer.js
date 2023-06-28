import { TO_ACCESS, ADD_CHARACTER, REMOVE_CHARACTER, CHANGE_FAV, ARR_FAV } from './action'

const initialState = {
    myFavorites: [],
    filterSortFav: [],
    characters: [],
    access: false,
}
const rootReducer = (state = initialState, { type, payload }) => {
    //devuelve un nuevo array con los elementos favorite en true
    function fav(arrToFilter) { return arrToFilter?.filter(char => char.favorite) }
    //devuelve un nuevo array retirando el elemento que se envió como payload (id)
    function removeChars(arrToRemove, payload) { return arrToRemove?.filter(char => char.id !== payload) }
    //Cambia el estado de la propiedad favorite del ID enviado por payload (true-> false o viceversa)
    function characterFav(arrToChange, payload) {
        arrToChange.forEach(char => { if (char.id === payload) char.favorite = !char.favorite })
        return arrToChange
    }

    switch (type) {
        case TO_ACCESS:
            return { ...state, access: payload }

        case ADD_CHARACTER:
            return { ...state, characters: [payload, ...state.characters] }

        case REMOVE_CHARACTER:
            return {
                ...state,
                characters: removeChars(state.characters, payload),
                myFavorites: removeChars(state.myFavorites, payload),
                filterSortFav: removeChars(state.filterSortFav, payload),
            }
            
        case CHANGE_FAV:
            return {
                ...state,
                characters: characterFav(state.characters, payload),
                //! Atención: en myFavorites se trabaja sobre el array "state.Characters" que ya fue modificado previamente al asignar el nuevo valor a "characters" 
                myFavorites: fav(state.characters),
                filterSortFav: fav(state.characters),
            }

        case ARR_FAV:
            return { ...state, filterSortFav: payload }

        default:
            return { ...state }
    }
}
export default rootReducer;