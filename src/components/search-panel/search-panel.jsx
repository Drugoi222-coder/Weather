import './search-panel.css';
import { useState } from "react";

const SearchPanel = (props) => {
    const { setCity, classList } = props;
    const [value, setValue] = useState("Москва");

    const handleClickBtn = (e) => {
        e.preventDefault();
        if (value && value.length > 0) {
            setCity(value);
        }
    }

    return (
        <div className={`${classList} search-panel`} >
            <h3 className="search-panel__header">Введите название города</h3>
            <form action="" className="search-panel__form">
                <input type="text" onChange={(e) => setValue(e.target.value)} className="search-panel__city"/>
                <button type="reset" onClick={handleClickBtn} className="search-panel__search-button">Показать</button>
            </form>
        </div>
    )
}

export default SearchPanel;