const apiKey = `9a8d31d5bd0e4ae098880855230703`;

// Получение данных с WeatherAPI
const getForecastOnDays = async (city) => {
    const url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7&aqi=no&alerts=no`;
    const data = await (await fetch(url, {method: "GET"})).json();
    return data;
}

export {getForecastOnDays};