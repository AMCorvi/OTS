import React, {Component} from 'react'
import {connect} from 'react-redux'

// Components
import Locale from './partials/locale.js'

//Styles
import '../../styles/places.sass'

class Places extends Component {
    render() {

        const listOfLocales = this.props.locations.map(
            (location, index) => {
                        return <Locale location={location} key={index} i={index}/> 
        })



        return (
            <div className='placesComponent'>

                <h1 className="placesTitle">
                    Here is the scene!
                </h1>

                {listOfLocales}
               
            </div>

        )
    }
}

export default Places;