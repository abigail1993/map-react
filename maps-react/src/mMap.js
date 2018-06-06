import React, { Component } from "react";
import { compose, withProps, createEventHandlerWithConfig } from "recompose";
import { withScriptjs, withGoogle, GoogleMap, Marker, withGoogleMap } from "react-google-maps";




class Map extends Component {
    constructor(props){
        super(props)
        console.log(this.props.lugares)
    }
    

    render(){
        const markers= this.props.markers || []

        return(
            <GoogleMap
               defaultZoom= {this.props.zoom}
               defaultCenter={this.props.center}>
               
              <Marker  position= {{lat: 19.4203024, lng:  -99.1631142}}/>
            </GoogleMap>
        )
    }
}

export default  withGoogleMap(Map);


