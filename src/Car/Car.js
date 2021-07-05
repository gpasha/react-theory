import React from 'react'
import './Car.css'

export default props => {
    let classes = ['input']

    classes = (props.name.length === 0)
        ? classes = [...classes, 'red']
        : classes = [...classes, 'green']

    if (props.name.length > 5) classes = [...classes, 'bold']

    return (
        <div className='car'>
            <h3>Car name: {props.name}</h3>
            <p>Year: {props.year}</p>
            <input type='text'
                   className={classes.join(' ')}
                   value={props.name}
                   onChange={props.changeName} />
            <div>
                <button onClick={props.onDelete}>Delete</button>
            </div>
        </div>
    )
}