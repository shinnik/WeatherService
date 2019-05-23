import * as actions from '../actions/actionTypes';
// import ID from "../../utils/ID";
// import { initialState } from "./initialState";

const initialState = {
    currentValue: '',
    cities: ['London', 'Paris', 'Moscow'],
    weather: {}
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.TYPE_TEXT: {
            console.log(action.content);
            return {
                ...state,
                currentValue: action.content
            }
        }
        case actions.ERASE_TEXT: {
            return {
                ...state,
                currentValue: ''
            }
        }
        case actions.SELECT_CITY: {
            return {
                ...state,
                currentValue: action.city
            }
        }
        case actions.GET_CURRENT_WEATHER: {
            return {
                ...state,
                weather: action.weather
            }
        }
        default:
            return state;
    }
};
