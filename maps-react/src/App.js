import React, { Component } from 'react';
import './App.css';
import Map from "./mMap"

class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      agregado:[],
        lugares: [
        {
          "Name": "Red Barn Stores 3858-CUAJIMALPA",
          "Address": "JOSE MA. CASTORENA NO. 84  COL. SAN JOSE DE LOS CEDROS, DELEGACION CUAJIMALPA   MEXICO D.F. C.P. 05210",
          "Coordinates": {
            "lat": 39.390897,
            "lng": -99.066067
          }
        },
        {
          "Name": "Red Barn Stores 3862-AZCAPOTZALCO",
          "Address": "AV. NEXTENGO NO. 78 COL. SANTA CRUZ ACAYUCAN , MEXICO D.F. C.P. 02770",
          "Coordinates": {
            "lat": 19.47704,
            "lng": -99.1927
          }
        },
        {
          "Name": "Red Barn Stores 2347-TLAHUAC",
          "Address": "CALZ. TLÁHUAC NO. 5662  COL. SAN LORENZO TEZONCO  DELEG. TLÁHUAC, MEXICO DF. C.P. 13266",
          "Coordinates": {
            "lat": 19.30518,
            "lng": -99.0615
          }
        },
        {
          "Name": "Red Barn Stores 2464-MIRAMONTES ",
          "Address": "AV. ESCUELA NAVAL MILITAR # 753 ESQ. AV. CANAL DE MIRAMONTES DELEG. COYOACÁN C.P. 04890",
          "Coordinates": {
            "lat": 19.31519,
            "lng": -99.12459
          }
        }    
    ]}
    }
  


  render() {
    return (
      <div className="App">
      <Map
        center={{lat: 19.4203024, lng:  -99.1631142}}
        zoom={14}
        containerElement={<div style={{ height:`400px` }} />}
        mapElement={<div style={{ height:`100%` }} />} />

      </div>
    );
  }
}

export default App;
