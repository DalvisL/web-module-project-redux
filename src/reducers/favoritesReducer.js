//import  actions 'TOGGLE_FAVORITES', 'ADD_FAVORITES', 'REMOVE_FAVORITES' from '../actions/favoritesActions.js';
//- toggleFavorites : Switches the displayFavorites state value between true and false. When displayFavorites is true, the favorite button does not show on the Movie page.
// - addFavorites: Adds in a new movie object into the favorites list.
// - removeFavorite: Removes a movie Object from the favorites list with an id passed in.
import { TOGGLE_FAVORITES, ADD_FAVORITE, REMOVE_FAVORITE } from '../actions/favoritesActions.js';
const initialState = {
    favorites: [],
    displayFavorites: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_FAVORITES:
            return {
                ...state,
                displayFavorites: !state.displayFavorites
            }
        case ADD_FAVORITE:
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        case REMOVE_FAVORITE:
            return {
                ...state,
                favorites: state.favorites.filter(item=>(action.payload !== item.id))
            }
        default: 
            return state;
    }
}

export default reducer;