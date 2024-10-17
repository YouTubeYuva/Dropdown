import React, { useState } from "react";
import './Dropdown.css';

const datas = [
    {
        fruit: [
            'Apple', 'Banana', 'Berry', 'Blueberry', 'Cherry', 'Lemon',
            'Mango', 'Orange', 'Pineapple', 'Strawberry', 'Watermelon'
        ]
    }
];

// const Dropdown = () => {
//     const [value, setValue] = useState([]);
//     const [options, setOptions] = useState(datas[0].fruit);

//     const handleChange = (event) => {
//         setValue((prev) => [...prev, event.target.value]);
//     };

//     const remove = (fruit) => {
//         setValue((prev) => prev.filter((item) => item !== fruit));
//     };

//     const removeOption = (fruit) => {
//         setOptions((prev) => prev.filter((item) => item !== fruit));
//     };

//     return (
//         <div className="container">
//             <input
//                 value={value} 
//                 placeholder="Selected Fruits"
//                 readOnly
//             />
//             <select onChange={handleChange}>
//                 <option>select fruit</option>
//                 {options.map((fruit, index) => (
//                     <option key={index}>{fruit}</option>
//                 ))}
//             </select>
//             <div className="footer">
//                 {options.map((fruit) => (
//                     <div key={fruit}>
//                         {fruit}
//                         <button 
//                             onClick={() => {
//                                 remove(fruit);
//                                 removeOption(fruit);
//                             }} 
//                         > X </button>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Dropdown;




