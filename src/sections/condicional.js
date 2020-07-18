import React, {Component} from 'react';


class LoginButton extends Component {
    render() {
        return <button>Iniciar sesion</button> 
    }
}
class LogoutButton extends Component {
    render() {
        return <div>
            <p> Bienvenido, Usuario!</p>
            <button>Cerrar sesion</button>
        </div>
    }
}
function useCondicionalRendering (mostrarA){
    if (mostrarA) {
        return <LoginButton/>
    }
    return <LogoutButton/>
}
export default class CondicionalSection extends Component {
    constructor(){
        super()
        this.state = {isUserLogged: true}
    }
    render(){
        const condicionalComponent = this.state.mostrarA
         ? <LoginButton/> 
         : <LogoutButton/>
        return(
            <div>
                <h4>Condicional Rendering</h4>
                {useCondicionalRendering(this.state.mostrarA)}
                {condicionalComponent}
                {this.state.mostrarA
                ? <LoginButton/> 
                : <LogoutButton/>}
            </div>
        )
    }
}