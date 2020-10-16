import React, { Component } from "react";
import './_Login.scss';
import Header from "../header/Header";

class Login extends Component {

    state={
        identifier:'',
        users:[
            'Touhami',
            'Fraje',
            'Bourawi'
        ],
        invalid: false,
    }

    changeIdentifierHandler = (event) => {
        this.setState({identifier: event.target.value});
    }

    submitHandler = () => {
       const user = this.state.users.filter(identifier => identifier===this.state.identifier);
       console.log(user );
       if(user.length > 0) {
           this.setState({invalid: false});
           this.props.history.push('/wizard');
       }else{
           this.setState({invalid: true});
       }
    }

    render() {
        console.log(this.state.identifier);
        return(
            <div>
                <Header appName="Survey" />
                <div className="Login">
                    <div className="Login__title" >
                        <h2>Login</h2>
                    </div>
                    <div className="Login__fieldContainer">
                        <div className="Login__fieldContainer-inputField">
                            <input onChange={(event) => this.changeIdentifierHandler(event)} type="text" className="Login__fieldContainer-input" placeholder="Identifier" required=""/>
                            <label htmlFor="name" className="Login__fieldContainer-label">Identifier</label>
                        </div>
                        {this.state.invalid?<p style={{color:'red',marginLeft:'30px'}}>Invalid Identifier</p>:null}
                        <div className="Login__fieldContainer-buttonFiled">
                            <button onClick={this.submitHandler} className="Login__fieldContainer-button">connect</button>
                        </div>
                    </div>
                </div>
            </div>
            );
    }
}

export default Login;