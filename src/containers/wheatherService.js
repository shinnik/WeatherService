import React, { Component } from 'react';
import Datalist from "../components/Datalist/Datalist";
import { connect } from 'react-redux';
import {eraseCity, getCityWeather, selectCity, typeText} from "../store/actions/wheatherService";
import {Text} from "../components/Text/Text";

import styles from './wheatherService.module.css';
import throttle from "../utils/throttle";

class WeatherService extends Component {

    constructor(props) {
        super(props);
        this.onSelectCity = throttle(this.props.onSelectCity, 500)
    }
    

    onChangeHandler(event) {
        this.props.onTypeText(event.target.value);
        this.onSelectCity(event.target.value);
    }

    render() {
        console.log(this.props.currentValue);
        return (
            <>
                <Text size='L'>Wheather in your city</Text>
                <br/>
                <Datalist
                          value={this.props.currentValue}
                          options={this.props.cities}
                          onChange={(event) => this.onChangeHandler(event)}
                          onEraseText={this.props.onEraseCity}
                          onOptionSelected={(event) => this.props.onSelectCity(event.target.innerText)}/>
                <br/>
                { this.props.weather && this.props.currentValue && <>
                    <Text size='L'>{this.props.currentValue}</Text>
                    <ul className={styles.List}>
                        <li className={styles.listElement}>
                            Current temperature:
                            <Text className='WeatherValue'>{this.props.weather.temp}</Text>
                        </li>
                        <li className={styles.listElement}>
                            Current pressure:
                            <Text className='WeatherValue'>{this.props.weather.pressure}</Text>
                        </li>
                        <li className={styles.listElement}>
                            Current humidity:
                            <Text className='WeatherValue'>{this.props.weather.humidity}</Text>
                        </li>
                        <li className={styles.listElement}>
                            Minimum temperature:
                            <Text className='WeatherValue'>{this.props.weather.temp_min}</Text>
                        </li>
                        <li className={styles.listElement}>
                            Maximum temperature:
                            <Text className='WeatherValue'>{this.props.weather.temp_max}</Text>
                        </li>
                    </ul>
                </>}
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
        onEraseCity: () => dispatch(eraseCity()),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(WeatherService);
