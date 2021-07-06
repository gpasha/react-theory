import React from 'react'
import { ClickedContext } from '../App'

const CounterChild = () => {
    return (
        <div>
            <ClickedContext.Consumer>
                {value => value ? <h3>Clicked</h3> : null}                
            </ClickedContext.Consumer>
        </div>
    )
}
export default CounterChild