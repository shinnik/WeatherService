const fs = require('fs');

export const transformCityJsonToArr = (url) => {
    const rawData = fs.readFileSync(url);
    const cities = JSON.parse(rawData);
    return cities;
};
