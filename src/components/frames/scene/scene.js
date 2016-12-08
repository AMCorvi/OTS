import React, {Component} from 'react'

// import styles
import '../../styles/scene.sass'

export default class extends Component {

    render() {

        const location = this.props.location
        const comments = this.props.comments

        const styles = {
            background:{
                backgroundImage:"url('http://unsplash.it/1000/1000?random')" , 
                backgroundPosition: "center",
                backgroundSize: "cover"
            }
    }

        return (

            <div className="sceneComponent">
                    <div className="sceneHero" style={{}}></div>

                <span>
                    <h3>{location.locationName}
                        -
                    </h3>
                    <h3>{location.Rating}</h3>
                </span>

                <p>Area: {} </p>


                <h2>
                    Comment go here
                </h2> 

            </div>

        )
    }

}