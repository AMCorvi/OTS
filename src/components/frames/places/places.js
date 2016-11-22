import React, {Component} from 'react'

// Components
import Locale from './partials/locale.js'

//Styles
import '../../styles/places.sass'

class Places extends Component {
    render() {

        const list = () => {
            this
                .props
                .venues
                .map((venue, i) => {
                    return (
                        <li key={i}>{venue.name}</li>
                    )
                })
        }
        
        return (
            <div className='placesContainer'>

                    <h1 className="placesTitle">
                        Here is the scene!
                    </h1>

                     <Locale/>
                     <Locale/>
                     <Locale/>
                     <Locale/>
                     <Locale/>
                     <Locale/>
                     <Locale/>
                     
                     
            </div>

        )
    }
}

export default Places;