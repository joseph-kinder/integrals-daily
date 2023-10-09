import React from 'react';
import Latex from 'react-latex';
import integrals from '../data/integrals.json';
import '../App.css'; // Assuming you have this file

const IntegralOfTheDay = ({ isDarkMode, showPrevious }) => {
    
    const current = new Date();
    const date = `${current.getDate() - (showPrevious ? 1 : 0)}/${current.getMonth() + 1}/${current.getFullYear()}`;
    
    const todaysIntegral = integrals.find(integral => integral.date === date);
    return (
        <div className={`integral-box ${isDarkMode ? 'dark-mode' : 'light-mode'} glass`}>
            <div className="integral-content">
                <div className="integral">
                    <Latex className="integral-latex">{`${todaysIntegral.latex}`}</Latex>
                </div>
            </div>
        </div>
    );
};

export default IntegralOfTheDay;
