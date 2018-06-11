import React, { Component } from 'react';
import './App.css';
import Map from "./Map"
import data from "./datos";
import Places from "./Places";
import Favoritos from "./Favoritos";


class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      agregado:[],
      data: data
        
  }
  //console.log(this.state.data.data) //  CON ESTO SE ENTRA A LAS CORDENADAS

 
    }   

    componentDidMount(){
     /* const markers= this.state.data.data;
      //console.log (markers);esto muestra en consola el arreglo del json

     markers.forEach(function(element) {
       let datos= element;
        //console.log(datos);//esto muestra por separado cada arreglo
        });*/

    }
    


  render() {
    const location={
      lat: 19.4203024, 
      lng:  -99.1631142
    }
   


    return (
      <div className="App">
      <div className="container">
        <div className="col-12 tabla">
          <h1> Red Barn Stores</h1>
          <h3>Aquí esta un mapa que podrás ver todas nuestras tiendas en la CDMX.</h3>
             <p>Tu podrás agregarlos a una lista de Favoritos o quitarlos.</p>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row s-m">
          <div className="col-7"> 
            <Map
             center={location}
             markers ={this.state.data.data}
             zoom={11}
             containerElement={<div style={{ height:`700px`, padding:`20px`, }} />}
             mapElement={<div style={{ height:`100%` }} />} />
          </div>
          <div className="col-4 tabla" >
            <Favoritos />            
          </div>
        </div>
      </div>
    </div>
      

    );
  }
}

export default App;
