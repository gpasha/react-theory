import React from 'react'
import Radium from 'radium'
import carStyles from './Car.module.css'

const Car = props => {
    let classes = ['input']

    classes = (props.name.length === 0)
        ? classes = [...classes, 'red']
        : classes = [...classes, 'green']

    if (props.name.length > 5) classes = [...classes, 'bold']

    const styles = {
        boxShadow: '0 4px 5px 0px rgba(0, 0, 0, 0.14)',
        ':hover': {
            boxShadow: '0 4px 15px 0px rgba(0, 0, 0, 0.28)',
            cursor: 'pointer'
        }
    }

    return (
        <div className={carStyles['car']} style={styles}>
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

export default Radium(Car)