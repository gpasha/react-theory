import React from 'react'

export default props => (
    <div style={{
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
        {/* <button onClick={props.onChangeTitle}>Change Title</button> */}
    </div>
)