import React, { Component } from "react";
//import { compose, withProps, createEventHandlerWithConfig } from "recompose";
import { /*withScriptjs, withGoogle,*/InfoWindow,  GoogleMap, Marker, withGoogleMap } from "react-google-maps";
import data from "./datos";



class Map extends Component {
    constructor(props){
        super(props)
        this.state ={
            agregado:[],
            data: data //con esto se ingresa a el json externo
        }
                     //console.log(this.state.data.data[1].Coordinates) //  CON ESTO SE ENTRA A LAS COORDENADAS
    };

    MarkerClick(event){
        console.log('MarkerClick: '+ data.name)
    }


    render(){   
        const markers=this.props.markers.map((data,index) =>{
            const marker = {
                position : {
                    lat: data.Coordinates.lat,
                    lng: data.Coordinates.lng,
                }
            }
           
            return <Marker key={index} {...marker} onClick={this.MarkerClick}//esto es un pequeñoavance a algo */
             />
        })

       //  tengo que crear la funcion que recorra lo data y que devuelva las coordenadas
       // para que esas se agregen a un marker y las pinte en el mapa pero no se en donde
        return(
            
            <GoogleMap
               defaultZoom= {this.props.zoom}
               defaultCenter={this.props.center}
               options={{streetViewControl : false, myTypeControl:false}}>
               { markers }

               
            </GoogleMap>
           
            
        )
    }
}

export default  withGoogleMap(Map);


