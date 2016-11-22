import React, { Component } from 'react'

// Component Styles
import '../../../styles/locale.sass'




 export default class Locale extends Component{

     render(){

         return (
             
             <div className="localeComponent">
                  <div className="demo-card-wide mdl-card mdl-shadow--16dp">
                 
                   <div className="mdl-card__title">
                       <h2 className="mdl-card__title-text">Welcome</h2>
                   </div>
                 
                   <div className="mdl-card__supporting-text">
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis
                       pellentesque lacus eleifend lacinia...
                   </div>
                 
                   <div className="mdl-card__actions mdl-card--border">
                       <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                           Get Started
                       </a>
                   </div>
                 
                   <div className="mdl-card__menu">
                       <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
                           <i className="material-icons">share</i>
                       </button>
                   </div>
                   
                             </div>
             </div>

         )

     }


}