import './city.css';
import Day from '../day/day';
import { useEffect, useState } from 'react';
import { getForecastOnDays } from "../utils/utils";
import uniqid from 'uniqid';
import SyncLoader from "react-spinners/SyncLoader";

const City = (props) => {
    const { city } = props;
    const [daysItems, setDaysItems] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    const [daysData, setDaysData] = useState({});

    const addDay = (data) => {
        setDaysItems((prev) => ([
            ...prev,
            <Day key={uniqid()} dayInfo={data}/>
        ]));
    }

    const addDaysData = (data) => {
        setDaysData((prev) => ({
            ...prev,
            data
        }));
    }

    const resetState = () => {
        setDaysItems([]);
        setDaysData({});
        setIsLoaded(false);
        setError(false);
    }

    useEffect(() => {
        resetState();
        getForecastOnDays(city).then(
            (result) => {
                setIsLoaded(true);
                addDaysData(result.forecast.forecastday);
            }
        ).catch(
            () => {
                setIsLoaded(true);
                setError("Произошла ошибка, повторите попытку позже");
            }
        );
    }, [city]);

    useEffect(() => {
        if (daysData && daysData.data && daysData.data.length > 0) {
            daysData.data.forEach((day) => {
                addDay({
                    icon: day.day.condition.icon,
                    maxTemp: day.day.maxtemp_c,
                    minTemp: day.day.mintemp_c,
                    date: new Date(day.date)
                }); 
            });
        }
    },[isLoaded]);

    if (error) {
        return (<div className="error">{error}</div>);
    } else if (!isLoaded) {
        return (
            <div className="loading">
                <SyncLoader
                    color="#5836b2"
                    margin={13}
                    size={40}
                    cssOverride={{
                        margin: '0 auto',
                        width: '200px',
                        marginTop: '100px'
                    }}
                />
            </div>
        )
    } else {
        return (
            <div className="city">
                <div className="city__name">
                    {city}
                </div>
                <div className="city__forecast">
                    {daysItems}
                </div>
            </div>
        )
    }
}

export default City;