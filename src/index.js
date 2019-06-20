 import './index.css'
 import React from 'react'; 
 import ReactDOM from 'react-dom'; 
 import ResultDisplay from './ResultDisplay'
 import Keypad from './Keypad'; 

 class App extends React.Component {

    constructor(props) {
        super(props); 
        this.state = { result : "HELLO"};

        setTimeout( () =>  {
            this.setState ({result : "SONATA"})
        }, 3000);
    }

     render() {
        return (
            <div className="container">
                <div className="calc-body">
                    <ResultDisplay result={this.state.result}/>
                    <Keypad /> 
                </div>
            </div>
        );
     }
 }

 ReactDOM.render(<App />, document.querySelector('#root'));


