import React from 'react';
import Latex from 'react-latex';
import integrals from '../data/integrals.json';
import '../App.css'; // Assuming you have this file

const IntegralOfTheDay = () => {
    
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    const todaysIntegral = integrals.find(integral => integral.date === date);
    return (
        <div className="integral-box">
            <h2>Integral of the Day</h2>
            <div className="integral-content">
                <div className="integral">
                    <Latex>{`${todaysIntegral.latex}`}</Latex>
                </div>
            </div>
        </div>
    );
};

export default IntegralOfTheDay;
