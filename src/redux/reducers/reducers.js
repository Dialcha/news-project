import { combineReducers } from "redux";
import  SELECT_CATEGORY  from '../actions/actionTypes';


function selectedCategory(state = 'principales', action) {
    switch (action.type) {
        case SELECT_CATEGORY:
            return action.category;
        default:
            return state;
    }
}

function news (
    state = {
        isFetching: false,
        items : []
    }, action
) {

}

const rootReducer = combineReducers({
    selectedCategory
})

export default rootReducer;