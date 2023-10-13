import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { FaBars, FaAdjust, FaHeart, FaExchangeAlt } from 'react-icons/fa';

const MySidebar = ({ isDarkMode, toggleDarkMode, toggleTextToIntegral }) => {

    const [collapsed, setCollapsed] = useState(true);

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
                <MenuItem icon={<FaExchangeAlt />} suffix={<span>Integral Mode</span>} onClick={toggleTextToIntegral}/>
                <MenuItem icon={<FaAdjust />} suffix={<span>{isDarkMode? "Light" : "Dark"} Mode</span>} onClick={toggleDarkMode} />
                <a href={'https://www.buymeacoffee.com/joekinder'} target='_blank' rel="noopener noreferrer" style={{textDecoration: 'none', color: 'inherit'}}>
                    <MenuItem icon={<FaHeart />} suffix={<span>Support Creator</span>} />
                </a>
            </Menu>
        </Sidebar>
    );
};

export default MySidebar;
