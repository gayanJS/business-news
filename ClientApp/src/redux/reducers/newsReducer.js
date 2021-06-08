import { CREATE_NEWS, FETCH_NEWS } from '../actions/types';

const INITIAL_STATE = {
    createdNews: [],
}

const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case CREATE_NEWS:
            return {
                ...state,
                 createdNews: [ ...state.createdNews, action.payload.data]
            }

        case FETCH_NEWS: 
        return {
            ...state,
            createdNews: action.payload.fetchedNews
        }    
        default: return state;
    }
}

export default reducer;