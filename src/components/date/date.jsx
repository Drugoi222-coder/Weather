const Date = (props) => {
    const { date } = props;
    const day = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`;
    const month = date.getMonth() > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
    const year = date.getFullYear();
    
    return (
        <>
            На {day}.{month}.{year}
        </>
    )
}

export default Date;