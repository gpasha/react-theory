import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car'

// function App() {
//   return (
//     <>
//       <div className="App">Test APP</div>
//       <Car name={"Audi"} year={2018} />
//       <Car name="Ford" year={2015} />
//     </>
//   );
// }

class App extends Component {

  state = {
    cars: [
      {id: '1', name: 'Audi', year: 2018},
      {id: '2', name: 'Ford', year: 2015},
      {id: '3', name: 'Mazda', year: 2010}
    ],
    pageTitle: 'React components',
    showCars: true
  }

  showCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }

  // changeTitleHandler = newTitle => {
  //   this.setState({
  //     pageTitle: newTitle
  //   })
  // }

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
    const cars = [...this.state.cars].filter(car => car.id != id)
    this.setState({cars})
  }

  render() {

    let carsList = null

    if (this.state.showCars) {
      carsList = this.state.cars.map(car => {
        // return <Car key={car.id} name={car.name} year={car.year} onChangeTitle={this.changeTitleHandler.bind(this, car.name)} />
        return <Car key={car.id}
                    name={car.name}
                    year={car.year}
                    changeName={e => this.changeName(car.id, e.target.value)}
                    onDelete={this.deleteHandler.bind(this, car.id)} />
      }) 
    }

    return (
      <div className='App'>
        <h2>{this.state.pageTitle}</h2>        
        <button onClick={this.showCarsHandler}>Show Cars</button>
        
        {carsList}

      </div>
    )
  }
}

export default App;
