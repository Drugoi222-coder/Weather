import './city.css';
import Day from '../day/day';
import { useState } from 'react';

const City = (props) => {
    const { city, days } = props;
    const [daysItems, setDaysItems] = useState();

    const generateDays = () => {
        for (let i = 0; i < days; i++) {
            setDaysItems((prev) => ([
                ...prev,
                <Day key={i} dayId={i}/>
            ]));
        }
    }

    return (
        <>
            
        </>
    )
}

export default City;