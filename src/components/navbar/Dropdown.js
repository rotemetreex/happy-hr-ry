import React, {useState} from 'react';
import {MenuItems} from './MenuItems';
import {Link} from 'react-router-dom';
import '../navbar/Dropdown.css';





function Dropdown() {

    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
        console.log("clicked");
    }

    return (
        <>
            <ul 
            onClick={handleClick}
            className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link 
                            className={item.title} 
                            to={item.path} 
                            onClick={() => setClick(false)}
                            />
                            {item.title}
                        </li>
                    )
                })}

            </ul>
        </>
    )
}

export default Dropdown;
