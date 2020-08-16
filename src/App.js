import React, {Component} from 'react';
import CondicionalSection from './sections/condicional'
import cars from './data/cars.json'


class App extends Component {
  constructor () {
    super()
    this.state = {mouseX: 0, mouseY: 0}
    //this.handleMouseMove = this.handleMouseMove.bind(this)
  }
  handleMouseMove= (e) =>{
    const {clientX, clientY} = e
    this.setState({mouseX: clientX, mouseY: clientY })
  }
  handleClick (e) {
    console.log(e) 
    console.log(e.nativeEvent)
    alert('Wachu whachu wa')
  }
  render ()  {
    return (
      <div>
        <h4> Trabajando con listas con objetos</h4>
        <button onClick={this.handleClick}>tocame</button>
        <div onMouseMove= {this.handleMouseMove}
          style={{border: '1px solid #000', marginTop: 10, padding:10}}>
          <p>{this.state.mouseX},{this.state.mouseY}</p>
          </div>
      </div>

    );
  }
}

export default App;
