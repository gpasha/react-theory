import React from 'react'
import carStyles from './Car.module.css'
import withClass from '../hoc/withClass'
import PropTypes from 'prop-types'

class Car extends React.Component {

    constructor(props) {
        super(props)
        this.myRef = React.createRef()
    }

    componentDidMount() {
        if (this.props.index === 0) {
            this.myRef.current.focus()
        }
    }

    render() {
        let classes = [carStyles['input']]

        classes = (this.props.name.length === 0)
            ? classes = [...classes, carStyles['red']]
            : classes = [...classes, carStyles['green']];
    
        if (this.props.name.length > 5) classes = [...classes, carStyles['bold']]
    
        return (
            <>
                <h3>Car name: {this.props.name}</h3>
                <p>Year: {this.props.year}</p>
                <input type='text'
                       ref={this.myRef}
                       className={classes.join(' ')}
                       value={this.props.name}
                       onChange={this.props.changeName} />
                <div>
                    <button onClick={this.props.onDelete}>Delete</button>
                </div>
            </>
        )
    }
}

Car.propTypes = {
    name: PropTypes.string.isRequired,
    year: PropTypes.number,
    index: PropTypes.number,
    onChange: PropTypes.func,
    onDelete: PropTypes.func,
}

export default withClass(Car, carStyles['car'])