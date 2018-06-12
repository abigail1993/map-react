import React, { Component } from "react";
import {   GoogleMap, Marker, withGoogleMap } from "react-google-maps";
import data from "./datos";



class Map extends Component {
    constructor(props){
        super(props)
        this.state ={
            agregado:[],
            data: data //con esto se ingresa a el json externo
        }
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
            return <Marker key={index} {...marker} onClick={this.MarkerClick}/>
            //con el evento onClick se trato de dar
            //la información para que al hacerle click al marcador se pudiera agregar a la lista
            //solo que no pude hacer que se jalara la información de cada marador.
        })

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