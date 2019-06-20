import './Keypad.css';
import React from 'react';
import Key from './Key'

const Keypad = () => {
    return (
        <div className="keypad">
            <div className="calc-button-row">
                <Key value={'C'} /> 
                <Key value={'≠'}/>
                <Key value={'%'}/>
                <Key value={'/'}/>
            </div>
            <div className="calc-button-row">
                <Key value={'7'}/> 
                <Key value={'8'}/>
                <Key value={'9'}/>
                <Key value={'*'}/>
            </div>
            <div className="calc-button-row">
                <Key value={'4'}/> 
                <Key value={'5'}/>
                <Key value={'6'}/>
                <Key value={'-'}/>
            </div>
            <div className="calc-button-row">
                <Key value={'1'}/> 
                <Key value={'2'}/>
                <Key value={'3'}/>
                <Key value={'+'}/>
            </div>
            <div className="calc-button-row">
                <Key value={'.'}/> 
                <Key value={'0'}/>
                <Key value={'<'}/>
                <Key value={'='}/>
            </div>
        </div>
    );
}

export default Keypad; 