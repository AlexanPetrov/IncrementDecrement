import React, { Component } from 'react'
import './App.css'
import UpDown from './components/UpDown.jsx'


class App extends Component {
    render() {
    return (
            <div>
                <UpDown n = {1}/>
            </div>
           )
    }
}

export default App;
