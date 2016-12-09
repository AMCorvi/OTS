import React, {Component} from 'react'
import { Link } from 'react-router'

// Component Styles
import '../styles/locale.sass'

export default class Locale extends Component {

    render() {

        const { location, comments, i} = this.props

        const styles = {
            background: {
                backgroundImage: `url(http://unsplash.it/1000?image=${i+808})`,
                backgrounPosition: "center",
                backgroundSize: "cover"

            }
        }

        return (
            <div className="localeComponent">
                <div className="demo-card-wide mdl-card mdl-shadow--16dp">

                    <div style={styles.background} className="mdl-card__title">
                        <h2 className="mdl-card__title-text">{location.locationName} - {location.Rating}</h2>
                    </div>

                    <div className="mdl-card__supporting-text">
                        {location.Area}
                    </div>

                    <div className="mdl-card__actions mdl-card--border">
                            <Link to={ `/scene/${location.id}/${i+808}` }> 
                        <span className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                            Scene Info
                        </span>
                             </Link>
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