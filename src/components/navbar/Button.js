import React from 'react';
import {Link} from 'react-router-dom';
import './Button.css';

export function Button() {
    return (
        <Link to='sign-up'>
            <button className='btn'>Sign Up</button>
        </Link>
    )
}

export default Button;