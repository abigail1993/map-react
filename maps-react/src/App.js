import React, { Component } from 'react';
import './App.css';
import Map from "./Map"
import data from "./datos";

class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      agregado:[],
      data: data
        
  }

  //console.log(this.state.data.data) //  CON ESTO SE ENTRA A LAS CORDENADAS
    }


  render() {
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
             center={{lat: 19.4203024, lng:  -99.1631142}}
             zoom={12}
             containerElement={<div style={{ height:`700px`, padding:`20px`, }} />}
             mapElement={<div style={{ height:`100%` }} />} />
          </div>
          <div className="col-4 tabla" >
            <h3>Mis Favoritos.</h3>
            
          </div>
        </div>
      </div>
      </div>
      

    );
  }
}

export default App;
