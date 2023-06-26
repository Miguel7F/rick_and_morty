import { TO_ACCESS, ADD_CHARACTER,REMOVE_CHARACTER, CHANGE_FAV } from './action'

const initialState = {
    myFavorites: [],
    characters:[],
    access:false,
}
const rootReducer = (state = initialState, { type, payload }) => {
    function fav(arrToFilter){return arrToFilter?.filter(char=>char.favorite)}

    switch (type) {
        case TO_ACCESS: 
            return {...state,access:payload}
        case ADD_CHARACTER: 
            return {...state,characters:[payload,...state.characters]}
        case REMOVE_CHARACTER: 
            const newChars=state.characters.filter(char=>char.id!==payload)
            return {...state,characters:newChars,myFavorites:fav(newChars)}
        case CHANGE_FAV:
            state.characters.forEach(char => {if(char.id===payload){char.favorite=!char.favorite}}) 
            return {...state,characters:state.characters,myFavorites:fav(state.characters)}
        default:
            return { ...state }
    }
}
export default rootReducer;