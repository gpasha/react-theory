import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car'
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {

  constructor(props) {
    console.log('App constructor')
    super(props)
    this.state = {
      cars: [
        {id: '1', name: 'Audi', year: 2018},
        {id: '2', name: 'Ford', year: 2015},
        {id: '3', name: 'Mazda', year: 2010}
      ],
      pageTitle: 'React components',
      showCars: true
    }
  }

  showCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }

  changeName(id, name) {
    let cars = [...this.state.cars].map(car => {
      if (car.id === id ) {
        car.name = name
      }
      return car
    })
    this.setState({cars})
  }
  //method create the context => should bind() or arrow function use
  deleteHandler(id) {
    console.log('deleteHandler, id:', id)

    const cars = [...this.state.cars].filter(car => car.id !== id)
    this.setState({cars})
  }

  // componentWillMount() {
  //   console.log('App componentWillMount')
  // }

  componentDidMount() {
    console.log('App componentDidMount')
  }

  render() {
    console.log('App render')

    let carsList = null

    if (this.state.showCars) {
      carsList = this.state.cars.map(car => {
        return (
          <ErrorBoundary key={car.id}>
            <Car name={car.name}
                 year={car.year}
                 changeName={e => this.changeName(car.id, e.target.value)}
                 onDelete={this.deleteHandler.bind(this, car.id)} />
          </ErrorBoundary>
        )
      }) 
    }

    return (
      <div className='App'>
        {/* <h2>{this.state.pageTitle}</h2> */}
        <h2>{this.props.title}</h2>
              
        <button onClick={this.showCarsHandler}>Show Cars</button>
        
        {carsList}

      </div>
    )
  }
}

export default App;
