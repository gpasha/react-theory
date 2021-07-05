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
    pageTitle: 'React components'
  }

  changeTitleHandler = newTitle => {
    this.setState({
      pageTitle: newTitle
    })
  }

  handleChange = e => {
    this.setState({
      pageTitle: e.target.value
    })
  }

  carsList = [...this.state.cars].map(car => <Car key={car.id} name={car.name} year={car.year} onChangeTitle={this.changeTitleHandler.bind(this, car.name)} />) 

  render() {
    return (
      <div className='App'>
        <h2>{this.state.pageTitle}</h2>
        <input text value={this.state.pageTitle} onChange={this.handleChange}/>
        <button onClick={this.changeTitleHandler.bind(this, 'Changed')}>Change Title</button>
        <div className='cars'>
          {this.carsList}
        </div>
      </div>
    )
  }
}

export default App;
