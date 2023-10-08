import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
const MySidebar = ({ isDarkMode, toggleDarkMode }) => {
    return (
    <Sidebar>
        <Menu>
            <MenuItem>
                <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
            </MenuItem>
            <MenuItem>
                <button>Support Creator</button>
            </MenuItem>
        </Menu>
    </Sidebar>
    );
};

export default MySidebar;
