import React from 'react'
// import Radium from 'radium'
import carStyles from './Car.module.css'

class Car extends React.Component {
    
    shouldComponentUpdate(nextProps, nextState) {
        console.log('Car shouldComponentUpdate')
        console.log('Car shouldComponentUpdate nextProps:', nextProps)
        console.log('Car shouldComponentUpdate nextState:', nextState)
        return nextProps.name.trim() !== this.props.name.trim()
    }

    // componentWillUpdate() {
    //     console.log('Car componentWillUpdate')
    // }

    componentDidUpdate() {
        console.log('Car componentDidUpdate')
    }

    componentWillUnmount() {
        console.log('Car componentWillUnmount')
    }

    // static getDerivedStateFromProps(nextProps, prevState) {
    //     console.log('Car getDerivedStateFromProps', nextProps, prevState)
    //     return prevState
    // }

    // getSnapshotBeforeUpdate() {
    //     console.log('Car getSnapshotBeforeUpdate')
    //     return null
    // }

    render() {
        console.log('Car render')

        if (Math.random() > 0.7) {
            throw new Error ('Car random failed')
        }

        let classes = [carStyles['input']]

        classes = (this.props.name.length === 0)
            ? classes = [...classes, carStyles['red']]
            : classes = [...classes, carStyles['green']];
    
        if (this.props.name.length > 5) classes = [...classes, carStyles['bold']]
    
        const styles = {
            boxShadow: '0 4px 5px 0px rgba(0, 0, 0, 0.14)',
            ':hover': {
                boxShadow: '0 4px 15px 0px rgba(0, 0, 0, 0.28)',
                cursor: 'pointer'
            }
        }
    
        return (
            <div className={carStyles['car']} style={styles}>
                <h3>Car name: {this.props.name}</h3>
                <p>Year: {this.props.year}</p>
                <input type='text'
                       className={classes.join(' ')}
                       value={this.props.name}
                       onChange={this.props.changeName} />
                <div>
                    <button onClick={this.props.onDelete}>Delete</button>
                </div>
            </div>
        )
    }
}

// export default Radium(Car)
export default Car