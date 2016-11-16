import React, {Component} from 'react'

import './styles/nav.sass'

export default class Nav extends Component {

    render() {

        return (

            <div >

                <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                    <header className="mdl-layout__header">
                        <div className="mdl-layout__header-row">

                            <span className="mdl-layout-title">On・The・Scene</span>

                            <div className="mdl-layout-spacer"></div>

                            <nav className="mdl-navigation mdl-layout--large-screen-only">
                                <a className="mdl-navigation__link" href="">
                                Log In
                                </a>
                                <a className="mdl-navigation__link" href="">About</a>
                            </nav>
                        </div>
                    </header>

                    <div className="mdl-layout__drawer mdl-layout--small-screen-only">
                        <span className="mdl-layout-title">Where Ya Goin!?</span>
                        <nav className="mdl-navigation">
                            <a className="mdl-navigation__link" href="">Log-In</a>
                            <a className="mdl-navigation__link" href="">About</a>
                        </nav>
                    </div>

                </div>

            </div>

        )
    }
}
