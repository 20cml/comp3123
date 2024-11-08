import React, { Component } from "react"
export default class Login extends Component {

    constructor(props){
        super(props)
        this.state = {
            firstname: '',
            lastname: ''
        }  
    }
    handClick(e){
        alert(`hello world: ${e.target.name} - ${e.target.value}`)
    }

    handleSubmit = (e) => {
        console.log(this.state)
    }

    handleInput = (e) => {
        const {name, value} = e.target
        
        this.setState({
            ...this.state,
            [name]: value
        })
        console.log(`${this.state.firstname} : ${value}`)
    }

    render(){
        return(
            <div>
                <h2>Login</h2>
                <form onSubmit={this.handleSubmit}>
                    First Name: <input type='text' name='firstname' value={this.state.firstname} onChange={this.handleInput} placeholder='Enter first name'/> <br/>
                    Last Name: <input type='text' name='lastname' value={this.state.lasttname} onChange={this.handleInput} placeholder='Enter last name'/> <br/>
                    <input type='submit' value='Login'/>
                </form>
                <button value='TEST' name='btnSubmit' onClick={this.handClick}>Submit</button>
                <p>{ this.state.firstname }</p>
                <p>{ JSON.stringify(this.state) }</p>
            </div>
        )
    }
}
