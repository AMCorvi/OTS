import React, {Component} from 'react'
import ReactDOM from 'react-dom'



//Components
import Places from './frames/places/places'
import About from './frames/about/about'

//Component Styles
import './styles/frames.sass'

export default class Pages extends Component {

    render() {
        return (


            <div className="placesContainer" >

                    {this.props.children}
                    

            </div>
               
        )
    }


}


