import React, {Component} from 'react'

//Component Styles
import '../../styles/login.sass'

export default class Login extends Component {

   constructor(){
       super()
       this.state = { userInput : '' }

   };

    handleUserInput(e){
        this.setState({userInput: e.target.value});
    }

    render() {

        return (

            <div className="loginComponent">
                <form action="">
                    <div className="inputgroup">
                        <input
                            onChange={this.handleUserInput}
                            id="email"
                            name="loginEmail"
                            value={this.state.userInput}type="email"/>
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="inputgroup">
                        <input type="password" id="password" name="loginpassword"/>
                        <label htmlFor="password">Password</label>
                    </div>
                    <submit type="submit," value="submit">submit</submit>
                </form>
            </div>

        )
    }
}
