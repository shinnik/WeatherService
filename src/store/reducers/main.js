import * as actions from '../actions/actionTypes';
// import ID from "../../utils/ID";
// import { initialState } from "./initialState";

const initialState = {
    currentValue: '',
    cities: [],
    weather: null
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
            if (action.weather) {
                console.log(action.weather);
                const {temp, pressure, temp_min, temp_max, humidity} = action.weather;
                const tempC = Math.round(temp - 273);
                const temp_minC = Math.round(temp_min - 273);
                const temp_maxC = Math.round(temp_max - 273);
                const pressureHg = pressure * 0.75;
                const weather = {
                    temp: tempC,
                    pressure: pressureHg,
                    humidity: humidity,
                    temp_min: temp_minC,
                    temp_max: temp_maxC
                };
                return {
                    ...state,
                    weather
                }
            } else {
                return {
                    ...state,
                    weather: null
                }
            }
        }
        default:
            return state;
    }
};
