import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import superagent from 'superagent'

import Map from './components/map'
import Nav from './components/nav'
import Places from './components/places'

import './components/styles/app.sass'


class App extends Component {
    constructor(){
        super()
        this.state = {
            venues: []
        }
    }
    componentDidMount() {
        console.log('componentDidMount')

        const url = 'https://api.foursquare.com/v2/venues/search?v=20140806&limit=15&query=nightclub&' +
                'radius=800&ll=40.775285,-73.9884469&client_id=QQSYZAH3MLVGSGDP1OSAM5YXBC0H1D15IH' +
                '4T1BB4VNW3ELCA&client_secret=NLSV0I0AS3CIBI44KDCDDH103Y2FVR5VOFVAVE5IZ0JATOD3'

        superagent().get(url).query(null).set('Accept', 'text/json').end((error, response) => {

                const venue = response.body.response.venues
                console.log( JSON.stringify(venues) )
                this.setState({
                    venues: venues
                })
            })

    }

    render() {
        
        const location = {
            lat: 40.775285,
            lng: -73.9884469
        }

        const markers = [
            {
                location: {
                    lat: 40.775285,
                    lng: -73.9884469
                }
            }
        ]

        return (

            <div className='container'>

                <Nav />

                <main>
                    
                    <div  className="mapContainer" >

                        <Map  className="map" center={ location } markers={ markers }/>

                    </div>


                    <div className="placesComponent">
                    
                        <Places venues={this.state.venues} />
                        <Places venues={this.state.venues} /> 

                    </div>
                    
                </main>

            </div>

        )
    }
}

ReactDOM.render(
    <App/>, document.getElementById('app'))