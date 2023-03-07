import "./day.css";
import { getForecastOnDays } from "../utils/utils";
import { useEffect, useState } from "react";

const Day = (props) => {
    const { dayId, city } = props;
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [dayData, setDayData] = useState();
    const [location, setLocation] = useState();
    const [date, setDate] = useState();

    useEffect(() => {
        getForecastOnDays(7).then(
            (result) => {
                setIsLoaded(true);
                setLocation(result.location.name);
                setDayData(result.forecast.forecastday[dayId]);
                setDate(new Date(result.forecast.forecastday[dayId].date));
            }
        ).catch(
            () => {
                setIsLoaded(true);
                setError("Произошла ошибка, повторите попытку позже");
            }
        );
    }, [dayId]);

    if (error) {
        return (<div className="error">{error}</div>);
    } else if (!isLoaded) {
        return (
            <div className="loading">Загрузка...</div>
        )
    } else {
        return (
            <div className="day">
                <div className="day__location">
                    {location}
                </div>
                <div className="day__date">
                    На {date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`}.
                    {date.getMonth() > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`}.
                    {date.getFullYear()}
                </div>
                <div className="temp day__temp">
                    <div className="temp__max">
                        Максимальная температура: {dayData.day.maxtemp_c}
                    </div>
                    <div className="temp__min">
                        Минимальная температура: {dayData.day.mintemp_c}
                    </div>
                </div>
            </div>
        )
    }
};

export default Day;
