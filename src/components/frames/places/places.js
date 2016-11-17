import React, {Component} from 'react'

// Components
import Locale from './partials/locales.js'

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
            <div className='localeContainer'>

                     <Locale/>
                      <Locale/> <Locale/> <Locale/> <Locale/> <Locale/> <Locale/> <Locale/> <Locale/> <Locale/> <Locale/> <Locale/> <Locale/> <Locale/> <Locale/> <Locale/> <Locale/> <Locale/> <Locale/> <Locale/> <Locale/> <Locale/> <Locale/> <Locale/> <Locale/> <Locale/>
            </div>

        )
    }
}

export default Places;