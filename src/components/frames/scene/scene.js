import React, {Component} from 'react'
import { Link } from 'react-router'

// import component partials
import Comments from '../../partials/comments'

// import styles
import '../../styles/scene.sass'

export default class extends Component {

    
    render() {

        const { locations, comments, params } = this.props;
        const locationSet = locations.filter((location, i) =>  (location.id === params.sceneID)? location : null );
        const location = locationSet[0];
        const commentSet = comments[location.id];
        const styles = {
            background:{
                backgroundImage: `url('http://unsplash.it/1000?image=${params.photoID}')` , 
                backgroundPosition: "center",
                backgroundSize: "cover"
            }
    };

        return (

            <div className="sceneComponent">
                    <div className="sceneHero" style={styles.background}>
                       <Link to="/">
                           <div className="mdl-button--fab mdl-button--mini-fab">
                                <i className="material-icons mdl-js-ripple-effect ">keyboard_arrow_left</i>
                           </div>
                       </Link>
                    </div>

                <span>
                    <h3 className="sceneName"> {location.locationName}- {location.Rating} </h3>
                </span>

                <p className="area"> Area: {location.Area} </p>

                <Comments commentSet={commentSet}/>

            </div>

        )
    }

}