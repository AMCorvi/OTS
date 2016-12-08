import React, {Component} from 'react'
import { Link } from 'react-router'

// Component Styles
import '../../../styles/locale.sass'

export default class Locale extends Component {

    render() {

        const location = this.props.location;
        const comments = this.props.SceneComments
        return (

            <div className="localeComponent">
                <div className="demo-card-wide mdl-card mdl-shadow--16dp">

                    <div className="mdl-card__title">
                        <h2 className="mdl-card__title-text"></h2>
                    </div>

                    <div className="mdl-card__supporting-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis
                        pellentesque lacus eleifend lacinia...
                    </div>

                    <div className="mdl-card__actions mdl-card--border">
                        <a
                            className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                            <Link to='/scene' location={location} comments={comments}> </Link>
                        </a>
                    </div>

                    <div className="mdl-card__menu">
                        <button
                            className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab">
                            <i className="material-icons">thumb_up</i>
                        </button>
                    </div>

                </div>
            </div>

        )

    }

}