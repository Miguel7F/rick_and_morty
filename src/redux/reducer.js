import { TO_ACCESS, ADD_CHARACTER, REMOVE_CHARACTER, CHANGE_FAV, SORT_A, SORT_D } from './action'

const initialState = {
    myFavorites: [],
    filterSortFav: [],
    characters: [],
    access: false,
}
const rootReducer = (state = initialState, { type, payload }) => {
    function fav(arrToFilter) { return arrToFilter?.filter(char => char.favorite) }

    switch (type) {
        case TO_ACCESS:
            return { ...state, access: payload }
        case ADD_CHARACTER:
            return { ...state, characters: [payload, ...state.characters] }
        case REMOVE_CHARACTER:
            const newChars = state.characters.filter(char => char.id !== payload)
            return { ...state, characters: newChars, myFavorites: fav(newChars) }
        case CHANGE_FAV:
            state.characters.forEach(char => { if (char.id === payload) { char.favorite = !char.favorite } })
            return { ...state, characters: state.characters, myFavorites: fav(state.characters) }
        case SORT_A:
            return { ...state, filterSortFav: payload.sort((a, b) => a.id - b.id) }
        case SORT_D:
            return { ...state, filterSortFav: payload.sort((a, b) => b.id - a.id) }
        default:
            return { ...state }
    }
}
export default rootReducer;