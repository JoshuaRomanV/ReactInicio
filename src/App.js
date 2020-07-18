import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

/*function Hello (props){
  return <h2> {props.title}</h2>
}
cont Hello = (props) => <h2>{props.title}</h2>
*/

class Hello extends Component {
  render () {
  return <h2>{this.props.title}</h2>
  }
}

class Text extends Component{
  render(){
    const {
      arrayOfNumbers,
      multiply,
      objectWithInfo,
      title
     } = this.props

    const mappedNumbers = arrayOfNumbers.map(multiply)

  return (
      <div> 
        {title}
        <p>{mappedNumbers.join(', ')}</p>
        <p>{objectWithInfo.key}</p>
      </div>
    )
  }
}

class Title extends Component {
  render() {
    return <h1>{this.props.text}</h1>
  }
}
class Contador extends Component {
  constructor (props){
    super(props)
    this.state = { contador: this.props.contadorInicial}
    setInterval(() => {this.state.contador = this.setState({contador: this.state.contador +1})
      },1000)
  }

  render (){ 
  return (<div> 
      <ContadorNumero numero= {this.state.contador} />
       </div> )

  }
}
Contador.defaultProps = {
    contadorInicial: 0
}


class ContadorNumero extends Component {
  render () {
    console.log('ContandorNumero render()')
  return <span>{this.props.numero}</span>
  }
}

// Default Props

Title.defaultProps = {
  text: 'Titulo por defecto'
}

// Default Props end

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <Hello title='wenas desde el props!'/>
          <Title />
          <p>Primer componente con state</p>
          <Contador/>
          <Contador contadorInicial = {100} />
      </header>
      <Text
        arrayOfNumbers={[2, 3, 2]}
        objectWithInfo={{ key: 'value', key2: 'otherValue'}}
        multiply={(number) => number * 4}
        number={2}
        text='Texto en string'
        title= {<h1>Este es el titulo</h1>}
         />

    </div>
  );
}



export default App;
