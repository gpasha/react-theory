import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car'
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import Counter from './Counter/Counter'

export const ClickedContext = React.createContext(false)

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
      showCars: true,
      clicked: false
    }
  }

  showCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }

  clickHandler = () => {
    this.setState({
      clicked: true
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
  
  render() {
    let carsList = null

    if (this.state.showCars) {
      carsList = this.state.cars.map((car, i) => {
        return (
          <ErrorBoundary key={car.id}>
            <Car name={car.name}
                 year={car.year}
                 index={i}
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
        <ClickedContext.Provider value={this.state.clicked}>
          <Counter />
        </ClickedContext.Provider>
        <button onClick={this.showCarsHandler} style={{marginTop: '1rem'}}>Show Cars</button>
        <button onClick={this.clickHandler} style={{marginTop: '1rem'}}>Clicked</button>
        
        {carsList}

      </div>
    )
  }
}

export default App;
