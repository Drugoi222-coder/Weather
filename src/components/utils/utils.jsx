const getForecastOnDays = async (days, city) => {
    const url = `http://api.weatherapi.com/v1/forecast.json?key=9a8d31d5bd0e4ae098880855230703&q=${city}&days=${days}&aqi=no&alerts=no`;
    const data = await (await fetch(url, {method: "GET"})).json();
    return data;
}

export {getForecastOnDays};