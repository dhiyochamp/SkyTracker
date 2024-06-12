const baseURL = 'https://api.openweathermap.org/data/2.5/';

const getWeather = async (location, unit) => {
    const unitVal = (unit === 'C' ? "metric" : "imperial");
    const URL = `${baseURL}weather?lat=${location.lat}&lon=${location.lon}&units=${unitVal}&appid=217e1fa84280683e8bd4193589baf9f6`;

    try {
        const data = await fetch(URL);
        const res = await data.json();
        return res;
    } catch (error) {
        console.log(error);
        return {}; // Return an empty object in case of error
    }
}

const getForecast = async (location, unit) => {
    const unitVal = (unit === 'C' ? "metric" : "imperial");
    const URL = `${baseURL}forecast/?lat=${location.lat}&lon=${location.lon}&units=${unitVal}&appid=217e1fa84280683e8bd4193589baf9f6`;

    try {
        const data = await fetch(URL);
        const res = await data.json();
        return res;
    } catch (error) {
        console.log(error);
        return {}; // Return an empty object in case of error
    }
}

export { getWeather, getForecast };
