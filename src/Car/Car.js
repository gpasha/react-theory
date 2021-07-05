import React from 'react'
import './Car.css'

export default props => (
    <div className='car'>
        <h3>Car name: {props.name}</h3>
        <p>Year: {props.year}</p>
        <input type='text' onChange={props.changeName} value={props.name} />
        <div>
            <button onClick={props.onDelete}>Delete</button>
        </div>
    </div>
)