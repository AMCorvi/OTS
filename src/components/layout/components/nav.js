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

                <div className="mdl-layout mdl-js-layout mdl-layout--scroll"/>
                <header className="mdl-layout__header">
                    <div className="mdl-layout__header-row">

                        <Link to="/">
                            <span className="mdl-layout-title">
                        
                                <img src={logo} alt="On・The・Scene" className="logo"/>
                            </span>
                        </Link>

                        <div className="mdl-layout-spacer"></div>

                        <nav className="mdl-navigation">

                            <Link className="headerLink" to="/login">
                                <span className="mdl-navigation__link" href="">
                                    Log-In
                                </span>
                            </Link>

                            <Link className="headerLink" to="/about">
                                <span className="mdl-navigation__link">
                                    About
                                </span>
                            </Link>

                        </nav>

                    </div>
                </header>

                <div className="mdl-layout__drawer ">
                
                    <span className="mdl-layout-title">Where Ya Goin!?</span>
                    <nav className="mdl-navigation">
                        <Link className="headerLink" to="/">
                            <span className="mdl-navigation__link" href="">
                                Log-In<i className="material-icons">computer</i>
                            </span>
                        </Link>
                        <Link className="headerLink" to="/about">
                            <span className="mdl-navigation__link" href="">
                                About<i className="material-icons">library-books</i>
                            </span>
                        </Link>

                    </nav>
                </div>

            </div>

        )
    }
}
