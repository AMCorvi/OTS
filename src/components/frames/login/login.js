import React, {Component} from 'react'

//Component Styles
import '../../styles/login.sass'

export default class Login extends Component {

   constructor(){
       super()
       this.state = { 
           email: 'Email',
           password: 'Password'
         }

   };

    handleUserInput(e){
        let name = e.target.id,
            value = e.target.value;
        
        this.setState({
            [name]:value
        })
    }

    render() {

        return (

            <div className="loginComponent">
                <form action="">
                    <div className="inputgroup">
                        <input
                            onChange={this.handleUserInput.bind(this)}
                            id="email"
                            name="loginEmail"
                            value={this.state.email}type="email"/>
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="inputgroup">
                        <input onChange={this.handleUserInput.bind(this)}
                            id="password"
                            name="loginPassword"
                            value={this.state.password}type="password"/>
                        <label htmlFor="password">Password</label>
                    </div>
                    <submit type="submit," value="submit">submit</submit>
                </form>
            </div>

        )
    }
}
