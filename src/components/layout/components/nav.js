import React, {Component} from 'react'
import {Link} from 'react-router'

//Component styles
import '../../styles/nav.sass'

//images
import logo from '../../styles/images/photo-1430213670473-21aeffa76133.png'

export default class Nav extends Component {

    render() {

        return (

            <div >

                 <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                    <header className="mdl-layout__header">
                        <div className="mdl-layout__header-row">

                            <span className="mdl-layout-title">
                                <Link to="/" >
                                    <img src={logo} alt="On・The・Scene" className="logo"/>
                                </Link>
                            </span>

                            <div className="mdl-layout-spacer"></div>

                            <nav className="mdl-navigation mdl-layout--large-screen-only">

                                <span className="mdl-navigation__link" href="">
                                    <Link className="headerLink" to="/login">
                                        Log-In
                                    </Link>
                                </span>

                                <span className="mdl-navigation__link">
                                    <Link className="headerLink" to="/about">

                                        About
                                    </Link>
                                </span>

                            </nav>

                        </div>
                    </header>

                    <div className="mdl-layout__drawer mdl-layout--small-screen-only">
                        <span className="mdl-layout-title">Where Ya Goin!?</span>
                        <nav className="mdl-navigation">
                            <span className="" href="">
                                <Link className="headerLink" to="/">
                                    Log-In<i className="material-icons">computer</i>
                                </Link>
                            </span>
                            <span className="mdl-navigation__link" href="">
                                <Link className="headerLink" to="/about">
                                    About<i className="material-icons">library-books</i>
                                </Link>
                            </span>

                        </nav>
                    </div>

                    </div>
            </div>

        )
    }
}
