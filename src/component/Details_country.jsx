import React, { useState } from "react";
import './DetailsCountry.css';

const datas = [
    {
        "id": 1,
        "first_name": "Gavrielle",
        "last_name": "Lineham",
        "email": "gavriellelineham1@bnoble.com",
        "gender": "Male",
        "country": "Russia"
    },
    {
        "id": 2,
        "first_name": "Michail",
        "last_name": "Napolione",
        "email": "michailnapolione2@flickr.com",
        "gender": "Male",
        "country": "France"
    },
    {
        "id": 3,
        "first_name": "Marthena",
        "last_name": "Antognoni",
        "email": "marthenaantognoni3@slate.com",
        "gender": "Male",
        "country": "China"
    },
    {
        "id": 4,
        "first_name": "Darrelle",
        "last_name": "Plinck",
        "email": "darrelleplinck4@vinaora.com",
        "gender": "Male",
        "country": "Japan"
    },
    {
        "id": 5,
        "first_name": "Matthias",
        "last_name": "Whyffen",
        "email": "matthiaswhyffen5@ft.com",
        "gender": "Male",
        "country": "Mexico"
    },
    {
        "id": 6,
        "first_name": "Phillip",
        "last_name": "Heugle",
        "email": "phillipheugle6@yelp.com",
        "gender": "Male",
        "country": "Brazil"
    },
    {
        "id": 7,
        "first_name": "Dall",
        "last_name": "Jouannisson",
        "email": "dalljouannisson7@bing.com",
        "gender": "Male",
        "country": "Germany"
    },
    {
        "id": 8,
        "first_name": "Marcel",
        "last_name": "Dudmarsh",
        "email": "marceldudmarsh8@hostgator.com",
        "gender": "Male",
        "country": "Canada"
    }
];

const Details_country = () => {
    const [value, setValue] = useState([]);
    const [options, setOptions] = useState(datas);

    const handleChange = (event) => {
        const name = event.target.value;
        setValue((prev) => [...prev, name]);

    };

    const remove = (item) => {
        setValue((prev) => prev.filter((country) => country !== item.country));
    };

    const removeOption = (item) => {
        setOptions((prev) => prev.filter((data) => data.id !== item.id));
    };

    return (
        <div className="container">
            <table>
                <tbody>
                    {options.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.first_name}</td>
                            <td>{item.last_name}</td>
                            <td>{item.email}</td>
                            <td>{item.gender}</td>
                            <td>{item.country}</td>
                            <td>
                                <button onClick={() => {
                                    remove(item);
                                    removeOption(item);
                                }}>X</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <input
                value={value.join(', ')}
                placeholder="Selected Countries"
                readOnly
            />

            <select onChange={handleChange}>
                <option>Select Country</option>
                {options.map((item) => (
                    <option key={item.id} value={item.country}>
                        {item.country}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Details_country;

