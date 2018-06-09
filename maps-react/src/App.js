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
       <div className="col-7"> 
      <Map
        center={{lat: 19.4203024, lng:  -99.1631142}}
        zoom={12}
        containerElement={<div style={{ height:`700px`, padding:`20px`, }} />}
        mapElement={<div style={{ height:`100%` }} />} />
        
        </div>

      </div>
    );
  }
}

export default App;
