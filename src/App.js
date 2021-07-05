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

  changeTitleHandler = (newTitle) => {
    //1
    // const oldTitle = this.state.pageTitle
    // const newTitle = oldTitle + ' (changed)'
    this.setState({
      pageTitle: newTitle
    })
  }
  //1
  // carsList = [...this.state.cars].map(car => <Car key={car.id} name={car.name} year={car.year} onChangeTitle={this.changeTitleHandler} />) 
  carsList = [...this.state.cars].map(car => <Car key={car.id} name={car.name} year={car.year} onChangeTitle={() => this.changeTitleHandler(car.name)} />) 

  render() {
    return (
      <div className='App'>
        <h2>{this.state.pageTitle}</h2>
        {/* // 1
        <button onClick={this.changeTitleHandler}>Change Title</button> */}
        <button onClick={this.changeTitleHandler.bind(this, 'Changed')}>Change Title</button>
        <div className='cars'>
          {this.carsList}
        </div>
      </div>
    )
  }
}

export default App;
