import React, { Component } from "react";
//import { compose, withProps, createEventHandlerWithConfig } from "recompose";
import { /*withScriptjs, withGoogle,*/  GoogleMap, Marker, withGoogleMap } from "react-google-maps";
import data from "./datos";



class Map extends Component {
    constructor(props){
        super(props)
        this.state ={
            agregado:[],
            data: data //con esto se ingresa a el json externo
        }

 //console.log(this.state.data.data[1].Coordinates) //  CON ESTO SE ENTRA A LAS COORDENADAS


 const markers= this.state.data.data;
        //console.log (markers);esto muestra en consola el arreglo del json

     markers.forEach(function(element) {
         let datos= element;
          console.log(datos);//esto muestra por separado cada arreglo
          });
    }   

    render(){   
    

       //  tengo que crear la funcion que recorra lo data y que devuelva las coordenadas
       // para que esas se agregen a un marker y las pinte en el mapa pero no se en donde
        return(
            
            <GoogleMap
               defaultZoom= {this.props.zoom}
               defaultCenter={this.props.center}>

               <Marker position={{lat: 19.4203024, lng:  -99.1631142}} /> 
               <Marker position={{lat: 39.390897, lng: -99.066067}} /> 
            </GoogleMap>
            
        )
    }
}

export default  withGoogleMap(Map);


