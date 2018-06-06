import React from "react";
import { compose, withProps, createEventHandlerWithConfig } from "recompose";
import { withScriptjs, withGoogle, GoogleMap, Marker, withGoogleMap } from "react-google-maps";

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCVH8e45o3d-5qmykzdhGKd1-3xYua5D2A&v=3.exp&libraries=geometry,drawing,places",
    loadingElement:<div style={{ height:`100%` }} />,
    containerElement:<div style={{ height:`400px` }} />,
    mapElement:<div style={{ height:`100%` }} />,
  }),
  
  withScriptjs,
  withGoogleMap 
  ) ((props) => 
    <GoogleMap
       defaultZoom ={8}
       defaultCenter={{lat: 19.4203024, lng:  -99.1631142}}
    >   
    </GoogleMap>
)

class MyNewComponent extends React.PureComponent{
    state={
        isMarkerShown: false,
    }

    componentDidMount(){
        this.delayedShowMarker()
    }

    delayedShowMarker = () =>{
        setTimeout(() => {
        this.setState({ isMarkerShown:true })
    }, 3000)
}
    
    handleMarkerClick = () => {
        this.setState({isMarkerShown: false})
        this.delayedShowMarker()
    }

    render(){
        return ( 
            <MyMapComponent
              isMarkerShown={this.state.isMarkerShown}
              onMarkerClick={this.handleMarkerClick}
              />
            )
    }
}

export default MyNewComponent;