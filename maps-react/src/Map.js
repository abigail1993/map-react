import React, { Component } from "react";
//import { compose, withProps, createEventHandlerWithConfig } from "recompose";
import { /*withScriptjs, withGoogle,*/ GoogleMap, Marker, withGoogleMap } from "react-google-maps";
//import data from './data'
import data from "./datos";



class Map extends Component {
    constructor(props){
        super(props)
        this.state ={
            agregado:[],
            data: data
        }

 // console.log(this.state.data.data[1].Coordinates.lat) //  CON ESTO SE ENTRA A LAS COORDENADAS

    }

    

    render(){

        
       // const markers= data.data[3].Coordinates tengo que crear la funcion que recorra
       //lo data y que devuelva las coordenadas para que esas se agregen a un marker y las pinte en el mapa
        
        return(
                

            
            <GoogleMap
               defaultZoom= {this.props.zoom}
               defaultCenter={this.props.center}>
               
              <Marker  position= {{lat: 19.4203024, lng:  -99.1631142/*aqui deberian de ir las coordenadas diferentes*/}}/>

            </GoogleMap>
        )
    }
}

export default  withGoogleMap(Map);


