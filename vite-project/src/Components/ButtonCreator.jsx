import React, { useState } from 'react';


const ButtonCreator = () => {
    const [buttons, setButtons] = useState([]);

    const handleClick1 = () => {
        setButtons([...buttons, 'ButtonV', 'ButtonH']);
    };

    return (
        <div>
            <button onClick={handleClick1}>Create Buttons</button>
            {buttons.map((buttonText, index) => (

                <button key={index}>{buttonText}</button>
            
console.log(button);
            ))}
        </div>
    );
};

export default ButtonCreator;
