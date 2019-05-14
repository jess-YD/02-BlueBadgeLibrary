import React, {Component} from 'react';

import './Auth.css';

class Auth extends Component {  //making a new class that allow to have a brain insdie. extends recgonizes what render is
    state = {
        login: true, //changes line 11 depending if true or false
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    }

    handleSubmit = (event) =>{
        event.preventDefault()
        const url = this.state.login ? 'http://localhost:3000/auth/signin' : 'http://localhost:3000/auth/signup'

        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                password: this.state.password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => this.props.tokenHandler(data.sessionToken))
}

    handleChange = (event) => { //will probably use this for some blue badge projects
        this.setState({[event.target.id]: event.target.value}, () => console.log(this.state))
    }

    logginToggle = (event) => {
        event.preventDefault();
        const login = this.state.login;
        this.setState({
            login: !login,
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        })
    }
    
    render(){
        let title = this.state.login ? "Login" : "Signup";
        let signupFields = this.state.login
        ? null
        : (
            <div>
                <label htmlFor="firstName">First Name:</label><br/>
                <input type="text" id="firstName" onChange={this.handleChange} value={this.state.firstName} /><br/>
                <label htmlFor="lastName">Last Name:</label><br/>
                <input type="text" id="lastName" onChange={this.handleChange} value={this.state.lastName} /><br/>
            </div>
        )

        return(
            <form className="cardLike" onSubmit={this.handleSubmit}>
            <h1>{title}</h1>
            <label htmlFor="email">Email:</label><br/>
            <input type="text" id="email" onChange={this.handleChange} value={this.state.email} /><br/>
            <label htmlFor="password">Password:</label><br/>
            <input type="password" id="password" onChange={this.handleChange} value={this.state.password}/><br/>
            {signupFields}
            <button onClick={this.loggingToggle}>Login/ Signup Toggle</button><br/> 
            <button type="submit">Submit User Data</button>
            </form>
        )
    }
}
export default Auth;