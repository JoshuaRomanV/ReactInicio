import React, {Component} from 'react';
import CondicionalSection from './sections/condicional'
import cars from './data/cars.json'

class CarItem extends Component{
  render () {
    const {car} = this.props

    return (
      <li>
    <p><strong> Nombre: </strong> {car.name}</p>
    <p><strong>Marca:</strong>{car.company}</p>
    </li>
    )
  }
}
function App() {
    return (
      <div>
        <h4> Trabajando con listas con objetos</h4>
        <ul>
          {
            cars.map( car => {
              return <CarItem  key={car.id} car={car} />
              
            })
          }
        </ul>
      </div>

    );
}



export default App;
