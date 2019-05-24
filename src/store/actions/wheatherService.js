import * as actions from './actionTypes';
import {transformCityJsonToArr} from "../../utils/transformCityJsonToArr";

export const typeText = (content) => {
    return {
        type: actions.TYPE_TEXT,
        content
    }
};

export const selectCity = (city) => {
    return {
        type: actions.SELECT_CITY,
        city
    }
};

export const getCityWeather = (city) => {
    return dispatch => {
        dispatch(selectCity(city));
        // fetch(`http://localhost:8080/data/2.5/weather?q=${city}&appid=b6907d289e10d714a6e88b30761fae22`)
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=b41984b8b5135f1695c5faac30990138`)
            .then((resp) => resp.json())
            .then((data) => dispatch({
                type: actions.GET_CURRENT_WEATHER,
                weather: data.list[data.list.length - 1].main
            }))
            .catch(err => dispatch({
                type: actions.GET_CURRENT_WEATHER,
                weather: null
            }))
    }
}

export const eraseCity = () => {
    return {
        type: actions.ERASE_TEXT
    };
};

