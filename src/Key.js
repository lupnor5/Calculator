import './Key.css'; 
import React from 'react';

const keyConfig = {

    reset : {
        literal :'c',
        value : 'C'
    }, 
    number: {

        value : 0

    }, 
    operation: {
        literal : 'l', 
        value : '+'

    }
}

const getType = (value) => {

    if (value === 'C'){
        return 'reset'; 
    } else if (!isNaN(value)) {
        return 'number'
    }else {
        return 'operation'
    }
}

const Key = (props) => {

    const type = getType(props.value); 
    const {literal, value} = keyConfig[type]; 

   // return (<div className="button ">x</div>);
   return (<div className={`button ${literal}`}>{props.value}</div>)
}

export default Key; 