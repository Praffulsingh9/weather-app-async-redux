import {FETCH_WEATHER} from '../actions/index';

const weatherReducer = (state=[],action) => {
    switch(action.type){
        case FETCH_WEATHER :
            return [action.payload.data,...state]
    }
    return state;
}

export default weatherReducer;