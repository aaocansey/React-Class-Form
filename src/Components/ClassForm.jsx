import React, { Component } from 'react';

class ClassForm extends Component {
    constructor (props) {
        super(props)
        this.state = {
            user: [
                {userName: "Carl", email: "carl@email.io", password:"4567"},
                {userName: "Kessie", email: "Kessie@email.io", password:"1234"}
            ],
            userName: "",
            email: "",
            password: ""
         } 
    }

    changeState = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(this.state.userName);
        console.log(this.state.email);
        console.log(this.state.password);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const newUser = {userName: this.state.userName, email: this.state.email, password: this.state.password}
        this.setState({
            user: [...this.state.user, newUser],
            userName: "",
            email:''
        })
        console.log(this.state.userName);
        console.log(this.state.email);
        console.log(this.state.password);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Name</label>
                    <input type={'text'} value={this.state.userName} onChange={this.changeState} name="userName" />
                    <label>Email</label>
                    <input type={'email'} value={this.state.email} onChange={this.changeState} name="email"/>
                    <label>Password</label>
                    <input type={'password'} value={this.state.password} onChange={this.changeState} name="password"/>
                    <input type="submit" />
                </form>
                <div>
                    {this.state.user.map((item)=>{
                        return (
                            <>
                                <h1>{item.userName}</h1>
                                <h1>{item.email}</h1>
                            </>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default ClassForm;
