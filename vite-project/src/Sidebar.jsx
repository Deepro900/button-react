import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <aside style={{ width: '200px', padding: '10px', background: '#f4f4f4' }}>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </aside>
    );
};

export default Sidebar;
