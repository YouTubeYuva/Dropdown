import React, { useState, useEffect } from "react";
import "./Search_dropdown.css";

export default function Search_dropdown() {
    const foods = [
        "Apple",
        "Banana",
        "Carrot",
        "Pizza",
        "Burger",
        "Pasta",
        "Grapes",
        "Chicken",
        "Salad",
        "Sandwich",
    ];

    const [value, setValue] = useState("");
    const [option, setOption] = useState(foods);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    useEffect(() => {
        if (value === '') {
            setOption(foods);
        } else {
            const data = foods.filter((item) =>
                item.toUpperCase().includes(value.toUpperCase())
            );
            setOption(data);
            console.log(data)
        }
    }, [value]);

    return (
        <div className="header">
            <input type="text" placeholder="Search.." onChange={handleChange} />
            {option.map((item, index) => (
                <div key={index}>{item}</div>
            ))}
        </div>
    );
}


