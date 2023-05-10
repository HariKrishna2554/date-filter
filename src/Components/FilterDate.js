import CreateTable from "./CreateTable";
import "./FilterDate.css"
import React, {useState} from "react";

function FilterWithSearch(props) {
    const [enteredDate, setEnteredDate] = useState(props.items);
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    const buttonHandler = () => {
        // const s = new Date(2023, 4, 11)
        const s = "e"
        const es = props.items;
        const b = es.filter(item => item.title.includes(s));
        console.log({b})
        return b;
    };


    return (
        <div>
        <div className="custom-filter">
            <div>Filter by Date</div>
            <input type="date" min="2014-05-01" max="2024-01-01" onChange={dateChangeHandler} />
            <button onClick={buttonHandler}>Change date</button>
            <div>{buttonHandler}</div>
        </div>
        <CreateTable items={buttonHandler} />
        </div>
    );
}

export default FilterWithSearch;