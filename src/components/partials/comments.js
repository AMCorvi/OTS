import React, { Component } from 'react'

// import styles
import '../styles/comments.sass'


export default class extends Component {
    render(){
        

        const { commentSet } = this.props
        const sceneComments = commentSet.map((comment, index )=> {
        return (
            <li key={index} i={index} className="mdl-list__item mdl-list__item--three-line">
                <span className="mdl-list__item-primary-content">
                    
                    <i className="material-icons mdl-list__item-avatar">person</i>
                    <span> {comment.user} </span>
                    <span className="mdl-list__item-text-body"> {comment.comment} </span>
                
                </span>
                
                <span className="mdl-list__item-secondary-content">
                    <a className="mdl-list__item-secondary-action" href="#">
                    <i className="material-icons">star</i></a>
                </span>

            </li>
        )
});

        return(
                <div className="commetnsComponent">
                    
                    <ul className="sceneComments mdl-list">
                        {sceneComments}
                    </ul>
                    
                    
                    <form className="commentForm" action="#">
                        <div className="mdl-textfield mdl-js-textfield">
                            <input className="mdl-textfield__input" type="text" id="sample1"/>
                            <label className="mdl-textfield__label" for="sample1">Comment...</label>
                         </div>
                    </form>

                </div>
        )


    }
}