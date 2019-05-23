import React from 'react';
import {Layout} from "./components/Layout/Layout";
import WeatherService from './containers/wheatherService';

function App() {
    return (
        <div className="App">
            <Layout>
                <WeatherService/>
            </Layout>
        </div>
);
}

export default App;
