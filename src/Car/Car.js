import React from 'react'

export default props => (
    <div style={{
        minWidth: 400,
        padding: '1rem',
        margin: '1rem',
        border: '2px solid #ccc'
    }}>
        <h3>Car name: {props.name}</h3>
        <p>Year: {props.year}</p>
        <input type='text' onChange={props.changeName} value={props.name} />
        <div>
            <button onClick={props.onDelete}>Delete</button>
        </div>
    </div>
)