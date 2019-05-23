import React, { Component } from 'react';
import Datalist from "../components/Datalist/Datalist";
import { connect } from 'react-redux';
import {eraseCity, getCityWeather, selectCity, typeText} from "../store/actions/wheatherService";
import {Text} from "../components/Text/Text";

import styles from './wheatherService.module.css';

class WeatherService extends Component {
    render() {
        console.log(this.props.currentValue);
        return (
            <>
                <Text size='L'>Wheather in your city</Text>
                <br/>
                <Datalist
                          value={this.props.currentValue}
                          options={this.props.cities}
                          onChange={(event) => this.props.onTypeText(event.target.value)}
                          onEraseText={this.props.onEraseCity}
                          onOptionSelected={(event) => this.props.onSelectCity(event.target.innerText)}/>
                <br/>
                <Text size='L'>{this.props.currentValue}</Text>
                <ul className={styles.List}>
                    <li className={styles.listElement}>{this.props.weather.temp}</li>
                    <li className={styles.listElement}>{this.props.weather.pressure}</li>
                    <li className={styles.listElement}>{this.props.weather.humidity}</li>
                    <li className={styles.listElement}>{this.props.weather.temp_min}</li>
                    <li className={styles.listElement}>{this.props.weather.temp_max}</li>
                </ul>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentValue: state.currentValue,
        cities: state.cities,
        weather: state.weather
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTypeText: (content) => dispatch(typeText(content)),
        onSelectCity: (city) => dispatch(getCityWeather(city)),
        onEraseCity: () => dispatch(eraseCity())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(WeatherService);
