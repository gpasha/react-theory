import React from 'react'

export default class Counter extends React.Component {

    state = {
        counter: 0
    }

    addCounter() {
        this.setState((prevState) => ({
            counter: prevState.counter + 1
        }))
    }

    removeCounter() {
        this.setState(prevState => ({
            counter: prevState.counter - 1
        }))
    }

    render() {
        return (
            <>
                <h3>{this.state.counter}</h3>
                <div style={{display: 'flex'}}>
                    <button onClick={this.addCounter.bind(this)}>Add</button>
                    <button onClick={this.removeCounter.bind(this)}>Remove</button>
                </div>
            </>
        )
    }
}