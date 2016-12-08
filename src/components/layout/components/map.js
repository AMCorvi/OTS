import React, { Component } from 'react'
import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps"

class Maps extends Component {
    
    render(){

        const mapContainer = <div style={{ width: " 100%" , height: "100%" }}  ></div>
     
        const markers = this.props.markers.map((venue, i) => { 

            const marker = {

                position: {
                    lat: venue.location.lat,
                    lng: venue.location.lng
                }

            };

            return <Marker key={i} {...marker} / >

        })


        return (

            <GoogleMapLoader 

                containerElement = { mapContainer }
                googleMapElement ={

                    <GoogleMap
                        defaultZoom = { 14 }
                        defaultCenter = { this.props.center } 
                        options = {{ streetViewControl: false , mapTypeControl: false }}  >
                        {  markers }
                    </GoogleMap>

                }/> 
        )
    }
} 

export default Maps