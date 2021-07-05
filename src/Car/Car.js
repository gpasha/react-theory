import React from 'react'

export default props => (
    <div>
        <h3>Car name: {props.name}</h3>
        <p>Year: {props.year}</p>
        <button onClick={props.onChangeTitle}>Change Title</button>
    </div>
)