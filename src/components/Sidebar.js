import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { FaBars, FaAdjust, FaHeart } from 'react-icons/fa';

const MySidebar = ({ isDarkMode, toggleDarkMode }) => {

    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    }

    return (
        <Sidebar collapsed={collapsed} rootStyles={{ 
                                            background: 'none', 
                                            border: 'none',
                                        }}>
            <Menu>
                <MenuItem icon={<FaBars />} suffix={<span>Collapse</span>} onClick={toggleCollapsed} />
                <MenuItem icon={<FaAdjust />} suffix={<span>{isDarkMode? "Light" : "Dark"} Mode</span>} onClick={toggleDarkMode} />
                <MenuItem icon={<FaHeart />} suffix={<span>Support Creator</span>} />
            </Menu>
        </Sidebar>
    );
};

export default MySidebar;
