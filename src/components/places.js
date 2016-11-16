import React, {Component} from 'react'

// Components
import Locale from './locale'

//Styles
import './styles/places.sass'

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

            <Locale />

        )
    }
}

export default Places;