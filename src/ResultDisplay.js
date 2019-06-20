import './ResultDisplay.css'
import React from 'react';



const ResultDisplay = (props) => {

    return (
        <div className="calc-screen">
            <div className="calc-operation">2536 + 419 + </div>
            <div className="calc-typed">{props.result}<span className="blink-me">_</span></div>
        </div>
    );
}

export default ResultDisplay; 