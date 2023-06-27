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
    function removeChars(arrToRemove){return arrToRemove?.filter(char => char.id !== payload)}
    //Cambia el estado de la propiedad favorite del ID enviado por payload (true-> false o viceversa)
    function chFav(arrToChange){return arrToChange?.forEach(char => char.id === payload? char.favorite = !char.favorite:null )}

    switch (type) {
        case TO_ACCESS:
            return { ...state, access: payload }

        case ADD_CHARACTER:
            return { ...state, characters: [payload, ...state.characters] }

        case REMOVE_CHARACTER:
            return {...state,
                characters: removeChars(state.characters),
                myFavorites: removeChars(state.myFavorites),
                filterSortFav: removeChars(state.filterSortFav),
            }

        case CHANGE_FAV:
            return { ...state, 
                //characters: chFav(state.characters),
                //myFavorites: removeChars(state.myFavorites),
                //filterSortFav: removeChars(state.filterSortFav),
            }

        case ARR_FAV:
            return { ...state, filterSortFav: payload }

        default:
            return { ...state }
    }
}
export default rootReducer;