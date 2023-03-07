import "./day.css";
import "./temp.css";
import Date from "../date/date";

const Day = (props) => {
    const { dayInfo } = props;
    const { maxTemp, minTemp, date, icon} = dayInfo;
    
    return (
        <div className="day">
            <div className="day__img">
                <img onMouseDown={(e) => e.preventDefault()} className="day__icon" src={icon} alt="icon of current weather" />
            </div>
            <div className="day__date">
                <Date date={date}/>            
            </div>
            <div className="temp day__temp">
                <div className="temp__max">
                    Максимальная температура: {maxTemp}
                </div>
                <div className="temp__min">
                    Минимальная температура: {minTemp}
                </div>
            </div>
        </div>
    )
};

export default Day;
