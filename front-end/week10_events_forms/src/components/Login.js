import React, { Component } from "react"
export default class Login extends Component {

    constructor(props){
        super(props)
        this.state = {
            firstname: '',
            lastname: '',
            city:''
        }  
        this.countries = ['Canada', 'USA', 'Mexico']
    }

    handClick(e){
        e.preventDefault()
        alert(`hello world: ${e.target.name} - ${e.target.value}`)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
    }

    handleInput = (e) => {
        e.preventDefault()
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
                    Country: <select name='country' onChange={this.handleInput}>
                        {
                            this.countries.map((cnm) => (
                                <option key={cnm}>{cnm}</option>
                            ))
                        }
                    </select>
                    City: <select name="city" onChange={this.handleInput}>
                        <option value='TOR'>Toronto</option>
                        <option value='NYC'>New York</option>
                        <option value='MKR'>Markham</option>
                    </select>
                    <input type='submit' value='Login'/>
                </form>
                <button value='TEST' name='btnSubmit' onClick={this.handClick}>Submit</button>
                
                
                
                <p>{ this.state.firstname }</p>
                <p>{ JSON.stringify(this.state) }</p>
            </div>
        )
    }
}
