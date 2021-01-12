import React, { Component } from 'react'

class UpDown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            num: this.props.n
        }
    }
    up = () => {
        let n = this.state.num
        this.setState({num: n+1})
    }
    down = () => {
        let n = this.state.num
        if (n === 0) {
            window.alert("No negatives!")
            return
        }
        this.setState({num: n-1})
    }
    render() {
        return <div>
            <button type = "button" onClick = {this.up}>Increment</button>
            <button type = "button" onClick = {this.down}>Decrement</button>
            <p>{this.state.num}</p>
        </div>
    }
}

export default UpDown
