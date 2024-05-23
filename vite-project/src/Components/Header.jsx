import React from 'react';
import { useState } from 'react';




const Header = () => {
    useState();
    const handleClick1 = (event) => {
        console.log(event.target.value);
    }
    const handleClick = () => {

    }
    return (
        <header style={{
            padding: '10px', background: '#f4f4f4', display: 'flex', margin: '1rem 0 '
        }}>
            <button onClick={handleClick}>V</button>
            <button onClick={handleClick1}>H</button>
        </header >
    );
};

export default Header;
