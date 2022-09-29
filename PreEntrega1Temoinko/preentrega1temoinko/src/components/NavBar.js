import { Component } from 'react';
import CartWidget from './CartWidget';
import Brand from './Brand';
import Menu from './Menu';
 
export default class NavBar extends Component{
    secciones = ["Catalogo","Credito Personal","Cuenta"];
    marca = 'Trophy Deportes';
    render(){
        return(
       <>
        <Brand marca={this.marca}/>
        <Menu secciones={this.secciones}/>
        <CartWidget/>
      
        </>
    
       
        )
    }
}
